import './Footer.css'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">&lt;Mukul /&gt;</span>
        <p className="footer-copy">
          Designed & Built by <span>Mukul Kumawat</span> · {new Date().getFullYear()}
        </p>
        <div className="footer-icons">
          <a href="https://github.com/mukulkumawat2412" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/mukul-kumawat-5512b82b7" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:mukulkumawat2412@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
