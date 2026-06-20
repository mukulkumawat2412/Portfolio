import './Skills.css'
import { useInView } from '../hooks/useInView'

const skills = [
  { name: 'MongoDB', icon: '🍃', level: 85 },
  { name: 'Express.js', icon: '⚡', level: 88 },
  { name: 'React.js', icon: '⚛️', level: 90 },
  { name: 'Node.js', icon: '🟢', level: 87 },
  { name: 'JavaScript', icon: '🟨', level: 90 },
  { name: 'TypeScript', icon: '🔷', level: 75 },
  { name: 'Next.js', icon: '🔺', level: 72 },
  { name: 'HTML & CSS', icon: '🎨', level: 92 },
  { name: 'REST APIs', icon: '🔗', level: 85 },
  { name: 'Git & GitHub', icon: '🐙', level: 82 },
  { name: 'JWT Auth', icon: '🔐', level: 80 },
  { name: 'Redux Toolkit', icon: '🔄', level: 75 },
  { name: 'Tailwind CSS', icon: '💨', level: 83 },
  { name: 'Vercel', icon: '▲', level: 88 },
  { name: 'Render', icon: '🚀', level: 82 },
  { name: 'Postman', icon: '📮', level: 80 },
]

export default function Skills() {
  const [titleRef, titleIn] = useInView()
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleIn ? 'visible' : ''}`}>
          <div className="divider" />
          <h2 className="section-title">My <span>Skills</span></h2>
          <p className="section-subtitle">Technologies I work with on a daily basis</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView()
  const delay = (index % 4) * 0.1
  return (
    <div
      ref={ref}
      className={`skill-card reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ '--width': inView ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}
