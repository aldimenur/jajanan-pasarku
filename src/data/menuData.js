// Data Menu & Konfigurasi UMKM Jajanan Pasar "Rasa Ndeso" (Manyar)
// Harga & informasi dapat dengan mudah diubah di file ini

export const businessInfo = {
  name: "Rasa Ndeso",
  tagline: "Jajanan Pasar Tradisional Autentik",
  headline: "Jajanan Pasar Tradisional, Rasa yang Selalu Bikin Rindu",
  subheadline: "Nikmati aneka jajanan pasar favorit dengan cita rasa autentik, tekstur lembut, dan dibuat fresh setiap hari. Cocok untuk sarapan, teman ngopi, arisan, rapat, acara keluarga, hingga berbagai kebutuhan snack box.",
  story: "Dari jajanan sederhana, lahir rasa yang istimewa. Rasa Ndeso menghadirkan kembali kenikmatan jajanan pasar yang mungkin mengingatkan Anda pada suasana rumah, pasar pagi, dan masakan keluarga. Setiap gigitan dibuat dengan penuh perhatian agar rasa tradisional tetap terasa di tengah kehidupan modern.",
  address: "Jl. Manyar Kertoarjo No. 42 (Dekat Samsat Manyar), Surabaya Timur",
  locationName: "Manyar, Surabaya",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp UMKM yang sebenarnya (format internasional tanpa +)
  displayPhone: "0812-3456-7890",
  operationalHours: "Setiap Hari: 05.30 - 17.00 WIB (Pesanan Subuh dilayani mulai 05.00)",
  deliveryCoverage: "Manyar, Kertajaya, Gubeng, Sukolilo, Rungkut, seluruh Surabaya & Gresik",
  instagram: "@rasandeso.jajanpasar",
  badges: [
    "Dibuat Fresh Tiap Hari",
    "Bahan 100% Alami & Halal",
    "Tanpa Pemanis Buatan",
    "Siap Antar Pagi Subuh"
  ]
};

export const menuItems = [
  {
    id: "klepon",
    name: "Klepon Pandan Lumer",
    category: "manis",
    isBestSeller: true,
    price: 3000,
    unit: "buah",
    description: "Bola ketan lembut beraroma daun suji pandan asli, berisi gula merah aren cair yang lumer meletup di mulut dan dibalut kelapa parut kukus gurih.",
    tasteNotes: "Manis lumer, kenyal lembut, gurih parutan kelapa",
    tags: ["Favorit", "Lumer", "Gula Aren Asli"],
    image: "/images/klepon.jpg",
    minOrder: 5
  },
  {
    id: "onde-onde",
    name: "Onde-Onde Wijen Renyah",
    category: "manis",
    isBestSeller: true,
    price: 3500,
    unit: "buah",
    description: "Kulit ketan renyah keemasan bertabur wijen wangi yang rapat, dengan isian pasta kacang hijau kupas yang legit, pulen, dan gurih lembut.",
    tasteNotes: "Renyah di luar, empuk legit di dalam",
    tags: ["Best Seller", "Renyah Tahan Lama", "Kacang Hijau Asli"],
    image: "/images/onde-onde.jpg",
    minOrder: 5
  },
  {
    id: "putu-ayu",
    name: "Putu Ayu Wangi Pandan",
    category: "manis",
    isBestSeller: false,
    price: 3000,
    unit: "buah",
    description: "Kue kukus bertekstur sangat lembut dan mengembang empuk dengan aroma daun pandan asli, bermahkotakan kelapa parut gurih sedikit asin yang seimbang.",
    tasteNotes: "Bolu lembut wangi, kelapa gurih pulen",
    tags: ["Kukus Fresh", "Pandan Asli"],
    image: "/images/putu-ayu.jpg",
    minOrder: 5
  },
  {
    id: "dadar-gulung",
    name: "Dadar Gulung Unti Kelapa",
    category: "manis",
    isBestSeller: true,
    price: 3000,
    unit: "buah",
    description: "Kulit dadar pandan lembut berpori cantik, menggulung isian unti kelapa muda parut yang dimasak legit bersama gula merah aren dan daun pandan.",
    tasteNotes: "Manis legit gula aren, kulit lembut basah",
    tags: ["Best Seller", "Gula Aren", "Pandan Wangi"],
    image: "/images/dadar-gulung.jpg",
    minOrder: 5
  },
  {
    id: "kue-lumpur",
    name: "Kue Lumpur Kentang Creamy",
    category: "manis",
    isBestSeller: true,
    price: 3500,
    unit: "buah",
    description: "Tekstur super lembut dan creamy lumer berbahan dasar kentang kukus pilihan dan santan kental gurih, dengan sentuhan manis pas dan taburan kismis manis di tengah.",
    tasteNotes: "Super lembut, creamy kentang legit gurih",
    tags: ["Favorit Rapat", "Kentang Asli", "Creamy"],
    image: "/images/kue-lumpur.jpg",
    minOrder: 5
  },
  {
    id: "lemper",
    name: "Lemper Ayam Bakar Pulen",
    category: "gurih",
    isBestSeller: true,
    price: 4000,
    unit: "buah",
    description: "Ketan pulen gurih santan yang dibungkus daun pisang dan dibakar harum, berisikan suwiran daging ayam melimpah dengan racikan bumbu rempah ketumbar gurih manis.",
    tasteNotes: "Ketan pulen gurih, isian ayam berlimpah",
    tags: ["Best Seller", "Ayam Melimpah", "Aroma Bakar"],
    image: "/images/lemper.jpg",
    minOrder: 5
  },
  {
    id: "risoles",
    name: "Risoles Rogout Ayam Krispi",
    category: "gurih",
    isBestSeller: true,
    price: 4000,
    unit: "buah",
    description: "Kulit risoles lembut dibalut tepung panir keemasan yang krispi gurih, berisikan ragout creamy wortel, seledri, dan daging ayam gurih lezat.",
    tasteNotes: "Kulit renyah luar, isi ragout creamy hangat",
    tags: ["Favorit Snack Box", "Panir Renyah", "Ayam Creamy"],
    image: "/images/risoles.jpg",
    minOrder: 5
  },
  {
    id: "pastel",
    name: "Pastel Ulir Renyah Sayur Telur",
    category: "gurih",
    isBestSeller: false,
    price: 3500,
    unit: "buah",
    description: "Kulit pastel bertekstur ulir renyah bergelembung yang tahan renyah, berisikan tumisan bihun gurih, wortel, potongan telur rebus, dan bumbu rempah aromatik.",
    tasteNotes: "Kulit super renyah berlayer, isi gurih sedap",
    tags: ["Renyah Tahan Lama", "Ada Telur"],
    image: "/images/pastel.jpg",
    minOrder: 5
  },
  {
    id: "nagasari",
    name: "Nagasari Pisang Raja",
    category: "manis",
    isBestSeller: false,
    price: 3000,
    unit: "buah",
    description: "Kue berbahan dasar tepung beras dan santan yang kenyal lembut, dengan aroma wangi daun pandan dan daun pisang kukus, membungkus potongan pisang raja yang manis ranum.",
    tasteNotes: "Kenyal lembut sejuk, pisang raja manis alami",
    tags: ["Pisang Raja Asli", "Tradisional Asli"],
    image: "/images/nagasari.jpg",
    minOrder: 5
  },
  {
    id: "lapis",
    name: "Kue Lapis Beras Kenyal",
    category: "manis",
    isBestSeller: false,
    price: 3000,
    unit: "buah",
    description: "Kue tradisional berlapis-lapis rapi dengan tekstur kenyal lentur yang memuaskan saat dilepas per lembar, memadukan aroma pandan suji dan gurih santan murni.",
    tasteNotes: "Kenyal lentur lembut, manis gurih seimbang",
    tags: ["Bisa Dikupas Selapis", "Santan Murni"],
    image: "/images/lapis.jpg",
    minOrder: 5
  },
  {
    id: "serabi",
    name: "Serabi Pandan Kuah Kinca",
    category: "manis",
    isBestSeller: true,
    price: 3500,
    unit: "buah",
    description: "Serabi bakar tradisional bertekstur pori-pori sarang yang sangat lembut dan empuk, disajikan bersama siraman kuah kinca santan gula merah aren pekat nan harum.",
    tasteNotes: "Pori lembut empuk, kuah kinca kental harum",
    tags: ["Favorit Sarapan", "Kuah Kinca Aren Terpisah"],
    image: "/images/serabi.jpg",
    minOrder: 5
  },
  {
    id: "cucur",
    name: "Kue Cucur Gula Merah",
    category: "manis",
    isBestSeller: false,
    price: 3000,
    unit: "buah",
    description: "Jajanan legendaris dengan bagian tengah yang tebal empuk dan pinggiran renda keriting yang berkaramel renyah, beraroma harum gula merah kelapa yang khas.",
    tasteNotes: "Tengah berserat empuk, pinggiran renyah karamel",
    tags: ["Aroma Karamel", "Resep Kuno"],
    image: "/images/cucur.jpg",
    minOrder: 5
  }
];

export const packages = [
  {
    id: "paket-hemat",
    name: "Paket Hemat Harian",
    subtitle: "Teman Sarapan & Ngopi Keluarga",
    badge: "Praktis Harian",
    priceRange: "Mulai Rp 25.000",
    idealFor: "3 - 4 orang (Keluarga / Sarapan Rumah)",
    itemsInclude: [
      "8 pcs aneka jajanan pilihan (campur manis & gurih)",
      "Kemasan mika higienis bersegel rapi",
      "Cocok untuk sarapan pagi sebelum berangkat kantor/sekolah",
      "Dibuat subuh, sampai hangat di meja Anda"
    ],
    ctaText: "Pesan Paket Hemat",
    popular: false
  },
  {
    id: "paket-arisan",
    name: "Paket Arisan Tampah",
    subtitle: "Sajian Cantik & Berkesan untuk Tamu",
    badge: "Paling Populer",
    priceRange: "Mulai Rp 125.000",
    idealFor: "15 - 25 orang (Kumpul Arisan / Syukuran)",
    itemsInclude: [
      "35 - 50 pcs jajanan pasar kombinasi premium",
      "Disusun rapi di atas Tampah Bambu Tradisional beralas daun pisang segar",
      "Garnish bunga cabai & daun pandan yang elegan dan fotogenik",
      "Kombinasi lengkap: Klepon, Onde, Lemper, Risoles, Lumpur, dsb."
    ],
    ctaText: "Pesan Tampah Arisan",
    popular: true
  },
  {
    id: "paket-snackbox",
    name: "Paket Snack Box Kantor",
    subtitle: "Rapat, Seminar, & Acara Instansi",
    badge: "Pilihan Instansi",
    priceRange: "Mulai Rp 12.000 / box",
    idealFor: "Minimal 15 box (Rapat, Diklat, Workshop)",
    itemsInclude: [
      "Isi 3 atau 4 macam jajanan (1 Gurih + 2 Manis + Permen/Tisu)",
      "Box karton kraft tebal ramah lingkungan bertutup mika bening",
      "Termasuk Air Mineral Gelas higienis",
      "Bisa request invoice/nota resmi stempel untuk kebutuhan SPJ kantor"
    ],
    ctaText: "Pesan Snack Box Kantor",
    popular: false
  },
  {
    id: "paket-custom",
    name: "Paket Custom Bebas Pilih",
    subtitle: "Sesuai Selera, Jumlah & Budget Anda",
    badge: "Fleksibel",
    priceRange: "Fleksibel Sesuai Pilihan",
    idealFor: "Pernikahan, Lamaran, Pengajian, Hajatan Besar",
    itemsInclude: [
      "Bebas memilih kombinasi 12 menu jajanan signature Rasa Ndeso",
      "Bebas tentukan jenis kemasan (Box, Tampah, Besek bambu, atau Mika)",
      "Dukungan porsi besar hingga 1.000+ pcs per hari",
      "Konsultasi menu gratis via WhatsApp dengan tim kami"
    ],
    ctaText: "Konsultasi Paket Custom",
    popular: false
  }
];

export const whyChooseUs = [
  {
    title: "Rasa Autentik Seperti Buatan Rumah",
    description: "Kami mempertahankan resep tradisional turun-temurun tanpa jalan pintas. Rasa manisnya pas dari gula aren murni dan gurihnya dari santan perasan segar.",
    icon: "Heart"
  },
  {
    title: "Dibuat Fresh Setiap Subuh",
    description: "Tidak ada stok sisa kemarin. Semua jajanan dimasak fresh beberapa jam sebelum diantar agar tekstur tetap lembut, kenyal, dan tidak basi.",
    icon: "Clock"
  },
  {
    title: "Bahan Berkualitas & 100% Halal",
    description: "Menggunakan tepung ketan kualitas utama, pewarna alami dari daun suji pandan segar, tanpa pengawet sintetik berbahaya dan tanpa pemanis buatan.",
    icon: "ShieldCheck"
  },
  {
    title: "Pilihan Jajanan Beragam",
    description: "Tersedia 12 pilihan jajanan legendaris dari yang manis legit lumer hingga yang gurih krispi padat gizi, menjawab semua selera tamu Anda.",
    icon: "Sparkles"
  },
  {
    title: "Harga Terjangkau & Ramah UMKM",
    description: "Mulai Rp 3.000-an per buah dengan kualitas rasa bintang lima. Kami percaya hidangan lezat dan berkualitas harus bisa dinikmati siapa saja.",
    icon: "BadgePercent"
  },
  {
    title: "Kapasitas Besar & Pengiriman Tepat Waktu",
    description: "Siap melayani pesanan ratusan box untuk kantor, sekolah, dan acara keluarga di Manyar & Surabaya dengan jaminan tiba tepat sebelum acara dimulai.",
    icon: "Truck"
  }
];

export const testimonials = [
  {
    name: "Ibu Rahmawati",
    role: "Ketua Arisan RT Manyar Sabrangan",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    comment: "Pesan Paket Tampah untuk arisan bulanan di rumah, semua ibu-ibu langsung puji klepon dan lempernya! Kleponnya beneran meletup gula merah asli dan lempernya tebal ayamnya. Pengantaran jam 6 pagi sudah sampai dengan kondisi masih hangat.",
    rating: 5,
    event: "Paket Arisan Tampah (50 pcs)"
  },
  {
    name: "Dimas Anggoro",
    role: "Koordinator HR PT Semen & Konstruksi Manyar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    comment: "Langganan tetap tiap ada rapat direksi dan pelatihan staf. Snack box-nya rapi banget, risoles rogout-nya juara krispinya, dan kue lumpurnya super lembut. Admin responsif dan nota resminya lengkap untuk klaim kantor.",
    rating: 5,
    event: "Snack Box Kantor (120 Box)"
  },
  {
    name: "dr. Cynthia Pratiwi",
    role: "Warga Kertajaya Indah",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    comment: "Rasa Ndeso ini bikin nostalgia zaman kecil beli kue subuh di pasar Manyar bareng nenek. Rasa manisnya tidak bikin serak di tenggorokan karena memang pakai bahan alami. Sekarang tiap weekend selalu pesan paket hemat buat teman ngopi keluarga.",
    rating: 5,
    event: "Paket Hemat & Onde-Onde"
  }
];

export const orderSteps = [
  {
    step: "01",
    title: "Pilih Menu / Gunakan Kalkulator",
    description: "Tentukan jajanan favorit Anda dari daftar menu atau gunakan kalkulator snack box di web ini untuk estimasi harga instan."
  },
  {
    step: "02",
    title: "Klik Chat WhatsApp",
    description: "Tekan tombol pemesanan. Pesanan Anda otomatis terformat rapi di chat WhatsApp tim Rasa Ndeso untuk konfirmasi alamat & waktu kirim."
  },
  {
    step: "03",
    title: "Dimasak Fresh Khusus Pesanan Anda",
    description: "Dapur kami mengolah pesanan Anda pada subuh hari H menggunakan bahan-bahan alami segar, tanpa pengawet."
  },
  {
    step: "04",
    title: "Dikirim / Siap Diambil di Manyar",
    description: "Pesanan diantar kurir tepat waktu atau dapat Anda ambil langsung di Manyar Surabaya dalam kemasan higienis yang aman."
  }
];

export const faqs = [
  {
    question: "Apakah pemesanan harus H-1 atau bisa pesan dadakan hari H?",
    answer: "Untuk memastikan kesegaran maksimal dan ketersediaan bahan, pesanan snack box, tampah arisan, atau jumlah di atas 20 pcs disarankan H-1 (sebelum pukul 19.00 WIB). Namun untuk kebutuhan mendadak di hari H pagi hari, silakan langsung hubungi WhatsApp kami untuk mengecek ketersediaan batch fresh hari itu."
  },
  {
    question: "Berapa minimal pemesanan untuk snack box kantor?",
    answer: "Minimal pemesanan snack box adalah 15 box. Anda bebas mengombinasikan 3 hingga 4 macam jajanan pilihan per box sesuai budget instansi Anda."
  },
  {
    question: "Bagaimana dengan jangkauan pengiriman dan ongkos kirim?",
    answer: "Kami melayani pengiriman ke seluruh wilayah Manyar, Kertajaya, Gubeng, Sukolilo, Rungkut, Surabaya Pusat, Barat, Utara, Selatan, hingga wilayah Manyar Gresik via kurir instan motor/mobil. Kami juga menyediakan promo gratis ongkir untuk area Manyar & Kertajaya dengan minimal transaksi tertentu."
  },
  {
    question: "Berapa lama daya tahan jajanan pasar Rasa Ndeso?",
    answer: "Karena kami 100% TIDAK menggunakan bahan pengawet kimia, jajanan bersantan (seperti Klepon, Putu Ayu, Lumpur, Nagasari) tahan 1 hari (12-14 jam di suhu ruang). Jajanan gorengan kering (seperti Onde-Onde, Risoles, Pastel) tahan hingga malam hari. Jika dimasukkan chiller/kulkas, dapat bertahan hingga keesokan harinya dan bisa dihangatkan kembali."
  },
  {
    question: "Apakah bisa menerbitkan kwitansi / nota stempel untuk laporan kantor?",
    answer: "Tentu saja bisa! Kami menyediakan nota fisik resmi bertanda tangan dan stempel basah UMKM, serta invoice digital berformat PDF untuk mempermudah pertanggungjawaban SPJ keuangan instansi Anda."
  }
];
