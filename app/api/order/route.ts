import { NextRequest, NextResponse } from 'next/server'

let orders: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const orderId = `LB${new Date().getFullYear()}${String(orders.length + 1).padStart(6, '0')}`
    
    const newOrder = {
      order_id: orderId,
      items: body.items || [],
      total: body.total || 0,
      customer_info: body.customer_info || {},
      status: "pending",
      payment_status: "pending",
      created_at: new Date().toISOString().split('T')[0],
      updated_at: new Date().toISOString().split('T')[0]
    }
    
    orders.push(newOrder)

    return NextResponse.json({
      status: true,
      message: "Order placed successfully",
      order_id: orderId,
      order: newOrder
    })
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "Something went wrong"
    }, { status: 500 })
  }
}
