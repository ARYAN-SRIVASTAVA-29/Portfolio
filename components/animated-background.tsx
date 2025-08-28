"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties
    const gridSize = 50
    let time = 0

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Animated grid
      ctx.strokeStyle = "rgba(6, 182, 212, 0.1)"
      ctx.lineWidth = 1

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const wave = Math.sin((x + y + time) * 0.01) * 0.5 + 0.5
          ctx.globalAlpha = wave * 0.3

          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + gridSize, y)
          ctx.lineTo(x + gridSize, y + gridSize)
          ctx.lineTo(x, y + gridSize)
          ctx.closePath()
          ctx.stroke()
        }
      }

      // Flowing lines
      ctx.strokeStyle = "rgba(6, 182, 212, 0.2)"
      ctx.lineWidth = 2

      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.globalAlpha = 0.4

        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin((x + time + i * 100) * 0.005) * 100 +
            Math.sin((x + time + i * 200) * 0.003) * 50

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      time += 2
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-black" style={{ pointerEvents: "none" }} />
}
