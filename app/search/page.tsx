import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Shield, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Търсене - Lunaro News",
  description: "Търсете в архива на Lunaro News за статии за киберсигурност и SEO.",
  robots: "index, follow",
}

async function getSearchResults(query: string) {
  if (!query) return []

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/wordpress-articles?search=${encodeURIComponent(query)}&per_page=20`, {
      cache: 'no-store'
    })

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data.posts || []
  } catch (error) {
    console.error('Error fetching search results:', error)
    return []
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ""
  const searchResults = await getSearchResults(query)

  const popularSearches = [
    "ransomware",
    "Google алгоритъм",
    "фишинг атаки",
    "SEO оптимизация",
    "киберсигурност",
    "ключови думи",
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("bg-BG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Search className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold">Търсене в Lunaro News</h1>
              </div>
              <p className="text-muted-foreground">Намерете статии за киберсигурност и SEO в нашия архив</p>
            </div>

            {/* Search Form */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <form method="GET" className="flex space-x-2">
                  <Input
                    name="q"
                    placeholder="Търсете статии, теми, автори..."
                    defaultValue={query}
                    className="flex-1"
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Търси
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Search Results */}
            {query && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Резултати за "{query}" ({searchResults.length})
                </h2>

                {searchResults.length > 0 ? (
                  <div className="space-y-4">
                    {searchResults.map((result: any) => (
                      <Card key={result.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <Link
                                href={`/article/${result.slug}`}
                                className="text-lg font-semibold hover:text-primary transition-colors"
                              >
                                {result.title.rendered}
                              </Link>
                              <p className="text-muted-foreground mt-1">
                                {result.excerpt.rendered.replace(/<[^>]*>/g, '')}
                              </p>
                            </div>
                            <Badge variant="outline">{result.meta?.category || "Киберсигурност"}</Badge>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{formatDate(result.date)}</span>
                            </div>
                            <span>{result.meta?.reading_time || 5} мин четене</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Няма намерени резултати</h3>
                      <p className="text-muted-foreground">
                        Опитайте с различни ключови думи или разгледайте популярните търсения по-долу.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Popular Searches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Популярни търсения</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search) => (
                    <Link key={search} href={`/search?q=${encodeURIComponent(search)}`}>
                      <Badge
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {search}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Киберсигурност</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Статии за хакерски атаки, защитни мерки и киберзаплахи</p>
                  <Link href="/cybersecurity">
                    <Button variant="outline" className="w-full bg-transparent">
                      Разгледай категорията
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <span>SEO</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Новини за алгоритмични промени и SEO стратегии</p>
                  <Link href="/seo">
                    <Button variant="outline" className="w-full bg-transparent">
                      Разгледай категорията
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
