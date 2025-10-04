export interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  category?: string
}

export function generateMetaTags(seoData: SEOData) {
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(", "),
    authors: seoData.author ? [{ name: seoData.author }] : undefined,
    publishedTime: seoData.publishedTime,
    modifiedTime: seoData.modifiedTime,
    alternates: {
      canonical: seoData.canonicalUrl,
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      siteName: "Lunaro News",
      locale: "bg_BG",
      type: "article",
      publishedTime: seoData.publishedTime,
      modifiedTime: seoData.modifiedTime,
      authors: seoData.author ? [seoData.author] : undefined,
      section: seoData.category,
      images: seoData.ogImage
        ? [
            {
              url: seoData.ogImage,
              width: 1200,
              height: 630,
              alt: seoData.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: seoData.ogImage ? [seoData.ogImage] : undefined,
    },
  }
}

export function generateStructuredData(article: {
  title: string
  description: string
  content: string
  author: { name: string; bio?: string }
  publishedAt: string
  updatedAt?: string
  featuredImage?: string
  category: string
  url: string
  tags?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.featuredImage ? [article.featuredImage] : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      description: article.author.bio,
    },
    publisher: {
      "@type": "Organization",
      name: "Lunaro News",
      logo: {
        "@type": "ImageObject",
        url: "https://lunaro.news/logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    articleSection: article.category,
    keywords: article.tags?.join(", "),
    inLanguage: "bg-BG",
    about: {
      "@type": "Thing",
      name: article.category,
    },
  }
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lunaro News",
    description: "Водещо българско издание за киберсигурност и SEO оптимизация",
    url: "https://lunaro.news",
    inLanguage: "bg-BG",
    publisher: {
      "@type": "Organization",
      name: "Lunaro News",
      logo: {
        "@type": "ImageObject",
        url: "https://lunaro.news/logo.jpg",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://lunaro.news/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}
