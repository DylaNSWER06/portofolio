import { HiArrowDown } from 'react-icons/hi2'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center
        bg-gradient-to-br from-slate-50 via-white to-emerald-50/40
        dark:from-[#0d1117] dark:via-[#0d1117] dark:to-emerald-950/20
        overflow-hidden
      "
    >
      {/* ── Dekorasi latar belakang (lingkaran blur) ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full
                        bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full
                        bg-accent/5 blur-3xl" />
      </div>

      {/* ── Konten utama ── */}
      <div className="section-wrapper relative z-10 pt-24">
        <div className="max-w-2xl">

          {/* Badge "Tersedia untuk kerja sama" */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-accent/10 text-accent text-xs font-display font-semibold
                          mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Tersedia untuk kerja sama &amp; magang
          </div>

          {/* Nama */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold
                         text-slate-900 dark:text-white leading-[1.1] mb-4
                         opacity-0 animate-fade-in-up stagger-1">
            Halo, saya <br />{' '}
            <span className="text-accent">Dylan Akhtarreza</span>
            <span className="text-accent">.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-display text-lg md:text-xl font-medium
                        text-slate-500 dark:text-slate-400 mb-4
                        opacity-0 animate-fade-in-up stagger-2">
            Mahasiswa Sistem Informasi
          </p>

          {/* Deskripsi */}
          <p className="font-body text-base md:text-lg text-slate-600 dark:text-slate-400
                        leading-relaxed mb-8 max-w-xl
                        opacity-0 animate-fade-in-up stagger-3">
            Passionate di bidang web development dan UI/UX design.
            Saat ini saya merupakan mahasiswa Universitas Trunojoyo Madura yang masih dalam proses belajar dan memperdalam skill di bidang ini.
            Saya senang membangun produk digital yang fungsional, indah, dan memberikan pengalaman terbaik bagi pengguna.
          </p>

          {/* Tombol CTA */}
          <div className="flex flex-wrap gap-3 mb-10
                          opacity-0 animate-fade-in-up stagger-4">
            <a href="#project" className="btn-primary">
              Lihat Project →
            </a>
            <a href="#kontak" className="btn-outline">
              Hubungi Saya
            </a>
          </div>

          {/* Link sosial */}
          <div className="flex items-center gap-4
                          opacity-0 animate-fade-in-up stagger-5">
            <span className="text-xs font-body text-slate-400 uppercase tracking-widest">
              Follow
            </span>
            <div className="h-px w-8 bg-slate-200 dark:bg-slate-700" />
            <a
              href="https://github.com/DylaNSWER06"
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-500 hover:text-accent
                         hover:bg-accent/10 transition-all duration-200"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/DylanAkhtarreza"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-500 hover:text-accent
                         hover:bg-accent/10 transition-all duration-200"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Indikator scroll ke bawah */}
        <a
          href="#tentang"
          aria-label="Scroll ke bawah"
          className="absolute bottom-10 left-1/2 -translate-x-1/2
                     flex flex-col items-center gap-1
                     text-slate-400 dark:text-slate-600
                     hover:text-accent transition-colors duration-200
                     opacity-0 animate-fade-in stagger-6"
        >
          <span className="text-[10px] font-body uppercase tracking-widest">Scroll</span>
          <HiArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
