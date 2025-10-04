"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, Link, CheckCircle, AlertCircle } from "lucide-react"

interface ShortenedUrl {
  original: string
  short: string
  clicks: number
  createdAt: string
}

export function URLShortener() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([])
  const [copied, setCopied] = useState<string | null>(null)

  const shortenUrl = async () => {
    if (!url || !isValidUrl(url)) return
    
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const shortCode = Math.random().toString(36).substring(2, 8)
      const shortUrl = `https://lunaro.news/s/${shortCode}`
      
      const newShortenedUrl: ShortenedUrl = {
        original: url,
        short: shortUrl,
        clicks: 0,
        createdAt: new Date().toISOString()
      }
      
      setShortenedUrls(prev => [newShortenedUrl, ...prev])
      setUrl("")
      setLoading(false)
    }, 1000)
  }

  const isValidUrl = (string: string) => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('bg-BG', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname
    } catch {
      return url
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Link className="h-5 w-5 text-primary" />
          <span>URL Съкращавач</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Въведете URL за съкращаване"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={shortenUrl} 
              disabled={loading || !url || !isValidUrl(url)}
            >
              {loading ? "Съкращава..." : "Съкрати"}
            </Button>
          </div>
          
          {url && !isValidUrl(url) && (
            <div className="flex items-center space-x-2 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>Моля, въведете валиден URL</span>
            </div>
          )}
        </div>

        {/* Shortened URLs */}
        {shortenedUrls.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-semibold">Съкратени URL-и</h4>
            <div className="space-y-3">
              {shortenedUrls.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {getDomain(item.original)}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {formatDate(item.createdAt)}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Input
                        value={item.short}
                        readOnly
                        className="font-mono text-sm"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => copyToClipboard(item.short, `short-${index}`)}
                      >
                        {copied === `short-${index}` ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    
                    <div className="text-xs text-muted-foreground truncate">
                      {item.original}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Кликове: {item.clicks}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(item.original, '_blank')}
                    >
                      Отвори оригинал
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        {shortenedUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {shortenedUrls.length}
              </div>
              <div className="text-xs text-muted-foreground">
                Съкратени URL-и
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {shortenedUrls.reduce((sum, item) => sum + item.clicks, 0)}
              </div>
              <div className="text-xs text-muted-foreground">
                Общо кликове
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {Math.round(shortenedUrls.reduce((sum, item) => sum + item.clicks, 0) / shortenedUrls.length) || 0}
              </div>
              <div className="text-xs text-muted-foreground">
                Средно кликове
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
