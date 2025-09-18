import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Общи условия - Lunaro News | Правила за използване",
  description:
    "Общи условия за използване на Lunaro News. Правила, отговорности и ограничения при използване на нашия уебсайт и услуги.",
  keywords: "общи условия, правила за използване, условия за ползване, Lunaro News, авторски права, България",
  openGraph: {
    title: "Общи условия - Lunaro News",
    description: "Правила и условия за използване на Lunaro News",
    url: "https://lunaro.news/terms",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Scale className="h-8 w-8 text-primary" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Общи условия</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Правила и условия за използване на уебсайта и услугите на Lunaro News
              </p>

              <p className="text-sm text-muted-foreground">Последна актуализация: 18 януари 2025 г.</p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Въведение</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Добре дошли в Lunaro News. Тези Общи условия ("Условия") регулират използването на нашия уебсайт
                    https://lunaro.news ("Услугата") и всички свързани услуги, предоставяни от Lunaro News ("ние",
                    "нас", "нашия").
                  </p>
                  <p className="text-muted-foreground">
                    Чрез достъп до или използване на нашата Услуга, вие се съгласявате да бъдете обвързани от тези
                    Условия. Ако не се съгласявате с някоя част от тези условия, тогава нямате разрешение да използвате
                    Услугата.
                  </p>
                </CardContent>
              </Card>

              {/* Acceptance */}
              <Card>
                <CardHeader>
                  <CardTitle>Приемане на условията</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Чрез използване на нашия уебсайт, вие потвърждавате, че:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Сте на възраст най-малко 18 години или имате съгласието на родител/настойник</li>
                    <li>Имате правната способност да сключвате обвързващи договори</li>
                    <li>Ще използвате Услугата в съответствие с тези Условия</li>
                    <li>Всички предоставени от вас данни са точни и актуални</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Use of Service */}
              <Card>
                <CardHeader>
                  <CardTitle>Използване на услугата</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Разрешено използване</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Четене и споделяне на статии за лични и образователни цели</li>
                      <li>Абониране за нашия бюлетин</li>
                      <li>Използване на контактната форма за легитимни запитвания</li>
                      <li>Коментиране и участие в дискусии (когато е налично)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Забранено използване</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Копиране, разпространение или модифициране на съдържанието без разрешение</li>
                      <li>Използване на автоматизирани системи за събиране на данни (scraping)</li>
                      <li>Опити за хакване, нарушаване или компрометиране на сигурността</li>
                      <li>Изпращане на спам, злонамерено съдържание или вируси</li>
                      <li>Нарушаване на авторските права или други права на интелектуална собственост</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <CardTitle>Интелектуална собственост</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Цялото съдържание на Lunaro News, включително но не ограничено до текст, графики, логота,
                    изображения, аудио клипове, дигитални изтегляния и софтуер, е собственост на Lunaro News или нейните
                    лицензодатели и е защитено от авторски права и други закони за интелектуална собственост.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">Ограничена лицензия</h4>
                    <p className="text-muted-foreground">
                      Предоставяме ви ограничена, неизключителна, непрехвърляема лицензия за достъп и използване на
                      Услугата за лични, некомерсиални цели в съответствие с тези Условия.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* User Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Потребителско съдържание</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Когато изпращате съдържание чрез нашите форми или други канали за комуникация, вие:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Запазвате собствеността върху вашето съдържание</li>
                    <li>Предоставяте на Lunaro News неизключителна лицензия за използване на съдържанието</li>
                    <li>Гарантирате, че имате правото да споделите съдържанието</li>
                    <li>Се съгласявате, че съдържанието не нарушава права на трети страни</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Disclaimers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <span>Отказ от отговорност</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Информационни цели</h4>
                    <p className="text-muted-foreground">
                      Съдържанието на Lunaro News е предназначено само за информационни цели. Не предоставяме
                      професионални съвети по киберсигурност или SEO и не носим отговорност за решения, взети въз основа
                      на нашето съдържание.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Точност на информацията</h4>
                    <p className="text-muted-foreground">
                      Въпреки че се стремим да предоставяме точна и актуална информация, не гарантираме пълнотата,
                      точността или надеждността на съдържанието.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Външни връзки</h4>
                    <p className="text-muted-foreground">
                      Нашият уебсайт може да съдържа връзки към външни сайтове. Не носим отговорност за съдържанието или
                      практиките за поверителност на тези сайтове.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card>
                <CardHeader>
                  <CardTitle>Ограничение на отговорността</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    В максималната степен, разрешена от закона, Lunaro News не носи отговорност за:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Преки, непреки, случайни или последващи щети</li>
                    <li>Загуба на печалби, данни или други нематериални загуби</li>
                    <li>Прекъсвания в услугата или технически проблеми</li>
                    <li>Действия на трети страни или външни фактори</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card>
                <CardHeader>
                  <CardTitle>Прекратяване</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Запазваме си правото да прекратим или ограничим достъпа ви до Услугата по всяко време, без
                    предизвестие, поради нарушение на тези Условия или по други причини.
                  </p>
                  <p className="text-muted-foreground">
                    Можете да прекратите използването на Услугата по всяко време, като спрете да я използвате.
                  </p>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardHeader>
                  <CardTitle>Приложимо право</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Тези Условия се регулират от и се тълкуват в съответствие с българското право. Всички спорове ще
                    бъдат решавани от компетентните български съдилища.
                  </p>
                </CardContent>
              </Card>

              {/* Changes */}
              <Card>
                <CardHeader>
                  <CardTitle>Промени в условията</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Запазваме си правото да модифицираме тези Условия по всяко време. Промените влизат в сила веднага
                    след публикуването им на тази страница. Продължаването на използването на Услугата след промените
                    означава приемане на новите условия.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Контакт</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ако имате въпроси относно тези Общи условия, моля свържете се с нас:
                  </p>

                  <div className="space-y-2">
                    <p>
                      <strong>Имейл:</strong> legal@lunaro.news
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
