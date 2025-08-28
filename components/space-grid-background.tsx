"use client"

import { useEffect, useRef } from "react"

export function SpaceGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties
    const gridSize = 50
    let animationOffset = 0

    // Stars
    const stars: { x: number; y: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random() * 0.8 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw animated grid
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(animationOffset * 0.01) * 0.05})`
      ctx.lineWidth = 1

      const offsetX = (animationOffset * 0.5) % gridSize
      const offsetY = (animationOffset * 0.3) % gridSize

      // Vertical lines
      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw twinkling stars
      stars.forEach((star) => {
        const twinkle = Math.sin(animationOffset * 0.02 + star.x * 0.01) * 0.5 + 0.5
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw floating particles
      const particleCount = 20
      for (let i = 0; i < particleCount; i++) {
        const x = (canvas.width / particleCount) * i + Math.sin(animationOffset * 0.01 + i) * 50
        const y = canvas.height * 0.5 + Math.cos(animationOffset * 0.008 + i * 0.5) * 100
        const opacity = (Math.sin(animationOffset * 0.01 + i * 0.3) + 1) * 0.3

        ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      animationOffset += 1
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "radial-gradient(ellipse at center, rgba(0,20,40,0.8) 0%, rgba(0,0,0,0.9) 100%)" }}
    />
  )
}
