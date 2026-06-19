import { useState } from 'react'
import './Contact.css'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [leftRef, leftIn] = useInView()
  const [rightRef, rightIn] = useInView()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:mukulkumawat2412@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="divider" />
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">Open to new opportunities and collaborations</p>
        <div className="contact-grid">
          <div ref={leftRef} className={`contact-info reveal-left ${leftIn ? 'visible' : ''}`}>
            <p className="contact-blurb">
              I'm currently open to full-time roles and freelance projects. If you have
              something interesting in mind, feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:mukulkumawat2412@gmail.com" className="contact-link">
                <FiMail />
                <span>mukulkumawat2412@gmail.com</span>
              </a>
              <a
                href="https://github.com/mukulkumawat2412"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FiGithub />
                <span>github.com/mukulkumawat2412</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mukul-kumawat-5512b82b7"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FiLinkedin />
                <span>linkedin.com/in/mukul-kumawat</span>
              </a>
            </div>
          </div>
          <form ref={rightRef} className={`contact-form reveal-right ${rightIn ? 'visible' : ''}`} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-send">
              <FiSend />
              {sent ? 'Opening mail client...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
