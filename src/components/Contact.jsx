import { FiMail, FiGithub, FiInstagram, FiLinkedin, FiArrowRight } from 'react-icons/fi'

// ── Data kontak — ganti dengan info kamu ──────────────────────────────────────
const CONTACTS = [
  {
    icon:    FiMail,
    label:   'Email',
    value:   'rezadylan9@gmail.com',
    href:    'mailto:rezadylan9@gmail.com',
    color:   'from-red-400 to-rose-400',
    hoverBg: 'hover:bg-red-50 dark:hover:bg-red-950/20',
  },
  {
    icon:    FiGithub,
    label:   'GitHub',
    value:   'github.com/DylaNSWER06',
    href:    'https://github.com/DylaNSWER06',
    color:   'from-slate-500 to-slate-700',
    hoverBg: 'hover:bg-slate-50 dark:hover:bg-slate-800/50',
  },
  {
    icon:    FiInstagram,
    label:   'Instagram',
    value:   '@rzdylnn',
    href:    'https://instagram.com/rzdylnn',
    color:   'from-pink-400 to-purple-400',
    hoverBg: 'hover:bg-pink-50 dark:hover:bg-pink-950/20',
  },
  {
    icon:    FiLinkedin,
    label:   'LinkedIn',
    value:   'linkedin.com/in/DylanAkhtarreza',
    href:    'https://linkedin.com/in/DylanAkhtarreza',
    color:   'from-blue-500 to-blue-400',
    hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-950/20',
  },
]

export default function Contact() {
  return (
    <section id="kontak" className="bg-white dark:bg-slate-900">
      <div className="section-wrapper">

        {/* ── Judul ── */}
        <span className="font-display text-sm font-semibold text-accent uppercase tracking-widest">
          Hubungi Saya
        </span>
        <h2 className="section-title mt-1">Kontak</h2>
        <span className="title-underline" />

        {/* Layout dua kolom: teks ajakan + kartu kontak */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Kiri: teks ajakan ── */}
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Mari Berkolaborasi! 🤝
            </h3>
            <p className="font-body text-base text-slate-600 dark:text-slate-400
                          leading-relaxed mb-6">
              Saya terbuka untuk peluang magang, project freelance, atau sekadar
              ngobrol soal teknologi. Jangan ragu untuk menghubungi saya melalui
              platform di bawah ini!
            </p>

            {/* Poin unggulan */}
            {[
              'Respon cepat (biasanya dalam 24 jam)',
              'Terbuka untuk project kolaborasi',
              'Siap magang atau kerja part-time',
            ].map(point => (
              <div key={point} className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="font-body text-sm text-slate-600 dark:text-slate-400">
                  {point}
                </span>
              </div>
            ))}

            {/* Tombol kirim email */}
            <a
              href="mailto:alex.pratama@email.com"
              className="btn-primary mt-6"
            >
              Kirim Email <FiArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── Kanan: daftar kontak ── */}
          <div className="space-y-3">
            {CONTACTS.map(({ icon: Icon, label, value, href, color, hoverBg }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-4 p-4 rounded-2xl
                  border border-slate-100 dark:border-slate-700/50
                  bg-white dark:bg-slate-800/60
                  ${hoverBg}
                  hover:border-accent/30 hover:-translate-y-0.5
                  transition-all duration-200 group
                `}
              >
                {/* Icon dengan gradient background */}
                <div className={`
                  w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                  bg-gradient-to-br ${color} text-white
                  group-hover:scale-110 transition-transform duration-200
                `}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Label & value */}
                <div className="flex-1 min-w-0">
                  <p className="font-display text-xs font-semibold text-slate-400
                                uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="font-body text-sm font-medium text-slate-800
                                dark:text-slate-200 truncate">
                    {value}
                  </p>
                </div>

                <FiArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600
                                         group-hover:text-accent group-hover:translate-x-1
                                         transition-all duration-200" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
