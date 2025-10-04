"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Shield, TrendingUp, Zap, BarChart3, Target } from "lucide-react"

interface Category {
  name: string
  count: number
  iconName: string
}

interface AnalysisCategoriesProps {
  categories: Category[]
}

export function AnalysisCategories({ categories }: AnalysisCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("Всички")

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="h-4 w-4" />
      case 'Shield':
        return <Shield className="h-4 w-4" />
      case 'TrendingUp':
        return <TrendingUp className="h-4 w-4" />
      case 'Zap':
        return <Zap className="h-4 w-4" />
      case 'BarChart3':
        return <BarChart3 className="h-4 w-4" />
      case 'Target':
        return <Target className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category.name ? "default" : "outline"}
            className="rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-105"
            onClick={() => setSelectedCategory(category.name)}
          >
            {getIcon(category.iconName)}
            <span className="ml-2">{category.name}</span>
            <Badge variant="secondary" className="ml-2 text-xs">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Показват се анализи в категория: <span className="font-medium">{selectedCategory}</span>
        </p>
      </div>
    </div>
  )
}
