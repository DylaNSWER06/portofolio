import { FiGithub, FiInstagram, FiLinkedin, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <p className="font-display font-bold text-lg text-white">
            Dylan<span className="text-accent">.</span>
          </p>

          {/* Kredit */}
          <p className="font-body text-xs flex items-center gap-1">
            © {year} Dylan Akhtarreza — Dibuat dengan{' '}
            <FiHeart className="w-3 h-3 text-red-400 fill-red-400" />
            {' '}menggunakan React & Tailwind CSS
          </p>

          {/* Sosial */}
          <div className="flex gap-3">
            {[
              { icon: FiGithub,    href: 'https://github.com/DylaNSWER06',          label: 'GitHub'    },
              { icon: FiInstagram, href: 'https://instagram.com/rzdylnn',     label: 'Instagram' },
              { icon: FiLinkedin,  href: 'https://linkedin.com/in/DylanAkhtarreza',     label: 'LinkedIn'  },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-slate-500 hover:text-accent
                           hover:bg-accent/10 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
