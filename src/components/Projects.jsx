import { FiGithub, FiExternalLink } from 'react-icons/fi'

// ── Data project — tambah/ubah sesuai project kamu ────────────────────────────
const PROJECTS = [
  {
    title:  'KasirKu',
    desc:   'Aplikasi kasir berbasis web untuk UMKM. Fitur: manajemen produk, transaksi, laporan, dan ekspor PDF.',
    tech:   ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/alexpratama/kasirku',
    demo:   'https://kasirku.vercel.app',
    badge:  'Web App',
    color:  'from-emerald-400 to-cyan-400',
  },
  {
    title:  'Campus Buddy',
    desc:   'Aplikasi mobile untuk mahasiswa baru. Berisi peta kampus interaktif, jadwal kuliah, dan forum diskusi.',
    tech:   ['Flutter', 'Firebase', 'Google Maps API'],
    github: 'https://github.com/alexpratama/campus-buddy',
    demo:   null,
    badge:  'Mobile App',
    color:  'from-blue-400 to-indigo-400',
  },
  {
    title:  'WeatherNow',
    desc:   'Dashboard cuaca real-time dengan visualisasi data yang menarik. Data dari OpenWeatherMap API.',
    tech:   ['React', 'Tailwind CSS', 'OpenWeatherMap API'],
    github: 'https://github.com/alexpratama/weather-now',
    demo:   'https://weather-now.vercel.app',
    badge:  'API Project',
    color:  'from-sky-400 to-blue-400',
  },
  {
    title:  'Portfolio v1',
    desc:   'Website portofolio pribadi versi pertama yang dibangun dengan HTML, CSS, dan JavaScript murni.',
    tech:   ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/alexpratama/portfolio-v1',
    demo:   null,
    badge:  'Website',
    color:  'from-orange-400 to-pink-400',
  },
  {
    title:  'Sistem Absensi QR',
    desc:   'Sistem absensi berbasis QR Code untuk organisasi kampus. Admin dapat melihat rekap kehadiran secara real-time.',
    tech:   ['React', 'Node.js', 'MySQL', 'QR Code'],
    github: 'https://github.com/alexpratama/absensi-qr',
    demo:   null,
    badge:  'Full Stack',
    color:  'from-purple-400 to-pink-400',
  },
  {
    title:  'Blog Teknologi',
    desc:   'Platform blog sederhana dengan fitur markdown editor, kategori, dan komentar berbasis Firebase.',
    tech:   ['Next.js', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/alexpratama/blog-tech',
    demo:   'https://blog-alex.vercel.app',
    badge:  'Blog',
    color:  'from-teal-400 to-green-400',
  },
]

// Komponen satu kartu project
function ProjectCard({ project }) {
  return (
    <div className="card p-6 flex flex-col group hover:-translate-y-1">
      {/* Header: badge + judul */}
      <div className="flex items-start justify-between mb-3">
        <span className={`
          text-xs font-display font-semibold px-2.5 py-1 rounded-full
          bg-gradient-to-r ${project.color} text-white
        `}>
          {project.badge}
        </span>
        <div className="flex gap-2">
          {/* Link GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-lg text-slate-400 hover:text-accent
                         hover:bg-accent/10 transition-all duration-200"
            >
              <FiGithub className="w-4 h-4" />
            </a>
          )}
          {/* Link Demo */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank" rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-1.5 rounded-lg text-slate-400 hover:text-accent
                         hover:bg-accent/10 transition-all duration-200"
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Judul & deskripsi */}
      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="font-body text-sm text-slate-600 dark:text-slate-400
                    leading-relaxed flex-1 mb-4">
        {project.desc}
      </p>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-2.5 py-0.5 rounded-md text-xs font-body font-medium
                       bg-slate-100 dark:bg-slate-700
                       text-slate-600 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="project" className="bg-slate-50 dark:bg-[#0d1117]">
      <div className="section-wrapper">

        {/* ── Judul ── */}
        <span className="font-display text-sm font-semibold text-accent uppercase tracking-widest">
          Portofolio
        </span>
        <h2 className="section-title mt-1">Project Saya</h2>
        <span className="title-underline" />

        {/* ── Grid kartu project ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Link ke semua project di GitHub */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/alexpratama"
            target="_blank" rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiGithub className="w-4 h-4" />
            Lihat Semua di GitHub
          </a>
        </div>

      </div>
    </section>
  )
}
