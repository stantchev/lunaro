# Lunaro News - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Documentation](#component-documentation)
3. [API Documentation](#api-documentation)
4. [SEO Implementation](#seo-implementation)
5. [Performance Optimization](#performance-optimization)
6. [Deployment Guide](#deployment-guide)
7. [Troubleshooting](#troubleshooting)
8. [Development Guidelines](#development-guidelines)

## Architecture Overview

### System Architecture

Lunaro News follows a modern JAMstack architecture with the following components:

- **Frontend**: Next.js 14 with React 18 and TypeScript
- **CMS**: WordPress as headless CMS via REST API
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel with edge functions
- **CDN**: Global content delivery network
- **Analytics**: Google Analytics 4 and Search Console

### Data Flow

```
WordPress API → Next.js API Routes → React Components → User Interface
     ↓              ↓                    ↓
  Content Cache → ISR Regeneration → Client-side Hydration
```

### Key Design Principles

- **Performance First**: Optimized for Core Web Vitals
- **SEO Optimized**: Comprehensive technical SEO implementation
- **AI Friendly**: Optimized for AI crawlers and language models
- **Mobile First**: Responsive design for all devices
- **Accessibility**: WCAG 2.1 AA compliance

## Component Documentation

### Core Components

#### App Layout (`app/layout.tsx`)
Root layout component providing:
- Global metadata configuration
- SEO head components
- Font loading optimization
- Theme configuration

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg" className="scroll-smooth">
      <head>
        <SEOHead />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

#### SEO Head (`components/seo-head.tsx`)
Comprehensive SEO meta tag implementation:
- Performance optimizations (preconnect, dns-prefetch)
- Favicon and app icon configuration
- Advanced SEO meta tags
- AI crawler optimization
- Security headers
- Social media optimization

#### Article Page (`app/article/[slug]/page.tsx`)
Dynamic article rendering with:
- WordPress API integration
- SEO metadata generation
- Breadcrumb navigation
- Related articles
- Social sharing
- Save functionality

### UI Components

#### Articles Grid (`components/articles-grid.tsx`)
Grid layout for article listings:
- Responsive grid system
- Image optimization
- Truncation logic
- Save button integration
- Loading states

#### Hero Section (`components/hero-section.tsx`)
Homepage hero component:
- Featured article display
- Call-to-action buttons
- Image optimization
- Text truncation
- Responsive design

#### Save Button (`components/save-button.tsx`)
Article saving functionality:
- Local storage integration
- Accessibility features
- Loading states
- Error handling

### Category Components

#### Cybersecurity Hero (`components/cybersecurity-hero.tsx`)
Category-specific hero section:
- Featured article display
- Category branding
- Navigation links
- SEO optimization

#### SEO Hero (`components/seo-hero.tsx`)
SEO category hero:
- Blue color scheme
- SEO-focused content
- Navigation integration

#### AI Hero (`components/ai-hero.tsx`)
AI category hero:
- Purple color scheme
- AI-focused content
- Expert analysis display

## API Documentation

### WordPress REST API Integration

#### Base Configuration
```typescript
const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL
const API_BASE = `${WORDPRESS_URL}/wp-json/wp/v2`
```

#### Article Endpoints

**Get All Articles**
```typescript
GET /wp-json/wp/v2/posts
Parameters:
- per_page: number (default: 10)
- page: number (default: 1)
- categories: number[] (optional)
- search: string (optional)
- _fields: string[] (optional)
```

**Get Single Article**
```typescript
GET /wp-json/wp/v2/posts/{id}
Parameters:
- _fields: string[] (optional)
- _embed: boolean (optional)
```

**Get Categories**
```typescript
GET /wp-json/wp/v2/categories
Parameters:
- per_page: number (default: 10)
- search: string (optional)
```

#### Custom Fields Integration

**SEO Metadata**
```typescript
interface ArticleSEO {
  description: string
  keywords: string
  title: string
  image: string
}
```

**Content Processing**
```typescript
interface ProcessedArticle {
  id: number
  title: string
  content: string
  excerpt: string
  slug: string
  date: string
  modified: string
  featuredImage: string
  category: string
  seo: ArticleSEO
}
```

### Next.js API Routes

#### RSS Feed (`app/feed.xml/route.ts`)
XML RSS feed generation:
- Dynamic content fetching
- Proper XML formatting
- Caching optimization
- SEO-friendly structure

#### Sitemap (`app/sitemap.ts`)
Dynamic sitemap generation:
- Static page inclusion
- Dynamic article URLs
- Priority and frequency settings
- Last modified dates

#### Robots (`app/robots.ts`)
AI-optimized robots.txt:
- Multiple user agent rules
- Crawl delay configuration
- Sitemap references
- Disallow patterns

## SEO Implementation

### Technical SEO

#### Meta Tags Implementation
```typescript
interface MetaTags {
  title: string
  description: string
  keywords: string
  author: string
  robots: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  twitterCard: string
}
```

#### Structured Data Schemas

**Organization Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lunaro News",
  "url": "https://lunaro.news",
  "logo": "https://lunaro.news/logo-desktop.png",
  "description": "Bulgaria's leading technology news platform"
}
```

**Article Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Organization",
    "name": "Lunaro News Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Lunaro News"
  },
  "datePublished": "2025-01-27",
  "dateModified": "2025-01-27"
}
```

#### Sitemap Configuration
```typescript
interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}
```

### Content SEO

#### Keyword Strategy
- **Primary Keywords**: High-volume, high-competition terms
- **Long-tail Keywords**: Specific, lower-competition phrases
- **Local Keywords**: Bulgaria and Sofia-specific terms
- **Semantic Keywords**: Related and contextual terms

#### Content Optimization
- **Title Tags**: 50-60 characters, keyword-optimized
- **Meta Descriptions**: 150-160 characters, compelling
- **Header Structure**: Proper H1-H6 hierarchy
- **Internal Linking**: Strategic cross-referencing
- **Image Alt Text**: Descriptive and keyword-rich

### AI Optimization

#### LLMS.txt Configuration
Comprehensive AI crawler instructions:
- Site overview and purpose
- Content categories and topics
- Target audience definition
- Content quality indicators
- Technical specifications
- Contact information

#### AI-Friendly Content Structure
- **Clear Headings**: Hierarchical content organization
- **Bullet Points**: Easy-to-scan information
- **FAQ Sections**: Question-answer format
- **Technical Terms**: Clear explanations
- **Code Examples**: Practical implementations

## Performance Optimization

### Core Web Vitals

#### Largest Contentful Paint (LCP)
Target: < 2.5 seconds
Optimizations:
- Image optimization with Next.js Image
- Critical CSS inlining
- Font loading optimization
- Server-side rendering

#### First Input Delay (FID)
Target: < 100 milliseconds
Optimizations:
- Code splitting
- Lazy loading
- JavaScript optimization
- Third-party script optimization

#### Cumulative Layout Shift (CLS)
Target: < 0.1
Optimizations:
- Image dimensions specified
- Font loading optimization
- Dynamic content handling
- Layout stability

### Image Optimization

#### Next.js Image Component
```typescript
<Image
  src={article.featuredImage}
  alt={article.title}
  width={433}
  height={244}
  className="object-cover w-full h-full"
  priority={isPriority}
  sizes="(max-width: 768px) 433px, (max-width: 1200px) 50vw, 33vw"
/>
```

#### Responsive Images
- **Mobile**: 433x244 landscape format
- **Tablet**: 50vw width
- **Desktop**: 33vw width
- **WebP Format**: Automatic conversion
- **Lazy Loading**: Deferred loading

### Caching Strategy

#### ISR (Incremental Static Regeneration)
```typescript
export const revalidate = 3600 // 1 hour
```

#### Edge Caching
- **Static Assets**: 1 year cache
- **API Responses**: 30 minutes cache
- **Dynamic Content**: 1 hour cache
- **CDN Integration**: Global edge caching

### Bundle Optimization

#### Code Splitting
- **Route-based**: Automatic page splitting
- **Component-based**: Dynamic imports
- **Library-based**: Vendor chunk separation
- **Lazy Loading**: Deferred component loading

#### Tree Shaking
- **Unused Code Elimination**: Automatic dead code removal
- **Import Optimization**: Selective imports
- **Bundle Analysis**: Webpack bundle analyzer
- **Dependency Optimization**: Minimal dependency inclusion

## Deployment Guide

### Environment Setup

#### Development Environment
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

#### Environment Variables
```env
# WordPress Configuration
NEXT_PUBLIC_WORDPRESS_URL=https://lunaro.sofia-today.org

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://lunaro.news

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Performance
NODE_ENV=production
```

### Production Deployment

#### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

#### Environment Configuration
- **WordPress URL**: Configure API endpoint
- **Site URL**: Set production domain
- **Analytics**: Enable tracking
- **CDN**: Configure asset delivery

### Monitoring and Analytics

#### Performance Monitoring
- **Core Web Vitals**: Google PageSpeed Insights
- **Real User Monitoring**: Vercel Analytics
- **Error Tracking**: Sentry integration
- **Uptime Monitoring**: Status page integration

#### SEO Monitoring
- **Google Search Console**: Search performance
- **Google Analytics**: User behavior
- **Sitemap Monitoring**: Crawl status
- **Keyword Tracking**: Ranking positions

## Troubleshooting

### Common Issues

#### WordPress API Errors
```typescript
// Error handling for API calls
try {
  const response = await fetch(apiUrl)
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }
  return await response.json()
} catch (error) {
  console.error('WordPress API Error:', error)
  return []
}
```

#### Image Loading Issues
```typescript
// Fallback for missing images
const imageSrc = article.featuredImage || '/placeholder.svg'
const imageAlt = article.title || 'Article image'
```

#### SEO Issues
- **Missing Meta Tags**: Check component implementation
- **Structured Data Errors**: Validate JSON-LD schemas
- **Sitemap Issues**: Verify URL generation
- **Robots.txt Problems**: Check file accessibility

### Performance Issues

#### Slow Loading
- **Image Optimization**: Check image sizes and formats
- **Bundle Size**: Analyze JavaScript bundles
- **API Calls**: Optimize data fetching
- **Caching**: Verify cache configuration

#### Core Web Vitals
- **LCP Issues**: Optimize largest content
- **FID Problems**: Reduce JavaScript execution
- **CLS Issues**: Fix layout shifts

### Debugging Tools

#### Development Tools
- **Next.js Dev Tools**: Built-in debugging
- **React DevTools**: Component inspection
- **Network Tab**: API call monitoring
- **Performance Tab**: Core Web Vitals

#### Production Tools
- **Vercel Analytics**: Performance metrics
- **Google Search Console**: SEO monitoring
- **Lighthouse**: Performance auditing
- **WebPageTest**: Detailed performance analysis

## Development Guidelines

### Code Standards

#### TypeScript Guidelines
```typescript
// Interface definitions
interface Article {
  id: number
  title: string
  content: string
  slug: string
  date: string
  featuredImage?: string
}

// Type safety
const processArticle = (article: Article): ProcessedArticle => {
  // Implementation
}
```

#### Component Guidelines
```typescript
// Props interface
interface ComponentProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

// Component implementation
export function Component({ title, description, className, children }: ComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}
```

### File Organization

#### Component Structure
```
components/
├── ui/                 # Reusable UI components
│   ├── button.tsx
│   ├── input.tsx
│   └── modal.tsx
├── layout/             # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   └── sidebar.tsx
├── features/           # Feature-specific components
│   ├── articles/
│   ├── search/
│   └── auth/
└── shared/             # Shared components
    ├── seo-head.tsx
    └── structured-data.tsx
```

#### Utility Functions
```
lib/
├── api.ts              # API client functions
├── utils.ts            # General utilities
├── seo-utils.ts        # SEO helper functions
├── content-processor.ts # Content processing
└── structured-data.ts   # Schema markup
```

### Testing Strategy

#### Unit Testing
```typescript
// Component testing
import { render, screen } from '@testing-library/react'
import { ArticleCard } from './article-card'

test('renders article title', () => {
  render(<ArticleCard title="Test Article" />)
  expect(screen.getByText('Test Article')).toBeInTheDocument()
})
```

#### Integration Testing
```typescript
// API testing
import { getArticles } from '@/lib/api'

test('fetches articles from API', async () => {
  const articles = await getArticles()
  expect(articles).toHaveLength(10)
  expect(articles[0]).toHaveProperty('title')
})
```

#### E2E Testing
```typescript
// End-to-end testing
import { test, expect } from '@playwright/test'

test('user can navigate to article page', async ({ page }) => {
  await page.goto('/')
  await page.click('[data-testid="article-link"]')
  await expect(page).toHaveURL(/\/article\/.*/)
})
```

### Performance Guidelines

#### Image Optimization
- Use Next.js Image component
- Specify width and height
- Use appropriate sizes attribute
- Implement lazy loading
- Optimize for WebP format

#### Code Splitting
- Use dynamic imports for large components
- Implement route-based splitting
- Lazy load non-critical components
- Optimize bundle sizes

#### Caching Strategy
- Implement ISR for dynamic content
- Use edge caching for static assets
- Configure proper cache headers
- Monitor cache hit rates

### Security Guidelines

#### Input Validation
```typescript
// Sanitize user input
const sanitizeInput = (input: string): string => {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}
```

#### API Security
- Validate all API inputs
- Implement rate limiting
- Use HTTPS for all requests
- Sanitize WordPress content

#### Content Security
- Implement CSP headers
- Sanitize user-generated content
- Validate file uploads
- Prevent XSS attacks

This documentation provides comprehensive guidance for developing, maintaining, and optimizing the Lunaro News platform. For additional support, refer to the README.md file or contact the development team.
