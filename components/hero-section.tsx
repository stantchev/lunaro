import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs sm:text-sm">
                Киберсигурност
              </Badge>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight break-words">
                Нови заплахи в киберпространството през 2025
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                Анализ на най-актуалните киберзаплахи и как да защитим нашите данни в дигиталната ера. 
                Експертни препоръки за бизнеса и потребителите.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Преди 2 часа</span>
              </div>
              <span>•</span>
              <span>5 мин четене</span>
            </div>

            <Button size="lg" className="group w-full sm:w-auto">
              Прочети повече
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Card className="overflow-hidden">
              <div className="aspect-[16/9] sm:aspect-[4/3] relative">
                <Image
                  src="/cybersecurity-shield.png"
                  alt="Киберсигурност"
                  fill
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
