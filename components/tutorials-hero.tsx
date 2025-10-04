import { Badge } from "@/components/ui/badge"
import { BookOpen, Play, Clock, Users, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Tutorial {
  id: string
  title: string
  description: string
  category: string
  duration: string
  difficulty: string
  rating: number
  students: number
  image: string
  url: string
}

interface TutorialsHeroProps {
  featuredTutorial?: Tutorial | null
}

export function TutorialsHero({ featuredTutorial }: TutorialsHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Featured Tutorial */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-green-300" />
                <Badge className="bg-green-600 text-white">
                  РЪКОВОДСТВА
                </Badge>
              </div>
              
              {featuredTutorial ? (
                <>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                    {featuredTutorial.title}
                  </h1>
                  
                  <p className="text-lg text-green-100 leading-relaxed">
                    {featuredTutorial.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-green-200">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredTutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{featuredTutorial.rating} рейтинг</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{featuredTutorial.students.toLocaleString()} студенти</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={featuredTutorial.url}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Play className="h-4 w-4" />
                      <span>Започни урока</span>
                    </Link>
                    <Link 
                      href="#tutorials"
                      className="border border-white text-white hover:bg-white hover:text-green-900 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Всички уроци
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                    Ръководства и Уроци
                  </h1>
                  
                  <p className="text-lg text-green-100 leading-relaxed">
                    Професионални ръководства за киберсигурност, SEO оптимизация и AI технологии. 
                    Стъпка по стъпка уроци от експерти за всички нива.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="#tutorials"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Разгледай уроците
                    </Link>
                    <Link 
                      href="/tools"
                      className="border border-white text-white hover:bg-white hover:text-green-900 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Инструменти
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative">
            {featuredTutorial?.image ? (
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={featuredTutorial.image}
                  alt={featuredTutorial.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-green-600 text-white mb-2">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {featuredTutorial.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="bg-red-600">
                    {featuredTutorial.difficulty}
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl bg-green-700 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-green-100 font-medium">Ръководства</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
