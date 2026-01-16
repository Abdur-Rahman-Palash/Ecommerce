import { NextRequest, NextResponse } from 'next/server'

let cartData: any[] = []

export async function GET() {
  const total = cartData.reduce((sum, item) => sum + (item.price * item.qty), 0)
  
  return NextResponse.json({
    status: true,
    cart: cartData,
    total: total,
    cart_count: cartData.reduce((sum, item) => sum + item.qty, 0)
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (body.action === 'add') {
      const existingItem = cartData.find(item => item.product_id === body.product_id)
      
      if (existingItem) {
        existingItem.qty += body.qty || 1
        existingItem.subtotal = existingItem.price * existingItem.qty
      } else {
        cartData.push({
          product_id: body.product_id,
          name: body.name,
          price: body.price,
          image: body.image,
          qty: body.qty || 1,
          subtotal: body.price * (body.qty || 1)
        })
      }
    } else if (body.action === 'remove') {
      cartData = cartData.filter(item => item.product_id !== body.product_id)
    } else if (body.action === 'update') {
      const item = cartData.find(item => item.product_id === body.product_id)
      if (item) {
        item.qty = body.qty
        item.subtotal = item.price * item.qty
      }
    }

    const total = cartData.reduce((sum, item) => sum + (item.price * item.qty), 0)

    return NextResponse.json({
      status: true,
      message: body.action === 'add' ? "Item added to cart" : "Cart updated",
      cart: cartData,
      total: total,
      cart_count: cartData.reduce((sum, item) => sum + item.qty, 0)
    })
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "Something went wrong"
    }, { status: 500 })
  }
}
