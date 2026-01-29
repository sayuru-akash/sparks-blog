<div align="center">
  
# Sparks by Codezela

  *[Sparks](https://sparks.codezela.com) — An Initiative by Codezela Technologies*

  [![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Ghost CMS](https://img.shields.io/badge/Ghost-CMS-15171A?style=for-the-badge&logo=ghost)](https://ghost.org/)

  **A modern technology blog platform featuring the latest tech news, case studies, and industry trends**

  [![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://sparks.codezela.com)
  [![Report Bug](https://img.shields.io/badge/Report-Bug-red?style=for-the-badge)](https://github.com/codezela/sparks-blog/issues)
  [![Request Feature](https://img.shields.io/badge/Request-Feature-green?style=for-the-badge)](https://github.com/codezela/sparks-blog/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [What's New in v2.0](#whats-new-in-v20)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Component Documentation](#component-documentation)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Development Workflow](#development-workflow)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Migration Guide](#migration-guide)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## Overview

**Sparks by Codezela** is a contemporary technology blog platform developed as an initiative by [Codezela Technologies](https://codezela.com). It serves as a knowledge-sharing hub for technology enthusiasts, developers, and industry professionals to explore tech news, case studies, and emerging trends.

The platform is built with cutting-edge web technologies, leveraging the power of **Next.js 16** with the App Router and Turbopack, **React 19**, **TypeScript**, and **Tailwind CSS** for a seamless, performant, and visually appealing user experience. Content management is handled through **Ghost CMS**, providing a robust and flexible headless CMS architecture.

### Key Highlights

- Modern, responsive design with mobile-first approach
- Lightning-fast performance with Next.js server-side rendering
- SEO-optimized architecture for better discoverability
- Dynamic content management via Ghost CMS
- Newsletter subscription system
- Author profiles and publications
- Tag-based content categorization
- Deployed on Vercel for optimal performance

---

## What's New in v2.0

### Major Upgrades (January 2026)

- **Next.js 16.1.2** with Turbopack for lightning-fast builds
- **React 19** with latest features and improved performance
- **TypeScript 5.7.3** with enhanced strict mode
- **Modern ESLint 9** with flat config format
- **Tailwind CSS 3.4.17** with custom animations and dark mode support

### New Features

- **Lazy Ghost API Initialization**: Build-safe environment variable handling
- **Enhanced Error Boundaries**: Better error handling with detailed dev mode info
- **Modern Metadata API**: Improved SEO with Open Graph and Twitter cards
- **Next.js Image Optimization**: Uses `remotePatterns` instead of deprecated `domains`
- **Type-Safe API Client**: Proper TypeScript types from Ghost SDK
- **Responsive Hero Component**: Using `next/image` with `fill` prop
- **Custom CSS Utilities**: Shimmer animations, custom scrollbars
- **Standalone Output**: Optimized for containerized deployments

### Technical Improvements

- Removed all inline styles in favor of Tailwind classes
- Server components properly handle missing data gracefully
- API routes support both GET and POST methods
- Better TypeScript strict mode with unused variable checks
- Turbopack enabled by default for development

---

## Features

### Content Management

- **Ghost CMS Integration**: Leverages Ghost Content API for seamless content delivery
- **Dynamic Content Rendering**: Server-side rendering for optimal performance and SEO
- **Featured Posts**: Highlighted content in hero section with priority display
- **Category Filtering**: Organized content by tags (case-studies, news, etc.)
- **Author Profiles**: Dedicated pages for authors with their publications
- **Tag System**: Browse posts by specific topics and interests

### User Experience

- **Responsive Design**: Flawless experience across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, contemporary design with intuitive navigation
- **Fast Loading**: Optimized images and server-side rendering for quick page loads
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Newsletter Subscription**: Simple email subscription system for updates

### Technical Features

- **TypeScript**: Type-safe codebase for better developer experience and fewer bugs
- **Next.js App Router**: Latest Next.js features with improved performance
- **Tailwind CSS**: Utility-first CSS for rapid UI development
- **Image Optimization**: Next.js Image component for optimized image delivery
- **API Routes**: Custom API endpoints for newsletter functionality
- **Error Handling**: Comprehensive error handling and validation

---

## Tech Stack

### Frontend Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.2 | React framework with App Router and Turbopack |
| [React](https://reactjs.org/) | 19.0.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.3 | Type-safe JavaScript |

### Styling & UI

| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.17 | Utility-first CSS framework |
| [PostCSS](https://postcss.org/) | 8.4.49 | CSS transformation |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4.20 | Vendor prefixing |
| [FontAwesome](https://fontawesome.com/) | 6.7.2 | Icon library |

### Backend & CMS

| Technology | Version | Purpose |
|------------|---------|---------|
| [Ghost CMS API](https://ghost.org/) | 1.12.3 | Headless CMS for content |
| [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) | - | Serverless API endpoints |

### Development Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| [ESLint](https://eslint.org/) | 9.18.0 | Code linting |
| [TypeScript ESLint](https://typescript-eslint.io/) | 8.19.1 | TypeScript linting |
| [Validator](https://github.com/validatorjs/validator.js) | 13.12.0 | Input validation |
| [Vercel](https://vercel.com/) | - | Deployment platform |

---

## Architecture

### System Architecture Overview

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│   User Browser  │◄────►│   Vercel Edge   │◄────►│   Ghost CMS     │
│                 │      │   Network       │      │   (Content)     │
└─────────────────┘      └─────────────────┘      └─────────────────┘
                                │
                                ▼
                        ┌─────────────────┐
                        │                 │
                        │  Next.js App    │
                        │  (SSR/SSG)      │
                        │                 │
                        └─────────────────┘
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
              ┌─────────┐ ┌─────────┐ ┌─────────┐
              │ Pages   │ │ API     │ │ Static  │
              │         │ │ Routes  │ │ Assets  │
              └─────────┘ └─────────┘ └─────────┘
```

### Data Flow

1. **Content Fetching**: Ghost Content API provides posts, authors, and tags
2. **Server-Side Rendering**: Next.js generates HTML on the server for optimal performance
3. **Client Interaction**: React handles interactivity and client-side navigation
4. **API Requests**: Newsletter subscriptions handled by Next.js API routes

### Key Design Patterns

- **Component-Based Architecture**: Reusable React components
- **Server-Side Rendering**: SEO-friendly with fast initial page loads
- **API-First Design**: Separation of content and presentation
- **Responsive Design**: Mobile-first approach with Tailwind CSS

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: Version control system ([Download](https://git-scm.com/))

### Verify Installation

```bash
node --version   # Should be v18.x.x or higher
npm --version    # Should be 9.x.x or higher
git --version    # Should be 2.x.x or higher
```

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/codezela/sparks-blog.git

# Navigate into the project directory
cd sparks-blog
```

### 2. Install Dependencies

```bash
# Navigate to the application directory
cd application

# Install all dependencies
npm install
```

This will install all required packages defined in [package.json](application/package.json).

### 3. Set Up Environment Variables

Copy the example environment file and add your credentials:

```bash
cd application
cp .env.example .env.local
```

Then edit `.env.local` with your Ghost CMS credentials (see [Environment Configuration](#environment-configuration)):

```env
GHOST_URL=https://your-ghost-instance.com
CONTENT_KEY=your-ghost-content-api-key
```

> **Note**: You can use [.env.example](application/.env.example) as a template for all required environment variables.

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Environment Configuration

### Required Environment Variables

The application requires the following environment variables to be set in your `.env.local` file:

| Variable | Description | Example |
|----------|-------------|---------|
| `GHOST_URL` | Your Ghost CMS instance URL | `https://sparks-by-codezela.ghost.io` |
| `CONTENT_KEY` | Ghost Content API key | `d4b91c3b6b4b4b4b4b4b4b4b` |

### Obtaining Ghost CMS Credentials

1. Log in to your Ghost CMS admin panel
2. Navigate to **Settings** → **Integrations** → **Custom Integrations**
3. Click **Add Integration** and give it a name (e.g., "Sparks Blog")
4. Copy the **Content API Key** and use it as `CONTENT_KEY`
5. Use your Ghost instance URL as `GHOST_URL`

### Environment-Specific Files

- `.env.local` - Local development (overrides all other files)
- `.env.development` - Development environment
- `.env.production` - Production environment
- `.env.test` - Testing environment

> **Note**: Never commit `.env.local` or any files containing sensitive credentials to version control.

---

## Project Structure

```
sparks-blog/
├── application/                          # Main Next.js application
│   ├── public/                          # Static assets (images, fonts, etc.)
│   │   ├── logo.png                     # Application logo
│   │   └── subscribed_emails.csv        # Newsletter subscriber list
│   │
│   ├── src/
│   │   └── app/
│   │       ├── [slug]/                 # Dynamic post pages
│   │       │   └── page.tsx           # Individual post view
│   │       │
│   │       ├── author/                 # Author pages
│   │       │   └── [slug]/
│   │       │       └── page.tsx       # Author profile with posts
│   │       │
│   │       ├── tag/                    # Tag-based listing
│   │       │   └── [slug]/
│   │       │       └── page.tsx       # Posts filtered by tag
│   │       │
│   │       ├── api/                    # API routes
│   │       │   └── subscribe/
│   │       │       └── route.ts       # Newsletter subscription endpoint
│   │       │
│   │       ├── components/             # Reusable React components
│   │       │   ├── card/              # Post card component
│   │       │   ├── categorical-posts/ # Category-based posts
│   │       │   ├── featured-post/     # Featured posts section
│   │       │   ├── hero/              # Hero section
│   │       │   └── latest-posts/      # Latest posts with newsletter
│   │       │
│   │       ├── ghost-client.ts        # Ghost API client (lazy-loaded)
│   │       ├── layout.tsx             # Root layout with metadata
│   │       ├── page.tsx               # Homepage
│   │       ├── Header.tsx             # Navigation header
│   │       ├── Footer.tsx             # Footer component
│   │       ├── pagination.tsx         # Pagination component
│   │       ├── error.tsx              # Error boundary
│   │       ├── not-found.tsx          # 404 page
│   │       ├── global-error.tsx       # Global error boundary
│   │       └── globals.css            # Global styles
│   │
│   ├── types/                         # TypeScript type definitions
│   │   └── index.ts                  # Shared types
│   │
│   ├── next.config.mjs                # Next.js configuration (ESM)
│   ├── eslint.config.mjs              # ESLint flat config
│   ├── tailwind.config.ts             # Tailwind CSS configuration
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── postcss.config.js              # PostCSS configuration
│   ├── .env.example                   # Environment variables template
│   ├── vercel.json                    # Vercel deployment config
│   └── package.json                   # Project dependencies
│
└── README.md                          # This file
```

### Directory Explanations

- **[application/public/](application/public/)** - Static files served directly by Next.js
- **[application/src/app/](application/src/app/)** - Next.js App Router pages and layouts
- **[application/src/app/components/](application/src/app/components/)** - Reusable UI components
- **[application/src/app/api/](application/src/app/api/)** - Serverless API endpoints
- **[application/src/app/ghost-client.ts](application/src/app/ghost-client.ts)** - Centralized Ghost API communication

---

## Available Scripts

In the [application](application/) directory, you can run:

### Development

```bash
npm run dev
```
Starts the development server with **Turbopack** enabled for faster builds.
- **URL**: [http://localhost:3000](http://localhost:3000)
- **Mode**: Development with Turbopack
- **Features**: Fast Refresh, TypeScript checking, source maps

### Production Build

```bash
npm run build
```
Creates an optimized production build of the application.
- Compiles TypeScript
- Minifies code
- Optimizes assets
- Generates static pages where possible
- Standalone output for containerized deployments

### Production Server

```bash
npm run start
```
Starts the production server.
- **Prerequisite**: Run `npm run build` first
- **URL**: [http://localhost:3000](http://localhost:3000)
- **Mode**: Production

### Linting

```bash
npm run lint          # Check for linting issues
npm run lint:fix      # Auto-fix linting issues
```
Runs ESLint with the new flat config to check code quality.
- Checks all `.js`, `.jsx`, `.ts`, `.tsx` files
- Uses TypeScript ESLint for type-aware linting
- Configured in [eslint.config.mjs](application/eslint.config.mjs)

### Type Checking

```bash
npm run type-check
```
Runs TypeScript compiler without emitting files to check for type errors.

---

## Component Documentation

### Page Components

#### **Homepage** ([page.tsx](application/src/app/page.tsx))

The main landing page featuring:
- Hero section with 3 featured posts
- Latest posts section
- Category-based posts (case-studies, news)
- Featured/trending posts section

```tsx
export default async function Home() {
  return (
    <main className="container mt-20 mx-auto">
      <Hero />
      <LatestPosts />
      <CategoricalPosts category="case-studies" />
      <FeaturedPost />
      <CategoricalPosts category="news" />
    </main>
  );
}
```

#### **Post Page** ([page.tsx](application/src/app/[slug]/page.tsx))

Individual blog post view with:
- Full post content and metadata
- Author information
- Tags/categories
- Published date

#### **Author Page** ([page.tsx](application/src/app/author/[slug]/page.tsx))

Author profile page displaying:
- Author bio and information
- Author's published posts
- Contact information
- Gravatar image

#### **Tag Page** ([page.tsx](application/src/app/tag/[slug]/page.tsx))

Posts filtered by specific tag:
- Tag name and description
- Related posts
- Pagination support

### UI Components

#### **Hero** ([hero.tsx](application/src/app/components/hero/hero.tsx))

Displays 3 featured posts in a grid layout with:
- Large featured post (spans 2 columns)
- 2 smaller featured posts
- Background images with overlay text
- Tag badges and post excerpts

#### **LatestPosts** ([latest-posts.tsx](application/src/app/components/latest-posts/latest-posts.tsx))

Shows recent posts with:
- Grid layout of post cards
- Newsletter subscription form
- "Load More" functionality

#### **FeaturedPost** ([featured-post.tsx](application/src/app/components/featured-post/featured-post.tsx))

Trending posts section with:
- Prominent display of trending content
- Special styling to highlight featured posts

#### **CategoricalPosts** ([categorical-posts.tsx](application/src/app/components/categorical-posts/categorical-posts.tsx))

Category-based post filtering:
- Displays posts from specific tags
- Section headers with category names
- Configurable category prop

#### **NewsletterForm** ([newsletter-form.tsx](application/src/app/components/latest-posts/newsletter-form.tsx))

Email subscription component with:
- Email validation
- Form submission handling
- Success/error messages
- API integration

#### **Card** ([card.tsx](application/src/app/components/card/card.tsx))

Reusable post card displaying:
- Post title and excerpt
- Featured image
- Tag badges
- Author information
- Published date

#### **Header** ([header.tsx](application/src/app/header.tsx))

Navigation header with:
- Logo and branding
- Dynamic navigation links from Ghost
- Mobile hamburger menu
- Active state highlighting

#### **Footer** ([footer.tsx](application/src/app/footer.tsx))

Site footer with:
- Navigation links
- Social media links
- Copyright information
- Branding

---

## API Reference

### Ghost Client ([ghost-client.ts](application/src/app/ghost-client.ts))

Centralized API client for Ghost CMS integration.

#### Methods

##### `getNavigation()`
Fetches site navigation and settings from Ghost.

```typescript
export async function getNavigation() {
  return await api.settings.browse().catch((err) => {
    console.error(err);
  });
}
```

##### `getPosts(limit, page)`
Retrieves a paginated list of posts.

```typescript
export async function getPosts(limit: number, page: number = 1) {
  return await api.posts.browse({
    limit: limit,
    include: ["tags"],
    page: page,
  });
}
```

##### `getFeaturedPosts(limit, page)`
Fetches only featured posts.

```typescript
export async function getFeaturedPosts(limit: number, page: number = 1) {
  return await api.posts.browse({
    limit: limit,
    filter: "featured:true",
    include: ["tags"],
    page: page,
  });
}
```

##### `getPostsByTag(tag, limit, page)`
Retrieves posts filtered by a specific tag.

```typescript
export async function getPostsByTag(tag: string, limit: number, page: number = 1) {
  return await api.posts.browse({
    filter: `tag:${tag}`,
    limit: limit,
    page: page,
    include: ["tags"],
  });
}
```

##### `getPostsByAuthor(slug, limit, page)`
Fetches posts written by a specific author.

```typescript
export async function getPostsByAuthor(slug: string, limit: number, page: number = 1) {
  return await api.posts.browse({
    filter: `author:${slug}`,
    limit: limit,
    include: ["authors", "tags"],
    page: page,
  });
}
```

##### `getPostBySlug(slug)`
Retrieves a single post by its slug.

```typescript
export async function getPostBySlug(slug: string) {
  return await api.posts.read(
    { slug },
    { include: ["authors", "tags"] }
  );
}
```

### API Routes

#### Newsletter Subscription ([route.ts](application/src/app/api/subscribe/route.ts))

**Endpoint**: `GET /api/subscribe?email=<email>`

Handles newsletter email subscriptions with validation.

##### Request

```bash
GET /api/subscribe?email=user@example.com
```

##### Response

Success:
```json
{
  "message": "Thank you for subscribing sparks, stay tuned!"
}
```

Already Subscribed:
```json
{
  "message": "You are already subscribed to sparks"
}
```

Invalid Email:
```json
{
  "message": "Invalid email provided"
}
```

Error:
```json
{
  "message": "An error occurred while subscribing, please try again later"
}
```

---

## Deployment

### Deploy to Vercel

The project is configured for deployment on [Vercel](https://vercel.com/).

#### Automatic Deployment

1. Fork or clone the repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js
4. Add environment variables in Vercel dashboard:
   - `GHOST_URL`
   - `CONTENT_KEY`
5. Deploy!

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Environment Variables on Vercel

1. Go to your project settings in Vercel dashboard
2. Navigate to **Environment Variables**
3. Add the following variables:
   - `GHOST_URL` = Your Ghost CMS URL
   - `CONTENT_KEY` = Your Ghost Content API key
4. Redeploy your application

### Other Platforms

The application can be deployed to any platform supporting Next.js:

- **Netlify**: Use the Next.js plugin
- **AWS**: Deploy with AWS Amplify or EC2
- **DigitalOcean**: Use App Platform
- **Railway**: Connect your GitHub repository
- **Self-hosted**: Build and run with `npm run build && npm start`

### Domain Configuration

To use a custom domain:

1. Purchase a domain from your preferred registrar
2. Add the domain in Vercel dashboard
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (usually 24-48 hours)

---

## Development Workflow

### Recommended Workflow

1. **Create a new branch** for your feature or bug fix
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following the project's code style

3. **Test your changes** locally
   ```bash
   npm run dev
   ```

4. **Run linter** to ensure code quality
   ```bash
   npm run lint
   ```

5. **Commit your changes** with a clear message
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

6. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** on GitHub

### Git Commit Convention

Follow conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```bash
git commit -m "feat: add dark mode support"
```

### Code Style Guidelines

- Use **TypeScript** for type safety
- Follow **ESLint** rules
- Use **Tailwind CSS** for styling
- Keep components **small and focused**
- Write **descriptive variable names**
- Add **comments** for complex logic

---

## Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Fork the repo on GitHub
   git clone https://github.com/your-username/sparks-blog.git
   cd sparks-blog
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-amazing-feature
   ```

3. **Make Changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation

4. **Commit Changes**
   ```bash
   git commit -m "feat: add your amazing feature"
   ```

5. **Push to Branch**
   ```bash
   git push origin feature/your-amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference related issues
   - Ensure all checks pass

### Contribution Guidelines

- **Be respectful** to all contributors
- **Write clear commit messages**
- **Test your changes** before submitting
- **Follow the code style** used in the project
- **Update documentation** as needed

### Areas to Contribute

- New features and enhancements
- Bug fixes and improvements
- Documentation updates
- Performance optimizations
- UI/UX improvements
- Accessibility enhancements
- Test coverage

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: "Module not found: Can't resolve '@/app/...'"

**Solution**:
```bash
# Clear the Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Restart dev server
npm run dev
```

#### Issue: "GHOST_URL and CONTENT_KEY are not defined"

**Solution**:
Create a `.env.local` file in the `application` directory with your Ghost credentials:
```env
GHOST_URL=https://your-ghost-instance.com
CONTENT_KEY=your-content-api-key
```

#### Issue: "Failed to fetch from Ghost API"

**Solution**:
1. Verify your Ghost CMS URL is correct
2. Check that your Content API key is valid
3. Ensure your Ghost instance is accessible
4. Check Ghost API status at `https://your-ghost-url/ghost/api/v3/content/posts/`

#### Issue: "Images not loading"

**Solution**:
1. Check [next.config.mjs](application/next.config.mjs) for allowed image patterns
2. Verify the domain is added to `images.remotePatterns` array
3. Ensure images are accessible from Ghost CMS

#### Issue: "ESLint flat config errors"

**Solution**:
The project now uses ESLint flat config (ESLint 9+). Make sure you're using:
```bash
npm run lint      # Uses new flat config
npm run lint:fix  # Auto-fixes issues
```

#### Issue: "Build works but pages show no content"

**Solution**:
1. Verify your `.env.local` file has correct Ghost CMS credentials
2. Check that Ghost CMS is accessible from your network
3. Look for console errors showing Ghost API failures

#### Issue: "Build fails on Vercel"

**Solution**:
1. Check build logs for specific errors
2. Verify all environment variables are set in Vercel
3. Ensure `package.json` scripts are correct
4. Try clearing build cache in Vercel settings

#### Issue: "TypeScript errors after pulling latest changes"

**Solution**:
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install

# Regenerate TypeScript types
npm run build
```

### Getting Help

If you encounter issues not covered here:

1. Check existing [GitHub Issues](https://github.com/codezela/sparks-blog/issues)
2. Create a new issue with:
   - Detailed description
   - Error messages
   - Steps to reproduce
   - Your environment details

---

## Migration Guide

### Migrating from v1.x (Next.js 13) to v2.0 (Next.js 16)

If you're upgrading from an older version of this project, follow these steps:

#### 1. Update Dependencies

```bash
cd application
rm -rf node_modules package-lock.json
npm install
```

#### 2. Configuration Files

The following configuration files have changed:
- `next.config.js` → `next.config.mjs` (now ESM format)
- `.eslintrc.json` → `eslint.config.mjs` (flat config)
- `tsconfig.json` - Updated for React 19 and stricter settings

#### 3. Environment Variables

No changes required - your existing `.env.local` file will work.

#### 4. Breaking Changes

- **Pagination Component**: Import has changed from `Pagination` to `PaginationComponent`
- **Ghost Client**: Now uses lazy initialization - no API calls during build
- **Image Domains**: Changed from `images.domains` to `images.remotePatterns`

#### 5. New Features to Adopt

- Use `npm run dev` for Turbopack-enabled development
- Use `npm run type-check` for type checking without building
- Components now gracefully handle missing data (no more error throws)

---

## Roadmap

### Planned Features

- [ ] Dark mode support
- [ ] Search functionality
- [ ] Advanced filtering options
- [ ] Comment system integration
- [ ] Social sharing features
- [ ] RSS feed support
- [ ] Reading time indicator
- [ ] Related posts section
- [ ] Pagination improvements
- [ ] Performance optimization
- [ ] Automated testing setup
- [ ] Internationalization (i18n)
- [ ] Analytics integration
- [ ] Progressive Web App (PWA) support

### Under Consideration

- [ ] Multi-author support enhancements
- [ ] Email newsletter automation
- [ ] Podcast support
- [ ] Video content integration
- [ ] User authentication
- [ ] Bookmark/favorite posts
- [ ] Reading progress tracking

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```
MIT License

Copyright (c) 2026 Codezela Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact

### Codezela Technologies

- **Website**: [https://codezela.com](https://codezela.com)
- **Blog**: [https://sparks.codezela.com](https://sparks.codezela.com)

### Community

- **GitHub**: [https://github.com/codezela/sparks-blog](https://github.com/codezela/sparks-blog)
- **Issues**: [https://github.com/codezela/sparks-blog/issues](https://github.com/codezela/sparks-blog/issues)
- **Discussions**: [https://github.com/codezela/sparks-blog/discussions](https://github.com/codezela/sparks-blog/discussions)

### Social Media

Follow us for updates and tech content:
- **Twitter**: [@codezela](https://twitter.com/codezela)
- **LinkedIn**: [Codezela Technologies](https://linkedin.com/company/codezela)
- **Hashtag**: #CodezelaCommunity

---

## Acknowledgments

### Technologies & Tools

We would like to thank the creators and maintainers of the amazing tools and libraries that make this project possible:

- [Next.js](https://nextjs.org/) - The React framework for production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Ghost](https://ghost.org/) - The world's most popular open source headless Node.js CMS
- [Vercel](https://vercel.com/) - Develop. Preview. Ship.
- [Font Awesome](https://fontawesome.com/) - The internet's icon library

### Special Thanks

- The entire **Codezela Technologies** team for their dedication and hard work
- The **open-source community** for their invaluable contributions
- All **contributors** who help improve this project
- Our **readers and subscribers** who make Sparks possible

### Inspiration

This project draws inspiration from modern web development best practices and the vibrant tech community. We're committed to giving back by sharing knowledge and experiences through the Sparks blog.

---

<div align="center">

  **Built with ❤️ by [Codezela Technologies](https://codezela.com)**

  **⭐ Star us on GitHub — it helps!**

  [![Star History Chart](https://api.star-history.com/svg?repos=codezela/sparks-blog&type=Date)](https://star-history.com/#codezela/sparks-blog&Date)

  **[⬆ Back to Top](#sparks-by-codezela)**

</div>

---

*Last updated: January 2026*

*For the latest updates and documentation, visit the [GitHub repository](https://github.com/codezela/sparks-blog).*
