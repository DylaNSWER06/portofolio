/** @type {import('tailwindcss').Config} */
export default {
  // 'class' strategy: dark mode diaktifkan dengan menambahkan class "dark" pada elemen <html>
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font kustom yang kita import dari Google Fonts
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      // Warna aksen kustom untuk branding
      colors: {
        accent: {
          DEFAULT: '#00C896',  // hijau toska — warna utama aksen
          dark:    '#00A87D',
          light:   '#33D9A9',
        },
      },
      // Animasi kustom untuk fade-in
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
