import type React from "react"
import { Sora, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Aryan Srivastava - Full-Stack Developer",
  description: "I build lean, reliable web systems with clean UX and strong data models.",
  openGraph: {
    title: "Aryan Srivastava - Full-Stack Developer",
    description: "I build lean, reliable web systems with clean UX and strong data models.",
    url: "https://aryansrivastava.dev",
    siteName: "Aryan Srivastava Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-inter">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg z-50"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
