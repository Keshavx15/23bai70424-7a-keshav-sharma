import { useEffect } from "react"

export default function Effects() {
  useEffect(() => {
    const canvas = document.getElementById("bg")
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let particles = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 2 + 1
      })
    }

    window.addEventListener("click", e => {
      for (let i = 0; i < 25; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          dx: (Math.random() - 0.5) * 6,
          dy: (Math.random() - 0.5) * 6,
          r: 2
        })
      }
    })

    function animate() {
      ctx.clearRect(0,0,canvas.width,canvas.height)

      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fillStyle = "rgba(255,80,80,0.7)"
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
      })

      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return <canvas id="bg"></canvas>
}
