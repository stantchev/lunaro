"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, ExternalLink, Star } from "lucide-react"

interface Tool {
  name: string
  description: string
  category: string
  rating: number
  users: string
  free: boolean
  icon: any
}

interface ToolsListProps {
  tools: Tool[]
}

export function ToolsList({ tools }: ToolsListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <Card key={index} className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <tool.icon className="h-6 w-6 text-primary" />
              </div>
              {tool.free && <Badge variant="secondary">Безплатен</Badge>}
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">{tool.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{tool.description}</p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{tool.rating}</span>
              </div>
              <span className="text-muted-foreground">{tool.users} потребители</span>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {tool.category}
              </Badge>
              <Button variant="ghost" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
