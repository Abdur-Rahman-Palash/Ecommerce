"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react"
import React, { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"

const productData = {
  "default": {
    title: "Default Product",
    price: "৳ 500",
    image: "/product-placeholder.svg",
    images: ["/product-placeholder.svg"],
    sold: 1000,
    rating: 4.5,
    sellerRating: 4.5,
    totalSale: 1000,
    category: "General",
    location: "Global",
    specifications: [],
    description: "A high-quality product with excellent features and great value.",
    shipping: {
      byAir: true,
      bySea: true,
      categories: ["Electronics", "Home & Garden"]
    }
  },
  "abb-779969913655": {
    title: "Triangle flag string flag small color flag factory wholesale site warning flag opening layout site colorful flag hanging flag decoration",
    price: "৳ 115",
    image: "/product-placeholder.svg",
    images: ["/product-placeholder.svg", "/product-placeholder.svg", "/product-placeholder.svg"],
    sold: 15004650,
    rating: 4.3,
    totalRating: 4,
    sellerRating: 4.3,
    totalSale: 15004650,
    category: "Decorations",
    location: "河北省石家庄市",
    specifications: [
      { label: "Product Type", value: "Other" },
      { label: "Model Number", value: "ali-754169411881" },
      { label: "Packaging Details", value: "OPP bag" },
      { label: "Size", value: "18*30" },
      { label: "Color", value: "Red, yellow, blue, green, pink" },
      { label: "Customized", value: "No" },
      { label: "Material", value: "Oxford cloth" },
      { label: "Flagpole", value: "No flagpole" },
      { label: "Printing", value: "Screen printing" },
      { label: "Usage", value: "National Day" }
    ],
    description: "High-quality decorative triangle flags perfect for events, celebrations, and business openings. Made from durable polyester material with vibrant colors that resist fading. Ideal for both indoor and outdoor use.",
    shipping: {
      byAir: true,
      bySea: true,
      categories: [
        { name: "ক্যাটাগরিঃ এ", price: "৭৪০ টাকা প্রতি কেজি" },
        { name: "ক্যাটাগরিঃ বি", price: "১০৮০ টাকা প্রতি কেজি" }
      ]
    }
  }
}

// Default product data for numeric IDs
const getDefaultProduct = (id: string) => ({
  id: id,
  title: `Product ${id}`,
  price: `৳ ${Math.floor(Math.random() * 5000) + 100}`,
  image: `https://images.unsplash.com/photo-${1523275335684}-${Math.floor(Math.random() * 1000000000)}?w=600&h=600&fit=crop`,
  images: [
    `https://images.unsplash.com/photo-${1523275335684}-${Math.floor(Math.random() * 1000000000)}?w=600&h=600&fit=crop`,
    `https://images.unsplash.com/photo-${1549298916}-${Math.floor(Math.random() * 1000000000)}?w=600&h=600&fit=crop`,
    `https://images.unsplash.com/photo-${1553062407}-${Math.floor(Math.random() * 1000000000)}?w=600&h=600&fit=crop`
  ],
  sold: Math.floor(Math.random() * 10000) + 100,
  rating: (Math.random() * 2 + 3).toFixed(1),
  sellerRating: (Math.random() * 2 + 3).toFixed(1),
  totalSale: Math.floor(Math.random() * 10000) + 100,
  category: "General",
  location: "Global",
  specifications: [
    { label: "Brand", value: "Generic" },
    { label: "Material", value: "High Quality" },
    { label: "Origin", value: "Imported" }
  ],
  description: "This is a high-quality product with excellent features and great value for money. Perfect for everyday use and makes a great gift too.",
  shipping: {
    byAir: true,
    bySea: true,
    categories: [
      { name: "Standard", price: "৳ 100" },
      { name: "Express", price: "৳ 200" }
    ]
  }
})

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Get product data
  const product = productData[productId as keyof typeof productData] || getDefaultProduct(productId)
  
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find((item: any) => item.product_id === productId)
    
    // Parse price to number
    const priceNumber = Number(product.price.replace('৳', '').replace(',', '').trim())
    
    if (existingItem) {
      existingItem.qty += quantity
      existingItem.subtotal = priceNumber * existingItem.qty
    } else {
      cart.push({
        product_id: productId,
        name: product.title,
        price: priceNumber,
        image: product.image,
        qty: quantity,
        subtotal: priceNumber * quantity
      })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    
    console.log('Updated cart:', cart)
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdate'))
    
    // Show success message
    alert(`${quantity} ${product.title} added to cart!`)
  }
  
  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const existingItem = wishlist.find((item: any) => item.product_id === productId)
    
    if (!existingItem) {
      wishlist.push({
        product_id: productId,
        name: product.title,
        price: product.price,
        image: product.image
      })
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      
      // Trigger wishlist update event
      window.dispatchEvent(new Event('wishlistUpdate'))
      
      alert(`${product.title} added to wishlist!`)
    } else {
      alert('Product already in wishlist!')
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E"
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(Number(product.rating)) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                </div>
                <span className="text-sm text-gray-600">SOLD: {product.sold}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-green-600">{product.price}</span>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleAddToWishlist}
                  variant="outline"
                  className="px-6"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Brand:</span>
                  <span className="font-medium">Generic</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{product.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Seller Rating:</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(Number(product.sellerRating)) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.sellerRating})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Specifications</h2>
            <div className="bg-white rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec: any, index: number) => (
                  <div key={index} className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">{spec.label}:</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Shipping Info */}
        {product.shipping && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
            <div className="bg-white rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-sm ${product.shipping.byAir ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-400'}`}>
                    ✈️ Air Shipping Available
                  </span>
                  <span className={`px-2 py-1 rounded text-sm ${product.shipping.bySea ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-400'}`}>
                    🚢 Sea Shipping Available
                  </span>
                </div>
                {product.shipping.categories && Array.isArray(product.shipping.categories) && (
                  <div className="space-y-2">
                    <h3 className="font-medium">Shipping Categories:</h3>
                    {product.shipping.categories.map((category: any, index: number) => (
                      <div key={index} className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{category.name || `Category ${index + 1}`}:</span>
                        <span className="font-medium">{category.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
