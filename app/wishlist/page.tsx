"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<any[]>([])

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    setWishlist(storedWishlist)
  }, [])

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id)
    setWishlist(updatedWishlist)
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    
    // Trigger update for header
    window.dispatchEvent(new Event('wishlistUpdate'))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500">Start adding items you love to see them here!</p>
            <Link 
              href="/" 
              className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600">Saved to your wishlist</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
