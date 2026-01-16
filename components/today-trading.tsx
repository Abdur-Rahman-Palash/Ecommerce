"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TodayTrading() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const todayTradingProducts = [
    {
      id: "abb-853924671866",
      title: "Product 1",
      price: "৳ 223",
      rating: "4.8",
      image: "https://cbu01.alicdn.com/img/ibank/O1CN01hTCciB1Oaj26kHkhZ_!!2468141722-0-cib.310x310.jpg"
    },
    {
      id: "abb-581546170022",
      title: "Product 2",
      price: "৳ 58",
      rating: "5.0",
      image: "https://cbu01.alicdn.com/img/ibank/9635411377_1059762577.310x310.jpg"
    },
    {
      id: "abb-679626201577",
      title: "Product 3",
      price: "৳ 67",
      rating: "4.8",
      image: "https://cbu01.alicdn.com/img/ibank/O1CN01jsJm051xbe9BnR5Ph_!!2210871586462-0-cib.310x310.jpg"
    },
    {
      id: "abb-712918154086",
      title: "Product 4",
      price: "৳ 89",
      rating: "4.9",
      image: "https://cbu01.alicdn.com/img/ibank/O1CN01jsJm051xbe9BnR5Ph_!!2210871586462-0-cib.310x310.jpg"
    },
    {
      id: "abb-123456789012",
      title: "Product 5",
      price: "৳ 145",
      rating: "4.7",
      image: "https://cbu01.alicdn.com/img/ibank/O1CN01hTCciB1Oaj26kHkhZ_!!2468141722-0-cib.310x310.jpg"
    },
    {
      id: "abb-234567890123",
      title: "Product 6",
      price: "৳ 78",
      rating: "5.0",
      image: "https://cbu01.alicdn.com/img/ibank/9635411377_1059762577.310x310.jpg"
    },
    {
      id: "abb-345678901234",
      title: "Product 7",
      price: "৳ 234",
      rating: "4.6",
      image: "https://cbu01.alicdn.com/img/ibank/O1CN01jsJm051xbe9BnR5Ph_!!2210871586462-0-cib.310x310.jpg"
    },
    {
      id: "abb-456789012345",
      title: "Product 8",
      price: "৳ 156",
      rating: "4.8",
      image: "https://cbu01.alicdn.com/img/ibank/O1CN01hTCciB1Oaj26kHkhZ_!!2468141722-0-cib.310x310.jpg"
    }
  ]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % todayTradingProducts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused, todayTradingProducts.length])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? todayTradingProducts.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % todayTradingProducts.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const visibleProducts = [
    todayTradingProducts[currentIndex],
    todayTradingProducts[(currentIndex + 1) % todayTradingProducts.length],
    todayTradingProducts[(currentIndex + 2) % todayTradingProducts.length],
    todayTradingProducts[(currentIndex + 3) % todayTradingProducts.length]
  ]

  return (
    <div className="bg-white p-4 mb-4">
      <h2 className="text-xl font-semibold mb-4">Today Trading</h2>
      
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Products Container */}
        <div className="overflow-hidden mx-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {visibleProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="flex-shrink-0 w-24 mx-2">
                <Link href={`/product/${product.id}`}>
                  <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative overflow-hidden rounded mb-2">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-20 object-cover transition-opacity duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.opacity = '0.5'
                        }}
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.opacity = '1'
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{product.price}</p>
                      <span className="text-xs text-green-600">{product.rating} ★</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {todayTradingProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-green-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
