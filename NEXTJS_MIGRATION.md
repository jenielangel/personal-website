# 🚀 Phase 6: Next.js Migration Guide

## Overview
This guide explains how to migrate your static portfolio website to Next.js for enhanced functionality, better performance, and scalability.

## When to Migrate to Next.js

### Migrate if you want:
✅ Server-side rendering (SSR)  
✅ Static Site Generation (SSG)  
✅ API routes for backend  
✅ Image optimization with `next/image`  
✅ Automatic code splitting  
✅ Built-in analytics  
✅ Dynamic content management  
✅ Database integration  
✅ Real-time features  

### Keep Static HTML if:
✅ Hosting with limited resources  
✅ Want minimal dependencies  
✅ Need simple, fast deployment  
✅ No backend required  
✅ SEO is primary focus  

---

## Migration Steps

### Step 1: Project Setup
Next.js project structure already exists! The workspace has Next.js configured.

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: http://localhost:3000

### Step 2: Create React Components

Convert HTML to React components in `pages/` directory:

```
pages/
├── _app.js              # App wrapper
├── _document.js         # HTML wrapper
├── index.js             # Home page (replaces index.html)
├── about.js             # About page (replaces about.html)
├── portfolio.js         # Portfolio page
├── gallery.js           # Gallery page
├── contact.js           # Contact page
├── api/
│   └── contact.js       # API endpoint for form submission
└── 404.js               # Custom 404 page
```

### Step 3: Component Example - Home Page

```jsx
// pages/index.js
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal portfolio showcase" />
        <meta property="og:title" content="My Portfolio" />
      </Head>
      <Navigation />
      <main className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to My Portfolio</h1>
            <p className={styles.heroSubtitle}>A student's journey through learning</p>
            <a href="#features" className={styles.ctaButton}>Explore My Work</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

### Step 4: Reusable Components

Create components directory:

```
components/
├── Navigation.js
├── Footer.js
├── ProjectCard.js
├── SkillCard.js
├── GalleryItem.js
└── ContactForm.js
```

Example Component:

```jsx
// components/ProjectCard.js
import Image from 'next/image';

export default function ProjectCard({ title, description, image, tags }) {
  return (
    <article className="portfolio-card">
      <div className="project-image">
        <Image 
          src={image} 
          alt={title}
          width={600}
          height={400}
          loading="lazy"
        />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
```

### Step 5: API Route for Contact Form

```jsx
// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // Send email or save to database
  try {
    // TODO: Implement email sending (using nodemailer, SendGrid, etc.)
    
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send' });
  }
}
```

### Step 6: Static Generation with Data

```jsx
// pages/portfolio.js
import ProjectCard from '../components/ProjectCard';

export default function Portfolio({ projects }) {
  return (
    <>
      {/* ... head and nav ... */}
      <div className="portfolio-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}

// Generate static pages at build time
export async function getStaticProps() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description here',
      image: '/assets/project1.jpg',
      tags: ['HTML', 'CSS']
    },
    // ... more projects
  ];

  return {
    props: { projects },
    revalidate: 60 * 60 * 24 // Revalidate every 24 hours
  };
}
```

### Step 7: Image Optimization

Replace HTML img tags with Next.js Image component:

```jsx
// Before
<img src="/assets/hero.jpg" alt="Hero" width="100%">

// After
import Image from 'next/image';

<Image 
  src="/assets/hero.jpg" 
  alt="Hero"
  width={1200}
  height={600}
  priority
/>
```

Benefits:
- Automatic optimization
- Responsive images
- Lazy loading
- Multiple formats (AVIF, WebP)
- Blur while loading

### Step 8: SEO with next-seo

Install package:
```bash
npm install next-seo
```

Use in pages:
```jsx
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="My Portfolio"
        description="Student portfolio showcase"
        canonical="https://yoursite.com"
        openGraph={{
          url: 'https://yoursite.com',
          title: 'My Portfolio',
          description: 'Student portfolio showcase',
          images: [
            {
              url: 'https://yoursite.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'My Portfolio',
            }
          ]
        }}
      />
      {/* Component content */}
    </>
  );
}
```

### Step 9: Styling

Option A: Keep existing styles.css
```jsx
import '../styles/styles.css';
```

Option B: Use CSS Modules
```jsx
import styles from '../styles/Home.module.css';

<div className={styles.hero}>
  {/* Content */}
</div>
```

Option C: Use Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 10: Building & Deployment

Build for production:
```bash
npm run build
npm start
```

Deploy to Vercel (recommended):
```bash
npm install -g vercel
vercel
```

Deploy to other platforms:

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages:**
Add to `next.config.js`:
```javascript
module.exports = {
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      // ... other pages
    }
  }
}
```

---

## Complete next.config.js Setup

```javascript
// next.config.js
module.exports = {
  // Image optimization
  images: {
    domains: ['yoursite.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // Internationalization (optional)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
};
```

---

## Advanced Features

### Database Integration

```jsx
// pages/api/projects.js
import { connectDB } from '../lib/mongodb';

export default async function handler(req, res) {
  const db = await connectDB();
  const projects = await db.collection('projects').find({}).toArray();
  
  res.status(200).json(projects);
}
```

### Authentication (Optional)

```bash
npm install next-auth
```

### Real-time Updates (Optional)

```bash
npm install firebase
```

### Blog Integration (Optional)

```bash
npm install next-mdx-remote
```

---

## Performance Optimization

### 1. Code Splitting
Next.js automatically code splits by page - no extra config needed!

### 2. Image Optimization
```jsx
<Image 
  src="/image.jpg" 
  alt="Description"
  width={800}
  height={600}
  quality={80}
/>
```

### 3. Font Optimization
```jsx
import { Inter } from '@next/font/google';

const inter = Inter();

export default function Home() {
  return <div className={inter.className}>Content</div>;
}
```

### 4. Bundle Analysis
```bash
npm install --save-dev @next/bundle-analyzer
```

### 5. Caching Strategy
```javascript
// next.config.js
{
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  }
}
```

---

## Migration Checklist

- [ ] Create React components from HTML
- [ ] Set up pages directory structure
- [ ] Implement API routes for backend
- [ ] Optimize images with next/image
- [ ] Add SEO with next-seo
- [ ] Move CSS to modules or globals
- [ ] Set up environment variables
- [ ] Configure next.config.js
- [ ] Test all pages and functionality
- [ ] Build and test production build
- [ ] Deploy to Vercel or hosting
- [ ] Set up analytics
- [ ] Monitor performance metrics
- [ ] Configure CI/CD pipeline

---

## Comparison: Static vs Next.js

| Feature | Static HTML | Next.js |
|---------|------------|---------|
| Setup Complexity | Very Simple | Moderate |
| Build Time | Instant | ~30s |
| Dependencies | None | React, Node |
| SEO | Excellent | Excellent |
| Performance | Fast | Very Fast |
| Scalability | Limited | Excellent |
| API Routes | External | Built-in |
| Image Optimization | Manual | Automatic |
| Deployment | Anywhere | Vercel, etc |
| Cost | Free | Free-$$ |

---

## Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)

### Learning
- [Next.js Learn Course](https://nextjs.org/learn)
- [egghead.io](https://egghead.io)
- [Frontend Masters](https://frontendmasters.com)

### Tools
- [Vercel Analytics](https://vercel.com/analytics)
- [Next.js Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## Recommendation

**For a student portfolio:**

Start with the **static HTML version** for:
- Quick deployment
- Maximum compatibility
- Zero learning curve
- Perfect for portfolio needs

**Migrate to Next.js when you want to:**
- Add a blog
- Include real-time features
- Build admin dashboard
- Scale to full application
- Add backend functionality

Both approaches will showcase your skills effectively! 🎓

---

**Status**: Ready for migration anytime  
**Complexity**: Medium (1-2 weeks full implementation)  
**Recommended**: Use static version first, upgrade later if needed
