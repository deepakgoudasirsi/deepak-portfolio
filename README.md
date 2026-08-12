# Deepak Gouda — Portfolio

A modern, responsive portfolio site built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

## Features

- Single-page layout with smooth scrolling navigation
- Dark/light theme toggle with persisted preference
- Animated sections and loading screen
- SEO metadata, Open Graph image, sitemap, and robots.txt
- Contact form via mailto integration
- Centralized content in `src/data/portfolio.ts`

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customize Content

Edit `src/data/portfolio.ts` to update:

- Personal details, experience, skills, projects, and certifications
- Social links and contact email
- SEO title, description, and site URL

Add your resume PDF to `public/resume.pdf` for the download button to work.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## Deploy

The site is ready to deploy on [Vercel](https://vercel.com/new):

1. Push the repository to GitHub
2. Import the project in Vercel
3. Update `portfolio.seo.url` in `src/data/portfolio.ts` with your production domain

## Project Structure

```
src/
├── app/              # Next.js App Router pages and metadata
├── components/       # UI sections and shared components
├── data/portfolio.ts # All portfolio content
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── types/            # TypeScript types
```
