import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: true,
    categories: [
      {
        "id": 1,
        "name": "Shoes",
        "slug": "shoes",
        "icon": "shoes.png"
      },
      {
        "id": 2,
        "name": "Bags",
        "slug": "bags",
        "icon": "bags.png"
      },
      {
        "id": 3,
        "name": "Jewelry",
        "slug": "jewelry",
        "icon": "jewelry.png"
      },
      {
        "id": 4,
        "name": "Beauty and Personal Care",
        "slug": "beauty-and-personal-care",
        "icon": "beauty.png"
      },
      {
        "id": 5,
        "name": "Men's Clothing",
        "slug": "men-s-clothing",
        "icon": "men-clothing.png"
      },
      {
        "id": 6,
        "name": "Women's Clothing",
        "slug": "women-s-clothing",
        "icon": "women-clothing.png"
      },
      {
        "id": 7,
        "name": "Baby Items",
        "slug": "baby-items",
        "icon": "baby.png"
      },
      {
        "id": 8,
        "name": "Eyewear",
        "slug": "eyewear",
        "icon": "eyewear.png"
      },
      {
        "id": 9,
        "name": "Office & School Supplies",
        "slug": "office-and-school-supplies",
        "icon": "office.png"
      }
    ],
    popular_categories: [
      {
        "id": 1,
        "name": "Shoes",
        "image": "shoes-cat.jpg"
      },
      {
        "id": 2,
        "name": "Bags",
        "image": "bags-cat.jpg"
      },
      {
        "id": 3,
        "name": "Jewelry",
        "image": "jewelry-cat.jpg"
      },
      {
        "id": 4,
        "name": "Beauty",
        "image": "beauty-cat.jpg"
      },
      {
        "id": 5,
        "name": "Men's Clothing",
        "image": "men-cat.jpg"
      },
      {
        "id": 6,
        "name": "Women's Clothing",
        "image": "women-cat.jpg"
      },
      {
        "id": 7,
        "name": "Baby Items",
        "image": "baby-cat.jpg"
      },
      {
        "id": 8,
        "name": "Eyewear",
        "image": "eyewear-cat.jpg"
      },
      {
        "id": 9,
        "name": "Office",
        "image": "office-cat.jpg"
      }
    ],
    most_sold_items: [
      {
        "id": "abb-838546398630",
        "name": "Cats Comb Special Comb Long-haired Cats Go to Floating Hair Needle Comb Pet Dog Comb Brush Cleaning Artifact Pet Supplies",
        "price": 80,
        "old_price": null,
        "sold": 3400,
        "rating": 5,
        "image": "comb.jpg"
      },
      {
        "id": "abb-779969913655",
        "name": "Triangle flag string flag small color flag factory wholesale site warning flag opening layout site colorful flag hanging flag decoration",
        "price": 115,
        "old_price": null,
        "sold": 2550,
        "rating": 5,
        "image": "flag.jpg"
      },
      {
        "id": "abb-602877242917",
        "name": "Student Girls' Shoes 2023 Spring & Fall New Girls' Sports Shoes, Sneakers, Fashionable Kidsren's Cartoon Shoes, Cute",
        "price": 692,
        "old_price": 850,
        "sold": 2125,
        "rating": 5,
        "image": "shoes1.jpg"
      },
      {
        "id": "abb-614187734362",
        "name": "18 inch light plate five-pointed star aluminum film balloon monochrome love light plate anniversary decoration balloon wholesale",
        "price": 6,
        "old_price": 8,
        "sold": 1700,
        "rating": 5,
        "image": "balloon.jpg"
      },
      {
        "id": "abb-41655160037",
        "name": "Office Culture Candle Holder Candle Container Candlestick Cup Jar Modern Simple Style Decorative Ornament",
        "price": 189,
        "old_price": null,
        "sold": 1275,
        "rating": 5,
        "image": "candle.jpg"
      },
      {
        "id": "abb-1103137155",
        "name": "Remote control infrared alarm box (for export)",
        "price": 261,
        "old_price": null,
        "sold": 850,
        "rating": 5,
        "image": "alarm.jpg"
      },
      {
        "id": "abb-1000067524596",
        "name": "Pic16F883 Pic16F883-I / Sp Straight Plug Dip-28 Microcontroller New",
        "price": 77,
        "old_price": null,
        "sold": 425,
        "rating": 5,
        "image": "microcontroller.jpg"
      }
    ],
    today_trading: []
  })
}
