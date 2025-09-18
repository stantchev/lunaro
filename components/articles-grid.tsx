import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { t, getTimeAgo } from "@/lib/i18n"

interface Article {
  id: string
  title: string
  translatedTitle?: string
  description: string
  translatedDescription?: string
  summary?: string
  category: string
  publishedAt: string
  urlToImage?: string
  url: string
  author?: string
  source: {
    name: string
  }
}

interface ArticlesGridProps {
  articles: Article[]
  title: string
}

export function ArticlesGrid({ articles, title }: ArticlesGridProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {article.urlToImage && (
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={article.urlToImage || "/placeholder.svg"}
                    alt={article.translatedTitle || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {article.category}
                    </Badge>
                  </div>
                </div>
              )}

              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{getTimeAgo(article.publishedAt)}</span>
                  </div>
                  <span>{article.source.name}</span>
                </div>

                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {article.translatedTitle || article.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {article.summary || article.translatedDescription || article.description}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 group/link"
                  >
                    <span>{t("readMore")}</span>
                    <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>

                  {article.author && <span className="text-xs text-muted-foreground">от {article.author}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
