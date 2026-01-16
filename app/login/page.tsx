"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSendingOTP, setIsSendingOTP] = useState(false)

  // Handle Send OTP
  const handleSendOTP = () => {
    if (!phoneNumber) {
      alert("Please enter your phone number")
      return
    }
    
    setIsSendingOTP(true)
    
    // Simulate OTP sending
    setTimeout(() => {
      setIsSendingOTP(false)
      alert(`OTP sent to ${phoneNumber}`)
      // In real app, would navigate to OTP verification page
      // window.location.href = '/verify-otp'
    }, 2000)
  }

  // Handle WhatsApp Login
  const handleWhatsAppLogin = () => {
    const message = "Hello Ecommerce, I want to login to my account"
    window.open(`https://api.whatsapp.com/send/?phone=8801234567890&text=${encodeURIComponent(message)}`, '_blank')
  }
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Login to Ecommerce</CardTitle>
          <CardDescription>
            Enter your phone number to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+880 1XXX-XXXXXX" 
              className="text-lg"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          
          <div className="space-y-4">
            <Button 
              className="w-full" 
              size="lg"
              onClick={handleSendOTP}
              disabled={isSendingOTP}
            >
              {isSendingOTP ? "Sending..." : "Send OTP"}
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
              onClick={handleWhatsAppLogin}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Login with WhatsApp
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline font-medium">
              Register here
            </Link>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            By logging in, you agree to our{" "}
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
