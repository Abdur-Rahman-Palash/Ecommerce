"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus } from "lucide-react"
import React from "react"

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

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <h1 className="text-2xl font-bold">Product Page</h1>
      <p>Product ID will be displayed here</p>
    </div>
  )
}
