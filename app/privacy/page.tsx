import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Database, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: "Политика за поверителност - Lunaro News | Защита на личните данни",
    template: "%s - Lunaro News",
  },
  description:
    "Политика за поверителност на Lunaro News – как защитаваме личните ви данни и гарантираме киберсигурност и прозрачност.",
  keywords:
    "политика за поверителност, Lunaro News лични данни, GDPR България, защита на лични данни, киберсигурност лични данни, сигурност SEO, поверителност Lunaro News",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/privacy",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/privacy",
    siteName: "Lunaro News",
    title: "Политика за поверителност - Lunaro News",
    description:
      "Lunaro News политика за поверителност – защита на личните данни и киберсигурност според GDPR стандартите.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Политика за поверителност - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Политика за поверителност - Lunaro News",
    description:
      "Прочетете политиката за поверителност на Lunaro News – гаранция за защита на вашите лични данни.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Политика за поверителност</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Вашата поверителност е важна за нас. Тази политика обяснява как събираме, използваме и защитаваме вашите
                лични данни.
              </p>

              <p className="text-sm text-muted-foreground">Последна актуализация: 18 януари 2025 г.</p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>Общ преглед</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Lunaro News ("ние", "нашият", "нас") се ангажира да защитава поверителността на нашите потребители.
                    Тази Политика за поверителност описва как събираме, използваме, съхраняваме и защитаваме
                    информацията, която получаваме от потребителите на нашия уебсайт https://lunaro.news.
                  </p>
                  <p className="text-muted-foreground">
                    Тази политика е в съответствие с Общия регламент за защита на данните (GDPR) и българското
                    законодателство за защита на личните данни.
                  </p>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>Какви данни събираме</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Лични данни</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Име и имейл адрес (при абониране за бюлетин)</li>
                      <li>Име, имейл и съобщение (при използване на контактната форма)</li>
                      <li>IP адрес и информация за браузъра (автоматично)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Технически данни</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Cookies и подобни технологии за проследяване</li>
                      <li>Данни за използването на уебсайта (Google Analytics)</li>
                      <li>Информация за устройството и операционната система</li>
                      <li>Данни за местоположението (приблизително, базирано на IP адреса)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Data Usage */}
              <Card>
                <CardHeader>
                  <CardTitle>Как използваме вашите данни</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Използваме събраните данни за следните цели:</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Предоставяне на услуги</h4>
                      <p className="text-sm text-muted-foreground">
                        За показване на съдържание, отговаряне на запитвания и изпращане на бюлетини
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Подобряване на уебсайта</h4>
                      <p className="text-sm text-muted-foreground">
                        За анализ на трафика, оптимизация на съдържанието и подобряване на потребителското изживяване
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Комуникация</h4>
                      <p className="text-sm text-muted-foreground">
                        За отговаряне на въпроси, изпращане на актуализации и важни съобщения
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Правни задължения</h4>
                      <p className="text-sm text-muted-foreground">
                        За спазване на приложимото законодателство и защита на нашите права
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card>
                <CardHeader>
                  <CardTitle>Споделяне на данни</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ние не продаваме, не търгуваме или не предаваме по друг начин вашите лични данни на трети страни,
                    освен в следните случаи:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Доставчици на услуги:</strong> Споделяме данни с доверени партньори, които ни помагат да
                      управляваме уебсайта (например, Google Analytics, хостинг доставчици)
                    </li>
                    <li>
                      <strong>Правни изисквания:</strong> Когато е необходимо за спазване на закона, съдебни заповеди
                      или правителствени разпореждания
                    </li>
                    <li>
                      <strong>Защита на правата:</strong> За защита на нашите права, собственост или безопасност, както
                      и на нашите потребители
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card>
                <CardHeader>
                  <CardTitle>Сигурност на данните</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Прилагаме подходящи технически и организационни мерки за защита на вашите лични данни:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>SSL криптиране за всички данни, предавани през уебсайта</li>
                    <li>Редовни актуализации на сигурността и мониторинг</li>
                    <li>Ограничен достъп до личните данни само за оторизиран персонал</li>
                    <li>Редовни резервни копия и планове за възстановяване</li>
                  </ul>
                </CardContent>
              </Card>

              {/* User Rights */}
              <Card>
                <CardHeader>
                  <CardTitle>Вашите права</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Съгласно GDPR имате следните права относно вашите лични данни:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Право на достъп</h4>
                      <p className="text-sm text-muted-foreground">Можете да поискате копие от личните си данни</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Право на корекция</h4>
                      <p className="text-sm text-muted-foreground">Можете да поискате корекция на неточни данни</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Право на изтриване</h4>
                      <p className="text-sm text-muted-foreground">Можете да поискате изтриване на личните си данни</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Право на ограничаване</h4>
                      <p className="text-sm text-muted-foreground">Можете да поискате ограничаване на обработката</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Право на преносимост</h4>
                      <p className="text-sm text-muted-foreground">Можете да поискате прехвърляне на данните</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Право на възражение</h4>
                      <p className="text-sm text-muted-foreground">Можете да възразите срещу обработката</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Контакт за въпроси относно поверителността</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ако имате въпроси относно тази Политика за поверителност или искате да упражните правата си, моля
                    свържете се с нас:
                  </p>

                  <div className="space-y-2">
                    <p>
                      <strong>Имейл:</strong> lunaro.news@gmail.com
                    </p>
                    <p>
                      <strong>Адрес:</strong> София, България
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Ще отговорим на вашето запитване в рамките на 30 дни от получаването му.
                  </p>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card>
                <CardHeader>
                  <CardTitle>Промени в политиката</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Запазваме си правото да актуализираме тази Политика за поверителност периодично. Всички промени ще
                    бъдат публикувани на тази страница с нова дата на актуализация. Препоръчваме ви редовно да
                    преглеждате тази политика за актуализации.
                  </p>
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
