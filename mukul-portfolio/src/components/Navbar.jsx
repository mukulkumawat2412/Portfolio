import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          &lt;Mukul /&gt;
        </span>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link}>
              <button onClick={() => handleNav(link)}>{link}</button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="nav-resume"
              download="Mukul_Kumawat_Resume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? 'bar open' : 'bar'} />
          <span className={menuOpen ? 'bar open' : 'bar'} />
          <span className={menuOpen ? 'bar open' : 'bar'} />
        </button>
      </div>
    </nav>
  )
}
