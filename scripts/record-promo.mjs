import { chromium } from 'playwright';
import { preview } from 'vite';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function main() {
  const isDesktop = process.argv.includes('--desktop');
  const formatName = isDesktop ? 'desktop-16x9' : 'reels-9x16';
  
  console.log(`\n🎥 Memulai Perekaman Video Promosi: ${formatName}...`);

  // 1. Start Vite preview server on port 4173
  const previewServer = await preview({
    preview: { port: 4173 }
  });
  const serverUrl = 'http://localhost:4173';
  console.log(`⚡ Server preview berjalan di ${serverUrl}`);

  const recordingsDir = path.resolve('recordings');
  const tempDir = path.join(recordingsDir, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  // 2. Exact 1-to-1 match between viewport and recordVideo size
  // This guarantees 0% borders or letterboxing!
  const viewport = isDesktop 
    ? { width: 1440, height: 810 }   // 16:9
    : { width: 450, height: 800 };   // 9:16

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 2,
    recordVideo: {
      dir: tempDir,
      size: viewport // Match exactly so it fills the entire video frame!
    }
  });

  const page = await context.newPage();
  console.log(`📱 Membuka landing page Rasa Ndeso...`);
  await page.goto(serverUrl, { waitUntil: 'networkidle' });

  // Helper smooth scroll
  async function smoothScrollTo(selectorOrY, durationMs = 2500) {
    await page.evaluate(async ({ target, durationMs }) => {
      let targetY = 0;
      if (typeof target === 'string') {
        const el = document.querySelector(target);
        if (el) {
          const rect = el.getBoundingClientRect();
          targetY = window.scrollY + rect.top - 60;
        }
      } else {
        targetY = target;
      }

      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      return new Promise((resolve) => {
        function step(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          // easeInOutCubic for organic fluid camera movement
          const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          window.scrollTo(0, startY + distance * ease);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        }
        requestAnimationFrame(step);
      });
    }, { target: selectorOrY, durationMs });
  }

  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  console.log(`🎬 Merekam alur cinematic landing page...`);

  // Scene 1: Hero Section (headline, lokasi Manyar, tombol CTA)
  console.log(`- Scene 1: Hero & Headline`);
  await wait(3000);

  // Scene 2: Brand Story
  console.log(`- Scene 2: Filosofi & Cerita Rasa Ndeso`);
  await smoothScrollTo('#keunggulan', 2200);
  await wait(2200);

  // Scene 3: Menu Jajanan Pasar
  console.log(`- Scene 3: Aneka Menu Jajanan Pasar`);
  await smoothScrollTo('#menu', 2200);
  await wait(2000);

  // Interaksi filter kategori "Manis"
  const filterManis = page.locator('button:has-text("Manis")').first();
  if (await filterManis.isVisible()) {
    await filterManis.click();
    await wait(1800);
  }

  // Interaksi filter kategori "Gurih"
  const filterGurih = page.locator('button:has-text("Gurih")').first();
  if (await filterGurih.isVisible()) {
    await filterGurih.click();
    await wait(1800);
  }

  // Kembalikan ke "Semua"
  const filterSemua = page.locator('button:has-text("Semua")').first();
  if (await filterSemua.isVisible()) {
    await filterSemua.click();
    await wait(1500);
  }

  // Scene 4: Pilihan Paket Jajanan
  console.log(`- Scene 4: Pilihan Paket & Hampers`);
  await smoothScrollTo('#paket', 2200);
  await wait(2200);

  // Scene 5: Kalkulator Snack Box Interaktif
  console.log(`- Scene 5: Kalkulator Snack Box Custom`);
  await smoothScrollTo('#kalkulator', 2200);
  await wait(2000);

  // Coba klik tombol tambah item di kalkulator agar terlihat dinamis
  const plusButtons = page.locator('button:has(svg.lucide-plus)');
  if (await plusButtons.count() > 0) {
    await plusButtons.first().click();
    await wait(800);
    await plusButtons.first().click();
    await wait(1500);
  }

  // Scene 6: Standar Kualitas Dapur
  console.log(`- Scene 6: Keunggulan Dapur vs Biasa`);
  await smoothScrollTo('#keunggulan-kami', 2000);
  await wait(2000);

  // Scene 7: Lokasi Dapur Manyar & WhatsApp
  console.log(`- Scene 7: Lokasi Manyar Surabaya & Kontak`);
  await smoothScrollTo('#lokasi', 2000);
  await wait(2500);

  // End Scene
  await wait(1000);

  // 3. Save video
  console.log(`⏹️ Menyelesaikan rekaman...`);
  const video = page.video();
  await page.close();
  await context.close();
  await browser.close();
  previewServer.httpServer.close();

  const rawVideoPath = await video.path();
  const outputMp4Name = isDesktop 
    ? 'promosi-rasa-ndeso-desktop.mp4' 
    : 'promosi-rasa-ndeso-reels.mp4';
  const finalMp4Path = path.join(recordingsDir, outputMp4Name);

  const targetScale = isDesktop ? '1920:1080' : '1080:1920';

  console.log(`⚙️ Mengonversi ke MP4 Full HD (${targetScale}, H.264 60fps) via ffmpeg...`);
  
  // Upscale to Full HD (1080x1920) with high quality Lanczos filter
  execSync(
    `ffmpeg -y -i "${rawVideoPath}" -vf "scale=${targetScale}:flags=lanczos" -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p -r 60 "${finalMp4Path}"`,
    { stdio: 'inherit' }
  );

  // Clean temp dir
  fs.rmSync(tempDir, { recursive: true, force: true });

  const stats = fs.statSync(finalMp4Path);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`\n🎉 SELESAI! Video promosi berhasil dibuat:`);
  console.log(`📁 File: ${finalMp4Path}`);
  console.log(`📊 Ukuran: ${sizeMB} MB`);
  console.log(`📐 Format: ${isDesktop ? '1920x1080 (16:9 Landscape)' : '1080x1920 (9:16 Portrait / Reels / TikTok)'}`);
}

main().catch(err => {
  console.error('Error saat merekam:', err);
  process.exit(1);
});
