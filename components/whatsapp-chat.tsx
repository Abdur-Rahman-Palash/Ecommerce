import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhatsappChat() {
  return (
    <Link 
      href="https://api.whatsapp.com/send/?phone=&text=Hello Ecommerce" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </Link>
  )
}
