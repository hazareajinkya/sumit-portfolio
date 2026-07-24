"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-16">
          <span className="text-purple-400 font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>
        <div className="space-y-12">
          {personalInfo.experience.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative pl-8 border-l border-white/10 hover:border-purple-500/30 transition-colors"
            >
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-gradient-to-r from-purple-500 to-teal-500" />
              <div className="text-sm text-purple-400 font-mono mb-1">{exp.period}</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{exp.title}</h3>
              <p className="text-white/50 mb-4">{exp.company}</p>
              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-white/60 text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-teal-500/60 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}