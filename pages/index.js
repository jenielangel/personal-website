import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Mobile menu toggle
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
        <meta name="description" content="Personal portfolio and professional showcase" />
        <meta name="theme-color" content="#2c3e50" />
        <title>My Portfolio</title>
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
            <li><Link href="/" className="nav-link active">Home</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link href="/gallery" className="nav-link">Gallery</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p className="hero-subtitle">A student's journey through learning and creativity</p>
            <a href="#features" className="cta-button">Explore My Work</a>
          </div>
          <div className="hero-image">
            <img src="/intro.jpg" alt="Hero image" className="hero-img" />
          </div>
        </section>

        <section className="features" id="features">
          <h2>What I Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Creative Projects</h3>
              <p>Showcase of academic and personal projects</p>
            </div>
            <div className="feature-card">
              <h3>Photo Gallery</h3>
              <p>Visual moments and creative photography</p>
            </div>
            <div className="feature-card">
              <h3>Get in Touch</h3>
              <p>Connect with me through multiple channels</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to learn more?</h2>
          <p>Check out my about page to know more about me</p>
          <Link href="/about" className="cta-button primary">View My Story</Link>
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
