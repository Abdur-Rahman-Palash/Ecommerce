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

  // Define product type
  type Product = {
    id: number | string
    title: string
    currentPrice: string
    originalPrice: string | null
    image: string
    discount: string
    sold: number
    rating: number
    hasFlag: boolean
  }

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

  // Mock search function with real product data
  const performSearch = (searchTerm: string) => {
    setIsLoading(true)
    console.log('Searching for:', searchTerm)
    
    // Simulate API call
    setTimeout(() => {
      // Import product data from product-section
      const defaultProducts: Product[] = [
        {
          id: 1,
          title: "40/120 Pieces Boxed Black Ceram",
          image: "https://images.unsplash.com/photo-1523275335684-3789896dca7f?w=300&h=300&fit=crop",
          discount: "7%",
          currentPrice: "৳ 425",
          originalPrice: "৳ 457",
          sold: 3,
          rating: 4,
          hasFlag: true
        },
        {
          id: 2,
          title: "Professional Fishing Rod Set",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
          discount: "7%",
          currentPrice: "৳ 890",
          originalPrice: "৳ 956",
          sold: 12,
          rating: 5,
          hasFlag: false
        },
        {
          id: 3,
          title: "Carbon Fiber Fishing Pole",
          image: "https://images.unsplash.com/photo-1599424116513-4d9a9a0c1b4d?w=300&h=300&fit=crop",
          discount: "7%",
          currentPrice: "৳ 650",
          originalPrice: "৳ 698",
          sold: 8,
          rating: 4,
          hasFlag: true
        },
        {
          id: 4,
          title: "Telescopic Fishing Rod",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
          discount: "7%",
          currentPrice: "৳ 320",
          originalPrice: "৳ 344",
          sold: 15,
          rating: 5,
          hasFlag: false
        },
        {
          id: 5,
          title: "Spinning Fishing Reel",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
          discount: "7%",
          currentPrice: "৳ 180",
          originalPrice: "৳ 193",
          sold: 25,
          rating: 4,
          hasFlag: true
        },
        {
          id: 6,
          title: "Fishing Line Set",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
          discount: "7%",
          currentPrice: "৳ 95",
          originalPrice: "৳ 102",
          sold: 45,
          rating: 3,
          hasFlag: false
        },
        {
          id: 7,
          title: "Fishing Hooks Kit",
          image: "https://images.unsplash.com/photo-1599424116513-4d9a9a0c1b4d?w=300&h=300&fit=crop",
          discount: "7%",
          currentPrice: "৳ 55",
          originalPrice: "৳ 59",
          sold: 67,
          rating: 4,
          hasFlag: true
        },
        {
          id: 8,
          title: "Fishing Tackle Box",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
          discount: "7%",
          currentPrice: "৳ 145",
          originalPrice: "৳ 155",
          sold: 9,
          rating: 5,
          hasFlag: false
        }
      ]

      const categoryProducts: Record<string, Product[]> = {
        shoes: [
          { id: 11, title: "Sports Running Shoes - Wholesale Import", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop", discount: "18%", currentPrice: "৳ 450", originalPrice: "৳ 550", sold: 1250, rating: 5, hasFlag: true },
          { id: 12, title: "Formal Leather Shoes - Office Wear", image: "https://images.unsplash.com/photo-1463100091794-a9c563657cf2?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 890", originalPrice: null, sold: 890, rating: 4, hasFlag: false },
          { id: 13, title: "Casual Sneakers - Daily Comfort", image: "https://images.unsplash.com/photo-1491553825944-8e3bf5fb802d?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 320", originalPrice: "৳ 400", sold: 2100, rating: 5, hasFlag: true },
          { id: 14, title: "Kids School Shoes - Durable Quality", image: "https://images.unsplash.com/photo-1596457578869-af2e5e6036d1?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 280", originalPrice: null, sold: 3400, rating: 5, hasFlag: false },
          { id: 15, title: "High Heels - Party Collection", image: "https://images.unsplash.com/photo-1543163554-3f743104bd85?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 650", originalPrice: "৳ 765", sold: 780, rating: 4, hasFlag: true }
        ],
        bags: [
          { id: 16, title: "Travel Backpack - Large Capacity", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 780", originalPrice: "৳ 980", sold: 1560, rating: 5, hasFlag: true },
          { id: 17, title: "Ladies Handbag - Premium Quality", image: "https://images.unsplash.com/photo-1584917865442-89294acc05c6?w=300&h=300&fit=crop", discount: "23%", currentPrice: "৳ 920", originalPrice: "৳ 1200", sold: 890, rating: 4, hasFlag: false },
          { id: 18, title: "School Bag - Water Resistant", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 340", originalPrice: null, sold: 2800, rating: 5, hasFlag: true },
          { id: 19, title: "Office Briefcase - Professional", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop", discount: "10%", currentPrice: "৳ 1100", originalPrice: "৳ 1220", sold: 340, rating: 4, hasFlag: false }
        ],
        hoodie: [
          { id: 24, title: "Classic Pullover Hoodie - Premium Cotton", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 890", originalPrice: "৳ 1112", sold: 2340, rating: 5, hasFlag: true },
          { id: 25, title: "Zip-Up Hoodie - Street Style", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 1200", originalPrice: "৳ 1412", sold: 1890, rating: 4, hasFlag: false },
          { id: 26, title: "Oversized Hoodie - Comfort Fit", image: "https://images.unsplash.com/photo-1591047139829-d91ecb6eaa7f?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 950", originalPrice: null, sold: 3200, rating: 5, hasFlag: true },
          { id: 27, title: "Graphic Print Hoodie - Trendy Design", image: "https://images.unsplash.com/photo-1559553737-b9e4b8d0d8a0?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 750", originalPrice: "৳ 1000", sold: 1560, rating: 4, hasFlag: false },
          { id: 28, title: "Athletic Hoodie - Sport Collection", image: "https://images.unsplash.com/photo-1577401234523-4f9c4b8d0d8a?w=300&h=300&fit=crop", discount: "10%", currentPrice: "৳ 1100", originalPrice: "৳ 1222", sold: 2100, rating: 5, hasFlag: true }
        ],
        jewelry: [
          { id: 20, title: "Gold Plated Necklace Set - Wedding Collection", image: "https://images.unsplash.com/photo-1599643448532-8b13dee7a3713?w=300&h=300&fit=crop", discount: "31%", currentPrice: "৳ 450", originalPrice: "৳ 650", sold: 1200, rating: 5, hasFlag: true },
          { id: 21, title: "Fashion Earrings - Daily Wear", image: "https://images.unsplash.com/photo-1611085523210-0e29a4b5b4aa?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 120", originalPrice: null, sold: 3400, rating: 5, hasFlag: false },
          { id: 22, title: "Bracelet Set - Modern Design", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 280", originalPrice: null, sold: 890, rating: 4, hasFlag: true },
          { id: 23, title: "Diamond Ring - Engagement Collection", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 1250", originalPrice: "৳ 1667", sold: 450, rating: 5, hasFlag: false }
        ]
      }

      // Search logic
      let searchResults: Product[] = []
      const lowerSearchTerm = searchTerm.toLowerCase()
      
      // Search in default products
      searchResults = defaultProducts.filter(product => 
        product.title.toLowerCase().includes(lowerSearchTerm)
      )
      
      // Search in category products
      Object.keys(categoryProducts).forEach(category => {
        if (category.toLowerCase().includes(lowerSearchTerm)) {
          searchResults = [...searchResults, ...categoryProducts[category]]
        } else {
          const categoryMatches = categoryProducts[category].filter(product => 
            product.title.toLowerCase().includes(lowerSearchTerm)
          )
          searchResults = [...searchResults, ...categoryMatches]
        }
      })
      
      // Remove duplicates
      searchResults = searchResults.filter((product, index, self) => 
        index === self.findIndex(p => p.id === product.id)
      )
      
      console.log('Search results:', searchResults)
      setSearchResults(searchResults)
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
