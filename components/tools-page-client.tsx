"use client"

import { useState } from "react"
import { ToolsSearch } from "@/components/tools-search"
import { Search, Zap, Shield, TrendingUp, Wrench } from "lucide-react"

interface Tool {
  name: string
  description: string
  category: string
  rating: number
  users: string
  free: boolean
  iconType: string
}

interface ToolsPageClientProps {
  allTools: Tool[]
}

export function ToolsPageClient({ allTools }: ToolsPageClientProps) {
  const [filteredTools, setFilteredTools] = useState(allTools)

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'Zap':
        return <Zap className="h-6 w-6 text-primary" />
      case 'Shield':
        return <Shield className="h-6 w-6 text-primary" />
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-primary" />
      case 'Wrench':
        return <Wrench className="h-6 w-6 text-primary" />
      default:
        return <Wrench className="h-6 w-6 text-primary" />
    }
  }

  return (
    <>
      <ToolsSearch 
        tools={allTools} 
        onFilteredTools={setFilteredTools}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => (
          <div key={index} className="group hover:shadow-lg transition-shadow">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {getIcon(tool.iconType)}
                </div>
                {tool.free && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Безплатен
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>

              <div className="flex items-center justify-between text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <svg className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{tool.rating}</span>
                </div>
                <span className="text-gray-500">{tool.users} потребители</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {tool.category}
                </span>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Няма намерени инструменти</h3>
          <p className="text-gray-500">
            Опитайте с различни ключови думи или изчистете филтрите
          </p>
        </div>
      )}
    </>
  )
}
