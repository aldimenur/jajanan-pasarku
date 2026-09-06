/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF7F2',
          100: '#F4EFE6',
          200: '#E8DEC9',
          300: '#D9CBB0',
        },
        pandan: {
          50: '#F1F7F3',
          100: '#DFEFE4',
          200: '#BFDFCA',
          600: '#236741',
          700: '#1A5333',
          800: '#144128',
          900: '#0E2E1C',
        },
        brown: {
          50: '#F9F6F3',
          100: '#EFE9E2',
          200: '#DFCFC0',
          500: '#8A5D3B',
          700: '#643F24',
          800: '#432814',
          900: '#2A180C',
          950: '#1B0F07',
        },
        accent: {
          50: '#FDF7F0',
          100: '#FCECDA',
          500: '#C8681A',
          600: '#B05510',
          700: '#944409',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
