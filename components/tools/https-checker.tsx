"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, XCircle, AlertTriangle, Lock, Globe, Eye } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface HTTPSResult {
  isHTTPS: boolean
  redirects: boolean
  hsts: boolean
  mixedContent: boolean
  certificateValid: boolean
  protocolVersion: string
  cipherSuite: string
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F'
  issues: string[]
  recommendations: string[]
}

export function HTTPSChecker() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState<HTTPSResult | null>(null)
  const [loading, setLoading] = useState(false)

  const checkHTTPS = async () => {
    if (!url.trim()) {
      toast({
        title: "Грешка",
        description: "Моля, въведете URL адрес за проверка.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    setResult(null)

    try {
      // Симулация на HTTPS проверка
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Симулирани резултати
      const mockResult: HTTPSResult = {
        isHTTPS: Math.random() > 0.2, // 80% шанс за HTTPS
        redirects: Math.random() > 0.3,
        hsts: Math.random() > 0.4,
        mixedContent: Math.random() > 0.7, // 30% шанс за mixed content
        certificateValid: Math.random() > 0.1, // 90% шанс за валиден сертификат
        protocolVersion: "TLS 1.3",
        cipherSuite: "TLS_AES_256_GCM_SHA384",
        grade: Math.random() > 0.3 ? 'A' : Math.random() > 0.5 ? 'B' : 'C',
        issues: [
          ...(Math.random() > 0.7 ? ["Mixed content detected"] : []),
          ...(Math.random() > 0.8 ? ["Weak cipher suite"] : []),
          ...(Math.random() > 0.6 ? ["No HSTS header"] : [])
        ],
        recommendations: [
          "Enable HSTS for better security",
          "Use strong cipher suites only",
          "Implement certificate pinning",
          "Regular security audits"
        ]
      }

      setResult(mockResult)
      
      toast({
        title: "Проверката завърши",
        description: mockResult.isHTTPS 
          ? "HTTPS е правилно конфигуриран." 
          : "HTTPS не е активиран или има проблеми."
      })
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Възникна грешка при проверката на HTTPS.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+':
      case 'A':
        return "text-green-600 bg-green-100"
      case 'B':
        return "text-blue-600 bg-blue-100"
      case 'C':
        return "text-yellow-600 bg-yellow-100"
      case 'D':
        return "text-orange-600 bg-orange-100"
      case 'F':
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle className="h-4 w-4 text-green-500" />
    ) : (
      <XCircle className="h-4 w-4 text-red-500" />
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-600" />
          Проверка на HTTPS
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
                onKeyPress={(e) => e.key === 'Enter' && checkHTTPS()}
              />
              <Button 
                onClick={checkHTTPS} 
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

        {result && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold">{url}</h3>
                  <p className="text-sm text-muted-foreground">
                    HTTPS Status: {result.isHTTPS ? "Активиран" : "Неактивиран"}
                  </p>
                </div>
              </div>
              <Badge className={`${getGradeColor(result.grade)} border-0`}>
                Grade: {result.grade}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Основна информация
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">HTTPS:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.isHTTPS)}
                      <span className="font-medium">{result.isHTTPS ? "Да" : "Не"}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">HSTS:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.hsts)}
                      <span className="font-medium">{result.hsts ? "Да" : "Не"}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Сертификат:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.certificateValid)}
                      <span className="font-medium">{result.certificateValid ? "Валиден" : "Невалиден"}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Mixed Content:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(!result.mixedContent)}
                      <span className="font-medium">{result.mixedContent ? "Да" : "Не"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Технически детайли
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">TLS версия:</span>
                    <span className="font-medium">{result.protocolVersion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cipher Suite:</span>
                    <span className="font-medium text-xs">{result.cipherSuite}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Автоматични пренасочвания:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.redirects)}
                      <span className="font-medium">{result.redirects ? "Да" : "Не"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {result.issues.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Намерени проблеми
                </h4>
                <div className="space-y-2">
                  {result.issues.map((issue, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-800 dark:text-red-200">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Препоръки за подобряване
              </h4>
              <div className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <Lock className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span className="text-sm text-blue-800 dark:text-blue-200">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            🔒 Защо е важен HTTPS?
          </h4>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>• Криптира данните между браузъра и сървъра</li>
            <li>• Защитава от man-in-the-middle атаки</li>
            <li>• Показва доверие на посетителите</li>
            <li>• Задължителен за SEO и модерни браузъри</li>
            <li>• Необходим за PWA и модерни web API</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
