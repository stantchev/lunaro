"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Shield, TrendingUp, X } from "lucide-react"

interface GlossaryTerm {
  term: string
  definition: string
  category: string
  letter: string
}

interface GlossarySearchProps {
  terms: GlossaryTerm[]
}

export function GlossarySearch({ terms }: GlossarySearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Всички")
  const [selectedLetter, setSelectedLetter] = useState("")

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const categories = ["Всички", "SEO", "Киберсигурност", "AI", "Технически"]

  // Filter terms based on search, category, and letter
  const filteredTerms = useMemo(() => {
    return terms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          term.definition.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "Всички" || term.category === selectedCategory
      const matchesLetter = selectedLetter === "" || term.letter === selectedLetter
      
      return matchesSearch && matchesCategory && matchesLetter
    })
  }, [searchTerm, selectedCategory, selectedLetter, terms])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("Всички")
    setSelectedLetter("")
  }

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Търсете термин..." 
            className="pl-10" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={selectedCategory === category ? "default" : "outline"} 
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Alphabet Navigation */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => (
              <Button 
                key={letter} 
                variant={selectedLetter === letter ? "default" : "ghost"} 
                size="sm" 
                className="w-8 h-8 p-0 rounded-full"
                onClick={() => setSelectedLetter(selectedLetter === letter ? "" : letter)}
              >
                {letter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">Термини и дефиниции</h2>
                {(searchTerm || selectedCategory !== "Всички" || selectedLetter) && (
                  <Button variant="outline" onClick={clearFilters} className="flex items-center space-x-2">
                    <X className="h-4 w-4" />
                    <span>Изчисти филтрите</span>
                  </Button>
                )}
              </div>
              <p className="text-muted-foreground">
                Намерени {filteredTerms.length} от {terms.length} термина
                {searchTerm && ` за "${searchTerm}"`}
                {selectedCategory !== "Всички" && ` в категория "${selectedCategory}"`}
                {selectedLetter && ` започващи с "${selectedLetter}"`}
              </p>
            </div>

            {filteredTerms.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Няма намерени термини</h3>
                <p className="text-muted-foreground mb-4">
                  Опитайте с различни ключови думи или изчистете филтрите
                </p>
                <Button onClick={clearFilters}>Изчисти филтрите</Button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredTerms.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{item.term}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                item.category === "SEO"
                                  ? "default"
                                  : item.category === "Киберсигурност"
                                    ? "destructive"
                                    : item.category === "AI"
                                      ? "warning"
                                      : "secondary"
                              }
                            >
                              {item.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground">#{item.letter}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          {item.category === "SEO" ? (
                            <TrendingUp className="h-5 w-5 text-blue-600" />
                          ) : item.category === "Киберсигурност" ? (
                            <Shield className="h-5 w-5 text-red-600" />
                          ) : item.category === "AI" ? (
                            <BookOpen className="h-5 w-5 text-green-600" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-gray-600" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.definition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
