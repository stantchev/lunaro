"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lock, Eye, EyeOff, CheckCircle, XCircle, AlertTriangle, Shield } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface PasswordCheck {
  name: string
  passed: boolean
  description: string
}

export function PasswordStrengthTester() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [checks, setChecks] = useState<PasswordCheck[]>([])

  const passwordChecks = useMemo(() => {
    const checks: PasswordCheck[] = [
      {
        name: "Дължина",
        passed: password.length >= 12,
        description: `Минимум 12 символа (текущо: ${password.length})`
      },
      {
        name: "Големи букви",
        passed: /[A-Z]/.test(password),
        description: "Съдържа поне една главна буква"
      },
      {
        name: "Малки букви",
        passed: /[a-z]/.test(password),
        description: "Съдържа поне една малка буква"
      },
      {
        name: "Цифри",
        passed: /\d/.test(password),
        description: "Съдържа поне една цифра"
      },
      {
        name: "Специални знаци",
        passed: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
        description: "Съдържа поне един специален знак"
      },
      {
        name: "Без общи думи",
        passed: !/(password|123456|qwerty|admin|letmein)/i.test(password),
        description: "Не съдържа общи думи или шаблони"
      },
      {
        name: "Без повтарящи се символи",
        passed: !/(.)\1{2,}/.test(password),
        description: "Няма повече от 2 последователни еднакви символа"
      },
      {
        name: "Без последователни символи",
        passed: !/(abc|123|qwe|asd)/i.test(password),
        description: "Няма последователни символи (abc, 123, etc.)"
      }
    ]

    setChecks(checks)
    return checks
  }, [password])

  const getStrengthScore = () => {
    if (password.length === 0) return 0
    const passedChecks = passwordChecks.filter(check => check.passed).length
    return Math.round((passedChecks / passwordChecks.length) * 100)
  }

  const getStrengthLevel = () => {
    const score = getStrengthScore()
    if (score >= 80) return { level: "Много силна", color: "text-green-600", bgColor: "bg-green-100" }
    if (score >= 60) return { level: "Силна", color: "text-blue-600", bgColor: "bg-blue-100" }
    if (score >= 40) return { level: "Средна", color: "text-yellow-600", bgColor: "bg-yellow-100" }
    if (score >= 20) return { level: "Слаба", color: "text-orange-600", bgColor: "bg-orange-100" }
    return { level: "Много слаба", color: "text-red-600", bgColor: "bg-red-100" }
  }

  const generateStrongPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    let password = ""
    
    // Генерираме парола с поне един символ от всяка категория
    password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)]
    password += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]
    password += "0123456789"[Math.floor(Math.random() * 10)]
    password += "!@#$%^&*()_+-=[]{}|;:,.<>?"[Math.floor(Math.random() * 32)]
    
    // Добавяме още символи до 16 общо
    for (let i = 4; i < 16; i++) {
      password += chars[Math.floor(Math.random() * chars.length)]
    }
    
    // Разбъркваме символите
    setPassword(password.split('').sort(() => Math.random() - 0.5).join(''))
    
    toast({
      title: "Генерирана парола",
      description: "Нова силна парола е генерирана."
    })
  }

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password)
      toast({
        title: "Копирано!",
        description: "Паролата е копирана в клипборда."
      })
    } catch (err) {
      toast({
        title: "Грешка",
        description: "Неуспешно копиране в клипборда.",
        variant: "destructive"
      })
    }
  }

  const clearPassword = () => {
    setPassword("")
    setChecks([])
  }

  const strength = getStrengthLevel()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-green-600" />
          Тест за силни пароли
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Въведете парола за тест</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Въведете парола..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Button variant="outline" onClick={generateStrongPassword}>
                <Shield className="h-4 w-4 mr-2" />
                Генерирай
              </Button>
            </div>
          </div>
        </div>

        {password && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-green-600" />
                <div>
                  <h3 className="font-semibold">Анализ на паролата</h3>
                  <p className="text-sm text-muted-foreground">
                    Сила: {getStrengthScore()}% ({passwordChecks.filter(c => c.passed).length}/{passwordChecks.length} критерия)
                  </p>
                </div>
              </div>
              <Badge className={`${strength.bgColor} ${strength.color} border-0`}>
                {strength.level}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Сила на паролата</span>
                <span>{getStrengthScore()}%</span>
              </div>
              <Progress value={getStrengthScore()} className="h-2" />
            </div>

            <div className="space-y-2">
              {passwordChecks.map((check, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    {check.passed ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <div>
                      <p className="font-medium">{check.name}</p>
                      <p className="text-sm text-muted-foreground">{check.description}</p>
                    </div>
                  </div>
                  <Badge variant={check.passed ? "default" : "destructive"} className="text-xs">
                    {check.passed ? "✓" : "✗"}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={copyPassword} className="flex-1">
                <Lock className="h-4 w-4 mr-2" />
                Копирай парола
              </Button>
              <Button variant="outline" onClick={clearPassword}>
                Изчисти
              </Button>
            </div>
          </div>
        )}

        <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            🔐 Съвети за сигурни пароли:
          </h4>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>• Използвайте поне 12 символа</li>
            <li>• Комбинирайте букви, цифри и специални знаци</li>
            <li>• Избягвайте лични данни и общи думи</li>
            <li>• Използвайте уникална парола за всеки акаунт</li>
            <li>• Обновявайте паролите редовно</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
