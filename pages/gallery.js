import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Gallery() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger')
    const navMenu = document.getElementById('navMenu')
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active')
      })
    }
  }, [])

  const images = [
    { src: '/braids.jpg', title: 'Beautiful Braids' },
    { src: '/gallery.jpg', title: 'Gallery View' },
    { src: '/group.jpg', title: 'Group Moment' },
    { src: '/homie.jpg', title: 'Home Vibes' },
    { src: '/ing.jpg', title: 'Creative Moments' },
    { src: '/intro.jpg', title: 'Introduction' },
    { src: '/jinu.jpg', title: 'Portrait' },
    { src: '/miami.jpg', title: 'Miami Vibes' },
    { src: '/ria.jpg', title: 'Scenic Beauty' },
    { src: '/she.jpg', title: 'Fashion' },
    { src: '/step.jpg', title: 'Street Photography' },
    { src: '/tao.jpg', title: 'Nature' },
    { src: '/tle.jpg', title: 'Artistic' },
    { src: '/US.jpg', title: 'Together' },
    { src: '/yani.jpg', title: 'Moments' },
  ]

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Gallery - View my photography and visual work" />
        <title>Gallery | My Portfolio</title>
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
            <li><Link href="/gallery" className="nav-link active">Gallery</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section className="page-header">
          <h1>Photo Gallery</h1>
          <p className="subtitle">Visual moments and creative photography</p>
        </section>

        <section className="gallery-section">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <figure>
                  <img src={image.src} alt={image.title} loading="lazy" />
                  <figcaption>{image.title}</figcaption>
                </figure>
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
