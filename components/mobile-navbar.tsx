"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Package, MessageCircle, Menu, X } from "lucide-react"

export function MobileNavbar() {
  const [cartCount, setCartCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const count = cart.reduce((sum: number, item: any) => sum + item.qty, 0)
      setCartCount(count)
    }

    // Initial count
    updateCartCount()

    // Listen for storage changes and custom events
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cart') {
        updateCartCount()
      }
    }

    const handleCartUpdate = () => {
      updateCartCount()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('cartUpdate', handleCartUpdate)

    // Check for updates every second (fallback)
    const interval = setInterval(updateCartCount, 1000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdate', handleCartUpdate)
      clearInterval(interval)
    }
  }, [])

  // Only show on mobile and tablet
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  if (!isMobile) return null

  return (
    <>
      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
        <div className="flex items-center justify-around h-16 px-2">
          {/* Categories */}
          <Link href="/" className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600 transition-colors">
            <Menu className="h-5 w-5" />
            <span className="text-xs mt-1">Categories</span>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600 transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs mt-1">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Logo - Center */}
          <Link href="/" className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">EC</span>
            </div>
            <span className="text-xs mt-1 text-gray-600">Home</span>
          </Link>

          {/* Orders */}
          <Link href="/orders" className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600 transition-colors">
            <Package className="h-5 w-5" />
            <span className="text-xs mt-1">Orders</span>
          </Link>

          {/* Chat */}
          <button
            onClick={() => {
              window.open("https://api.whatsapp.com/send/?phone=8801811509999&text=Hello Ecommerce", "_blank")
            }}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs mt-1">Chat</span>
          </button>
        </div>
      </div>

      {/* Tablet Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 hidden md:block lg:hidden">
        <div className="flex items-center justify-around h-16 px-4">
          {/* Categories */}
          <Link href="/" className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600 transition-colors">
            <Menu className="h-6 w-6" />
            <span className="text-sm mt-1">Categories</span>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600 transition-colors relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-sm mt-1">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Logo - Center */}
          <Link href="/" className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">EC</span>
            </div>
            <span className="text-sm mt-1 text-gray-600">Ecommerce</span>
          </Link>

          {/* Orders */}
          <Link href="/orders" className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600 transition-colors">
            <Package className="h-6 w-6" />
            <span className="text-sm mt-1">Orders</span>
          </Link>

          {/* Chat */}
          <button
            onClick={() => {
              window.open("https://api.whatsapp.com/send/?phone=8801811509999&text=Hello Ecommerce", "_blank")
            }}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="text-sm mt-1">Chat</span>
          </button>
        </div>
      </div>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <nav className="space-y-2">
                <Link href="/" className="block py-2 text-gray-600 hover:text-green-600">Home</Link>
                <Link href="/about" className="block py-2 text-gray-600 hover:text-green-600">About</Link>
                <Link href="/contact" className="block py-2 text-gray-600 hover:text-green-600">Contact</Link>
                <Link href="/login" className="block py-2 text-gray-600 hover:text-green-600">Login</Link>
                <Link href="/register" className="block py-2 text-gray-600 hover:text-green-600">Register</Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
