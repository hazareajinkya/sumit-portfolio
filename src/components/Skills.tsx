"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-16">
          <span className="text-purple-400 font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {personalInfo.skills.map((skill, i) => (
            <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
                <span className="text-[10px] font-mono text-white/30">{skill.level}%</span>
              </div>
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-teal-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}