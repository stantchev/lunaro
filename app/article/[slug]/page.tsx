import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock, User, Bookmark, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShareButton } from "@/components/share-button"
import { SaveButton } from "@/components/save-button"

// 🔹 Fetch конкретна статия по slug от WP
async function getArticle(slug: string) {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 60 } }
    )

    if (!response.ok) return null

    const data = await response.json()
    const post = data[0]

    if (!post) return null

    return {
      id: post.id.toString(),
      slug: post.slug,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
      content: post.content.rendered,
      category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Без категория",
      publishedAt: post.date,
      updatedAt: post.modified,
      author: {
        name: post._embedded?.author?.[0]?.name || "Автор",
      },
      featuredImage:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg",
      readingTime: Math.ceil(post.content.rendered.split(" ").length / 200), // ~200 думи = 1 мин

      // 🆕 Yoast SEO данни
      seo: {
        title: post.yoast_head_json?.title || post.title.rendered,
        description:
          post.yoast_head_json?.description ||
          post.excerpt.rendered.replace(/<[^>]*>/g, ""),
      },
    }
  } catch (error) {
    console.error("Error fetching article:", error)
    return null
  }
}

// 🔹 SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) {
    return { title: "Статията не е намерена - Lunaro News" }
  }

  const canonicalUrl = `https://lunaro.news/article/${article.slug}`

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      type: "article",
      url: canonicalUrl,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.title,
      description: article.seo.description,
      images: [article.featuredImage],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticle(params.slug)

  if (!article) notFound()

  // Map Bulgarian category names to English URLs
  const getCategoryUrl = (category: string) => {
    // Normalize category name (remove extra spaces, convert to lowercase for comparison)
    const normalizedCategory = category.trim().toLowerCase()
    
    // Try partial match for categories that might contain extra text
    if (normalizedCategory.includes("киберсигурност") || normalizedCategory.includes("cybersecurity")) {
      return "/cybersecurity"
    }
    if (normalizedCategory.includes("seo")) {
      return "/seo"
    }
    if (normalizedCategory.includes("ai") || normalizedCategory.includes("изкуствен интелект")) {
      return "/ai"
    }
    if (normalizedCategory.includes("анализ") || normalizedCategory.includes("анализи")) {
      return "/analizi"
    }
    
    // Fallback to homepage if no match found
    return "/"
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("bg-BG", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="py-4 border-b hidden sm:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Начало
              </Link>
              <span>/</span>
              <Link
                href={getCategoryUrl(article.category)}
                className="hover:text-primary transition-colors"
              >
                {article.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{article.title}</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-6 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href={getCategoryUrl(article.category)}
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-4 md:mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Назад</span>
              </Link>

              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  <Badge variant="secondary">{article.category}</Badge>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-balance">
                    {article.title}
                  </h1>
                  {article.seo.description && (
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {article.seo.description}
                    </p>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{article.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readingTime} мин четене</span>
                  </div>
                </div>

                {/* Action Buttons */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <ShareButton
                      title={article.title}
                      description={article.seo.description}
                      slug={article.slug}
                    />
                    <SaveButton 
                      slug={article.slug}
                      title={article.title}
                      featuredImage={article.featuredImage}
                      category={article.category}
                    />
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-6 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  width={433}
                  height={244}
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-6 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </section>

        <Separator className="my-6 md:my-12" />
      </main>

      <Footer />
    </div>
  )
}
