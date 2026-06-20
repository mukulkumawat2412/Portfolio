import './Projects.css'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack ecommerce app with user authentication, admin panel, product management, cart, wishlist, profile dropdown, and Razorpay payment integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Razorpay'],
    live: 'https://ecommerce-rosy-three.vercel.app/',
    github: 'https://github.com/mukulkumawat2412/Ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'NewsPro — AI News App',
    description:
      'A modern news aggregator app with AI-powered summarization, category filtering, user authentication, and a clean reading experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    live: 'https://news-ai-rju1.vercel.app/',
    github: 'https://github.com/mukulkumawat2412/NewsPro',
    featured: true,
  },
]

export default function Projects() {
  const [titleRef, titleIn] = useInView()
  return (
    <section id="projects">
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleIn ? 'visible' : ''}`}>
          <div className="divider" />
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">Things I've built with MERN stack</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`project-card reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="project-top">
        <div className="project-folder">📁</div>
        <div className="project-links">
          <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <h3 className="project-title">{p.title}</h3>
      <p className="project-desc">{p.description}</p>
      <div className="project-tech">
        {p.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
