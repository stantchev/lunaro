"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCw, Shield, TrendingUp, Clock, CheckCircle, AlertCircle, Settings, BarChart3 } from "lucide-react"
import type { ProcessedArticle } from "@/lib/content-processor"

export function AdminDashboard() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
  const [processedArticles, setProcessedArticles] = useState<ProcessedArticle[]>([])
  const [stats, setStats] = useState({
    totalArticles: 0,
    cybersecurityArticles: 0,
    seoArticles: 0,
    lastProcessed: null as Date | null,
  })

  const processContent = async (category: "cybersecurity" | "seo") => {
    setIsProcessing(true)
    try {
      const response = await fetch("/api/process-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category, limit: 5 }),
      })

      if (!response.ok) {
        throw new Error("Failed to process content")
      }

      const data = await response.json()
      setProcessedArticles((prev) => [...prev, ...data.articles])
      setLastUpdate(new Date())

      // Update stats
      setStats((prev) => ({
        ...prev,
        totalArticles: prev.totalArticles + data.count,
        cybersecurityArticles:
          category === "cybersecurity" ? prev.cybersecurityArticles + data.count : prev.cybersecurityArticles,
        seoArticles: category === "seo" ? prev.seoArticles + data.count : prev.seoArticles,
        lastProcessed: new Date(),
      }))
    } catch (error) {
      console.error("Error processing content:", error)
      alert("Грешка при обработката на съдържанието")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Админ панел</h1>
          <p className="text-muted-foreground">Управление на автоматизираното съдържание</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Последно обновление: {lastUpdate ? lastUpdate.toLocaleString("bg-BG") : "Никога"}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Общо статии</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalArticles}</div>
            <p className="text-xs text-muted-foreground">Обработени статии</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Киберсигурност</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.cybersecurityArticles}</div>
            <p className="text-xs text-muted-foreground">Статии за сигурност</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SEO</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.seoArticles}</div>
            <p className="text-xs text-muted-foreground">SEO статии</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Статус</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Активен</div>
            <p className="text-xs text-muted-foreground">Системата работи</p>
          </CardContent>
        </Card>
      </div>

      {/* Content Processing */}
      <Tabs defaultValue="process" className="space-y-4">
        <TabsList>
          <TabsTrigger value="process">Обработка на съдържание</TabsTrigger>
          <TabsTrigger value="articles">Обработени статии</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Автоматична обработка на новини</CardTitle>
              <p className="text-sm text-muted-foreground">
                Извличане и обработка на новини от NewsAPI с превод на български език
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">Киберсигурност</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Обработка на новини за киберсигурност, хакерски атаки и защитни мерки
                  </p>
                  <Button onClick={() => processContent("cybersecurity")} disabled={isProcessing} className="w-full">
                    {isProcessing ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Обработва...
                      </>
                    ) : (
                      "Обработи новини"
                    )}
                  </Button>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                    <h3 className="font-semibold">SEO</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Обработка на новини за SEO, алгоритмични промени и оптимизация
                  </p>
                  <Button
                    onClick={() => processContent("seo")}
                    disabled={isProcessing}
                    variant="secondary"
                    className="w-full"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Обработва...
                      </>
                    ) : (
                      "Обработи новини"
                    )}
                  </Button>
                </Card>
              </div>

              {isProcessing && (
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Обработката може да отнеме няколко минути...</span>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="articles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Обработени статии ({processedArticles.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {processedArticles.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                  <p>Няма обработени статии</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {processedArticles.map((article) => (
                    <div key={article.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold">{article.translatedTitle}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{article.translatedDescription}</p>
                        </div>
                        <Badge variant="outline">{article.category}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Автор: {article.author.name}</span>
                        <span>Четене: {article.readingTime} мин</span>
                        <span>Тагове: {article.tags.join(", ")}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Настройки на системата</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">API ключове</label>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>NewsAPI</span>
                    <Badge variant={process.env.NEWS_API_KEY ? "default" : "destructive"}>
                      {process.env.NEWS_API_KEY ? "Конфигуриран" : "Липсва"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span>OpenAI API</span>
                    <Badge variant={process.env.OPENAI_API_KEY ? "default" : "destructive"}>
                      {process.env.OPENAI_API_KEY ? "Конфигуриран" : "Липсва"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Автоматизация</label>
                <p className="text-sm text-muted-foreground">
                  За пълна автоматизация, настройте cron job или използвайте Vercel Cron Jobs за периодично извикване на
                  API endpoint-ите.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
