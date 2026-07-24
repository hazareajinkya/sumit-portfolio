import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Sumit Mahajan | Software Engineer II @ JPMorgan Chase",
  description: "Quant Development | Systems Design | Distributed Systems | 4+ years building high-scale systems at JPMorgan Chase",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}