import Link from "next/link"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const categories = [
  "Shoes", "Bags", "Jewelry", "Beauty and Personal Care", "Men's Clothing", 
  "Women's Clothing", "Baby Items", "Eyewear", "Office & School Supplies", 
  "Phone Accessories", "Sports & Fitness", "Entertainment Items", "Watches", 
  "Automobile Items", "Pets Food", "Outdoor & Travelling", "Electronics & Gadgets", 
  "Home And Kitchen", "Tools & Home Improvement"
]

export function CategoryStrip() {
  return (
    <ScrollArea className="w-full whitespace-nowrap border-b bg-background">
      <div className="flex w-max space-x-4 p-4">
        {categories.map((category) => (
          <Link key={category} href={`/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-gray-100">
            {category}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
