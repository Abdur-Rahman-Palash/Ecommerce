import { ProductCard } from "@/components/product-card"
import Link from "next/link"

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const categoryProducts = {
    'shoes': [
      { id: 'shoe-1', title: 'Sports Running Shoes - Wholesale Import', price: '৳ 450', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', sold: 1250, rating: 5, discount: '18%', currentPrice: '৳ 450', originalPrice: '৳ 550', hasFlag: true },
      { id: 'shoe-2', title: 'Formal Leather Shoes - Office Wear', price: '৳ 890', image: 'https://images.unsplash.com/photo-1463100091794-a9c563657cf2?w=300&h=300&fit=crop', sold: 890, rating: 4, discount: '0%', currentPrice: '৳ 890', originalPrice: null, hasFlag: false },
      { id: 'shoe-3', title: 'Casual Sneakers - Daily Comfort', price: '৳ 320', image: 'https://images.unsplash.com/photo-1491553825944-8e3bf5fb802d?w=300&h=300&fit=crop', sold: 2100, rating: 5, discount: '20%', currentPrice: '৳ 320', originalPrice: '৳ 400', hasFlag: true },
      { id: 'shoe-4', title: 'Kids School Shoes - Durable Quality', price: '৳ 280', image: 'https://images.unsplash.com/photo-1596457578869-af2e5e6036d1?w=300&h=300&fit=crop', sold: 3400, rating: 5, discount: '0%', currentPrice: '৳ 280', originalPrice: null, hasFlag: false },
      { id: 'shoe-5', title: 'Safety Boots - Industrial Grade', price: '৳ 1200', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop', sold: 450, rating: 4, discount: '10%', currentPrice: '৳ 1200', originalPrice: '৳ 1320', hasFlag: false },
      { id: 'shoe-6', title: 'Fashion Heels - Party Collection', price: '৳ 650', image: 'https://images.unsplash.com/photo-1543163554-3f743104bd85?w=300&h=300&fit=crop', sold: 780, rating: 4, discount: '15%', currentPrice: '৳ 650', originalPrice: '৳ 765', hasFlag: true },
    ],
    'men-shoes': [
      { id: 'men-shoe-1', title: 'Sports Running Shoes - Wholesale Import', price: '৳ 450', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', sold: 1250, rating: 5, discount: '18%', currentPrice: '৳ 450', originalPrice: '৳ 550', hasFlag: true },
      { id: 'men-shoe-2', title: 'Formal Leather Shoes - Office Wear', price: '৳ 890', image: 'https://images.unsplash.com/photo-1463100091794-a9c563657cf2?w=300&h=300&fit=crop', sold: 890, rating: 4, discount: '0%', currentPrice: '৳ 890', originalPrice: null, hasFlag: false },
      { id: 'men-shoe-3', title: 'Casual Sneakers - Daily Comfort', price: '৳ 320', image: 'https://images.unsplash.com/photo-1491553825944-8e3bf5fb802d?w=300&h=300&fit=crop', sold: 2100, rating: 5, discount: '20%', currentPrice: '৳ 320', originalPrice: '৳ 400', hasFlag: true },
      { id: 'men-shoe-4', title: 'Safety Boots - Industrial Grade', price: '৳ 1200', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop', sold: 450, rating: 4, discount: '10%', currentPrice: '৳ 1200', originalPrice: '৳ 1320', hasFlag: false },
    ],
    'women-shoes': [
      { id: 'women-shoe-1', title: 'Fashion Heels - Party Collection', price: '৳ 650', image: 'https://images.unsplash.com/photo-1543163554-3f743104bd85?w=300&h=300&fit=crop', sold: 780, rating: 4, discount: '15%', currentPrice: '৳ 650', originalPrice: '৳ 765', hasFlag: true },
      { id: 'women-shoe-2', title: 'Formal Pumps - Office Wear', price: '৳ 750', image: 'https://images.unsplash.com/photo-1598728050778-4e018fa8e8f2?w=300&h=300&fit=crop', sold: 560, rating: 5, discount: '20%', currentPrice: '৳ 750', originalPrice: '৳ 938', hasFlag: true },
      { id: 'women-shoe-3', title: 'Casual Flats - Daily Comfort', price: '৳ 280', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', sold: 1800, rating: 4, discount: '0%', currentPrice: '৳ 280', originalPrice: null, hasFlag: false },
      { id: 'women-shoe-4', title: 'Fashion Boots - Winter Collection', price: '৳ 980', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop', sold: 340, rating: 5, discount: '25%', currentPrice: '৳ 980', originalPrice: '৳ 1307', hasFlag: true },
    ],
    'kids-shoes': [
      { id: 'kids-shoe-1', title: 'Kids School Shoes - Durable Quality', price: '৳ 280', image: 'https://images.unsplash.com/photo-1596457578869-af2e5e6036d1?w=300&h=300&fit=crop', sold: 3400, rating: 5, discount: '0%', currentPrice: '৳ 280', originalPrice: null, hasFlag: false },
      { id: 'kids-shoe-2', title: 'Kids Sports Shoes - Play Time', price: '৳ 220', image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=300&h=300&fit=crop', sold: 4200, rating: 5, discount: '10%', currentPrice: '৳ 220', originalPrice: '৳ 244', hasFlag: true },
      { id: 'kids-shoe-3', title: 'Kids Sandals - Summer Collection', price: '৳ 150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', sold: 2800, rating: 4, discount: '0%', currentPrice: '৳ 150', originalPrice: null, hasFlag: false },
      { id: 'kids-shoe-4', title: 'Kids Formal Shoes - Special Occasion', price: '৳ 320', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop', sold: 890, rating: 5, discount: '15%', currentPrice: '৳ 320', originalPrice: '৳ 376', hasFlag: true },
    ],
    'bags': [
      { id: 'bag-1', title: 'Travel Backpack - Large Capacity', price: '৳ 780', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', sold: 1560, rating: 5, discount: '12%', currentPrice: '৳ 780', originalPrice: '৳ 886', hasFlag: true },
      { id: 'bag-2', title: 'Ladies Handbag - Premium Quality', price: '৳ 920', image: 'https://images.unsplash.com/photo-1584917865442-89294acc05c6?w=300&h=300&fit=crop', sold: 890, rating: 4, discount: '0%', currentPrice: '৳ 920', originalPrice: null, hasFlag: false },
      { id: 'bag-3', title: 'School Bag - Water Resistant', price: '৳ 340', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=300&fit=crop', sold: 2800, rating: 5, discount: '0%', currentPrice: '৳ 340', originalPrice: null, hasFlag: false },
      { id: 'bag-4', title: 'Office Briefcase - Professional', price: '৳ 1100', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=300&fit=crop', sold: 340, rating: 4, discount: '8%', currentPrice: '৳ 1100', originalPrice: '৳ 1198', hasFlag: true },
    ],
    'jewelry': [
      { id: 'jewel-1', title: 'Gold Plated Necklace Set - Wedding Collection', price: '৳ 450', image: 'https://images.unsplash.com/photo-1599643478518-a784e5a4b2b7?w=300&h=300&fit=crop', sold: 1200, rating: 5, discount: '31%', currentPrice: '৳ 450', originalPrice: '৳ 650', hasFlag: true },
      { id: 'jewel-2', title: 'Fashion Earrings - Daily Wear', price: '৳ 120', image: 'https://images.unsplash.com/photo-1611915387401-60fbcd0f4d68?w=300&h=300&fit=crop', sold: 3400, rating: 5, discount: '0%', currentPrice: '৳ 120', originalPrice: null, hasFlag: false },
      { id: 'jewel-3', title: 'Bracelet Set - Modern Design', price: '৳ 280', image: 'https://images.unsplash.com/photo-1611085583190-a608e415c71b?w=300&h=300&fit=crop', sold: 890, rating: 4, discount: '0%', currentPrice: '৳ 280', originalPrice: null, hasFlag: true },
    ]
  }
  
  const products = categoryProducts[slug as keyof typeof categoryProducts] || [
    { id: 'default-1', title: `${slug.replace(/-/g, ' ')} Product 1`, price: '৳ 500', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', sold: 1000, rating: 4, discount: '0%', currentPrice: '৳ 500', originalPrice: null, hasFlag: false },
    { id: 'default-2', title: `${slug.replace(/-/g, ' ')} Product 2`, price: '৳ 750', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop', sold: 800, rating: 5, discount: '10%', currentPrice: '৳ 750', originalPrice: '৳ 825', hasFlag: true },
    { id: 'default-3', title: `${slug.replace(/-/g, ' ')} Product 3`, price: '৳ 320', image: 'https://images.unsplash.com/photo-1572635196237-14b3f28150b6?w=300&h=300&fit=crop', sold: 1500, rating: 4, discount: '0%', currentPrice: '৳ 320', originalPrice: null, hasFlag: false },
  ]

  // Check if this is the main shoes category to show subcategories
  const isShoesCategory = slug === 'shoes'
  const subcategories = [
    { name: 'Men', slug: 'men-shoes' },
    { name: 'Women', slug: 'women-shoes' },
    { name: 'Kids', slug: 'kids-shoes' }
  ]

  // Determine page title
  const getPageTitle = () => {
    if (slug === 'men-shoes') return "Men's Shoes"
    if (slug === 'women-shoes') return "Women's Shoes"
    if (slug === 'kids-shoes') return "Kids' Shoes"
    return slug.replace(/-/g, ' ')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{getPageTitle()}</h1>
      
      {/* Show subcategories only for main shoes category */}
      {isShoesCategory && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {subcategories.map((subcategory) => (
              <Link
                key={subcategory.slug}
                href={`/category/${subcategory.slug}`}
                className="px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                <span className="font-medium text-gray-700">{subcategory.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
