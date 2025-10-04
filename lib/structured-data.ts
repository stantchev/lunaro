export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lunaro News",
    "alternateName": "Lunaro Technology News",
    "url": "https://lunaro.news",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lunaro.news/logo-desktop.png",
      "width": 300,
      "height": 60
    },
    "description": "Bulgaria's leading technology news platform covering cybersecurity, SEO, AI, and digital innovation with expert analysis and breaking news",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Lunaro News Team"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sofia",
      "addressCountry": "BG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@lunaro.news",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/LunaroNews",
      "https://linkedin.com/company/lunaro-news",
      "https://facebook.com/LunaroNews"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Lunaro News",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lunaro.news/logo-desktop.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lunaro.news/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}

export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lunaro News",
    "url": "https://lunaro.news",
    "description": "Bulgaria's leading technology news platform covering cybersecurity, SEO, AI, and digital innovation",
    "publisher": {
      "@type": "Organization",
      "name": "Lunaro News",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lunaro.news/logo-desktop.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lunaro.news/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Cybersecurity News",
          "url": "https://lunaro.news/cybersecurity"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO News",
          "url": "https://lunaro.news/seo"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AI News",
          "url": "https://lunaro.news/ai"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Analysis",
          "url": "https://lunaro.news/analizi"
        }
      ]
    }
  }
}

export function getBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export function getArticleStructuredData(article: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description || article.summary,
    "image": article.featuredImage || article.urlToImage,
    "author": {
      "@type": "Organization",
      "name": "Lunaro News Team",
      "url": "https://lunaro.news"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lunaro News",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lunaro.news/logo-desktop.png",
        "width": 300,
        "height": 60
      }
    },
    "datePublished": article.publishedAt || article.date,
    "dateModified": article.updatedAt || article.modified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lunaro.news/article/${article.slug}`
    },
    "articleSection": article.category,
    "keywords": article.tags || [article.category, "technology", "Bulgaria"],
    "inLanguage": "bg",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Lunaro News",
      "url": "https://lunaro.news"
    }
  }
}

export function getNewsArticleStructuredData(article: any) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.description || article.summary,
    "image": article.featuredImage || article.urlToImage,
    "author": {
      "@type": "Organization",
      "name": "Lunaro News Team",
      "url": "https://lunaro.news"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lunaro News",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lunaro.news/logo-desktop.png",
        "width": 300,
        "height": 60
      }
    },
    "datePublished": article.publishedAt || article.date,
    "dateModified": article.updatedAt || article.modified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lunaro.news/article/${article.slug}`
    },
    "articleSection": article.category,
    "keywords": article.tags || [article.category, "technology", "Bulgaria"],
    "inLanguage": "bg",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Lunaro News",
      "url": "https://lunaro.news"
    },
    "about": {
      "@type": "Thing",
      "name": article.category
    },
    "mentions": article.tags || []
  }
}

export function getFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export function getLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "Lunaro News",
    "url": "https://lunaro.news",
    "logo": "https://lunaro.news/logo-desktop.png",
    "description": "Bulgaria's leading technology news platform covering cybersecurity, SEO, AI, and digital innovation",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sofia",
      "addressCountry": "BG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@lunaro.news",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/LunaroNews",
      "https://linkedin.com/company/lunaro-news",
      "https://facebook.com/LunaroNews"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Bulgaria"
    },
    "knowsAbout": [
      "Cybersecurity",
      "SEO",
      "Artificial Intelligence",
      "Technology News",
      "Digital Innovation"
    ]
  }
}
