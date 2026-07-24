"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-16">
          <span className="text-purple-400 font-mono text-sm">06.</span>
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto text-center">
          <p className="text-white/50 mb-8 leading-relaxed">
            I&apos;m currently open to backend, AI-native, and full-stack product roles.
            Whether you have a question or just want to say hi — feel free to reach out!
          </p>
          <div className="space-y-4 mb-10">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 text-white/60 hover:text-purple-400 transition-colors group">
              <span className="text-sm font-mono">Email</span>
              <span className="text-sm group-hover:text-white transition-colors">{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center gap-3 text-white/60 hover:text-teal-400 transition-colors group">
              <span className="text-sm font-mono">Phone</span>
              <span className="text-sm group-hover:text-white transition-colors">{personalInfo.phone}</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            {[
              { href: personalInfo.github, label: "GitHub" },
              { href: personalInfo.linkedin, label: "LinkedIn" },
              { href: personalInfo.twitter, label: "X" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 border border-white/10 text-white/60 text-sm rounded-full hover:border-purple-500/30 hover:text-white hover:bg-purple-500/5 transition-all duration-300">
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="mt-24 text-center">
        <p className="text-xs text-white/20 font-mono">Built with Next.js · Tailwind CSS · Framer Motion</p>
      </div>
    </section>
  )
}