"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, XCircle, AlertTriangle, Globe, Lock, Eye } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface HeaderResult {
  name: string
  value: string
  status: 'good' | 'warning' | 'missing'
  description: string
  recommendation?: string
}

export function HTTPHeadersAnalyzer() {
  const [url, setUrl] = useState("")
  const [headers, setHeaders] = useState<HeaderResult[]>([])
  const [loading, setLoading] = useState(false)

  const analyzeHeaders = async () => {
    if (!url.trim()) {
      toast({
        title: "Грешка",
        description: "Моля, въведете URL адрес за анализ.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    setHeaders([])

    try {
      // Симулация на HTTP headers анализ
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Симулирани резултати
      const mockHeaders: HeaderResult[] = [
        {
          name: "Strict-Transport-Security (HSTS)",
          value: "max-age=31536000; includeSubDomains",
          status: 'good',
          description: "HSTS е активиран с максимален период на валидност",
          recommendation: "Отлично! HSTS защитава от downgrade атаки."
        },
        {
          name: "Content-Security-Policy (CSP)",
          value: "default-src 'self'; script-src 'self' 'unsafe-inline'",
          status: 'warning',
          description: "CSP е наличен, но може да бъде по-строг",
          recommendation: "Препоръчваме по-строги CSP правила за по-добра сигурност."
        },
        {
          name: "X-Frame-Options",
          value: "DENY",
          status: 'good',
          description: "Защитава от clickjacking атаки",
          recommendation: "Отлично! X-Frame-Options е правилно настроен."
        },
        {
          name: "X-Content-Type-Options",
          value: "nosniff",
          status: 'good',
          description: "Предотвратява MIME type sniffing атаки",
          recommendation: "Отлично! X-Content-Type-Options е активиран."
        },
        {
          name: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
          status: 'good',
          description: "Контролира изпращането на referrer информация",
          recommendation: "Добра настройка за баланс между сигурност и функционалност."
        },
        {
          name: "Permissions-Policy",
          value: "",
          status: 'missing',
          description: "Permissions-Policy header липсва",
          recommendation: "Добавете Permissions-Policy за контрол на браузърни API."
        },
        {
          name: "X-XSS-Protection",
          value: "1; mode=block",
          status: 'warning',
          description: "X-XSS-Protection е deprecated в модерните браузъри",
          recommendation: "Използвайте Content-Security-Policy вместо X-XSS-Protection."
        }
      ]

      setHeaders(mockHeaders)
      
      toast({
        title: "Анализът завърши",
        description: "HTTP headers са анализирани успешно."
      })
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Възникна грешка при анализа на HTTP headers.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case 'missing':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <XCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good':
        return <Badge variant="default" className="bg-green-100 text-green-800">Добро</Badge>
      case 'warning':
        return <Badge variant="warning">Предупреждение</Badge>
      case 'missing':
        return <Badge variant="destructive">Липсва</Badge>
      default:
        return <Badge variant="secondary">Неизвестно</Badge>
    }
  }

  const getSecurityScore = () => {
    if (headers.length === 0) return 0
    const goodCount = headers.filter(h => h.status === 'good').length
    return Math.round((goodCount / headers.length) * 100)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          Анализатор на HTTP Headers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">URL адрес за анализ</Label>
            <div className="flex gap-2">
              <Input
                id="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && analyzeHeaders()}
              />
              <Button 
                onClick={analyzeHeaders} 
                disabled={loading}
                className="min-w-[120px]"
              >
                {loading ? (
                  <>
                    <Eye className="h-4 w-4 mr-2 animate-spin" />
                    Анализира...
                  </>
                ) : (
                  <>
                    <Shield className="h-4 w-4 mr-2" />
                    Анализирай
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {headers.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold">{url}</h3>
                  <p className="text-sm text-muted-foreground">
                    Security Score: {getSecurityScore()}% ({headers.filter(h => h.status === 'good').length}/{headers.length} добри)
                  </p>
                </div>
              </div>
              <Badge variant={getSecurityScore() >= 80 ? "default" : getSecurityScore() >= 60 ? "warning" : "destructive"}>
                {getSecurityScore()}%
              </Badge>
            </div>

            <div className="space-y-4">
              {headers.map((header, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(header.status)}
                      <div>
                        <h4 className="font-semibold">{header.name}</h4>
                        <p className="text-sm text-muted-foreground">{header.description}</p>
                      </div>
                    </div>
                    {getStatusBadge(header.status)}
                  </div>
                  
                  {header.value && (
                    <div className="mb-3">
                      <Label className="text-sm font-medium">Стойност:</Label>
                      <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
                        {header.value}
                      </div>
                    </div>
                  )}

                  {header.recommendation && (
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Lock className="h-4 w-4 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Препоръка:</p>
                          <p className="text-sm text-blue-800 dark:text-blue-200">{header.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            🔒 Защо са важни HTTP Security Headers?
          </h4>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• <strong>HSTS</strong> - защитава от downgrade атаки</li>
            <li>• <strong>CSP</strong> - предотвратява XSS атаки</li>
            <li>• <strong>X-Frame-Options</strong> - защитава от clickjacking</li>
            <li>• <strong>X-Content-Type-Options</strong> - предотвратява MIME sniffing</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
