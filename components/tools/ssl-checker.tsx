"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, XCircle, Clock, AlertTriangle, ExternalLink } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface SSLInfo {
  isValid: boolean
  issuer: string
  subject: string
  validFrom: string
  validTo: string
  daysRemaining: number
  algorithm: string
  keySize: number
  error?: string
}

export function SSLChecker() {
  const [domain, setDomain] = useState("")
  const [sslInfo, setSslInfo] = useState<SSLInfo | null>(null)
  const [loading, setLoading] = useState(false)

  const checkSSL = async () => {
    if (!domain.trim()) {
      toast({
        title: "Грешка",
        description: "Моля, въведете домейн за проверка.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    setSslInfo(null)

    try {
      // Симулация на SSL проверка (в реален сценарий би използвал API)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Симулирани данни за демонстрация
      const mockSSLInfo: SSLInfo = {
        isValid: Math.random() > 0.3, // 70% шанс за валиден сертификат
        issuer: "Let's Encrypt Authority X3",
        subject: domain,
        validFrom: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        validTo: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        daysRemaining: Math.floor(Math.random() * 60) + 1,
        algorithm: "RSA-SHA256",
        keySize: 2048,
        error: Math.random() > 0.7 ? "Сертификатът е изтекъл" : undefined
      }

      setSslInfo(mockSSLInfo)
      
      toast({
        title: "Проверката завърши",
        description: mockSSLInfo.isValid 
          ? "SSL сертификатът е валиден." 
          : "Намерени проблеми с SSL сертификата."
      })
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Възникна грешка при проверката на SSL сертификата.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = () => {
    if (!sslInfo) return null
    
    if (sslInfo.isValid) {
      if (sslInfo.daysRemaining < 30) {
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      }
      return <CheckCircle className="h-5 w-5 text-green-500" />
    }
    return <XCircle className="h-5 w-5 text-red-500" />
  }

  const getStatusBadge = () => {
    if (!sslInfo) return null
    
    if (sslInfo.isValid) {
      if (sslInfo.daysRemaining < 30) {
        return <Badge variant="warning">Изтича скоро</Badge>
      }
      return <Badge variant="default">Валиден</Badge>
    }
    return <Badge variant="destructive">Невалиден</Badge>
  }

  const getStatusColor = () => {
    if (!sslInfo) return ""
    
    if (sslInfo.isValid) {
      if (sslInfo.daysRemaining < 30) {
        return "text-yellow-600"
      }
      return "text-green-600"
    }
    return "text-red-600"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-600" />
          Проверка на SSL сертификат
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="domain">Домейн за проверка</Label>
            <div className="flex gap-2">
              <Input
                id="domain"
                placeholder="example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkSSL()}
              />
              <Button 
                onClick={checkSSL} 
                disabled={loading}
                className="min-w-[120px]"
              >
                {loading ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
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

        {sslInfo && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                {getStatusIcon()}
                <div>
                  <h3 className="font-semibold">{domain}</h3>
                  <p className={`text-sm ${getStatusColor()}`}>
                    {sslInfo.isValid 
                      ? `Валиден до ${sslInfo.validTo} (${sslInfo.daysRemaining} дни остават)`
                      : sslInfo.error || "Невалиден сертификат"
                    }
                  </p>
                </div>
              </div>
              {getStatusBadge()}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Информация за сертификата
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Издател:</span>
                    <span className="font-medium">{sslInfo.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Субект:</span>
                    <span className="font-medium">{sslInfo.subject}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Алгоритъм:</span>
                    <span className="font-medium">{sslInfo.algorithm}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Размер на ключа:</span>
                    <span className="font-medium">{sslInfo.keySize} bits</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Валидност
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Валиден от:</span>
                    <span className="font-medium">{sslInfo.validFrom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Валиден до:</span>
                    <span className="font-medium">{sslInfo.validTo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Дни остават:</span>
                    <span className={`font-medium ${sslInfo.daysRemaining < 30 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {sslInfo.daysRemaining}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {sslInfo.daysRemaining < 30 && sslInfo.isValid && (
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="font-medium">Предупреждение</span>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  SSL сертификатът изтича след {sslInfo.daysRemaining} дни. Препоръчваме да го подновите.
                </p>
              </div>
            )}

            {!sslInfo.isValid && (
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <XCircle className="h-4 w-4" />
                  <span className="font-medium">Проблем с SSL</span>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                  {sslInfo.error || "SSL сертификатът не е валиден или липсва."}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            🔒 Защо е важен SSL сертификатът?
          </h4>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>• Криптира данните между браузъра и сървъра</li>
            <li>• Показва доверие на посетителите</li>
            <li>• Подобрява SEO рейтинга в Google</li>
            <li>• Задължителен за онлайн плащания</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
