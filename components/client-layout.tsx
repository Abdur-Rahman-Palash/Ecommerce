"use client"

import { Header } from "@/components/header"

import { WhatsappChat } from "@/components/whatsapp-chat"
import { MobileNavbar } from "@/components/mobile-navbar"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-16 lg:pb-0">
        {children}
      </main>
      <WhatsappChat />
      <MobileNavbar />
    </>
  )
}
