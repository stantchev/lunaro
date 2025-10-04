"use client"

import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, TrendingUp } from "lucide-react"

interface ThreatLevelBannerProps {
  level: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"
  description: string
  trendingThreats?: string[]
}

export function ThreatLevelBanner({ 
  level, 
  description, 
  trendingThreats = [] 
}: ThreatLevelBannerProps) {
  const getLevelConfig = (level: string) => {
    switch (level) {
      case "LOW":
        return {
          color: "bg-green-600",
          text: "НИСКО",
          icon: Shield,
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-800"
        }
      case "MEDIUM":
        return {
          color: "bg-yellow-600",
          text: "СРЕДНО",
          icon: AlertTriangle,
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          textColor: "text-yellow-800"
        }
      case "HIGH":
        return {
          color: "bg-orange-600",
          text: "ВИСОКО",
          icon: AlertTriangle,
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
          textColor: "text-orange-800"
        }
      case "CRITICAL":
        return {
          color: "bg-red-600",
          text: "КРИТИЧНО",
          icon: AlertTriangle,
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-800"
        }
      default:
        return {
          color: "bg-gray-600",
          text: "НЕИЗВЕСТНО",
          icon: Shield,
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200",
          textColor: "text-gray-800"
        }
    }
  }

  const config = getLevelConfig(level)
  const Icon = config.icon

  return (
    <div className={`py-4 ${config.bgColor} border-y ${config.borderColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Icon className={`h-5 w-5 ${config.textColor}`} />
              <Badge className={`${config.color} text-white`}>
                {config.text}
              </Badge>
            </div>
            <span className={`font-medium ${config.textColor}`}>
              {description}
            </span>
          </div>
          
          {trendingThreats.length > 0 && (
            <div className="hidden md:flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Трендове: {trendingThreats.slice(0, 2).join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
