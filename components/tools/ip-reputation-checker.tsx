"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, XCircle, AlertTriangle, Globe, Eye, Network } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface IPReputationResult {
  ip: string
  reputation: 'good' | 'suspicious' | 'malicious' | 'unknown'
  country: string
  isp: string
  blacklists: string[]
  threats: string[]
  score: number
  recommendations: string[]
}

export function IPReputationChecker() {
  const [ip, setIp] = useState("")
  const [result, setResult] = useState<IPReputationResult | null>(null)
  const [loading, setLoading] = useState(false)

  const checkIPReputation = async () => {
    if (!ip.trim()) {
      toast({
        title: "Грешка",
        description: "Моля, въведете IP адрес за проверка.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    setResult(null)

    try {
      // Симулация на IP reputation проверка
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Симулирани резултати
      const mockResult: IPReputationResult = {
        ip: ip,
        reputation: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'suspicious' : 'malicious',
        country: ["България", "САЩ", "Германия", "Великобритания", "Франция"][Math.floor(Math.random() * 5)],
        isp: ["Telecom", "Comcast", "Deutsche Telekom", "BT", "Orange"][Math.floor(Math.random() * 5)],
        blacklists: [
          ...(Math.random() > 0.8 ? ["Spamhaus"] : []),
          ...(Math.random() > 0.7 ? ["Surbl"] : []),
          ...(Math.random() > 0.9 ? ["Barracuda"] : [])
        ],
        threats: [
          ...(Math.random() > 0.6 ? ["Botnet"] : []),
          ...(Math.random() > 0.7 ? ["Malware"] : []),
          ...(Math.random() > 0.8 ? ["Spam"] : [])
        ],
        score: Math.floor(Math.random() * 100),
        recommendations: [
          "Мониторирайте активността на този IP адрес",
          "Проверете логовете за подозрителна активност",
          "Обновете firewall правилата при необходимост"
        ]
      }

      setResult(mockResult)
      
      toast({
        title: "Проверката завърши",
        description: `IP репутация: ${mockResult.reputation} (Score: ${mockResult.score}%)`
      })
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Възникна грешка при проверката на IP репутацията.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const getReputationIcon = (reputation: string) => {
    switch (reputation) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'suspicious':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case 'malicious':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <XCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const getReputationBadge = (reputation: string) => {
    switch (reputation) {
      case 'good':
        return <Badge variant="default" className="bg-green-100 text-green-800">Добра</Badge>
      case 'suspicious':
        return <Badge variant="warning">Подозрителна</Badge>
      case 'malicious':
        return <Badge variant="destructive">Злонамерена</Badge>
      default:
        return <Badge variant="secondary">Неизвестна</Badge>
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    if (score >= 40) return "text-orange-600"
    return "text-red-600"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-orange-600" />
          IP Reputation Проверка
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ip">IP адрес за проверка</Label>
            <div className="flex gap-2">
              <Input
                id="ip"
                placeholder="192.168.1.1"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkIPReputation()}
              />
              <Button 
                onClick={checkIPReputation} 
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
                <Network className="h-5 w-5 text-orange-600" />
                <div>
                  <h3 className="font-semibold">{result.ip}</h3>
                  <p className="text-sm text-muted-foreground">
                    Репутация: {result.reputation} | Score: <span className={`font-medium ${getScoreColor(result.score)}`}>
                      {result.score}%
                    </span>
                  </p>
                </div>
              </div>
              {getReputationBadge(result.reputation)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Основна информация
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">IP адрес:</span>
                    <span className="font-medium">{result.ip}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Държава:</span>
                    <span className="font-medium">{result.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ISP:</span>
                    <span className="font-medium">{result.isp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Репутация:</span>
                    <div className="flex items-center gap-2">
                      {getReputationIcon(result.reputation)}
                      <span className="font-medium">{result.reputation}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Безопасност
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Blacklists:</span>
                    <span className="font-medium">{result.blacklists.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Threats:</span>
                    <span className="font-medium">{result.threats.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Security Score:</span>
                    <span className={`font-medium ${getScoreColor(result.score)}`}>
                      {result.score}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {result.blacklists.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Blacklist записи
                </h4>
                <div className="space-y-2">
                  {result.blacklists.map((blacklist, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-800 dark:text-red-200">{blacklist}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {result.threats.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Открити заплахи
                </h4>
                <div className="space-y-2">
                  {result.threats.map((threat, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-orange-800 dark:text-orange-200">{threat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Препоръки
              </h4>
              <div className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span className="text-sm text-blue-800 dark:text-blue-200">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
            🛡️ Защо е важна IP репутацията?
          </h4>
          <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
            <li>• <strong>Blacklist защита</strong> - предотвратява достъп от злонамерени IP адреси</li>
            <li>• <strong>Threat detection</strong> - открива ботове, malware и spam</li>
            <li>• <strong>Geolocation</strong> - контролира достъпа по географски принцип</li>
            <li>• <strong>ISP анализ</strong> - идентифицира подозрителни мрежови провайдери</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
