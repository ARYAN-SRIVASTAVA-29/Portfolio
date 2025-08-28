"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function TypingAnimation({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-8 bg-cyan-400 ml-1"
      />
    </span>
  )
}

export function HeroSection() {
  const [viewport, setViewport] = useState<{ w: number; h: number }>({ w: 0, h: 0 })
  useEffect(() => {
    const onResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight })
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {viewport.w > 0 &&
          [...Array(16)].map((_, i) => {
            const startX = Math.random() * viewport.w
            const startY = Math.random() * viewport.h
            const endX = Math.random() * viewport.w
            const endY = Math.random() * viewport.h
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                initial={{ x: startX, y: startY }}
                animate={{ x: endX, y: endY }}
                transition={{
                  duration: 12 + Math.random() * 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            )
          })}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* <Badge
            variant="secondary"
            className="mb-8 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-400/30 px-4 py-2 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"
            />
            Available for hire
          </Badge> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-gray-300">Hi, I'm</span>{" "}
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <TypingAnimation text="Aryan Srivastava" />
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            <TypingAnimation text="Software Engineer specializing in scalable full-stack systems, algorithmic problem-solving, and high-performance web applications." />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-3 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              />
              <Mail className="h-4 w-4 mr-2" />
              Get in touch
            </Button>
          </motion.div>

          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transform transition-all duration-300 border border-transparent hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-purple-400 hover:bg-purple-400/10 transform transition-all duration-300 border border-transparent hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-400/20"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToAbout}
              className="text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
