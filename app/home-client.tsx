"use client"

import { useState } from "react"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductSection } from "@/components/product-section"
import { TodayTrading } from "@/components/today-trading"
import { ChatWidget } from "@/components/chat-widget"

export function HomeClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:bg-gray-100"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18m-18-6h18" />
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <CategorySidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={(category) => {
                setSelectedCategory(category)
                setIsSidebarOpen(false)
              }}
              isMobile={true}
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <CategorySidebar 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 h-[calc(100vh-4rem)] overflow-y-auto p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          <TodayTrading />
          <ProductSection selectedCategory={selectedCategory} />
          <ChatWidget />
        </div>
      </main>
    </div>
  )
}
