"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FileText, BarChart3, Clock, Hash, Type, Eye } from "lucide-react"

interface TextStats {
  characters: number
  charactersNoSpaces: number
  words: number
  sentences: number
  paragraphs: number
  readingTime: number
  averageWordsPerSentence: number
  averageCharactersPerWord: number
  mostCommonWords: Array<{ word: string; count: number }>
}

export function TextAnalyzer() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState<TextStats | null>(null)

  const analyzeText = () => {
    if (!text.trim()) return

    const words = text.trim().split(/\s+/).filter(word => word.length > 0)
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0)
    const paragraphs = text.split(/\n\s*\n/).filter(paragraph => paragraph.trim().length > 0)
    
    // Word frequency
    const wordCount: { [key: string]: number } = {}
    words.forEach(word => {
      const cleanWord = word.toLowerCase().replace(/[^\w]/g, '')
      if (cleanWord.length > 2) {
        wordCount[cleanWord] = (wordCount[cleanWord] || 0) + 1
      }
    })
    
    const mostCommonWords = Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word, count]) => ({ word, count }))

    const readingTime = Math.ceil(words.length / 200) // Average reading speed: 200 words per minute

    const newStats: TextStats = {
      characters: text.length,
      charactersNoSpaces: text.replace(/\s/g, '').length,
      words: words.length,
      sentences: sentences.length,
      paragraphs: paragraphs.length,
      readingTime,
      averageWordsPerSentence: sentences.length > 0 ? Math.round(words.length / sentences.length * 10) / 10 : 0,
      averageCharactersPerWord: words.length > 0 ? Math.round(text.replace(/\s/g, '').length / words.length * 10) / 10 : 0,
      mostCommonWords
    }

    setStats(newStats)
  }

  const getReadingTimeColor = (time: number) => {
    if (time <= 1) return "bg-green-100 text-green-800"
    if (time <= 3) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  const getComplexityColor = (avgWords: number) => {
    if (avgWords <= 15) return "bg-green-100 text-green-800"
    if (avgWords <= 20) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-primary" />
          <span>Анализатор на текст</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Textarea
            placeholder="Въведете текст за анализ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[200px]"
          />
          <Button onClick={analyzeText} disabled={!text.trim()}>
            <BarChart3 className="h-4 w-4 mr-2" />
            Анализирай текст
          </Button>
        </div>

        {stats && (
          <div className="space-y-6">
            {/* Basic Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.characters}</div>
                <div className="text-xs text-muted-foreground">Символи</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.words}</div>
                <div className="text-xs text-muted-foreground">Думи</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.sentences}</div>
                <div className="text-xs text-muted-foreground">Изречения</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.paragraphs}</div>
                <div className="text-xs text-muted-foreground">Параграфи</div>
              </div>
            </div>

            {/* Reading Time & Complexity */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Време за четене</span>
                </div>
                <Badge className={getReadingTimeColor(stats.readingTime)}>
                  {stats.readingTime} минути
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Type className="h-4 w-4" />
                  <span className="font-medium">Сложност на изреченията</span>
                </div>
                <Badge className={getComplexityColor(stats.averageWordsPerSentence)}>
                  {stats.averageWordsPerSentence} думи/изречение
                </Badge>
              </div>
            </div>

            {/* Detailed Stats */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Hash className="h-4 w-4" />
                  <span>Статистики</span>
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Символи без интервали:</span>
                    <span className="font-medium">{stats.charactersNoSpaces}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Средно символи на дума:</span>
                    <span className="font-medium">{stats.averageCharactersPerWord}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Читаемост</span>
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Средно думи на изречение:</span>
                    <span className="font-medium">{stats.averageWordsPerSentence}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Време за четене:</span>
                    <span className="font-medium">{stats.readingTime} мин</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Most Common Words */}
            {stats.mostCommonWords.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold">Най-чести думи</h4>
                <div className="flex flex-wrap gap-2">
                  {stats.mostCommonWords.map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {item.word} ({item.count})
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
