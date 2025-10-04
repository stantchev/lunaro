# Lunaro News - Technology News Platform

## Overview

Lunaro News is Bulgaria's leading technology news platform specializing in cybersecurity, SEO, AI, and digital innovation. Built with Next.js 14 and React 18, it provides expert analysis, breaking news, and in-depth coverage of the Bulgarian and international tech landscape.

## Features

### Core Functionality
- **Real-time News**: Breaking technology news with 24/7 updates
- **Expert Analysis**: In-depth technical analysis by industry professionals
- **Multi-language Support**: Bulgarian and English content
- **Category-based Organization**: Cybersecurity, SEO, AI, and Analysis sections
- **Article Management**: Save, search, and organize articles
- **Responsive Design**: Optimized for all devices and screen sizes

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **WordPress Headless CMS**: Content management via WordPress REST API
- **PWA Support**: Progressive Web App functionality
- **SEO Optimized**: Advanced technical SEO implementation
- **AI Crawler Friendly**: Optimized for AI language models and search engines

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **React 18**: Latest React with concurrent features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

### Backend & Data
- **WordPress REST API**: Headless CMS for content management
- **Next.js API Routes**: Server-side functionality
- **ISR (Incremental Static Regeneration)**: Optimized content delivery
- **Edge Runtime**: Fast content delivery

### SEO & Performance
- **Structured Data**: JSON-LD schema markup
- **XML Sitemap**: Dynamic sitemap generation
- **RSS Feed**: Content syndication
- **Core Web Vitals**: Optimized performance metrics
- **Image Optimization**: Next.js Image component with WebP support

## Project Structure

```
lunaro-main/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Route groups
│   ├── article/[slug]/          # Dynamic article pages
│   ├── api/                     # API routes
│   ├── feed.xml/               # RSS feed
│   ├── robots.ts               # Robots.txt generation
│   ├── sitemap.ts              # Sitemap generation
│   └── layout.tsx              # Root layout
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   ├── tools/                   # Tool components
│   └── *.tsx                   # Feature components
├── lib/                         # Utility functions
│   ├── api.ts                  # API client
│   ├── content-processor.ts    # Content processing
│   ├── seo-utils.ts            # SEO utilities
│   └── structured-data.ts      # Schema markup
├── public/                      # Static assets
│   ├── images/                 # Image assets
│   ├── manifest.json           # PWA manifest
│   ├── llms.txt               # AI crawler instructions
│   └── browserconfig.xml      # Microsoft Edge config
├── styles/                      # Global styles
│   └── globals.css            # Tailwind CSS
├── tailwind.config.js          # Tailwind configuration
├── next.config.mjs            # Next.js configuration
└── package.json               # Dependencies
```

## Installation

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager
- WordPress instance with REST API enabled

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/lunaro-news.git
   cd lunaro-news
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment configuration**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## Configuration

### WordPress Integration
The platform integrates with WordPress as a headless CMS. Configure your WordPress instance:

1. **Enable REST API**: Ensure WordPress REST API is accessible
2. **CORS Settings**: Configure CORS for your domain
3. **Custom Fields**: Set up custom fields for SEO metadata
4. **Featured Images**: Ensure featured images are properly configured

### SEO Configuration
The platform includes comprehensive SEO optimization:

- **Meta Tags**: Automatic generation for all pages
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: AI-optimized crawler instructions
- **LLMS.txt**: AI language model instructions

### Performance Optimization
- **Image Optimization**: Automatic WebP conversion and responsive images
- **Code Splitting**: Automatic bundle optimization
- **Caching**: ISR and edge caching
- **Core Web Vitals**: Optimized for Google's performance metrics

## API Endpoints

### WordPress API
- **Posts**: `/wp-json/wp/v2/posts`
- **Categories**: `/wp-json/wp/v2/categories`
- **Media**: `/wp-json/wp/v2/media`
- **Custom Fields**: `/wp-json/wp/v2/posts?meta_key=seo_description`

### Next.js API Routes
- **RSS Feed**: `/feed.xml`
- **Sitemap**: `/sitemap.xml`
- **Robots**: `/robots.txt`

## Content Management

### Article Structure
Each article includes:
- **Title**: SEO-optimized headlines
- **Content**: Rich text with formatting
- **Excerpt**: Article summaries
- **Featured Image**: High-quality images
- **Categories**: Organized content classification
- **SEO Metadata**: Custom meta descriptions and keywords
- **Publication Date**: Timestamp and modification tracking

### Content Types
- **News Articles**: Breaking news and updates
- **Analysis**: Expert technical analysis
- **Tutorials**: Step-by-step guides
- **Interviews**: Expert interviews and insights
- **Research**: Original research and data analysis

## SEO Features

### Technical SEO
- **Structured Data**: Article, Organization, and Website schemas
- **Meta Tags**: Comprehensive meta tag implementation
- **Sitemap**: Dynamic XML sitemap with priority indicators
- **Robots.txt**: AI-optimized crawler instructions
- **Canonical URLs**: Proper URL canonicalization
- **Breadcrumbs**: Structured navigation markup

### Content SEO
- **Keyword Optimization**: Strategic keyword placement
- **Internal Linking**: Automated related article suggestions
- **Image Alt Text**: Descriptive alt attributes
- **Heading Structure**: Proper H1-H6 hierarchy
- **Content Length**: Optimized article lengths

### AI Optimization
- **LLMS.txt**: Detailed instructions for AI crawlers
- **Structured Content**: AI-friendly content formatting
- **Technical Terms**: Clear explanations for AI understanding
- **FAQ Sections**: Question-answer format for AI citation

## Performance

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques
- **Image Optimization**: WebP format with responsive sizing
- **Code Splitting**: Automatic bundle optimization
- **Lazy Loading**: Deferred image and component loading
- **Caching**: ISR and edge caching strategies
- **CDN**: Content delivery network integration

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
```env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

### Hosting Recommendations
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Alternative with edge functions
- **AWS**: For enterprise deployments
- **DigitalOcean**: Cost-effective VPS hosting

## Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Conventional Commits**: Standardized commit messages

### Testing
- **Unit Tests**: Component and utility testing
- **Integration Tests**: API and data flow testing
- **E2E Tests**: End-to-end user journey testing
- **Performance Tests**: Core Web Vitals monitoring

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Support

For support and questions:
- **Email**: contact@lunaro.news
- **Documentation**: See the DOCUMENTATION.md file
- **Issues**: GitHub Issues for bug reports
- **Discussions**: GitHub Discussions for community support

## Changelog

### Version 2.1.0 (January 2025)
- Added AI crawler optimization
- Implemented comprehensive SEO strategy
- Enhanced performance optimization
- Added structured data schemas
- Improved mobile responsiveness

### Version 2.0.0 (December 2024)
- Migrated to Next.js 14
- Added PWA functionality
- Implemented advanced caching
- Enhanced security features

### Version 1.0.0 (November 2024)
- Initial release
- Basic news platform functionality
- WordPress integration
- Responsive design implementation
