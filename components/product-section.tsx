"use client"

import { ProductCard } from "./product-card"

const defaultProducts = [
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

const categoryProducts: Record<string, any[]> = {
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
  jewelry: [
    { id: 20, title: "Gold Plated Necklace Set - Wedding Collection", image: "https://images.unsplash.com/photo-1599643448532-9273e7e2d354?w=300&h=300&fit=crop", discount: "31%", currentPrice: "৳ 450", originalPrice: "৳ 650", sold: 1200, rating: 5, hasFlag: true },
    { id: 21, title: "Fashion Earrings - Daily Wear", image: "https://images.unsplash.com/photo-1611085523210-0115d46894d2?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 120", originalPrice: null, sold: 3400, rating: 5, hasFlag: false },
    { id: 22, title: "Bracelet Set - Modern Design", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 280", originalPrice: null, sold: 890, rating: 4, hasFlag: true },
    { id: 23, title: "Diamond Ring - Engagement Collection", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 1250", originalPrice: "৳ 1667", sold: 450, rating: 5, hasFlag: false }
  ],
  hoodie: [
    { id: 24, title: "Classic Pullover Hoodie - Premium Cotton", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 890", originalPrice: "৳ 1112", sold: 2340, rating: 5, hasFlag: true },
    { id: 25, title: "Zip-Up Hoodie - Street Style", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 1200", originalPrice: "৳ 1412", sold: 1890, rating: 4, hasFlag: false },
    { id: 26, title: "Oversized Hoodie - Comfort Fit", image: "https://images.unsplash.com/photo-1591047139829-d91ecb6eaa7f?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 950", originalPrice: null, sold: 3200, rating: 5, hasFlag: true },
    { id: 27, title: "Graphic Print Hoodie - Trendy Design", image: "https://images.unsplash.com/photo-1559553737-b9e4152e9381?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 750", originalPrice: "৳ 1000", sold: 1560, rating: 4, hasFlag: false },
    { id: 28, title: "Athletic Hoodie - Sport Collection", image: "https://images.unsplash.com/photo-1577401234523-4f9c4b8d0d8a?w=300&h=300&fit=crop", discount: "10%", currentPrice: "৳ 1100", originalPrice: "৳ 1222", sold: 2100, rating: 5, hasFlag: true }
  ],
  "men-shoes": [
    { id: 12, title: "Formal Leather Shoes - Office Wear", image: "https://images.unsplash.com/photo-1463100091794-a9c563657cf2?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 890", originalPrice: null, sold: 890, rating: 4, hasFlag: false },
    { id: 15, title: "High Heels - Party Collection", image: "https://images.unsplash.com/photo-1543163554-3f743104bd85?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 650", originalPrice: "৳ 765", sold: 780, rating: 4, hasFlag: true }
  ],
  "women-shoes": [
    { id: 11, title: "Sports Running Shoes - Wholesale Import", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop", discount: "18%", currentPrice: "৳ 450", originalPrice: "৳ 550", sold: 1250, rating: 5, hasFlag: true },
    { id: 13, title: "Casual Sneakers - Daily Comfort", image: "https://images.unsplash.com/photo-1491553825944-8e3bf5fb802d?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 320", originalPrice: "৳ 400", sold: 2100, rating: 5, hasFlag: true }
  ],
  "kids-shoes": [
    { id: 14, title: "Kids School Shoes - Durable Quality", image: "https://images.unsplash.com/photo-1596457578869-af2e5e6036d1?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 280", originalPrice: null, sold: 3400, rating: 5, hasFlag: false }
  ],
  bag: [
    { id: 29, title: "Leather Backpack - Premium Quality", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", discount: "30%", currentPrice: "৳ 2200", originalPrice: "৳ 3142", sold: 890, rating: 5, hasFlag: true },
    { id: 30, title: "Designer Handbag - Luxury Collection", image: "https://images.unsplash.com/photo-1584917865442-89294acc05c6?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 3500", originalPrice: null, sold: 450, rating: 4, hasFlag: false },
    { id: 31, title: "Canvas Tote Bag - Eco Friendly", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=300&fit=crop", discount: "40%", currentPrice: "৳ 320", originalPrice: "৳ 533", sold: 4200, rating: 5, hasFlag: true },
    { id: 32, title: "Crossbody Bag - Compact Design", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 890", originalPrice: "৳ 1112", sold: 2800, rating: 4, hasFlag: false },
    { id: 33, title: "Travel Duffel Bag - Large Capacity", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 1800", originalPrice: "৳ 2118", sold: 1200, rating: 5, hasFlag: true }
  ],
  winter: [
    { id: 34, title: "Winter Jacket - Heavy Duty", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop", discount: "35%", currentPrice: "৳ 2800", originalPrice: "৳ 4308", sold: 670, rating: 5, hasFlag: true },
    { id: 35, title: "Wool Sweater - Classic Design", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 1500", originalPrice: null, sold: 1800, rating: 4, hasFlag: false },
    { id: 36, title: "Thermal Wear Set - Complete Package", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 980", originalPrice: "৳ 1307", sold: 3400, rating: 5, hasFlag: true },
    { id: 37, title: "Winter Boots - Waterproof", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 2200", originalPrice: "৳ 2750", sold: 980, rating: 4, hasFlag: false },
    { id: 38, title: "Beanie Hat - Warm & Stylish", image: "https://images.unsplash.com/photo-1577401234523-4f9c4b8d0d8a?w=300&h=300&fit=crop", discount: "10%", currentPrice: "৳ 280", originalPrice: "৳ 311", sold: 5200, rating: 5, hasFlag: true },
    { id: 39, title: "Winter Gloves - Touchscreen Compatible", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 450", originalPrice: "৳ 529", sold: 2900, rating: 4, hasFlag: true }
  ]
}

interface ProductSectionProps {
  selectedCategory?: string
}

export function ProductSection({ selectedCategory }: ProductSectionProps) {
  const sections = [
    {
      title: "FISHING ROD",
      products: defaultProducts,
      badge: "中",
      slug: "fishing-rod"
    },
    {
      title: "HOODIES",
      products: categoryProducts.hoodie,
      badge: "🧥",
      slug: "hoodie"
    },
    {
      title: "BAGS",
      products: categoryProducts.bag,
      badge: "👜",
      slug: "bags"
    },
    {
      title: "WINTER WEAR",
      products: categoryProducts.winter,
      badge: "🧣",
      slug: "winter"
    },
    {
      title: "SHOES",
      products: categoryProducts.shoes,
      badge: "👟",
      slug: "shoes"
    },
    {
      title: "MEN'S SHOES",
      products: categoryProducts["men-shoes"],
      badge: "👟",
      slug: "men-shoes"
    },
    {
      title: "WOMEN'S SHOES",
      products: categoryProducts["women-shoes"],
      badge: "👟",
      slug: "women-shoes"
    },
    {
      title: "KIDS' SHOES",
      products: categoryProducts["kids-shoes"],
      badge: "👟",
      slug: "kids-shoes"
    },
    {
      title: "JEWELRY",
      products: categoryProducts.jewelry,
      badge: "💍",
      slug: "jewelry"
    },
    {
      title: "BEAUTY AND PERSONAL CARE",
      products: [
        { id: 40, title: "Face Cream - Premium Quality", image: "https://images.unsplash.com/photo-1570172619644-d42c5a98c4c4?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 450", originalPrice: "৳ 562", sold: 1200, rating: 5, hasFlag: true },
        { id: 41, title: "Lipstick Set - Multiple Colors", image: "https://images.unsplash.com/photo-1584814473178-55697b59d721?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 280", originalPrice: null, sold: 3400, rating: 5, hasFlag: false },
        { id: 42, title: "Perfume - Luxury Collection", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a3713?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 1200", originalPrice: "৳ 1412", sold: 890, rating: 4, hasFlag: true },
        { id: 43, title: "Hair Oil - Natural Ingredients", image: "https://images.unsplash.com/photo-1570172619644-d42c5a98c4c4?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 180", originalPrice: "৳ 240", sold: 2100, rating: 5, hasFlag: false }
      ],
      badge: "💄",
      slug: "beauty-and-personal-care"
    },
    {
      title: "MEN'S CLOTHING",
      products: [
        { id: 44, title: "Formal Shirt - Premium Cotton", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c6?w=300&h=300&fit=crop", discount: "30%", currentPrice: "৳ 680", originalPrice: "৳ 971", sold: 1500, rating: 5, hasFlag: true },
        { id: 45, title: "Casual T-Shirt - Comfort Fit", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 320", originalPrice: null, sold: 4200, rating: 5, hasFlag: false },
        { id: 46, title: "Denim Jeans - Classic Style", image: "https://images.unsplash.com/photo-1542272604-787c3835535e?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 890", originalPrice: "৳ 1112", sold: 2800, rating: 4, hasFlag: true },
        { id: 47, title: "Sports Jersey - Breathable Fabric", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 550", originalPrice: "৳ 647", sold: 1800, rating: 5, hasFlag: false }
      ],
      badge: "👔",
      slug: "men-s-clothing"
    },
    {
      title: "WOMEN'S CLOTHING",
      products: [
        { id: 48, title: "Elegant Dress - Party Wear", image: "https://images.unsplash.com/photo-1594634313905-35e42ad0c2c9?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 1200", originalPrice: "৳ 1600", sold: 980, rating: 5, hasFlag: true },
        { id: 49, title: "Casual Top - Daily Wear", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 450", originalPrice: null, sold: 3200, rating: 5, hasFlag: false },
        { id: 50, title: "Skirt - Modern Design", image: "https://images.unsplash.com/photo-1594634313905-35e42ad0c2c9?w=300&h=300&fit=crop", discount: "30%", currentPrice: "৳ 380", originalPrice: "৳ 543", sold: 2100, rating: 4, hasFlag: true },
        { id: 51, title: "Blouse - Office Style", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 680", originalPrice: "৳ 850", sold: 1500, rating: 5, hasFlag: false }
      ],
      badge: "👗",
      slug: "women-s-clothing"
    },
    {
      title: "EYEWEAR",
      products: [
        { id: 52, title: "Sunglasses - UV Protection", image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8f?w=300&h=300&fit=crop", discount: "35%", currentPrice: "৳ 450", originalPrice: "৳ 692", sold: 2300, rating: 5, hasFlag: true },
        { id: 53, title: "Reading Glasses - Anti Blue Light", image: "https://images.unsplash.com/photo-1504674900247-0877df9c8409?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 280", originalPrice: null, sold: 3400, rating: 5, hasFlag: false },
        { id: 54, title: "Contact Lenses - Daily Disposable", image: "https://images.unsplash.com/photo-1504674900247-0877df9c8409?w=300&h=300&fit=crop", discount: "40%", currentPrice: "৳ 180", originalPrice: "৳ 300", sold: 4500, rating: 4, hasFlag: true },
        { id: 55, title: "Eyeglasses - Fashion Frames", image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8f?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 890", originalPrice: "৳ 1187", sold: 1200, rating: 5, hasFlag: false }
      ],
      badge: "👓",
      slug: "eyewear"
    },
    {
      title: "OFFICE & SCHOOL SUPPLIES",
      products: [
        { id: 56, title: "Notebook Set - Premium Paper", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 120", originalPrice: "৳ 150", sold: 5600, rating: 5, hasFlag: true },
        { id: 57, title: "Pen Collection - Multiple Colors", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 85", originalPrice: null, sold: 6700, rating: 5, hasFlag: false },
        { id: 58, title: "Backpack - School Edition", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", discount: "15%", currentPrice: "৳ 450", originalPrice: "৳ 529", sold: 3400, rating: 4, hasFlag: true },
        { id: 59, title: "Desk Organizer - Compact Design", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", discount: "30%", currentPrice: "৳ 280", originalPrice: "৳ 400", sold: 2100, rating: 5, hasFlag: false }
      ],
      badge: "📚",
      slug: "office-and-school-supplies"
    },
    {
      title: "PHONE ACCESSORIES",
      products: [
        { id: 60, title: "Phone Case - Shockproof", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", discount: "50%", currentPrice: "৳ 150", originalPrice: "৳ 300", sold: 7800, rating: 5, hasFlag: true },
        { id: 61, title: "Screen Protector - Tempered Glass", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 80", originalPrice: null, sold: 8900, rating: 5, hasFlag: false },
        { id: 62, title: "Wireless Charger - Fast Charging", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 220", originalPrice: "৳ 293", sold: 4500, rating: 4, hasFlag: true },
        { id: 63, title: "Phone Stand - Adjustable Angle", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", discount: "40%", currentPrice: "৳ 120", originalPrice: "৳ 200", sold: 5600, rating: 5, hasFlag: false }
      ],
      badge: "📱",
      slug: "phone-accessories"
    },
    {
      title: "SPORTS & FITNESS",
      products: [
        { id: 64, title: "Yoga Mat - Non-Slip Surface", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop", discount: "30%", currentPrice: "৳ 350", originalPrice: "৳ 500", sold: 3200, rating: 5, hasFlag: true },
        { id: 65, title: "Dumbbells Set - Adjustable Weight", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 1200", originalPrice: null, sold: 1800, rating: 5, hasFlag: false },
        { id: 66, title: "Running Shoes - Professional", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 780", originalPrice: "৳ 975", sold: 2400, rating: 4, hasFlag: true },
        { id: 67, title: "Fitness Tracker - Heart Rate Monitor", image: "https://images.unsplash.com/photo-1575311376936-d4a9b8b1c8e0?w=300&h=300&fit=crop", discount: "35%", currentPrice: "৳ 650", originalPrice: "৳ 1000", sold: 3400, rating: 5, hasFlag: false }
      ],
      badge: "⚽",
      slug: "sports-and-fitness"
    },
    {
      title: "ENTERTAINMENT ITEMS",
      products: categoryProducts["entertainment-items"],
      badge: "🎮",
      slug: "entertainment-items"
    },
    {
      title: "WATCHES",
      products: [
        { id: 68, title: "Smart Watch - Fitness Tracking", image: "https://images.unsplash.com/photo-1523275335684-3789896dca7f?w=300&h=300&fit=crop", discount: "40%", currentPrice: "৳ 1800", originalPrice: "৳ 3000", sold: 2100, rating: 5, hasFlag: true },
        { id: 69, title: "Luxury Watch - Classic Design", image: "https://images.unsplash.com/photo-1523275335684-3789896dca7f?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 3500", originalPrice: null, sold: 450, rating: 5, hasFlag: false },
        { id: 70, title: "Digital Watch - Sports Edition", image: "https://images.unsplash.com/photo-1523275335684-3789896dca7f?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 450", originalPrice: "৳ 600", sold: 3200, rating: 4, hasFlag: true },
        { id: 71, title: "Kids Watch - Cartoon Design", image: "https://images.unsplash.com/photo-1523275335684-3789896dca7f?w=300&h=300&fit=crop", discount: "50%", currentPrice: "৳ 180", originalPrice: "৳ 360", sold: 5600, rating: 5, hasFlag: false }
      ],
      badge: "⌚",
      slug: "watches"
    },
    {
      title: "ELECTRONICS & GADGETS",
      products: [
        { id: 72, title: "Laptop - High Performance", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop", discount: "20%", currentPrice: "৳ 45000", originalPrice: "৳ 56250", sold: 340, rating: 5, hasFlag: true },
        { id: 73, title: "Tablet - 10 Inch Display", image: "https://images.unsplash.com/photo-1544244015-0e43677838f95?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 22000", originalPrice: null, sold: 670, rating: 5, hasFlag: false },
        { id: 74, title: "Headphones - Noise Cancelling", image: "https://images.unsplash.com/photo-1505740420928-5e560c0d30e7?w=300&h=300&fit=crop", discount: "30%", currentPrice: "৳ 1400", originalPrice: "৳ 2000", sold: 1800, rating: 4, hasFlag: true },
        { id: 75, title: "Smart Speaker - Voice Assistant", image: "https://images.unsplash.com/photo-1558024920-7924d1c7f272?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 2200", originalPrice: "৳ 2933", sold: 1200, rating: 5, hasFlag: false }
      ],
      badge: "💻",
      slug: "electronics-and-gadgets"
    },
    {
      title: "HOME AND KITCHEN",
      products: [
        { id: 76, title: "Coffee Maker - Automatic Brew", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085c?w=300&h=300&fit=crop", discount: "35%", currentPrice: "৳ 2200", originalPrice: "৳ 3385", sold: 890, rating: 5, hasFlag: true },
        { id: 77, title: "Blender - High Speed", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085c?w=300&h=300&fit=crop", discount: "0%", currentPrice: "৳ 1200", originalPrice: null, sold: 1500, rating: 5, hasFlag: false },
        { id: 78, title: "Cookware Set - Non-Stick", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085c?w=300&h=300&fit=crop", discount: "40%", currentPrice: "৳ 1800", originalPrice: "৳ 3000", sold: 2100, rating: 4, hasFlag: true },
        { id: 79, title: "Air Purifier - HEPA Filter", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085c?w=300&h=300&fit=crop", discount: "25%", currentPrice: "৳ 2800", originalPrice: "৳ 3733", sold: 670, rating: 5, hasFlag: false }
      ],
      badge: "🏠",
      slug: "home-and-kitchen"
    }
  ]

  // If a category is selected, show only that section
  if (selectedCategory) {
    const selectedSection = sections.find(section => section.slug === selectedCategory)
    if (selectedSection) {
      return (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">{selectedSection.badge}</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">{selectedSection.title}</h1>
            </div>
            <button 
              onClick={() => {
                window.location.href = `/category/${selectedSection.slug}`
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors cursor-pointer"
            >
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedSection.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Footer Section */}
          <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
                  <p className="text-gray-600 text-sm">
                    Your trusted e-commerce platform for quality products at great prices.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Customer Service</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
                    <li><a href="#" className="hover:text-gray-800">Returns</a></li>
                    <li><a href="#" className="hover:text-gray-800">Shipping Info</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-gray-800">Categories</a></li>
                    <li><a href="#" className="hover:text-gray-800">Deals</a></li>
                    <li><a href="#" className="hover:text-gray-800">New Arrivals</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Connect</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-gray-800">Facebook</a></li>
                    <li><a href="#" className="hover:text-gray-800">Twitter</a></li>
                    <li><a href="#" className="hover:text-gray-800">Instagram</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
                <p>&copy; 2024 Ecommerce. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )
    }
  }

  // Show all sections when no category is selected
  return (
    <div>
      {sections.map((section, index) => (
        <div key={section.title} className={index < sections.length - 1 ? 'mb-12' : ''}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">{section.badge}</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">{section.title}</h1>
            </div>
            <button 
              onClick={() => {
                window.location.href = `/category/${section.slug}`
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors cursor-pointer"
            >
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.products?.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
      
      {/* Footer Section */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
              <p className="text-gray-600 text-sm">
                Your trusted e-commerce platform for quality products at great prices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-800">Returns</a></li>
                <li><a href="#" className="hover:text-gray-800">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Categories</a></li>
                <li><a href="#" className="hover:text-gray-800">Deals</a></li>
                <li><a href="#" className="hover:text-gray-800">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-800">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-800">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Ecommerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
