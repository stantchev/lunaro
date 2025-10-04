"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Copy, RefreshCw, Shield, CheckCircle } from "lucide-react"

export function PasswordGenerator() {
  const [length, setLength] = useState([16])
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [excludeSimilar, setExcludeSimilar] = useState(false)
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let charset = ""
    
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (includeNumbers) charset += "0123456789"
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?"
    
    if (excludeSimilar) {
      charset = charset.replace(/[0O1lI]/g, "")
    }
    
    if (excludeAmbiguous) {
      charset = charset.replace(/[{}[\]()\/\\'`~,;.<>]/g, "")
    }

    if (charset === "") {
      setPassword("Изберете поне един тип символи")
      return
    }

    let result = ""
    for (let i = 0; i < length[0]; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    
    setPassword(result)
    setCopied(false)
  }

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, label: "", color: "" }
    
    let score = 0
    if (pwd.length >= 8) score += 1
    if (pwd.length >= 12) score += 1
    if (pwd.length >= 16) score += 1
    if (/[a-z]/.test(pwd)) score += 1
    if (/[A-Z]/.test(pwd)) score += 1
    if (/[0-9]/.test(pwd)) score += 1
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1
    
    if (score <= 2) return { score, label: "Слаба", color: "bg-red-100 text-red-800" }
    if (score <= 4) return { score, label: "Средна", color: "bg-yellow-100 text-yellow-800" }
    if (score <= 6) return { score, label: "Добра", color: "bg-blue-100 text-blue-800" }
    return { score, label: "Отлична", color: "bg-green-100 text-green-800" }
  }

  const strength = getPasswordStrength(password)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-primary" />
          <span>Генератор на пароли</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Length Slider */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">
            Дължина на паролата: {length[0]} символа
          </Label>
          <Slider
            value={length}
            onValueChange={setLength}
            max={50}
            min={4}
            step={1}
            className="w-full"
          />
        </div>

        {/* Character Options */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Типове символи</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="uppercase"
                checked={includeUppercase}
                onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)}
              />
              <Label htmlFor="uppercase" className="text-sm">
                Големи букви (A-Z)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lowercase"
                checked={includeLowercase}
                onCheckedChange={(checked) => setIncludeLowercase(checked as boolean)}
              />
              <Label htmlFor="lowercase" className="text-sm">
                Малки букви (a-z)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="numbers"
                checked={includeNumbers}
                onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)}
              />
              <Label htmlFor="numbers" className="text-sm">
                Цифри (0-9)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="symbols"
                checked={includeSymbols}
                onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)}
              />
              <Label htmlFor="symbols" className="text-sm">
                Специални символи
              </Label>
            </div>
          </div>
        </div>

        {/* Advanced Options */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Допълнителни опции</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="excludeSimilar"
                checked={excludeSimilar}
                onCheckedChange={(checked) => setExcludeSimilar(checked as boolean)}
              />
              <Label htmlFor="excludeSimilar" className="text-sm">
                Изключи подобни символи (0, O, 1, l, I)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="excludeAmbiguous"
                checked={excludeAmbiguous}
                onCheckedChange={(checked) => setExcludeAmbiguous(checked as boolean)}
              />
              <Label htmlFor="excludeAmbiguous" className="text-sm">
                Изключи двусмислени символи
              </Label>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <Button onClick={generatePassword} className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Генерирай парола
        </Button>

        {/* Generated Password */}
        {password && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Генерирана парола</Label>
              <div className="flex space-x-2">
                <Input
                  value={password}
                  readOnly
                  className="font-mono text-sm"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyToClipboard}
                  className="shrink-0"
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Password Strength */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Сила на паролата</Label>
                <Badge className={strength.color}>
                  {strength.label}
                </Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    strength.score <= 2 ? 'bg-red-500' :
                    strength.score <= 4 ? 'bg-yellow-500' :
                    strength.score <= 6 ? 'bg-blue-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${(strength.score / 7) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
