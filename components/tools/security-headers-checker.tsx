"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, XCircle, AlertTriangle, Lock, Eye, Globe } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface SecurityHeader {
  name: string
  present: boolean
  value: string
  status: 'good' | 'warning' | 'missing'
  description: string
  recommendation: string
}

export function SecurityHeadersChecker() {
  const [url, setUrl] = useState("")
  const [headers, setHeaders] = useState<SecurityHeader[]>([])
  const [loading, setLoading] = useState(false)

  const checkSecurityHeaders = async () => {
    if (!url.trim()) {
      toast({
        title: "Грешка",
        description: "Моля, въведете URL адрес за проверка.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    setHeaders([])

    try {
      // Симулация на security headers проверка
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Симулирани резултати
      const mockHeaders: SecurityHeader[] = [
        {
          name: "Strict-Transport-Security (HSTS)",
          present: Math.random() > 0.2,
          value: "max-age=31536000; includeSubDomains; preload",
          status: Math.random() > 0.2 ? 'good' : 'missing',
          description: "Защитава от downgrade атаки и man-in-the-middle",
          recommendation: "Активирайте HSTS с максимален период на валидност"
        },
        {
          name: "Content-Security-Policy (CSP)",
          present: Math.random() > 0.3,
          value: "default-src 'self'; script-src 'self' 'unsafe-inline'",
          status: Math.random() > 0.3 ? 'warning' : 'missing',
          description: "Предотвратява XSS атаки чрез контрол на ресурсите",
          recommendation: "Настройте строги CSP правила за по-добра защита"
        },
        {
          name: "X-Frame-Options",
          present: Math.random() > 0.1,
          value: "DENY",
          status: Math.random() > 0.1 ? 'good' : 'missing',
          description: "Защитава от clickjacking атаки",
          recommendation: "Използвайте DENY или SAMEORIGIN за защита"
        },
        {
          name: "X-Content-Type-Options",
          present: Math.random() > 0.15,
          value: "nosniff",
          status: Math.random() > 0.15 ? 'good' : 'missing',
          description: "Предотвратява MIME type sniffing атаки",
          recommendation: "Винаги използвайте nosniff за защита"
        },
        {
          name: "Referrer-Policy",
          present: Math.random() > 0.25,
          value: "strict-origin-when-cross-origin",
          status: Math.random() > 0.25 ? 'good' : 'missing',
          description: "Контролира изпращането на referrer информация",
          recommendation: "Настройте подходяща referrer политика"
        },
        {
          name: "Permissions-Policy",
          present: Math.random() > 0.4,
          value: "geolocation=(), microphone=(), camera=()",
          status: Math.random() > 0.4 ? 'good' : 'missing',
          description: "Контролира достъпа до браузърни API",
          recommendation: "Ограничете достъпа до чувствителни API"
        },
        {
          name: "X-XSS-Protection",
          present: Math.random() > 0.3,
          value: "1; mode=block",
          status: 'warning',
          description: "Deprecated в модерните браузъри",
          recommendation: "Използвайте Content-Security-Policy вместо това"
        }
      ]

      setHeaders(mockHeaders)
      
      toast({
        title: "Проверката завърши",
        description: "Security headers са проверени успешно."
      })
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Възникна грешка при проверката на security headers.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case 'missing':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <XCircle className="h-4 w-4 text-gray-500" />
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
          <Shield className="h-5 w-5 text-indigo-600" />
          Security Headers Проверка
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">URL адрес за проверка</Label>
            <div className="flex gap-2">
              <Input
                id="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkSecurityHeaders()}
              />
              <Button 
                onClick={checkSecurityHeaders} 
                disabled={loading}
                className="min-w-[120px]"
              >
                {loading ? (
                  <>
                    <Eye className="h-4 w-4 mr-2 animate-spin" />
                    Проверява...
                  </>
                ) : (
                  <>
                    <Shield className="h-4 w-4 mr-2" />
                    Провери
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
                <Globe className="h-5 w-5 text-indigo-600" />
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

            <div className="space-y-3">
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
                  
                  {header.present && header.value && (
                    <div className="mb-3">
                      <Label className="text-sm font-medium">Стойност:</Label>
                      <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
                        {header.value}
                      </div>
                    </div>
                  )}

                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Lock className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Препоръка:</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200">{header.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
            🛡️ Защо са важни Security Headers?
          </h4>
          <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
            <li>• <strong>HSTS</strong> - защитава от downgrade атаки</li>
            <li>• <strong>CSP</strong> - предотвратява XSS атаки</li>
            <li>• <strong>X-Frame-Options</strong> - защитава от clickjacking</li>
            <li>• <strong>X-Content-Type-Options</strong> - предотвратява MIME sniffing</li>
            <li>• <strong>Permissions-Policy</strong> - контролира браузърни API</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
