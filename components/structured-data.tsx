import Script from "next/script"

interface Article {
  title: string
  description: string
  author: {
    name: string
  }
  publishedAt: string
  updatedAt: string
  featuredImage: string
  category: string
  url: string
}

interface StructuredDataProps {
  article: Article
}

export function StructuredData({ article }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [article.featuredImage],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Lunaro News",
      logo: {
        "@type": "ImageObject",
        url: "https://lunaro-news.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    articleSection: article.category,
    inLanguage: "bg-BG",
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
