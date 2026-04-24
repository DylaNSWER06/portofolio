// ── Data skill — tambah/hapus/ubah sesuai kemampuan kamu ──────────────────────
const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML & CSS',    level: 80, color: 'from-orange-400 to-red-400'     },
      { name: 'JavaScript',    level: 65, color: 'from-yellow-400 to-amber-400'   },
      { name: 'React.js',      level: 40, color: 'from-cyan-400 to-blue-400'      },
      { name: 'Tailwind CSS',  level: 85, color: 'from-teal-400 to-cyan-400'      },
    ],
  },
  {
    category: 'Mobile & Backend',
    skills: [
      { name: 'Flutter',       level: 60, color: 'from-blue-400 to-indigo-400'    },
      { name: 'Firebase',      level: 65, color: 'from-orange-400 to-yellow-400'  },
      // { name: 'Node.js',       level: 20, color: 'from-green-400 to-emerald-400'  },
      { name: 'MySQL',         level: 72, color: 'from-blue-500 to-blue-400'      },
    ],
  },
  {
    category: 'Tools & Lainnya',
    skills: [
      { name: 'Git & GitHub',  level: 80, color: 'from-slate-500 to-slate-400'    },
      { name: 'Figma',         level: 68, color: 'from-purple-400 to-pink-400'    },
      { name: 'VS Code',       level: 90, color: 'from-blue-400 to-blue-500'      },
      { name: 'Streamlit(Data App Framework)',         level: 90, color: 'from-slate-400 to-slate-500'    },
    ],
  },
]

// Komponen kecil untuk satu baris skill + progress bar
function SkillBar({ name, level, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-300">
          {name}
        </span>
        <span className="font-display text-xs font-semibold text-accent">
          {level}%
        </span>
      </div>
      {/* Track (latar) */}
      <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
        {/* Bar aktif — lebar sesuai `level` */}
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color}
                      transition-all duration-700 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-[#0d1117]">
      <div className="section-wrapper">

        {/* ── Judul ── */}
        <span className="font-display text-sm font-semibold text-accent uppercase tracking-widest">
          Keahlian
        </span>
        <h2 className="section-title mt-1">Skills Saya</h2>
        <span className="title-underline" />

        {/* ── Grid kategori skill ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map(({ category, skills }) => (
            <div key={category} className="card p-6">
              {/* Header kategori */}
              <h3 className="font-display font-semibold text-sm text-slate-500
                             dark:text-slate-400 uppercase tracking-widest mb-5">
                {category}
              </h3>
              {/* Daftar skill */}
              <div className="space-y-4">
                {skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Tech badge (logo stack) ── */}
        <div className="mt-12 text-center">
          <p className="font-body text-sm text-slate-400 mb-4">
            Teknologi yang pernah saya gunakan
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Flutter', 'Firebase', 'MySQL',
              'Tailwind', 'Git', 'Figma', 'REST API'].map(tech => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-xs font-display font-semibold
                           bg-white dark:bg-slate-800
                           border border-slate-200 dark:border-slate-700
                           text-slate-600 dark:text-slate-300
                           hover:border-accent hover:text-accent
                           transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
