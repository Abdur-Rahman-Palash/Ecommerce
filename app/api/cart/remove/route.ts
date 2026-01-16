import { NextRequest, NextResponse } from 'next/server'

let cartData: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (!body.product_id) {
      return NextResponse.json({
        status: false,
        message: "Product ID is required"
      }, { status: 400 })
    }

    cartData = cartData.filter(item => item.product_id !== body.product_id)

    const total = cartData.reduce((sum, item) => sum + (item.price * item.qty), 0)

    return NextResponse.json({
      status: true,
      message: "Item removed from cart successfully",
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
