"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold text-white mb-16 text-center">
          <span className="text-purple-400 font-mono text-sm mr-3">03.</span>Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {personalInfo.projects.map((proj, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all" >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-teal-600 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{proj.title}</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, j) => (<span key={j} className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono">{t}</span>))}
              </div>
              {proj.link && (
                <a href={proj.link} target="_blank" className="text-sm text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1">
                  Visit Project <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 17l9.2-9.2M17 17V7H7" strokeWidth="2"/></svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Conferences & Events</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {personalInfo.conferences.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-purple-400 font-mono text-sm mb-1">{c.year}</div>
                <h4 className="text-white font-medium">{c.name}</h4>
                <p className="text-white/40 text-xs">{c.organizer}</p>
                <p className="text-white/50 text-sm mt-1">{c.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}