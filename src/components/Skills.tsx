"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold text-white mb-16 text-center">
          <span className="text-purple-400 font-mono text-sm mr-3">04.</span>Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {personalInfo.skills.map((skill, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium text-sm">{skill.name}</span>
                <span className="text-purple-400 text-xs font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: i * 0.05 }} className="h-full rounded-full bg-gradient-to-r from-purple-500 to-teal-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}