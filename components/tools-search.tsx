"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

interface Tool {
  name: string
  description: string
  category: string
  rating: number
  users: string
  free: boolean
  icon?: any
}

interface ToolsSearchProps {
  tools: Tool[]
  onFilteredTools: (tools: Tool[]) => void
}

export function ToolsSearch({ tools, onFilteredTools }: ToolsSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Всички")

  const categories = [
    { name: "Всички", count: tools.length },
    { name: "SEO", count: tools.filter(tool => tool.category === "SEO").length },
    { name: "Анализ", count: tools.filter(tool => tool.category === "Анализ").length },
    { name: "Съдържание", count: tools.filter(tool => tool.category === "Съдържание").length },
    { name: "Сигурност", count: tools.filter(tool => tool.category === "Сигурност").length },
  ]

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "Всички" || tool.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, tools])

  // Изпращаме филтрираните инструменти на родителския компонент
  useMemo(() => {
    onFilteredTools(filteredTools)
  }, [filteredTools, onFilteredTools])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("Всички")
  }

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Търсете инструмент..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category, index) => (
          <Button 
            key={index} 
            variant={selectedCategory === category.name ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name} ({category.count})
          </Button>
        ))}
      </div>

      {/* Clear Filters */}
      {(searchTerm || selectedCategory !== "Всички") && (
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            onClick={clearFilters}
            className="flex items-center space-x-2"
          >
            <X className="h-4 w-4" />
            <span>Изчисти филтрите</span>
          </Button>
        </div>
      )}

      {/* Results Count */}
      <div className="text-center text-muted-foreground">
        {filteredTools.length === tools.length ? (
          <span>Показват се всички {tools.length} инструмента</span>
        ) : (
          <span>
            Намерени {filteredTools.length} от {tools.length} инструмента
            {searchTerm && ` за "${searchTerm}"`}
            {selectedCategory !== "Всички" && ` в категория "${selectedCategory}"`}
          </span>
        )}
      </div>
    </div>
  )
}
