import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Sumit Mahajan | Software Engineer II @ JPMorgan Chase",
  description: "Backend & Full-Stack Engineer | C# / Python / React | GenAI & RAG | 4+ years building high-scale financial systems at JPMorgan Chase.",
  openGraph: {
    title: "Sumit Mahajan | Software Engineer II @ JPMorgan Chase",
    description: "Backend & Full-Stack Engineer | C# / Python / React | GenAI & RAG",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-black text-white`}>{children}</body>
    </html>
  )
}