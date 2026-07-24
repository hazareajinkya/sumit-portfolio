"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Hobbies() {
  const emojis = ["🏋️","🎸","📚","✍️","🎮","☕"]
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold text-white mb-16 text-center">
          <span className="text-purple-400 font-mono text-sm mr-3">05.</span>Beyond the Code
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {personalInfo.hobbies.map((hobby, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="px-6 py-4 rounded-full bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all flex items-center gap-3">
              <span className="text-lg">{emojis[i]}</span>
              <span className="text-white/70 text-sm">{hobby}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}