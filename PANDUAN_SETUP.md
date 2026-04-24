# 🚀 Panduan Setup Portfolio — Alex Pratama

Website portofolio modern berbasis **React + Vite + Tailwind CSS** dengan fitur dark mode, animasi ringan, dan desain responsif.

---

## 📁 Struktur Folder

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Navigasi + toggle dark mode
│   │   ├── Hero.jsx         ← Halaman utama / landing
│   │   ├── About.jsx        ← Tentang saya
│   │   ├── Skills.jsx       ← Skill & progress bar
│   │   ├── Education.jsx    ← Riwayat pendidikan (timeline)
│   │   ├── Projects.jsx     ← Kartu project
│   │   ├── Contact.jsx      ← Form & link kontak
│   │   └── Footer.jsx       ← Footer
│   ├── App.jsx              ← Root component + dark mode state
│   ├── main.jsx             ← Entry point React
│   └── index.css            ← Tailwind + custom styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Langkah 1 — Install Node.js

1. Buka [https://nodejs.org](https://nodejs.org)
2. Download versi **LTS** (misal: v20.x.x)
3. Install seperti biasa (next → next → finish)
4. Verifikasi di terminal:

```bash
node --version   # v20.x.x
npm --version    # 10.x.x
```

---

## 📦 Langkah 2 — Buat Project Baru dengan Vite

```bash
# Buat project React baru
npm create vite@latest portfolio -- --template react

# Masuk ke folder project
cd portfolio
```

> **Atau** kalau kamu sudah punya folder seperti yang diberikan, langsung ke Langkah 3.

---

## 🎨 Langkah 3 — Install Tailwind CSS

```bash
# Install Tailwind + PostCSS + Autoprefixer
npm install -D tailwindcss postcss autoprefixer

# Generate file konfigurasi
npx tailwindcss init -p
```

Pastikan `tailwind.config.js` seperti ini (**darkMode: 'class'** wajib ada!):

```js
export default {
  darkMode: 'class',          // ← PENTING! Aktifkan dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#00C896',
          dark:    '#00A87D',
          light:   '#33D9A9',
        },
      },
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
```

Tambahkan directive Tailwind di `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📥 Langkah 4 — Install Semua Dependensi

```bash
# Semua package yang dibutuhkan (termasuk react-icons)
npm install
```

Atau jika mulai dari nol:

```bash
npm install react-icons
```

---

## ▶️ Langkah 5 — Jalankan di Mode Development

```bash
npm run dev
```

Buka browser ke: **http://localhost:5173**

Hot reload aktif — setiap perubahan kode langsung terlihat tanpa refresh manual.

---

## 🔨 Langkah 6 — Build untuk Produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`. Untuk preview lokal sebelum deploy:

```bash
npm run preview
# Buka http://localhost:4173
```

---

## 🌐 Langkah 7 — Deploy ke Vercel

### Cara A — Via GitHub (Direkomendasikan)

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: init portfolio"
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```

2. **Import ke Vercel:**
   - Buka [vercel.com](https://vercel.com) → Login dengan GitHub
   - Klik **"Add New Project"**
   - Pilih repo `portfolio` kamu
   - Framework Preset: **Vite** (auto-detect)
   - Klik **Deploy** ✅

3. Setelah deploy selesai, kamu mendapat URL seperti:
   `https://portfolio-alexpratama.vercel.app`

### Cara B — Via Vercel CLI

```bash
# Install Vercel CLI global
npm install -g vercel

# Login
vercel login

# Deploy langsung dari folder project
vercel

# Deploy ke production
vercel --prod
```

---

## ✏️ Cara Kustomisasi Data

### Ganti data pribadi
Semua data ada di masing-masing komponen dan mudah diubah:

| File                | Yang perlu diubah                              |
|---------------------|------------------------------------------------|
| `Hero.jsx`          | Nama, deskripsi, link GitHub & LinkedIn        |
| `About.jsx`         | Foto, deskripsi diri, info singkat             |
| `Skills.jsx`        | Nama skill, level (0-100), kategori            |
| `Education.jsx`     | Nama sekolah, jurusan, periode, deskripsi      |
| `Projects.jsx`      | Nama project, deskripsi, tech, link GitHub     |
| `Contact.jsx`       | Email, GitHub, Instagram, LinkedIn             |
| `Footer.jsx`        | Nama, link sosial                              |

### Ganti foto profil
Di `About.jsx`, ganti URL `src` pada `<img>`:
```jsx
// Ganti ini:
src="https://api.dicebear.com/8.x/notionists/svg?seed=alex..."
// Dengan foto kamu:
src="/images/foto-profil.jpg"
// (taruh file di folder public/images/)
```

### Ganti warna aksen
Di `tailwind.config.js`, ubah nilai `accent`:
```js
colors: {
  accent: {
    DEFAULT: '#00C896',  // ← ganti dengan warna favorit kamu
  }
}
```

---

## 🌙 Cara Kerja Dark Mode

1. Toggle di Navbar mengubah state `isDark` di `App.jsx`
2. Saat `isDark = true`, class `dark` ditambahkan ke `<html>`
3. Tailwind menerapkan semua class `dark:xxx` secara otomatis
4. Preferensi disimpan di `localStorage` agar tetap setelah refresh

```js
// Logika di App.jsx
useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}, [isDark])
```

---

## 🐛 Troubleshooting Umum

| Masalah | Solusi |
|---------|--------|
| `npm: command not found` | Install Node.js dulu dari nodejs.org |
| Port 5173 sudah dipakai | Jalankan `npm run dev -- --port 3000` |
| Dark mode tidak jalan | Pastikan `darkMode: 'class'` ada di tailwind.config.js |
| Class Tailwind tidak muncul | Pastikan path `content` di config sudah benar |
| Ikon tidak muncul | Jalankan `npm install react-icons` |

---

## 📚 Referensi

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons)
- [Vercel Docs](https://vercel.com/docs)

---

> 💡 **Tips:** Setelah deploy, tambahkan custom domain di Vercel Settings → Domains untuk tampilan yang lebih profesional!
