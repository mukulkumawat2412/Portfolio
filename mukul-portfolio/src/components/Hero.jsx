import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W = (canvas.width = canvas.offsetWidth)
    let H = (canvas.height = canvas.offsetHeight)
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
    }))
    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108,99,255,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" />
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="container hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Mukul Kumawat</h1>
        <h2 className="hero-role">
          <span className="typing">Full Stack MERN Developer</span>
        </h2>
        <p className="hero-desc">
          Building modern, scalable web applications with React, Node.js, Express & MongoDB.
        </p>
        <div className="hero-cta">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span />
      </div>
    </section>
  )
}
