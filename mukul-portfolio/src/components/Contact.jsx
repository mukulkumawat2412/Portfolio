import { useState } from 'react'
import './Contact.css'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_1qhfn8l'
const EMAILJS_TEMPLATE_ID = 'template_o6quuj9'
const EMAILJS_PUBLIC_KEY  = 'CxbwzULzipEPGjCtH'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [leftRef, leftIn] = useInView()
  const [rightRef, rightIn] = useInView()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: `Portfolio Contact from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
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
            <button type="submit" className="btn-send" disabled={status === 'sending'}>
              <FiSend />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="form-status success">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
