"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, XCircle, AlertTriangle, Globe, Lock, Eye, Network } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface DNSRecord {
  type: string
  name: string
  value: string
  ttl: number
  status: 'good' | 'warning' | 'error'
}

interface DNSSecurityResult {
  domain: string
  dnssec: boolean
  dnsOverHttps: boolean
  dnsOverTls: boolean
  records: DNSRecord[]
  securityScore: number
  issues: string[]
  recommendations: string[]
}

export function DNSSecurityChecker() {
  const [domain, setDomain] = useState("")
  const [result, setResult] = useState<DNSSecurityResult | null>(null)
  const [loading, setLoading] = useState(false)

  const checkDNSSecurity = async () => {
    if (!domain.trim()) {
      toast({
        title: "Грешка",
        description: "Моля, въведете домейн за проверка.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    setResult(null)

    try {
      // Симулация на DNS security проверка
      await new Promise(resolve => setTimeout(resolve, 2500))
      
      // Симулирани резултати
      const mockResult: DNSSecurityResult = {
        domain: domain,
        dnssec: Math.random() > 0.3, // 70% шанс за DNSSEC
        dnsOverHttps: Math.random() > 0.4, // 60% шанс за DoH
        dnsOverTls: Math.random() > 0.5, // 50% шанс за DoT
        records: [
          {
            type: "A",
            name: domain,
            value: "192.168.1.1",
            ttl: 3600,
            status: 'good'
          },
          {
            type: "AAAA",
            name: domain,
            value: "2001:db8::1",
            ttl: 3600,
            status: 'good'
          },
          {
            type: "MX",
            name: domain,
            value: "10 mail.example.com",
            ttl: 3600,
            status: 'good'
          },
          {
            type: "TXT",
            name: domain,
            value: "v=spf1 include:_spf.google.com ~all",
            ttl: 3600,
            status: 'warning'
          },
          {
            type: "CNAME",
            name: `www.${domain}`,
            value: domain,
            ttl: 3600,
            status: 'good'
          }
        ],
        securityScore: Math.floor(Math.random() * 40) + 60, // 60-100
        issues: [
          ...(Math.random() > 0.7 ? ["DNSSEC не е активиран"] : []),
          ...(Math.random() > 0.6 ? ["Липсва DMARC запис"] : []),
          ...(Math.random() > 0.8 ? ["Слаби TTL стойности"] : [])
        ],
        recommendations: [
          "Активирайте DNSSEC за допълнителна сигурност",
          "Добавете DMARC запис за email защита",
          "Настройте DNS over HTTPS/TLS",
          "Регулирайте TTL стойностите за по-добра производителност"
        ]
      }

      setResult(mockResult)
      
      toast({
        title: "Проверката завърши",
        description: `DNS Security Score: ${mockResult.securityScore}%`
      })
    } catch (error) {
      toast({
        title: "Грешка",
        description: "Възникна грешка при проверката на DNS сигурността.",
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
      case 'error':
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
      case 'error':
        return <Badge variant="destructive">Грешка</Badge>
      default:
        return <Badge variant="secondary">Неизвестно</Badge>
    }
  }

  const getSecurityScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    if (score >= 60) return "text-orange-600"
    return "text-red-600"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-purple-600" />
          DNS Security Проверка
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
                onKeyPress={(e) => e.key === 'Enter' && checkDNSSecurity()}
              />
              <Button 
                onClick={checkDNSSecurity} 
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
                <Globe className="h-5 w-5 text-purple-600" />
                <div>
                  <h3 className="font-semibold">{result.domain}</h3>
                  <p className="text-sm text-muted-foreground">
                    DNS Security Score: <span className={`font-medium ${getSecurityScoreColor(result.securityScore)}`}>
                      {result.securityScore}%
                    </span>
                  </p>
                </div>
              </div>
              <Badge variant={result.securityScore >= 80 ? "default" : result.securityScore >= 60 ? "warning" : "destructive"}>
                {result.securityScore}%
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  DNS Security функции
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">DNSSEC:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.dnssec ? 'good' : 'error')}
                      <span className="font-medium">{result.dnssec ? "Активиран" : "Неактивиран"}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">DNS over HTTPS:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.dnsOverHttps ? 'good' : 'error')}
                      <span className="font-medium">{result.dnsOverHttps ? "Поддържа се" : "Не се поддържа"}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">DNS over TLS:</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.dnsOverTls ? 'good' : 'error')}
                      <span className="font-medium">{result.dnsOverTls ? "Поддържа се" : "Не се поддържа"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  DNS записи
                </h4>
                <div className="space-y-2 text-sm">
                  {result.records.slice(0, 3).map((record, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{record.type}:</span>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.status)}
                        <span className="font-medium text-xs">{record.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Всички DNS записи
              </h4>
              <div className="space-y-2">
                {result.records.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(record.status)}
                      <div>
                        <p className="font-medium">{record.type} - {record.name}</p>
                        <p className="text-sm text-muted-foreground">{record.value} (TTL: {record.ttl}s)</p>
                      </div>
                    </div>
                    {getStatusBadge(record.status)}
                  </div>
                ))}
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

        <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
            🌐 Защо е важна DNS сигурността?
          </h4>
          <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
            <li>• <strong>DNSSEC</strong> - защитава от DNS spoofing атаки</li>
            <li>• <strong>DNS over HTTPS/TLS</strong> - криптира DNS заявките</li>
            <li>• <strong>DMARC/SPF</strong> - защитава от email spoofing</li>
            <li>• <strong>Правилни TTL</strong> - баланс между сигурност и производителност</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
