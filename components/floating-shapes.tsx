"use client"

export function FloatingShapes() {
  const shapes = [
    { id: 1, type: "square", size: 60, top: "10%", left: "5%", delay: 0 },
    { id: 2, type: "circle", size: 80, top: "20%", right: "10%", delay: 1 },
    { id: 3, type: "triangle", size: 50, top: "60%", left: "8%", delay: 2 },
    { id: 4, type: "hexagon", size: 70, top: "70%", right: "15%", delay: 3 },
    { id: 5, type: "square", size: 40, top: "40%", right: "5%", delay: 4 },
    { id: 6, type: "circle", size: 90, top: "80%", left: "20%", delay: 5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute floating-shape opacity-20`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.type === "square" && (
            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-lg" />
          )}
          {shape.type === "circle" && (
            <div className="w-full h-full bg-gradient-to-br from-accent to-primary rounded-full" />
          )}
          {shape.type === "triangle" && (
            <div
              className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43px] border-l-transparent border-r-transparent"
              style={{ borderBottomColor: "var(--secondary)" }}
            />
          )}
          {shape.type === "hexagon" && (
            <div className="relative">
              <div
                className="w-full h-full bg-gradient-to-br from-secondary to-accent"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
