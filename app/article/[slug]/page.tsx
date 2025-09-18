import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock, User, Share2, Bookmark, ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Fetch article from WordPress
async function getArticle(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/wordpress-articles?slug=${slug}`, {
      cache: 'no-store' // Always fetch fresh data
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    const post = data.post

    if (!post) {
      return null
    }

    // Transform WordPress post to our article format
    return {
      id: post.id.toString(),
      slug: post.slug,
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML tags
      content: post.content.rendered,
      category: post.meta?.category || "Киберсигурност",
      publishedAt: post.date,
      updatedAt: post.modified,
      author: {
        name: post.meta?.author_name || "Автор",
        bio: post.meta?.author_bio || "",
        avatar: "/placeholder.svg?key=author1",
      },
      featuredImage: post.featured_media ? 
        `${process.env.WORDPRESS_BASE_URL}/wp-content/uploads/featured-image-${post.slug}.jpg` : 
        "/placeholder.svg",
      tags: post.meta?.tags || [],
      readingTime: post.meta?.reading_time || 5,
      source: {
        name: post.meta?.original_source || "Lunaro News",
        url: post.meta?.original_url || "#",
      },
      wordpressId: post.id
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) {
    return {
      title: "Статията не е намерена - Lunaro News",
    }
  }

  return {
    title: `${article.title} - Lunaro News`,
    description: article.description,
    keywords: article.tags.join(", "),
    authors: [{ name: article.author.name }],
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
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
      title: article.title,
      description: article.description,
      images: [article.featuredImage],
    },
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
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
        <section className="py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Начало
              </Link>
              <span>/</span>
              <Link href="/cybersecurity" className="hover:text-primary transition-colors">
                Киберсигурност
              </Link>
              <span>/</span>
              <span className="text-foreground">{article.title}</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/cybersecurity"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Назад към Киберсигурност</span>
              </Link>

              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary">{article.category}</Badge>

                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">{article.title}</h1>

                  <p className="text-xl text-muted-foreground text-pretty">{article.description}</p>
                </div>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
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
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Сподели
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Запази
                  </Button>
                  <Link href={article.source.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Източник
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image
                  src={article.featuredImage || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Author Bio */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{article.author.name}</h3>
                  <p className="text-muted-foreground">{article.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-semibold mb-4">Тагове:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
