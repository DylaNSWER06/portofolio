import { FiCode, FiLayers, FiSmartphone, FiDatabase } from 'react-icons/fi'

// Data minat / interest — gampang diubah
const INTERESTS = [
  { icon: FiCode,        label: 'Web Development',   desc: 'Membangun antarmuka yang interaktif & responsif' },
  { icon: FiLayers,      label: 'UI/UX Design',       desc: 'Merancang pengalaman pengguna yang intuitif' },
  { icon: FiSmartphone,  label: 'Mobile Dev',         desc: 'Aplikasi Flutter untuk Android & iOS' },
  { icon: FiDatabase,    label: 'Backend & Database', desc: 'Firebase, REST API, dan manajemen data' },
]

export default function About() {
  return (
    <section id="tentang" className="bg-white dark:bg-slate-900">
      <div className="section-wrapper">

        {/* ── Judul ── */}
        <span className="font-display text-sm font-semibold text-accent uppercase tracking-widest">
          Tentang Saya
        </span>
        <h2 className="section-title mt-1">Kenali Saya Lebih Dekat</h2>
        <span className="title-underline" />

        {/* ── Konten: foto + teks ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Foto — kiri di desktop, atas di mobile */}
          <div className="relative group">
            <div className="absolute -inset-2 rounded-3xl bg-accent/10
                            group-hover:bg-accent/15 transition-colors duration-300 blur-sm" />
            {/* Ganti src dengan foto kamu */}
            <img
              src="/Gambarku.png"
              alt="Foto profil Dylan Akhtarreza"
              className="relative w-full max-w-sm mx-auto rounded-2xl
                         border-4 border-white dark:border-slate-800
                         shadow-xl dark:shadow-accent/5
                         transition-transform duration-300 group-hover:scale-[1.01]"
            />
            {/* Badge tahun pengalaman */}
            <div className="absolute -bottom-4 -right-4 md:right-0
                            bg-accent text-white px-4 py-2 rounded-xl
                            font-display font-bold text-sm shadow-lg">
              🎓 2023 – Sekarang
            </div>
          </div>

          {/* Teks — kanan di desktop */}
          <div className="space-y-5">
            <p className="font-body text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Halo! Saya <strong className="text-slate-900 dark:text-white">Dylan Akhtarreza</strong>,
              mahasiswa Sistem Informasi semester 6 di Universitas Trunojoyo Madura.
              Saya memiliki ketertarikan yang besar terhadap dunia teknologi, khususnya
              di bidang <em>web development</em> dan desain antarmuka pengguna.
            </p>
            <p className="font-body text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Saya aktif mengerjakan berbagai project sampingan untuk mengasah skill
              dan memperluas portofolio. Saya percaya bahwa teknologi terbaik adalah
              teknologi yang mudah digunakan dan memberikan dampak nyata bagi penggunanya.
            </p>

            {/* Info singkat */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                ['📍 Lokasi',      'Sidoarjo, Jawa Timur'],
                ['🎓 Jurusan',     'Sistem Informasi'],
                ['🏫 Universitas', 'Universitas Trunojoyo Madura'],
                ['📅 Angkatan',    '2023'],
              ].map(([label, val]) => (
                <div key={label}
                     className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <p className="text-xs text-slate-400 font-body">{label}</p>
                  <p className="text-sm font-semibold font-display
                                text-slate-800 dark:text-slate-200 mt-0.5">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Minat / Interest cards ── */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold mb-6
                         text-slate-800 dark:text-slate-100">
            Bidang yang Saya Minati
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTERESTS.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="card p-5 group hover:-translate-y-1 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center
                                justify-center mb-3 group-hover:bg-accent/20
                                transition-colors duration-200">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="font-display font-semibold text-sm text-slate-800
                               dark:text-slate-100 mb-1">{label}</p>
                <p className="font-body text-xs text-slate-500 dark:text-slate-400
                               leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
