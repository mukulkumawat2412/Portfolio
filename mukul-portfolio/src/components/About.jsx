import './About.css'
import myImg from '../assets/myImg.jpg'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [leftRef, leftIn] = useInView()
  const [rightRef, rightIn] = useInView()

  return (
    <section id="about">
      <div className="container about-grid">
        <div ref={leftRef} className={`about-avatar-wrap reveal-left ${leftIn ? 'visible' : ''}`}>
          <div className="about-avatar-placeholder">
            <img src={myImg} alt="Mukul Kumawat" className="about-photo" />
          </div>
          <div className="about-avatar-glow" />
        </div>
        <div ref={rightRef} className={`about-text reveal-right ${rightIn ? 'visible' : ''}`}>
          <div className="divider" />
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="about-desc">
            Hey! I'm <strong>Mukul Kumawat</strong>, a passionate Full Stack MERN Developer
            with 1.5–2 years of hands-on experience building real-world web applications.
          </p>
          <p className="about-desc">
            I love turning ideas into clean, performant digital products — from designing
            intuitive UIs with React to architecting robust APIs with Node.js and MongoDB.
            Creativity is at the core of how I write code; I enjoy finding elegant solutions
            and building experiences that are as thoughtful as they are functional.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-num">MERN</span>
              <span className="stat-label">Core Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
