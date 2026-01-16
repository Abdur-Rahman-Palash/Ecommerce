import { NextRequest, NextResponse } from 'next/server'

const categoryData = {
  'shoes': {
    id: 1,
    name: "Shoes"
  },
  'bags': {
    id: 2,
    name: "Bags"
  },
  'jewelry': {
    id: 3,
    name: "Jewelry"
  },
  'beauty-and-personal-care': {
    id: 4,
    name: "Beauty and Personal Care"
  },
  'men-s-clothing': {
    id: 5,
    name: "Men's Clothing"
  },
  'women-s-clothing': {
    id: 6,
    name: "Women's Clothing"
  }
}

const productsData = {
  'shoes': [
    {
      "id": "shoe-1",
      "name": "Sports Running Shoes - Wholesale Import",
      "price": 450,
      "old_price": 550,
      "sold": 1250,
      "rating": 5,
      "image": "sports-shoes.jpg"
    },
    {
      "id": "shoe-2",
      "name": "Formal Leather Shoes - Office Wear",
      "price": 890,
      "old_price": null,
      "sold": 890,
      "rating": 4,
      "image": "formal-shoes.jpg"
    },
    {
      "id": "shoe-3",
      "name": "Casual Sneakers - Daily Comfort",
      "price": 320,
      "old_price": 400,
      "sold": 2100,
      "rating": 5,
      "image": "sneakers.jpg"
    },
    {
      "id": "shoe-4",
      "name": "Kids School Shoes - Durable Quality",
      "price": 280,
      "old_price": null,
      "sold": 3400,
      "rating": 5,
      "image": "school-shoes.jpg"
    },
    {
      "id": "shoe-5",
      "name": "Safety Boots - Industrial Grade",
      "price": 1200,
      "old_price": null,
      "sold": 450,
      "rating": 4,
      "image": "safety-boots.jpg"
    },
    {
      "id": "shoe-6",
      "name": "Fashion Heels - Party Collection",
      "price": 650,
      "old_price": 800,
      "sold": 780,
      "rating": 4,
      "image": "heels.jpg"
    }
  ],
  'bags': [
    {
      "id": "bag-1",
      "name": "Travel Backpack - Large Capacity",
      "price": 780,
      "old_price": null,
      "sold": 1560,
      "rating": 5,
      "image": "backpack.jpg"
    },
    {
      "id": "bag-2",
      "name": "Ladies Handbag - Premium Quality",
      "price": 920,
      "old_price": 1200,
      "sold": 890,
      "rating": 4,
      "image": "handbag.jpg"
    },
    {
      "id": "bag-3",
      "name": "School Bag - Water Resistant",
      "price": 340,
      "old_price": null,
      "sold": 2800,
      "rating": 5,
      "image": "school-bag.jpg"
    },
    {
      "id": "bag-4",
      "name": "Office Briefcase - Professional",
      "price": 1100,
      "old_price": null,
      "sold": 340,
      "rating": 4,
      "image": "briefcase.jpg"
    }
  ],
  'jewelry': [
    {
      "id": "jewel-1",
      "name": "Gold Plated Necklace Set - Wedding Collection",
      "price": 450,
      "old_price": 650,
      "sold": 1200,
      "rating": 5,
      "image": "necklace.jpg"
    },
    {
      "id": "jewel-2",
      "name": "Fashion Earrings - Daily Wear",
      "price": 120,
      "old_price": null,
      "sold": 3400,
      "rating": 5,
      "image": "earrings.jpg"
    },
    {
      "id": "jewel-3",
      "name": "Bracelet Set - Modern Design",
      "price": 280,
      "old_price": null,
      "sold": 890,
      "rating": 4,
      "image": "bracelet.jpg"
    }
  ]
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const category = categoryData[slug as keyof typeof categoryData]
  const products = productsData[slug as keyof typeof productsData]

  if (!category) {
    return NextResponse.json({
      status: false,
      message: "Category not found"
    }, { status: 404 })
  }

  return NextResponse.json({
    status: true,
    category: category,
    products: products || []
  })
}
