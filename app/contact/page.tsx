import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Контакти - Lunaro News | Свържете се с нас",
  description:
    "Свържете се с екипа на Lunaro News за въпроси, предложения или партньорства. Контактна информация и форма за връзка.",
  keywords: "контакти, Lunaro News, връзка, имейл, телефон, партньорства, въпроси, България",
  openGraph: {
    title: "Контакти - Lunaro News",
    description: "Свържете се с екипа на Lunaro News за въпроси и предложения",
    url: "https://lunaro.news/contact",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Свържете се с нас</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Имате въпроси, предложения или искате да си партнираме? Ние сме тук, за да ви помогнем!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Изпратете ни съобщение</h2>

                  <Card>
                    <CardContent className="p-6">
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Име *</Label>
                            <Input id="firstName" placeholder="Вашето име" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Фамилия *</Label>
                            <Input id="lastName" placeholder="Вашата фамилия" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Имейл адрес *</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Компания/Организация</Label>
                          <Input id="company" placeholder="Име на компанията (по избор)" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Тема *</Label>
                          <Input id="subject" placeholder="Темата на вашето съобщение" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Съобщение *</Label>
                          <Textarea
                            id="message"
                            placeholder="Опишете подробно вашия въпрос или предложение..."
                            rows={6}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          <Send className="h-4 w-4 mr-2" />
                          Изпрати съобщение
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Контактна информация</h2>
                    <p className="text-muted-foreground mb-8">
                      Можете да се свържете с нас по следните начини. Отговаряме на всички запитвания в рамките на 24
                      часа.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Имейл</h3>
                            <p className="text-muted-foreground mb-2">contact@lunaro.news</p>
                            <p className="text-sm text-muted-foreground">За общи въпроси и предложения</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Редакция</h3>
                            <p className="text-muted-foreground mb-2">editor@lunaro.news</p>
                            <p className="text-sm text-muted-foreground">За предложения за статии и съдържание</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Clock className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Работно време</h3>
                            <p className="text-muted-foreground mb-1">Понеделник - Петък: 9:00 - 18:00</p>
                            <p className="text-muted-foreground mb-2">Събота - Неделя: Затворено</p>
                            <p className="text-sm text-muted-foreground">Българско време (EET/EEST)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Местоположение</h3>
                            <p className="text-muted-foreground mb-2">София, България</p>
                            <p className="text-sm text-muted-foreground">Работим дистанционно за по-добро обслужване</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Често задавани въпроси</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Как мога да предложа тема за статия?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Изпратете ни имейл на editor@lunaro.news с подробно описание на темата, защо смятате, че е
                      актуална, и евентуални източници или експерти, които можем да интервюираме.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Приемате ли гост автори?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Да, приемаме качествени статии от експерти в областта на киберсигурността и SEO. Свържете се с нас
                      с примерни статии и кратка биография.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Как мога да се абонирам за новините ви?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Можете да се абонирате за нашия бюлетин в долната част на всяка страница или да ни следвате в
                      социалните мрежи за най-актуалните новини.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
