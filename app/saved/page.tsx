"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SaveButton } from "@/components/save-button"

type SavedArticle = {
  slug: string
  title: string
  featuredImage: string
  excerpt: string
}

export default function SavedPage() {
  const [articles, setArticles] = useState<SavedArticle[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("saved-articles-data")
    if (stored) {
      setArticles(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Запазени статии</h1>

            {articles.length === 0 ? (
              <p className="text-muted-foreground text-lg">
                Нямате запазени статии. 
                <Link href="/" className="text-primary underline ml-1">
                  Върнете се към новините
                </Link>
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <div
                    key={article.slug}
                    className="border rounded-lg shadow-sm overflow-hidden flex flex-col"
                  >
                    <Link href={`/article/${article.slug}`}>
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={article.featuredImage || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <div className="p-4 flex-1 flex flex-col">
                      <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                        <Link
                          href={`/article/${article.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto">
                        <SaveButton slug={article.slug} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
