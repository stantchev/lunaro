"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, User, Award } from "lucide-react"

interface ExpertInsight {
  expert: string
  title: string
  insight: string
  category: string
}

interface ExpertInsightsProps {
  insights: ExpertInsight[]
}

export function ExpertInsights({ insights }: ExpertInsightsProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Киберсигурност':
        return 'bg-red-100 text-red-800 dark:bg-red-950/20 dark:text-red-200'
      case 'SEO':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/20 dark:text-blue-200'
      case 'AI':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/20 dark:text-purple-200'
      case 'Технологии':
        return 'bg-green-100 text-green-800 dark:bg-green-950/20 dark:text-green-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-950/20 dark:text-gray-200'
    }
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {insights.map((insight, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-950/20 p-2 rounded-full">
                  <Quote className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Експертна мисъл</p>
                  <p className="text-sm font-semibold text-blue-600">{insight.expert}</p>
                  <p className="text-xs text-muted-foreground">{insight.title}</p>
                </div>
              </div>

              <blockquote className="text-sm leading-relaxed italic text-gray-700 dark:text-gray-300">
                "{insight.insight}"
              </blockquote>

              <div className="flex items-center justify-between">
                <Badge className={`${getCategoryColor(insight.category)} border-0 text-xs`}>
                  {insight.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Award className="h-3 w-3" />
                  <span>Експерт</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

