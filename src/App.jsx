import { useState, useEffect } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Education from './components/Education'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  // ── Dark mode state ──────────────────────────────────────────────────────────
  // Cek localStorage dulu; kalau belum ada, ikuti preferensi sistem (prefers-color-scheme)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Setiap kali isDark berubah: tambah/hapus class "dark" di <html> dan simpan ke localStorage
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleDark = () => setIsDark(prev => !prev)

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen">
      {/* Navbar selalu tampil di atas; teruskan toggle & state dark mode */}
      <Navbar isDark={isDark} toggleDark={toggleDark} />

      {/* Konten utama */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
