"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Phone, User, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [isRegistering, setIsRegistering] = useState(false)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle registration
  const handleRegister = () => {
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password) {
      alert("Please fill in all fields")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long")
      return
    }

    setIsRegistering(true)

    // Simulate registration process
    setTimeout(() => {
      setIsRegistering(false)
      
      // Save user data to localStorage (in real app, send to backend)
      const userData = {
        id: Date.now().toString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        registeredAt: new Date().toISOString()
      }

      const users = JSON.parse(localStorage.getItem('users') || '[]')
      users.push(userData)
      localStorage.setItem('users', JSON.stringify(users))

      alert("Registration successful! Please login to continue.")
      window.location.href = '/login'
    }, 2000)
  }

  // Handle WhatsApp Registration
  const handleWhatsAppRegister = () => {
    const message = "Hello Ecommerce, I want to register for a new account"
    window.open(`https://api.whatsapp.com/send/?phone=8801234567890&text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Register for Ecommerce</CardTitle>
          <CardDescription>
            Create your account to start shopping
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                First Name
              </Label>
              <Input 
                id="firstName" 
                name="firstName"
                placeholder="John" 
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </Label>
              <Input 
                id="lastName" 
                name="lastName"
                placeholder="Doe" 
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input 
              id="phone" 
              name="phone"
              type="tel" 
              placeholder="+880 1XXX-XXXXXX" 
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Input 
              id="password" 
              name="password"
              type="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </Label>
            <Input 
              id="confirmPassword" 
              name="confirmPassword"
              type="password" 
              placeholder="••••••••" 
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-4">
            <Button 
              className="w-full" 
              size="lg"
              onClick={handleRegister}
              disabled={isRegistering}
            >
              {isRegistering ? "Registering..." : "Register"}
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
              onClick={handleWhatsAppRegister}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Register with WhatsApp
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Login here
            </Link>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            By registering, you agree to our{" "}
            <Link href="/terms-conditions" className="text-blue-600 hover:underline">
              Terms & Conditions
            </Link>
            {" "}and{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
