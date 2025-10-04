import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { URLSecurityScanner } from "@/components/tools/url-security-scanner"
import { SSLChecker } from "@/components/tools/ssl-checker"
import { HTTPHeadersAnalyzer } from "@/components/tools/http-headers-analyzer"
import { PasswordStrengthTester } from "@/components/tools/password-strength-tester"
import { VulnerabilityScanner } from "@/components/tools/vulnerability-scanner"
import { HTTPSChecker } from "@/components/tools/https-checker"
import { DNSSecurityChecker } from "@/components/tools/dns-security-checker"
import { IPReputationChecker } from "@/components/tools/ip-reputation-checker"
import { SecurityHeadersChecker } from "@/components/tools/security-headers-checker"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Lock, AlertTriangle, Eye, Search, Globe, Network } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Инструменти за киберсигурност - Lunaro News | Безплатни онлайн инструменти",
  description:
    "Колекция от безплатни инструменти за киберсигурност - SSL проверка, анализ на HTTP headers, тест за пароли, сканиране за уязвимости и много други.",
  keywords:
    "киберсигурност, SSL проверка, HTTP headers, пароли, уязвимости, HTTPS, DNS, сигурност, България",
  openGraph: {
    title: "Инструменти за киберсигурност - Lunaro News",
    description: "Колекция от безплатни инструменти за киберсигурност и анализ на сигурността",
    url: "https://lunaro.news/security-tools",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/security-tools",
  },
}

export default function SecurityToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Инструменти за киберсигурност
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Защитете вашия уебсайт с професионални инструменти
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Колекция от безплатни инструменти за анализ на сигурността, проверка на SSL сертификати, 
                тестване на пароли и откриване на уязвимости
              </p>
            </div>
          </div>
        </section>

        {/* Critical Security Scanner */}
        <section className="py-16 bg-red-50 dark:bg-red-950/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3 text-red-800 dark:text-red-200">
                  <Shield className="h-8 w-8 text-red-600" />
                  КРИТИЧЕН БЕЗОПАСНОСТЕН СКАНЕР
                </h2>
                <p className="text-lg text-red-700 dark:text-red-300">
                  Проверете URL адреси за фишинг, зловреден софтуер и други заплахи
                </p>
              </div>

              <div className="mb-16">
                <URLSecurityScanner />
              </div>
            </div>
          </div>
        </section>

        {/* Security Tools */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Lock className="h-8 w-8 text-red-600" />
                  Допълнителни инструменти за киберсигурност
                </h2>
                <p className="text-muted-foreground">
                  Използвайте нашите безплатни инструменти за анализ и подобряване на сигурността на вашия уебсайт
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <SSLChecker />
                <HTTPHeadersAnalyzer />
                <PasswordStrengthTester />
                <VulnerabilityScanner />
                <HTTPSChecker />
                <DNSSecurityChecker />
                <IPReputationChecker />
                <SecurityHeadersChecker />
              </div>
            </div>
          </div>
        </section>

        {/* Security Tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-yellow-600" />
                  Съвети за киберсигурност
                </h2>
                <p className="text-muted-foreground">
                  Основни практики за защита на вашия уебсайт и данни
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold">SSL Сертификати</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Винаги използвайте HTTPS за защита на данните на вашите потребители. 
                    Проверявайте редовно валидността на SSL сертификатите.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold">Сигурни пароли</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Използвайте сложни пароли с поне 12 символа, включващи букви, цифри и специални знаци. 
                    Никога не използвайте една и съща парола за различни акаунти.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-semibold">HTTP Headers</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Настройте правилните security headers като HSTS, CSP, X-Frame-Options 
                    за допълнителна защита срещу различни атаки.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-semibold">Редовни проверки</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Провеждайте редовни сканирания за уязвимости и обновявайте софтуера си. 
                    Мониторирайте логовете за подозрителна активност.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-6 w-6 text-cyan-600" />
                    <h3 className="text-lg font-semibold">DNS Безопасност</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Използвайте DNS over HTTPS (DoH) или DNS over TLS (DoT) за защита на DNS заявките. 
                    Настройте DNSSEC за допълнителна сигурност.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Network className="h-6 w-6 text-orange-600" />
                    <h3 className="text-lg font-semibold">Мрежова сигурност</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Използвайте firewall, VPN и други мрежови защитни механизми. 
                    Ограничете достъпа до административни панели.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Нуждаете се от професионална помощ?</h2>
              <p className="text-muted-foreground text-lg">
                Нашите експерти по киберсигурност могат да ви помогнат с аудит на сигурността, 
                настройка на защитни механизми и обучение на екипа ви
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Свържете се с нас</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}