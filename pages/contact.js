import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger')
    const navMenu = document.getElementById('navMenu')
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active')
      })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Contact - Get in touch with me" />
        <title>Contact | My Portfolio</title>
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
            <li><Link href="/portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link href="/gallery" className="nav-link">Gallery</Link></li>
            <li><Link href="/contact" className="nav-link active">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section className="page-header">
          <h1>Get In Touch</h1>
          <p className="subtitle">I'd love to hear from you. Let's connect!</p>
        </section>

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="6" required></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>

            <div className="contact-info-container">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Feel free to reach out through any of these channels:</p>

                <div className="info-block">
                  <h4>Email</h4>
                  <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
                </div>

                <div className="info-block">
                  <h4>Phone</h4>
                  <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                </div>

                <div className="info-block">
                  <h4>Location</h4>
                  <p>Your City, Your State, Your Country</p>
                </div>

                <div className="info-block">
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" aria-label="GitHub">GitHub</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
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
