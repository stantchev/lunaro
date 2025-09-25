import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cookie, Settings, BarChart3, Shield, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: "Политика за cookies - Lunaro News | Използване на бисквитки",
    template: "%s - Lunaro News",
  },
  description:
    "Политика за cookies на Lunaro News – научете как използваме бисквитки за подобряване на услугите, сигурността и потребителското изживяване.",
  keywords:
    "политика за cookies, бисквитки Lunaro News, използване на cookies, GDPR България, защита на лични данни, киберсигурност и бисквитки, SEO бисквитки",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/cookies",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/cookies",
    siteName: "Lunaro News",
    title: "Политика за cookies - Lunaro News",
    description:
      "Прочетете политиката за cookies на Lunaro News – как използваме бисквитки за сигурност и подобрено изживяване.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Политика за cookies - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Политика за cookies - Lunaro News",
    description:
      "Lunaro News – политика за cookies. Как използваме бисквитки за сигурност, SEO и по-добро изживяване.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

export default function CookiesPage() {
  const cookieTypes = [
    {
      name: "Необходими cookies",
      description: "Тези cookies са необходими за основното функциониране на уебсайта",
      examples: ["Сесийни cookies", "Настройки за език", "Съгласие за cookies"],
      duration: "Сесия или до 1 година",
      required: true,
      icon: Shield,
    },
    {
      name: "Аналитични cookies",
      description: "Помагат ни да разберем как посетителите използват уебсайта",
      examples: ["Google Analytics", "Статистики за посещения", "Данни за поведението"],
      duration: "До 2 години",
      required: false,
      icon: BarChart3,
    },
    {
      name: "Функционални cookies",
      description: "Запомнят вашите предпочитания и персонализират изживяването",
      examples: ["Предпочитания за тема", "Запомнени настройки", "Персонализация"],
      duration: "До 1 година",
      required: false,
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Cookie className="h-8 w-8 text-primary" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Политика за cookies</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Как използваме cookies и подобни технологии за подобряване на вашето изживяване в Lunaro News
              </p>

              <p className="text-sm text-muted-foreground">Последна актуализация: 18 януари 2025 г.</p>
            </div>
          </div>
        </section>

        {/* Cookie Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* What are Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle>Какво са cookies?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Cookies са малки текстови файлове, които се съхраняват на вашето устройство (компютър, таблет или
                    мобилен телефон) когато посещавате уебсайт. Те помагат на уебсайта да "запомни" информация за вашето
                    посещение, като предпочитания за език или данни за влизане.
                  </p>
                  <p className="text-muted-foreground">
                    Lunaro News използва cookies за подобряване на функционалността на уебсайта, анализ на трафика и
                    персонализиране на съдържанието.
                  </p>
                </CardContent>
              </Card>

              {/* Types of Cookies */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Типове cookies, които използваме</h2>

                <div className="space-y-6">
                  {cookieTypes.map((type, index) => (
                    <Card key={index} className="relative">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <type.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{type.name}</CardTitle>
                              {type.required && (
                                <Badge variant="secondary" className="mt-1">
                                  Необходими
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{type.description}</p>

                        <div>
                          <h4 className="font-semibold mb-2">Примери:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {type.examples.map((example, idx) => (
                              <li key={idx}>{example}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            <strong>Продължitelност:</strong> {type.duration}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Third Party Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle>Cookies от трети страни</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Освен нашите собствени cookies, използваме и cookies от трети страни за следните цели:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Google Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Използваме Google Analytics за анализ на трафика и поведението на потребителите. Тези cookies ни
                        помагат да разберем кои страници са най-популярни и как можем да подобрим уебсайта.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Социални мрежи</h4>
                      <p className="text-sm text-muted-foreground">
                        Когато споделяте съдържание в социалните мрежи, те могат да поставят cookies на вашето
                        устройство.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Managing Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle>Управление на cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Настройки на браузъра</h4>
                    <p className="text-muted-foreground mb-3">
                      Можете да контролирате cookies чрез настройките на вашия браузър:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>
                        <strong>Chrome:</strong> Настройки → Поверителност и сигурност → Cookies и други данни от
                        сайтове
                      </li>
                      <li>
                        <strong>Firefox:</strong> Настройки → Поверителност и сигурност → Cookies и данни от сайтове
                      </li>
                      <li>
                        <strong>Safari:</strong> Предпочитания → Поверителност → Управление на данните от уебсайтове
                      </li>
                      <li>
                        <strong>Edge:</strong> Настройки → Cookies и разрешения за сайтове
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Последици от деактивирането</h4>
                    <p className="text-muted-foreground">
                      Ако деактивирате cookies, някои функции на уебсайта може да не работят правилно. Например, може да
                      не можете да запазите предпочитанията си или да получавате персонализирано съдържание.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cookie Consent */}
              <Card>
                <CardHeader>
                  <CardTitle>Съгласие за cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    При първото ви посещение на Lunaro News ще видите банер за cookies, където можете да изберете кои
                    типове cookies да разрешите. Можете да промените решението си по всяко време.
                  </p>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Управление на настройките</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Кликнете на бутона по-долу, за да промените настройките си за cookies:
                    </p>
                    <Button variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Настройки за cookies
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card>
                <CardHeader>
                  <CardTitle>Промени в политиката</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Можем да актуализираме тази Политика за cookies периодично, за да отразим промени в нашите практики
                    или по правни причини. Всички промени ще бъдат публикувани на тази страница.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Въпроси за cookies</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ако имате въпроси относно нашата употреба на cookies, моля свържете се с нас:
                  </p>

                  <div className="space-y-2">
                    <p>
                      <strong>Имейл:</strong> privacy@lunaro.news
                    </p>
                    <p>
                      <strong>Адрес:</strong> София, България
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
