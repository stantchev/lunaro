import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Shield, TrendingUp } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-bold">Абонирай се за нашия бюлетин</CardTitle>
            <p className="text-muted-foreground text-lg">
              Получавай най-актуалните новини за киберсигурност и SEO директно в пощенската си кутия
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Киберсигурност</h3>
                <p className="text-sm text-muted-foreground">Последни заплахи и защитни мерки</p>
              </div>

              <div className="text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">SEO Тенденции</h3>
                <p className="text-sm text-muted-foreground">Нови алгоритми и оптимизации</p>
              </div>

              <div className="text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Седмичен преглед</h3>
                <p className="text-sm text-muted-foreground">Обобщение на важните събития</p>
              </div>
            </div>

            {/* Signup Form */}
            <div className="max-w-md mx-auto">
              <div className="flex space-x-2">
                <Input type="email" placeholder="Въведи твоя имейл адрес" className="flex-1" />
                <Button type="submit">Абонирай се</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Няма спам. Можеш да се отпишеш по всяко време.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
