"use client"

import { useEffect, useState } from "react"

export function MatrixBackground() {
  const [chars, setChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([])

  useEffect(() => {
    const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const newChars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
      left: Math.random() * 100,
      delay: Math.random() * 10,
    }))
    setChars(newChars)
  }, [])

  return (
    <div className="matrix-bg">
      {chars.map((char) => (
        <div
          key={char.id}
          className="matrix-char"
          style={{
            left: `${char.left}%`,
            animationDelay: `${char.delay}s`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  )
}
