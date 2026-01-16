import { ProductCard } from "@/components/product-card"

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const categoryProducts = {
    'shoes': [
      { id: 'shoe-1', title: 'Sports Running Shoes - Wholesale Import', price: '৳ 450', image: '/shoes-placeholder.svg', sold: 1250, rating: 5, discount: '18%', currentPrice: '৳ 450', originalPrice: '৳ 550', hasFlag: true },
      { id: 'shoe-2', title: 'Formal Leather Shoes - Office Wear', price: '৳ 890', image: '/shoes-placeholder.svg', sold: 890, rating: 4, discount: '0%', currentPrice: '৳ 890', originalPrice: null, hasFlag: false },
      { id: 'shoe-3', title: 'Casual Sneakers - Daily Comfort', price: '৳ 320', image: '/shoes-placeholder.svg', sold: 2100, rating: 5, discount: '20%', currentPrice: '৳ 320', originalPrice: '৳ 400', hasFlag: true },
      { id: 'shoe-4', title: 'Kids School Shoes - Durable Quality', price: '৳ 280', image: '/shoes-placeholder.svg', sold: 3400, rating: 5, discount: '0%', currentPrice: '৳ 280', originalPrice: null, hasFlag: false },
      { id: 'shoe-5', title: 'Safety Boots - Industrial Grade', price: '৳ 1200', image: '/shoes-placeholder.svg', sold: 450, rating: 4, discount: '10%', currentPrice: '৳ 1200', originalPrice: '৳ 1320', hasFlag: false },
      { id: 'shoe-6', title: 'Fashion Heels - Party Collection', price: '৳ 650', image: '/shoes-placeholder.svg', sold: 780, rating: 4, discount: '15%', currentPrice: '৳ 650', originalPrice: '৳ 765', hasFlag: true },
    ],
    'bags': [
      { id: 'bag-1', title: 'Travel Backpack - Large Capacity', price: '৳ 780', image: '/bags-placeholder.svg', sold: 1560, rating: 5, discount: '12%', currentPrice: '৳ 780', originalPrice: '৳ 886', hasFlag: true },
      { id: 'bag-2', title: 'Ladies Handbag - Premium Quality', price: '৳ 920', image: '/bags-placeholder.svg', sold: 890, rating: 4, discount: '0%', currentPrice: '৳ 920', originalPrice: null, hasFlag: false },
      { id: 'bag-3', title: 'School Bag - Water Resistant', price: '৳ 340', image: '/bags-placeholder.svg', sold: 2800, rating: 5, discount: '0%', currentPrice: '৳ 340', originalPrice: null, hasFlag: false },
      { id: 'bag-4', title: 'Office Briefcase - Professional', price: '৳ 1100', image: '/bags-placeholder.svg', sold: 340, rating: 4, discount: '8%', currentPrice: '৳ 1100', originalPrice: '৳ 1198', hasFlag: true },
    ],
    'jewelry': [
      { id: 'jewel-1', title: 'Gold Plated Necklace Set - Wedding Collection', price: '৳ 450', image: '/jewelry-placeholder.svg', sold: 1200, rating: 5, discount: '31%', currentPrice: '৳ 450', originalPrice: '৳ 650', hasFlag: true },
      { id: 'jewel-2', title: 'Fashion Earrings - Daily Wear', price: '৳ 120', image: '/jewelry-placeholder.svg', sold: 3400, rating: 5, discount: '0%', currentPrice: '৳ 120', originalPrice: null, hasFlag: false },
      { id: 'jewel-3', title: 'Bracelet Set - Modern Design', price: '৳ 280', image: '/jewelry-placeholder.svg', sold: 890, rating: 4, discount: '0%', currentPrice: '৳ 280', originalPrice: null, hasFlag: true },
    ]
  }
  
  const products = categoryProducts[slug as keyof typeof categoryProducts] || [
    { id: 'default-1', title: `${slug.replace(/-/g, ' ')} Product 1`, price: '৳ 500', image: '/product-placeholder.svg', sold: 1000, rating: 4, discount: '0%', currentPrice: '৳ 500', originalPrice: null, hasFlag: false },
    { id: 'default-2', title: `${slug.replace(/-/g, ' ')} Product 2`, price: '৳ 750', image: '/product-placeholder.svg', sold: 800, rating: 5, discount: '10%', currentPrice: '৳ 750', originalPrice: '৳ 825', hasFlag: true },
    { id: 'default-3', title: `${slug.replace(/-/g, ' ')} Product 3`, price: '৳ 320', image: '/product-placeholder.svg', sold: 1500, rating: 4, discount: '0%', currentPrice: '৳ 320', originalPrice: null, hasFlag: false },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{slug.replace(/-/g, ' ')}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
