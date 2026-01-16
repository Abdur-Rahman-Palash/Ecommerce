"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, Heart, User, Camera, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ShoppingFromModal } from "@/components/shopping-from-modal"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCountryModal, setShowCountryModal] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [searchError, setSearchError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const count = cart.reduce((sum: number, item: any) => sum + item.qty, 0)
      setCartCount(count)
    }

    // Update wishlist count from localStorage
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
      const count = wishlist.length
      setWishlistCount(count)
    }

    // Initial counts
    updateCartCount()
    updateWishlistCount()

    // Listen for storage changes (when items are added to cart)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cart') {
        updateCartCount()
      }
      if (e.key === 'wishlist') {
        updateWishlistCount()
      }
    }

    // Custom event for cart updates
    const handleCartUpdate = () => {
      updateCartCount()
    }

    // Custom event for wishlist updates
    const handleWishlistUpdate = () => {
      updateWishlistCount()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('cartUpdate', handleCartUpdate)
    window.addEventListener('wishlistUpdate', handleWishlistUpdate)

    // Check for updates every second (fallback)
    const interval = setInterval(() => {
      updateCartCount()
      updateWishlistCount()
    }, 1000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdate', handleCartUpdate)
      window.removeEventListener('wishlistUpdate', handleWishlistUpdate)
      clearInterval(interval)
    }
  }, [])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchError("")
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    } else {
      setSearchError("Please fill this field on search by keyword")
      // Clear error after 3 seconds
      setTimeout(() => setSearchError(""), 3000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleCameraClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Handle the uploaded image
      console.log('Image uploaded:', file.name, file.size, file.type)
      
      // Create a preview of image
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string
        console.log('Image preview URL:', imageUrl)
        
        // Store the image in localStorage for the search page to use
        localStorage.setItem('uploadedImage', imageUrl)
        localStorage.setItem('uploadedImageName', file.name)
        
        // Redirect to search page with image search parameter
        window.location.href = `/search?image=${encodeURIComponent(file.name)}`
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFlagClick = () => {
    setShowCountryModal(true)
  }

  return (
    <>
      <header className="flex flex-col lg:flex-row items-center justify-between px-4 py-2 bg-white shadow-sm">
        <Link href="/" className="flex items-center gap-2 lg:mb-0 mb-4" prefetch={false}>
          <div className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
            <span className="text-xl font-bold text-green-600 lg:text-2xl">Ecommerce</span>
            <span className="text-xs text-red-500 lg:text-sm">your perfect business solution</span>
          </div>
        </Link>
        
        <div className="flex-1 lg:max-w-xl lg:mx-4 mx-4 lg:order-2 order-1">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden relative">
            <button 
              onClick={handleFlagClick}
              className="flex items-center px-3 border-r border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <div className="w-5 h-3 bg-red-500 rounded-sm" />
            </button>
            <Input
              type="search"
              placeholder="Search by keyword"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setSearchError("") // Clear error when typing
              }}
              onKeyPress={handleKeyPress}
              className={`flex-1 border-none focus-visible:ring-0 text-sm ${searchError ? 'border-red-500' : ''}`}
            />
            <Button 
              onClick={handleCameraClick}
              variant="ghost" 
              size="icon" 
              className="rounded-none w-12 h-10 lg:w-10 lg:h-10"
            >
              <Camera className="w-5 h-5 text-gray-500" />
            </Button>
            <Button 
              onClick={handleSearch}
              type="submit" 
              className="bg-green-500 text-white px-2 lg:px-4 py-2 rounded-none hover:bg-green-600 w-16 lg:w-16 h-10"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
          {searchError && (
            <div className="absolute top-full left-0 right-0 mt-2">
              <div className="bg-red-500 text-white text-sm px-3 py-2 rounded-lg shadow-lg">
                {searchError}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2 lg:gap-4 order-3 lg:order-2">
          <Link href="/cart" className="relative p-2 border-none bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors">
            <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-white text-xs rounded-full">
              {cartCount}
            </span>
          </Link>
          <Link href="/wishlist" className="relative lg:mb-0 mb-4" prefetch={false}>
            <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/login" className="lg:mb-0 mb-4" prefetch={false}>
            <User className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
          </Link>
        </div>
      </header>

      {/* Hidden file input for image upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Shopping From Modal */}
      <ShoppingFromModal 
        isOpen={showCountryModal}
        onClose={() => setShowCountryModal(false)}
      />
    </>
  )
}
