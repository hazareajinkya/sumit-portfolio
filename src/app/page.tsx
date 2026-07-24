import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Hobbies from "@/components/Hobbies"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Hobbies />
      <Contact />
    </main>
  )
}