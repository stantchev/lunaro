import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Clock, Send, Phone, MessageSquare, Users, Globe, Award, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: "Контакти - Lunaro News | Свържете се с нас",
    template: "%s - Lunaro News",
  },
  description:
    "Свържете се с екипа на Lunaro News – задайте въпроси, предложете партньорства или изпратете информация за киберсигурност и SEO.",
  keywords:
    "Lunaro News контакти, свържете се с нас, контакт SEO новини, контакт киберсигурност, партньорства Lunaro News, SEO България, киберсигурност България",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/contact",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/contact",
    siteName: "Lunaro News",
    title: "Контакти - Lunaro News",
    description:
      "Контакти с Lunaro News – свържете се с нас за въпроси, партньорства и медийни запитвания.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Контакти - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакти - Lunaro News",
    description:
      "Свържете се с Lunaro News за въпроси, сътрудничества и информация по теми SEO и киберсигурност.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                <MessageSquare className="h-4 w-4" />
                Свържете се с нас
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Свържете се с нас
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                Имате въпроси, предложения или искате да си партнираме? Ние сме тук, за да ви помогнем!
              </p>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-200 dark:border-blue-800">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Бърз отговор</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-200 dark:border-blue-800">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Експертна поддръжка</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-200 dark:border-blue-800">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">Професионално обслужване</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Изпратете ни съобщение
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Попълнете формата по-долу и ние ще се свържем с вас в рамките на 24 часа
                    </p>
                  </div>

                  <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20">
                    <CardContent className="p-8">
                      <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-sm font-medium">Име *</Label>
                            <Input 
                              id="firstName" 
                              placeholder="Вашето име" 
                              required 
                              className="h-12 border-2 focus:border-blue-500 transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-sm font-medium">Фамилия *</Label>
                            <Input 
                              id="lastName" 
                              placeholder="Вашата фамилия" 
                              required 
                              className="h-12 border-2 focus:border-blue-500 transition-colors"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">Имейл адрес *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your@email.com" 
                            required 
                            className="h-12 border-2 focus:border-blue-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-medium">Компания/Организация</Label>
                          <Input 
                            id="company" 
                            placeholder="Име на компанията (по избор)" 
                            className="h-12 border-2 focus:border-blue-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-sm font-medium">Тема *</Label>
                          <Input 
                            id="subject" 
                            placeholder="Темата на вашето съобщение" 
                            required 
                            className="h-12 border-2 focus:border-blue-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium">Съобщение *</Label>
                          <Textarea
                            id="message"
                            placeholder="Опишете подробно вашия въпрос или предложение..."
                            rows={6}
                            required
                            className="border-2 focus:border-blue-500 transition-colors resize-none"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg transition-all duration-200 hover:shadow-xl"
                        >
                          <Send className="h-5 w-5 mr-2" />
                          Изпрати съобщение
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Контактна информация
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      Можете да се свържете с нас по следните начини. Отговаряме на всички запитвания в рамките на 24
                      часа.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/20 hover:shadow-xl transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Mail className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Имейл</h3>
                            <p className="text-muted-foreground mb-2 text-lg font-medium">contact@lunaro.news</p>
                            <p className="text-sm text-muted-foreground">За общи въпроси и предложения</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 hover:shadow-xl transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <MessageSquare className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Редакция</h3>
                            <p className="text-muted-foreground mb-2 text-lg font-medium">editor@lunaro.news</p>
                            <p className="text-sm text-muted-foreground">За предложения за статии и съдържание</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-900 dark:to-orange-950/20 hover:shadow-xl transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Clock className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Работно време</h3>
                            <p className="text-muted-foreground mb-1 font-medium">Понеделник - Петък: 9:00 - 18:00</p>
                            <p className="text-muted-foreground mb-2 font-medium">Събота - Неделя: Затворено</p>
                            <p className="text-sm text-muted-foreground">Българско време (EET/EEST)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20 hover:shadow-xl transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <MapPin className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Местоположение</h3>
                            <p className="text-muted-foreground mb-2 text-lg font-medium">София, България</p>
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
        <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MessageSquare className="h-4 w-4" />
                  Често задавани въпроси
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-4">
                  Често задавани въпроси
                </h2>
                <p className="text-xl text-muted-foreground">
                  Най-честите въпроси, които получаваме от нашите читатели
                </p>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 hover:shadow-xl transition-all duration-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      Как мога да предложа тема за статия?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Изпратете ни имейл на editor@lunaro.news с подробно описание на темата, защо смятате, че е
                      актуална, и евентуални източници или експерти, които можем да интервюираме.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/20 hover:shadow-xl transition-all duration-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      Приемате ли гост автори?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Да, приемаме качествени статии от експерти в областта на киберсигурността и SEO. Свържете се с нас
                      с примерни статии и кратка биография.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20 hover:shadow-xl transition-all duration-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      Как мога да се абонирам за новините ви?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
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
