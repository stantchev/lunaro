import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock, User, Bookmark, ArrowLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

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
      description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
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
    }
  } catch (error) {
    console.error("Error fetching article:", error)
    return null
  }
}

// 🔹 SEO мета
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) {
    return { title: "Статията не е намерена - Lunaro News" }
  }

  return {
    title: `${article.title} - Lunaro News`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)
  if (!article) notFound()

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

  // 🔹 Функция за споделяне (работи чрез Web Share API или копиране на линк)
  const handleShare = async () => {
    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://lunaro.news"}/article/${article.slug}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: shareUrl,
        })
      } catch (err) {
        console.error("Share error:", err)
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert("Линкът е копиран в клипборда ✅")
      } catch {
        alert("Неуспешно копиране ❌")
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">{article.title}</h1>
            <p className="text-lg text-gray-200 mt-4 max-w-2xl">{article.description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-300">
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
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <Separator className="my-8" />

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Button onClick={handleShare} variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Сподели
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Запази
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
