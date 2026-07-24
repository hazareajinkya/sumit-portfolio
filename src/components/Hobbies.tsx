"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Hobbies() {
  return (
    <section id="oss" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-16">
          <span className="text-purple-400 font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-white">Open Source</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {personalInfo.oss.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-teal-500/20 transition-all duration-300"
            >
              <span className="text-[10px] font-mono text-teal-400/60 uppercase tracking-wider">{item.organizer}</span>
              <h3 className="text-lg font-semibold text-white mt-1 mb-2">{item.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              {item.prs && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.prs.map((pr, j) => (
                    <span key={j} className="px-2.5 py-1 text-[10px] font-mono text-teal-300/70 bg-teal-500/5 rounded-md border border-teal-500/10">{pr}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}