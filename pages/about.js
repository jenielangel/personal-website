import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger')
    const navMenu = document.getElementById('navMenu')
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active')
      })
    }
  }, [])

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="About me - Learn more about my background and interests" />
        <title>About Me | My Portfolio</title>
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
            <li><Link href="/about" className="nav-link active">About</Link></li>
            <li><Link href="/portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link href="/gallery" className="nav-link">Gallery</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section className="page-header">
          <h1>About Me</h1>
          <p className="subtitle">Get to know my story, interests, and aspirations</p>
        </section>

        <section className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who Am I?</h2>
              <p>I'm a passionate student dedicated to learning and growing both personally and professionally. Through my academic journey, I've developed strong interests in creative projects and enjoy tackling innovative challenges.</p>
              
              <h3>My Values</h3>
              <ul className="values-list">
                <li><strong>Continuous Learning:</strong> Always seeking to expand my knowledge and skills</li>
                <li><strong>Creativity:</strong> Bringing innovative ideas to life through projects and exploration</li>
                <li><strong>Collaboration:</strong> Working effectively with others to achieve common goals</li>
                <li><strong>Excellence:</strong> Striving for quality in everything I do</li>
              </ul>
            </div>
            <div className="about-image">
              <img src="/intro.jpg" alt="Profile picture" />
            </div>
          </div>

          <section className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Technical</h4>
                <ul className="skill-list">
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>Web Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Creative</h4>
                <ul className="skill-list">
                  <li>Photography</li>
                  <li>Graphic Design</li>
                  <li>Content Creation</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Soft Skills</h4>
                <ul className="skill-list">
                  <li>Communication</li>
                  <li>Leadership</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="achievements-section">
            <h2>Achievements & Recognition</h2>
            <ul className="achievements-list">
              <li><strong>2025:</strong> Successfully launched portfolio website</li>
              <li><strong>2025:</strong> Completed advanced web development projects</li>
              <li><strong>2024:</strong> Recognized for creative contributions</li>
              <li><strong>2024:</strong> Developed multiple full-stack applications</li>
            </ul>
          </section>
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
