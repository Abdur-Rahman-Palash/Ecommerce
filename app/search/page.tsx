"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Heart, Camera } from "lucide-react"
import Link from "next/link"

function SearchPageContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const imageParam = searchParams.get("image") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploadedImageName, setUploadedImageName] = useState<string>("")

  // Check for uploaded image on component mount
  useEffect(() => {
    const storedImage = localStorage.getItem('uploadedImage')
    const storedImageName = localStorage.getItem('uploadedImageName')
    
    if (storedImage && storedImageName) {
      setUploadedImage(storedImage)
      setUploadedImageName(storedImageName)
      // Clear from localStorage after loading
      localStorage.removeItem('uploadedImage')
      localStorage.removeItem('uploadedImageName')
      // Perform image-based search
      performImageSearch(storedImageName)
    } else if (query) {
      performSearch(query)
    }
  }, [query, imageParam])

  // Mock search function
  const performSearch = (searchTerm: string) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      // Mock search results based on search term
      const mockResults = [
        {
          id: 1,
          title: `Product related to ${searchTerm}`,
          price: "৳ 500",
          image: "/product-placeholder.svg",
          rating: 4.5,
          sold: 1000
        },
        {
          id: 2,
          title: `Another ${searchTerm} product`,
          price: "৳ 750",
          image: "/product-placeholder.svg",
          rating: 4.3,
          sold: 500
        },
        {
          id: 3,
          title: `${searchTerm} premium item`,
          price: "৳ 1200",
          image: "/product-placeholder.svg",
          rating: 4.7,
          sold: 200
        }
      ]
      setSearchResults(mockResults)
      setIsLoading(false)
    }, 1000)
  }

  // Mock image search function
  const performImageSearch = (imageName: string) => {
    setIsLoading(true)
    // Simulate API call for image search
    setTimeout(() => {
      // Mock results based on image name (detecting "shoes" or other keywords)
      const isShoes = imageName.toLowerCase().includes('shoe')
      const isClothing = imageName.toLowerCase().includes('cloth') || imageName.toLowerCase().includes('shirt')
      const isElectronics = imageName.toLowerCase().includes('phone') || imageName.toLowerCase().includes('laptop')
      
      let mockResults = []
      
      if (isShoes) {
        mockResults = [
          {
            id: 1,
            title: "Nike Air Max Running Shoes",
            price: "৳ 3,500",
            image: "/product-placeholder.svg",
            rating: 4.8,
            sold: 2500
          },
          {
            id: 2,
            title: "Adidas Sports Sneakers",
            price: "৳ 2,800",
            image: "/product-placeholder.svg",
            rating: 4.6,
            sold: 1800
          },
          {
            id: 3,
            title: "Puma Casual Shoes",
            price: "৳ 2,200",
            image: "/product-placeholder.svg",
            rating: 4.4,
            sold: 1200
          },
          {
            id: 4,
            title: "Reebok Training Shoes",
            price: "৳ 3,200",
            image: "/product-placeholder.svg",
            rating: 4.5,
            sold: 900
          }
        ]
      } else if (isClothing) {
        mockResults = [
          {
            id: 1,
            title: "Men's Cotton T-Shirt",
            price: "৳ 450",
            image: "/product-placeholder.svg",
            rating: 4.3,
            sold: 3200
          },
          {
            id: 2,
            title: "Women's Summer Dress",
            price: "৳ 850",
            image: "/product-placeholder.svg",
            rating: 4.6,
            sold: 1500
          }
        ]
      } else if (isElectronics) {
        mockResults = [
          {
            id: 1,
            title: "Smartphone Pro Max",
            price: "৳ 45,000",
            image: "/product-placeholder.svg",
            rating: 4.7,
            sold: 800
          }
        ]
      } else {
        // Generic results
        mockResults = [
          {
            id: 1,
            title: `Product matching your image`,
            price: "৳ 1,200",
            image: "/product-placeholder.svg",
            rating: 4.5,
            sold: 600
          }
        ]
      }
      
      setSearchResults(mockResults)
      setIsLoading(false)
    }, 1500)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-green-600 hover:text-green-700">
              ← Back
            </Link>
            <div className="flex-1 flex items-center border border-gray-300 rounded-md overflow-hidden">
              <Input
                type="search"
                placeholder="Search by keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 border-none focus-visible:ring-0"
              />
              <Button 
                onClick={handleSearch}
                className="bg-green-500 text-white px-4 py-2 rounded-none hover:bg-green-600"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Uploaded Image Section */}
      {uploadedImage && (
        <div className="bg-white border-b p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium text-gray-700">Searched for:</div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 border-2 border-gray-300 rounded-lg overflow-hidden">
                  <img 
                    src={uploadedImage} 
                    alt={uploadedImageName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium">{uploadedImageName}</div>
                  <div className="text-xs text-gray-500">Image search</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      <div className="max-w-6xl mx-auto p-4">
        {(query || imageParam) && (
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">
              {imageParam ? `Image Search Results for "${uploadedImageName}"` : `Search Results for "${query}"`}
            </h1>
            <p className="text-gray-600">
              Found {searchResults.length} results
            </p>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <Camera className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <div className="text-gray-500">Analyzing image...</div>
            </div>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {searchResults.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-200 rounded-t-lg relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.title}</h3>
                  <div className="text-lg font-bold text-green-600 mb-2">{product.price}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>⭐ {product.rating}</span>
                    <span>•</span>
                    <span>{product.sold} sold</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-green-500 hover:bg-green-600">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Button size="sm" variant="outline">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (query || imageParam) ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p>Try searching with different keywords or upload another image</p>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-medium mb-2">Search for products</h3>
              <p>Enter keywords in search bar above or upload an image</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  )
}
