import { NextRequest, NextResponse } from 'next/server'

const productData = {
  "abb-838546398630": {
    "id": "abb-838546398630",
    "name": "Cats Comb Special Comb Long-haired Cats Go to Floating Hair Needle Comb Pet Dog Comb Brush Cleaning Artifact Pet Supplies",
    "price": 80,
    "old_price": null,
    "sold": 1537965,
    "stock": "in_stock",
    "category": "Pet Supplies",
    "rating": 3.3,
    "total_rating": 4,
    "seller_rating": 3.3,
    "total_sale": 1537965,
    "location": "河北省石家庄市",
    "images": [
      "comb1.jpg",
      "comb2.jpg",
      "comb3.jpg"
    ],
    "description": "<p>Professional pet grooming comb designed for long-haired cats and dogs. Features anti-static floating hair technology with fine needles that gently remove loose fur without hurting pets. Made from high-quality stainless steel with comfortable grip handle.</p>",
    "min_order": 10,
    "specifications": [
      { "label": "Product Type", "value": "Other" },
      { "label": "Brand", "value": "No" },
      { "label": "Model Number", "value": "Fine needle comb blue★Opp bag" },
      { "label": "Place of Origin", "value": "North america" },
      { "label": "Regional Feature", "value": "Northeast asia" },
      { "label": "Main Domestic Market", "value": "Middle east" },
      { "label": "Application", "value": "Other" },
      { "label": "Sales Channels", "value": "Independent station" },
      { "label": "Platform", "value": "LAZADA" },
      { "label": "Type", "value": "Other" },
      { "label": "Production City", "value": "Yiwu" },
      { "label": "Is it in stock", "value": "No" },
      { "label": "Product name", "value": "Row comb" },
      { "label": "Use", "value": "Pet comb" },
      { "label": "Classification", "value": "Cat comb" }
    ],
    "shipping": {
      "by_air": true,
      "by_sea": true,
      "categories": [
        { "name": "ক্যাটাগরিঃ এ", "price": "৭৪০ টাকা প্রতি কেজি" },
        { "name": "ক্যাটাগরিঃ বি", "price": "১০৮০ টাকা প্রতি কেজি" },
        { "name": "ক্যাটাগরিঃ সি", "price": "" }
      ]
    }
  },
  "abb-779969913655": {
    "id": "abb-779969913655",
    "name": "Triangle flag string flag small color flag factory wholesale site warning flag opening layout site colorful flag hanging flag decoration",
    "price": 115,
    "old_price": null,
    "sold": 15004650,
    "stock": "in_stock",
    "category": "Decorations",
    "rating": 4.3,
    "total_rating": 4,
    "seller_rating": 4.3,
    "total_sale": 15004650,
    "location": "河北省石家庄市",
    "images": [
      "flag1.jpg",
      "flag2.jpg",
      "flag3.jpg"
    ],
    "description": "<p>High-quality decorative triangle flags perfect for events, celebrations, and business openings. Made from durable polyester material with vibrant colors that resist fading. Ideal for both indoor and outdoor use.</p>",
    "min_order": 50,
    "specifications": [
      { "label": "Product Type", "value": "Other" },
      { "label": "Model Number", "value": "ali-754169411881" },
      { "label": "Packaging Details", "value": "OPP bag" },
      { "label": "Size", "value": "18*30" },
      { "label": "Color", "value": "Red, yellow, blue, green, pink" },
      { "label": "Customized", "value": "No" },
      { "label": "Material", "value": "Oxford cloth" },
      { "label": "Flagpole", "value": "No flagpole" },
      { "label": "Printing", "value": "Screen printing" },
      { "label": "Usage", "value": "National Day" }
    ],
    "shipping": {
      "by_air": true,
      "by_sea": true,
      "categories": [
        { "name": "ক্যাটাগরিঃ এ", "price": "৭৪০ টাকা প্রতি কেজি" },
        { "name": "ক্যাটাগরিঃ বি", "price": "১০৮০ টাকা প্রতি কেজি" },
        { "name": "ক্যাটাগরিঃ সি", "price": "" }
      ]
    }
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const product = productData[id as keyof typeof productData]

  if (!product) {
    return NextResponse.json({
      status: false,
      message: "Product not found"
    }, { status: 404 })
  }

  return NextResponse.json({
    status: true,
    product: product
  })
}
