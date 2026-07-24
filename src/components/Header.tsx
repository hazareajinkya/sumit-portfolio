"use client"
import { motion, AnimatePresence } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">SM</a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (<a key={l.href} href={l.href} className="text-sm text-white/50 hover:text-white/90 transition-colors">{l.label}</a>))}
          <a href="#contact" className="text-sm px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all">Get in Touch</a>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d={isOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeWidth="2"/></svg>
        </button>
      </div>
      <AnimatePresence>{isOpen && (
        <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="md:hidden bg-black/95 border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => (<a key={l.href} href={l.href} onClick={()=>setIsOpen(false)} className="text-white/60 hover:text-white">{l.label}</a>))}
            <a href="#contact" onClick={()=>setIsOpen(false)} className="text-purple-400 font-medium">Get in Touch</a>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </header>
  )
}