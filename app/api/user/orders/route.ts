import { NextResponse } from 'next/server'

const mockOrders = [
  {
    "order_id": "LB202500001",
    "total": 2450,
    "status": "pending",
    "payment_status": "pending",
    "items_count": 3,
    "created_at": "2025-01-15",
    "updated_at": "2025-01-15",
    "items": [
      {
        "product_id": "abb-838546398630",
        "name": "Cats Comb Special Comb",
        "price": 80,
        "qty": 2,
        "image": "comb.jpg"
      },
      {
        "product_id": "abb-779969913655",
        "name": "Triangle flag string flag",
        "price": 115,
        "qty": 1,
        "image": "flag.jpg"
      }
    ],
    "tracking": null
  },
  {
    "order_id": "LB202500002",
    "total": 1890,
    "status": "processing",
    "payment_status": "paid",
    "items_count": 2,
    "created_at": "2025-01-14",
    "updated_at": "2025-01-14",
    "items": [
      {
        "product_id": "abb-602877242917",
        "name": "Student Girls' Shoes",
        "price": 692,
        "qty": 1,
        "image": "shoes1.jpg"
      },
      {
        "product_id": "abb-614187734362",
        "name": "18 inch light plate balloon",
        "price": 6,
        "qty": 1,
        "image": "balloon.jpg"
      }
    ],
    "tracking": "TRK123456789"
  },
  {
    "order_id": "LB202500003",
    "total": 3200,
    "status": "shipped",
    "payment_status": "paid",
    "items_count": 5,
    "created_at": "2025-01-13",
    "updated_at": "2025-01-13",
    "items": [
      {
        "product_id": "abb-41655160037",
        "name": "Office Culture Candle Holder",
        "price": 189,
        "qty": 1,
        "image": "candle.jpg"
      }
    ],
    "tracking": "TRK987654321"
  },
  {
    "order_id": "LB202500004",
    "total": 890,
    "status": "delivered",
    "payment_status": "paid",
    "items_count": 1,
    "created_at": "2025-01-12",
    "updated_at": "2025-01-12",
    "items": [
      {
        "product_id": "abb-1103137155",
        "name": "Remote control infrared alarm box",
        "price": 261,
        "qty": 1,
        "image": "alarm.jpg"
      }
    ],
    "tracking": "TRK456789123"
  }
]

export async function GET() {
  return NextResponse.json({
    status: true,
    orders: mockOrders,
    total_orders: mockOrders.length,
    summary: {
      pending: mockOrders.filter(o => o.status === 'pending').length,
      processing: mockOrders.filter(o => o.status === 'processing').length,
      shipped: mockOrders.filter(o => o.status === 'shipped').length,
      delivered: mockOrders.filter(o => o.status === 'delivered').length
    }
  })
}
