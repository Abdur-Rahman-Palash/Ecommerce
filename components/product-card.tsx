"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: string | number
    title: string
    image: string
    discount: string
    currentPrice: string
    originalPrice: string | null
    sold: number
    rating: number
    hasFlag: boolean
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <Card className="overflow-hidden h-full flex flex-col border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
        <div className="relative aspect-square bg-gray-100">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}
          </div>
          
          {/* Product Image */}
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E"
            }}
          />
        </div>
        
        <CardContent className="p-3 flex-1 flex flex-col">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 h-10">
            {product.title}
          </h3>
          
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-xs ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
          
          {/* Prices */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-green-600">{product.currentPrice}</span>
            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
          </div>
          
          {/* Sold Count with Flag */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 font-medium">SOLD: {product.sold}</span>
            {product.hasFlag && (
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">中</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
