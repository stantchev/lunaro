# Lunaro News - Production Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# News API Configuration
NEWS_API_KEY=your_news_api_key_here

# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# WordPress Configuration
WORDPRESS_BASE_URL=https://your-wordpress-site.com
WORDPRESS_USERNAME=your_wordpress_username
WORDPRESS_PASSWORD=your_wordpress_app_password

# Next.js Configuration
NEXT_PUBLIC_BASE_URL=https://your-nextjs-site.com

# For local development, use:
# NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## WordPress Setup

### Option 1: WordPress.com (Recommended)

1. Create a WordPress.com account
2. Create a new site
3. Go to Users → Profile
4. Scroll to "Application Passwords"
5. Create a new application password for your Next.js app
6. Create categories: "Киберсигурност" and "SEO"

### Option 2: Self-hosted WordPress

1. Install WordPress on your server
2. Install plugins:
   - Advanced Custom Fields (for custom meta fields)
   - Custom Post Type UI (optional)
3. Configure permalinks to "Post name"
4. Create Application Password (same as above)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see above)

3. Run the development server:
```bash
npm run dev
```

## Production Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to your hosting platform (Vercel, Netlify, etc.)

3. Set environment variables in your hosting platform

## Features

- ✅ Headless WordPress CMS integration
- ✅ Automatic article generation from NewsAPI
- ✅ AI-powered content translation and expansion
- ✅ SEO optimization
- ✅ Responsive design
- ✅ Search functionality
- ✅ Dynamic sitemap generation
- ✅ Admin dashboard for content management

## API Endpoints

- `/api/fetch-news` - Fetch news from NewsAPI
- `/api/process-content` - Process and save articles to WordPress
- `/api/wordpress-articles` - Fetch articles from WordPress

## Admin Dashboard

Access the admin dashboard at `/admin` to:
- Process new articles
- View processed articles
- Monitor system status
- Configure settings
