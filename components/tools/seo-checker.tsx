"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle, Search, Globe, Eye } from "lucide-react"

interface SEOAnalysis {
  url: string
  title: string
  description: string
  keywords: string[]
  score: number
  issues: string[]
  suggestions: string[]
  meta: {
    titleLength: number
    descriptionLength: number
    hasH1: boolean
    hasImages: boolean
    hasInternalLinks: boolean
  }
}

export function SEOChecker() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null)

  const analyzeSEO = async () => {
    if (!url) return
    
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockAnalysis: SEOAnalysis = {
        url,
        title: "Пример заглавие на страница",
        description: "Това е пример за meta описание на страницата, което трябва да бъде между 120-160 символа.",
        keywords: ["SEO", "оптимизация", "Google", "ключови думи"],
        score: Math.floor(Math.random() * 40) + 60, // 60-100
        issues: [
          "Липсва meta описание",
          "Заглавието е твърде дълго",
          "Няма alt текст на изображенията"
        ],
        suggestions: [
          "Добавете meta описание между 120-160 символа",
          "Съкратете заглавието до 60 символа",
          "Добавете alt текст на всички изображения"
        ],
        meta: {
          titleLength: 45,
          descriptionLength: 145,
          hasH1: true,
          hasImages: false,
          hasInternalLinks: true
        }
      }
      
      setAnalysis(mockAnalysis)
      setLoading(false)
    }, 2000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800"
    if (score >= 60) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Search className="h-5 w-5 text-primary" />
          <span>SEO Анализатор</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Въведете URL на сайта"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={analyzeSEO} disabled={loading || !url}>
              {loading ? "Анализира..." : "Анализирай"}
            </Button>
          </div>
        </div>

        {analysis && (
          <div className="space-y-6">
            {/* Score */}
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-4xl font-bold mb-2">
                <span className={getScoreColor(analysis.score)}>
                  {analysis.score}
                </span>
                <span className="text-muted-foreground">/100</span>
              </div>
              <Badge className={getScoreBadge(analysis.score)}>
                {analysis.score >= 80 ? "Отлично" : 
                 analysis.score >= 60 ? "Добро" : "Трябва подобрение"}
              </Badge>
            </div>

            {/* Meta Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Meta информация</span>
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center space-x-2">
                    {analysis.meta.titleLength <= 60 ? 
                      <CheckCircle className="h-4 w-4 text-green-500" /> : 
                      <XCircle className="h-4 w-4 text-red-500" />
                    }
                    <span>Заглавие: {analysis.meta.titleLength}/60 символа</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {analysis.meta.descriptionLength >= 120 && analysis.meta.descriptionLength <= 160 ? 
                      <CheckCircle className="h-4 w-4 text-green-500" /> : 
                      <XCircle className="h-4 w-4 text-red-500" />
                    }
                    <span>Описание: {analysis.meta.descriptionLength}/160 символа</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {analysis.meta.hasH1 ? 
                      <CheckCircle className="h-4 w-4 text-green-500" /> : 
                      <XCircle className="h-4 w-4 text-red-500" />
                    }
                    <span>H1 заглавие</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Съдържание</span>
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center space-x-2">
                    {analysis.meta.hasImages ? 
                      <CheckCircle className="h-4 w-4 text-green-500" /> : 
                      <XCircle className="h-4 w-4 text-red-500" />
                    }
                    <span>Изображения</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {analysis.meta.hasInternalLinks ? 
                      <CheckCircle className="h-4 w-4 text-green-500" /> : 
                      <XCircle className="h-4 w-4 text-red-500" />
                    }
                    <span>Вътрешни връзки</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Issues */}
            {analysis.issues.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2 text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Проблеми</span>
                </h4>
                <ul className="space-y-1">
                  {analysis.issues.map((issue, index) => (
                    <li key={index} className="text-sm text-red-600 flex items-center space-x-2">
                      <XCircle className="h-3 w-3" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Suggestions */}
            {analysis.suggestions.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Препоръки</span>
                </h4>
                <ul className="space-y-1">
                  {analysis.suggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-green-600 flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3" />
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
