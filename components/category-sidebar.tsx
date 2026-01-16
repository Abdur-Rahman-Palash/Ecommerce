"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const categories = [
  { name: "Shoes", icon: "👟", slug: "shoes" },
  { name: "Bags", icon: "👜", slug: "bags" },
  { name: "Jewelry", icon: "💍", slug: "jewelry" },
  { name: "Hoodies", icon: "🧥", slug: "hoodie" },
  { name: "Winter Wear", icon: "🧣", slug: "winter" },
  { name: "Beauty And Personal Care", icon: "💄", slug: "beauty-and-personal-care" },
  { name: "Men's Clothing", icon: "👔", slug: "men-s-clothing" },
  { name: "Women's Clothing", icon: "👗", slug: "women-s-clothing" },
  { name: "Eyewear", icon: "👓", slug: "eyewear" },
  { name: "Office & School Supplies", icon: "📚", slug: "office-and-school-supplies" },
  { name: "Phone Accessories", icon: "📱", slug: "phone-accessories" },
  { name: "Sports & Fitness", icon: "⚽", slug: "sports-and-fitness" },
  { name: "ENTERTAINMENT ITEMS", icon: "🎮", slug: "entertainment-items" },
  { name: "Watches", icon: "⌚", slug: "watches" },
  { name: "Electronics & Gadgets", icon: "💻", slug: "electronics-and-gadgets" },
  { name: "Home And Kitchen", icon: "🏠", slug: "home-and-kitchen" }
]

const categoryProducts: Record<string, any[]> = {
  shoes: [
    { id: 1, title: "Sports Running Shoes - Wholesale Import", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop", discount: "18%", currentPrice: "৳ 450", originalPrice: "৳ 550", sold: 1250, rating: 5, hasFlag: true },
    { id: 2, title: "Formal Leather Shoes - Office Wear", image: "https://images.unsplash.com/photo-1463100091794-a9c563657cf2?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 890", originalPrice: null, sold: 890, rating: 4, hasFlag: false },
    { id: 3, title: "Casual Sneakers - Daily Comfort", image: "https://images.unsplash.com/photo-1491553825944-8e3bf5fb802d?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 320", originalPrice: "৳ 400", sold: 2100, rating: 5, hasFlag: true },
    { id: 4, title: "Kids School Shoes - Durable Quality", image: "https://images.unsplash.com/photo-1596457578869-af2e5e6036d1?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 280", originalPrice: null, sold: 3400, rating: 5, hasFlag: false },
    { id: 5, title: "High Heels - Party Collection", image: "https://images.unsplash.com/photo-1543163554-3f743104bd85?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 650", originalPrice: "৳ 765", sold: 780, rating: 4, hasFlag: true },
    { id: 6, title: "Basketball Shoes - Professional", image: "https://images.unsplash.com/photo-1556226728-2a7f130d3a5a?w=300&h=300&fit=crop", discount: "10%", currentPrice: "৳ 780", originalPrice: "৳ 868", sold: 450, rating: 5, hasFlag: false }
  ],
  "entertainment-items": [
    { id: 7, title: "Gaming Console - Latest Model", image: "https://images.unsplash.com/photo-1598928867675-8129b3a9e5a5?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 12,500", originalPrice: "৳ 16,667", sold: 450, rating: 5, hasFlag: true },
    { id: 8, title: "VR Headset - Immersive Experience", image: "https://images.unsplash.com/photo-1505740420928-5e560c0d30e7?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 3,200", originalPrice: "৳ 3,765", sold: 890, rating: 4, hasFlag: true },
    { id: 9, title: "Wireless Earbuds - Premium Sound", image: "https://images.unsplash.com/photo-1505740420928-5e560c0d30e7?w=300&h=300&fit=crop", discount: "30%", currentPrice: "৳ 1,400", originalPrice: "৳ 2,000", sold: 1200, rating: 5, hasFlag: true },
    { id: 10, title: "Smart TV - 4K Ultra HD", image: "https://images.unsplash.com/photo-1598928867675-8129b3a9e5a5?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 28,000", originalPrice: "৳ 35,000", sold: 320, rating: 4, hasFlag: false },
    { id: 11, title: "Bluetooth Speaker - Portable", image: "https://images.unsplash.com/photo-1505740420928-5e560c0d30e7?w=300&h=300&fit=crop", discount: "10%", currentPrice: "৳ 850", originalPrice: "৳ 945", sold: 2100, rating: 5, hasFlag: false },
    { id: 12, title: "Action Camera - 4K Recording", image: "https://images.unsplash.com/photo-1598928867675-8129b3a9e5a5?w=300&h=300&fit=crop", discount: "18%", currentPrice: "৳ 18,500", originalPrice: "৳ 22,561", sold: 150, rating: 5, hasFlag: true }
  ],
  hoodie: [
    { id: 24, title: "Classic Pullover Hoodie - Premium Cotton", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 890", originalPrice: "৳ 1112", sold: 2340, rating: 5, hasFlag: true },
    { id: 25, title: "Zip-Up Hoodie - Street Style", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 1200", originalPrice: "৳ 1412", sold: 1890, rating: 4, hasFlag: false },
    { id: 26, title: "Oversized Hoodie - Comfort Fit", image: "https://images.unsplash.com/photo-1591047139829-d91ecb6eaa7f?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 950", originalPrice: null, sold: 3200, rating: 5, hasFlag: true },
    { id: 27, title: "Graphic Print Hoodie - Trendy Design", image: "https://images.unsplash.com/photo-1559553737-b9e4152e9381?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 750", originalPrice: "৳ 1000", sold: 1560, rating: 4, hasFlag: false },
    { id: 28, title: "Athletic Hoodie - Sport Collection", image: "https://images.unsplash.com/photo-1577401234523-4f9c4b8d0d8a?w=300&h=300&fit=crop", discount: "10%", currentPrice: "৳ 1100", originalPrice: "৳ 1222", sold: 2100, rating: 5, hasFlag: true }
  ],
  bag: [
    { id: 29, title: "Leather Backpack - Premium Quality", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", discount: "30%", currentPrice: "৳ 2200", originalPrice: "৳ 3142", sold: 890, rating: 5, hasFlag: true },
    { id: 30, title: "Designer Handbag - Luxury Collection", image: "https://images.unsplash.com/photo-1584917865442-89294acc05c6?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 3500", originalPrice: null, sold: 450, rating: 4, hasFlag: false },
    { id: 31, title: "Canvas Tote Bag - Eco Friendly", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=300&fit=crop", discount: "40%", currentPrice: "৳ 320", originalPrice: "৳ 533", sold: 4200, rating: 5, hasFlag: true },
    { id: 32, title: "Crossbody Bag - Compact Design", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 890", originalPrice: "৳ 1112", sold: 2800, rating: 4, hasFlag: false },
    { id: 33, title: "Travel Duffel Bag - Large Capacity", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 1800", originalPrice: "৳ 2118", sold: 1200, rating: 5, hasFlag: true }
  ],
  winter: [
    { id: 34, title: "Winter Jacket - Heavy Duty", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop", discount: "35%", currentPrice: "৳ 2800", originalPrice: "৳ 4308", sold: 670, rating: 5, hasFlag: true },
    { id: 35, title: "Wool Sweater - Classic Design", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 1500", originalPrice: null, sold: 1800, rating: 4, hasFlag: false },
    { id: 36, title: "Thermal Wear Set - Complete Package", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 980", originalPrice: "৳ 1307", sold: 3400, rating: 5, hasFlag: true },
    { id: 37, title: "Winter Boots - Waterproof", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 2200", originalPrice: "৳ 2750", sold: 980, rating: 4, hasFlag: false },
    { id: 38, title: "Beanie Hat - Warm & Stylish", image: "https://images.unsplash.com/photo-1577401234523-4f9c4b8d0d8a?w=300&h=300&fit=crop", discount: "10%", currentPrice: "৳ 280", originalPrice: "৳ 311", sold: 5200, rating: 5, hasFlag: true },
    { id: 39, title: "Winter Gloves - Touchscreen Compatible", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 450", originalPrice: "৳ 529", sold: 2900, rating: 4, hasFlag: true }
  ]
}

interface CategorySidebarProps {
  selectedCategory?: string
  onCategorySelect?: (category: string) => void
  isMobile?: boolean
  onClose?: () => void
}

export function CategorySidebar({ selectedCategory, onCategorySelect, isMobile, onClose }: CategorySidebarProps) {
  const sidebarClasses = isMobile 
    ? "fixed inset-0 z-50 bg-white w-64 h-full shadow-xl transform transition-transform duration-300 ease-in-out"
    : "w-64 bg-white border-r border-gray-200 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto"

  return (
    <div className={sidebarClasses}>
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Categories</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      
      <div className={`${isMobile ? 'p-4' : 'p-4 pt-16'}`}>
        {!isMobile && <h2 className="text-lg font-bold mb-4 text-gray-800">Categories</h2>}
        <nav className={`${isMobile ? 'space-y-1' : 'space-y-1'}`}>
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => {
                onCategorySelect?.(category.slug)
                if (isMobile && onClose) onClose()
              }}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                selectedCategory === category.slug
                  ? 'bg-green-50 border border-green-200'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{category.icon}</span>
                <span className={`text-sm font-medium ${
                  selectedCategory === category.slug
                    ? 'text-green-700'
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {category.name}
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 ${
                selectedCategory === category.slug
                  ? 'text-green-700'
                  : 'text-gray-700 group-hover:text-gray-900'
              }`} />
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
