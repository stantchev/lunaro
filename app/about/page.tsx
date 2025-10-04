import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Users, Award, Mail, Phone } from "lucide-react"
import { t } from "@/lib/i18n"

export const metadata: Metadata = {
  title: {
    default: "За нас - Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Разберете кои сме ние в Lunaro News – водещото издание за киберсигурност и SEO новини в България. Експертен екип, мисия и визия.",
  keywords:
    "Lunaro News, за нас, киберсигурност България, SEO експерти, SEO оптимизация, хакерски новини, технологии България, мисия SEO, дигитална сигурност, SEO България",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/about",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/about",
    siteName: "Lunaro News",
    title: "За нас - Lunaro News",
    description:
      "Кои сме ние – Lunaro News. Водещо издание за киберсигурност и SEO оптимизация в България.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "За нас - Lunaro News",
    description:
      "Научете повече за Lunaro News – български лидер в новините за киберсигурност и SEO.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Милен Станчев",
      role: "Главен редактор",
      specialty: "SEO специалист",
      experience: "12+ години опит в SEO и дигитален маркетинг",
      description:
        "Сертифициран Google специалист с дългогодишен опит в SEO оптимизация и управление на дигитални проекти. Експерт в областта на киберсигурността с фокус върху защитата на уебсайтове и дигитални активи.",
    },
  ]

  const stats = [
    { icon: Users, label: "Активни читатели", value: "50,000+" },
    { icon: Shield, label: "Статии за сигурност", value: "500+" },
    { icon: TrendingUp, label: "SEO анализи", value: "300+" },
    { icon: Award, label: "Години опит", value: "10+" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {t("about")}
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">За Lunaro News</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Ние сме водещото българско издание, специализирано в киберсигурност и SEO оптимизация. Нашата мисия е да
                информираме и образоваме българската общност за най-актуалните тенденции в дигиталната сигурност и
                търсачната оптимизация.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Нашата мисия</h2>
                  <p className="text-muted-foreground text-lg">
                    В Lunaro News вярваме, че информацията е ключът към по-сигурен и по-ефективен дигитален свят. Ние се
                    стремим да предоставяме най-актуалните новини, задълбочени анализи и практически съвети в областта
                    на киберсигурността и SEO.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Нашият екип от експерти работи денонощно, за да следи последните тенденции и да ги превежда в
                    полезна информация за нашите читатели - от IT специалисти до бизнес собственици и обикновени
                    потребители.
                  </p>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <span>Киберсигурност</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Актуални новини за заплахи, уязвимости и защитни мерки
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-secondary" />
                        <span>SEO Оптимизация</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Стратегии, техники и анализи за подобряване на позициите в Google
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Нашият екип</h2>
                <p className="text-muted-foreground text-lg">Запознайте се с експерта, който стои зад Lunaro News</p>
              </div>

              <div className="flex justify-center">
                <div className="max-w-md">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Users className="h-12 w-12 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <div className="space-y-2">
                          <Badge variant="outline">{member.role}</Badge>
                          <Badge variant="secondary">{member.specialty}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-sm text-muted-foreground">{member.experience}</div>
                        <p className="text-sm text-muted-foreground">{member.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">{t("contact")}</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center space-x-2">
                      <Mail className="h-5 w-5" />
                      <span>Имейл</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">contact@lunaro-news.bg</p>
                    <p className="text-sm text-muted-foreground mt-2">За въпроси, предложения и партньорства</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>Телефон</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+359 2 XXX XXXX</p>
                    <p className="text-sm text-muted-foreground mt-2">Работно време: 9:00 - 18:00</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">
                  Имате идея за статия или искате да споделите новина? Свържете се с нас - ние винаги търсим качествено
                  съдържание за нашите читатели.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
