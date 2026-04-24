// ── Data pendidikan — ubah sesuai riwayat kamu ────────────────────────────────
const EDUCATION = [
  {
    period:      '2023 – Sekarang',
    degree:      'S1 Sistem Informasi',
    institution: 'UNIVERSITAS TRUNOJOYO MADURA',
    location:    'Madura, Jawa Timur',
    desc:        'Berfokus pada pengembangan sistem informasi, rekayasa perangkat lunak, dan manajemen basis data. IPK saat ini: 3.71 / 4.00.',
    highlight:   true,  // tandai sebagai yang aktif / terbaru
  },
  {
    period:      '2020 – 2023',
    degree:      'SMK Jurusan Teknik Komputer dan Jaringan',
    institution: 'SMK ANTARTIKA 2 SIDOARJO',
    location:    'Sidoarjo, Jawa Timur',
    desc:        'Lulus dengan predikat sangat baik, dan lulus sertifikasi LSP.',
    highlight:   false,
  },
  {
    period:      '2017 – 2020',
    degree:      'SMP',
    institution: 'SMP NEGERI 1 GEDANGAN',
    location:    'Surabaya, Jawa Timur',
    desc:        'Menjadi Siswa yang baik dan rajin.',
    highlight:   false,
  },
]

// Komponen satu item timeline
function TimelineItem({ item, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* ── Garis & dot timeline ── */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className={`
          w-4 h-4 rounded-full border-2 mt-1 flex-shrink-0 z-10
          ${item.highlight
            ? 'bg-accent border-accent shadow-lg shadow-accent/40'
            : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600'}
        `} />
        {/* Garis vertikal */}
        {!isLast && (
          <div className="flex-1 w-0.5 bg-slate-200 dark:bg-slate-700 mt-2" />
        )}
      </div>

      {/* ── Konten ── */}
      <div className={`
        card p-5 mb-8 flex-1 group hover:-translate-y-0.5
        ${item.highlight ? 'ring-1 ring-accent/30' : ''}
      `}>
        {/* Badge periode */}
        <span className={`
          inline-block px-2.5 py-0.5 rounded-full text-xs font-display font-semibold mb-3
          ${item.highlight
            ? 'bg-accent/10 text-accent'
            : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}
        `}>
          {item.period}
          {item.highlight && <span className="ml-1">● Aktif</span>}
        </span>

        <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-0.5">
          {item.degree}
        </h3>
        <p className="font-display font-medium text-sm text-accent mb-0.5">
          {item.institution}
        </p>
        <p className="font-body text-xs text-slate-400 mb-3">
          📍 {item.location}
        </p>
        <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="pendidikan" className="bg-white dark:bg-slate-900">
      <div className="section-wrapper">

        {/* ── Judul ── */}
        <span className="font-display text-sm font-semibold text-accent uppercase tracking-widest">
          Riwayat
        </span>
        <h2 className="section-title mt-1">Pendidikan</h2>
        <span className="title-underline" />

        {/* ── Timeline ── */}
        <div className="max-w-2xl">
          {EDUCATION.map((item, i) => (
            <TimelineItem
              key={item.degree}
              item={item}
              isLast={i === EDUCATION.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
