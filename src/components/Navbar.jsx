import { useState, useEffect } from 'react'
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2'

// Daftar item menu — tambah/ubah sesuai kebutuhan
const NAV_ITEMS = [
  { label: 'Home',      href: '#home'      },
  { label: 'Tentang',   href: '#tentang'   },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Pendidikan',href: '#pendidikan'},
  { label: 'Project',   href: '#project'   },
  { label: 'Kontak',    href: '#kontak'    },
]

export default function Navbar({ isDark, toggleDark }) {
  // State untuk menu mobile (hamburger)
  const [menuOpen, setMenuOpen]   = useState(false)
  // State untuk efek scroll — navbar lebih "berat" saat di-scroll
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup menu mobile saat item diklik
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800'
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo / Brand ── */}
        <a
          href="#home"
          className="font-display font-bold text-xl text-slate-900 dark:text-white
                     hover:text-accent transition-colors duration-200"
        >
          Dylan<span className="text-accent">.</span>
        </a>

        {/* ── Menu desktop ── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-body font-medium
                         text-slate-600 dark:text-slate-300
                         hover:text-accent dark:hover:text-accent
                         hover:bg-accent/5 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── Tombol kanan: dark mode + hamburger ── */}
        <div className="flex items-center gap-2">

          {/* Tombol toggle dark mode */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400
                       hover:text-accent dark:hover:text-accent
                       hover:bg-accent/10 transition-all duration-200"
          >
            {/* Tampilkan ikon sesuai mode saat ini */}
            {isDark
              ? <HiSun  className="w-5 h-5" />
              : <HiMoon className="w-5 h-5" />}
          </button>

          {/* Hamburger — hanya tampil di mobile */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400
                       hover:text-accent hover:bg-accent/10 transition-all duration-200"
          >
            {menuOpen
              ? <HiXMark  className="w-5 h-5" />
              : <HiBars3  className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Menu mobile (slide down) ── */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md
                        border-b border-slate-100 dark:border-slate-800 px-6 pb-4 pt-2">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block py-3 text-sm font-body font-medium
                         text-slate-600 dark:text-slate-300
                         hover:text-accent dark:hover:text-accent
                         border-b border-slate-50 dark:border-slate-800/50
                         last:border-none transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
