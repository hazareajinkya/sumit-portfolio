"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-16">
          <span className="text-purple-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 text-xs font-mono">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">{project.title}</h3>
              <p className="text-sm text-white/50 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[10px] font-mono text-purple-300/70 bg-purple-500/5 rounded-md border border-purple-500/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}