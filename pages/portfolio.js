import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Portfolio() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger')
    const navMenu = document.getElementById('navMenu')
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active')
      })
    }
  }, [])

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: '#'
    },
    {
      title: 'Photography Gallery',
      description: 'Interactive photo gallery with lazy loading and responsive design.',
      tags: ['Next.js', 'CSS Grid', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Web Design Project',
      description: 'Creative web design featuring modern UI/UX principles.',
      tags: ['Design', 'Frontend', 'CSS'],
      link: '#'
    },
    {
      title: 'Creative Content',
      description: 'Collection of creative projects and visual work.',
      tags: ['Creative', 'Design', 'Visual'],
      link: '#'
    },
    {
      title: 'Academic Projects',
      description: 'Various academic projects demonstrating technical skills.',
      tags: ['Development', 'Learning', 'Code'],
      link: '#'
    },
    {
      title: 'Future Projects',
      description: 'Exciting projects in development and planning stages.',
      tags: ['Innovation', 'Development', 'Ideas'],
      link: '#'
    }
  ]

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio - Showcase of my projects and work" />
        <title>Portfolio | My Portfolio</title>
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">My Portfolio</div>
          <button className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-menu" id="navMenu">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/portfolio" className="nav-link active">Portfolio</Link></li>
            <li><Link href="/gallery" className="nav-link">Gallery</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section className="page-header">
          <h1>My Portfolio</h1>
          <p className="subtitle">A showcase of my creative and technical projects</p>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="card-header">
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="view-project-link">View Project →</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 My Portfolio. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  )
}
