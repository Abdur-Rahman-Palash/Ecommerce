import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (!body.phone || !body.otp) {
      return NextResponse.json({
        status: false,
        message: "Phone number and OTP are required"
      }, { status: 400 })
    }

    if (body.otp === "123456") {
      return NextResponse.json({
        status: true,
        message: "OTP verified successfully",
        data: {
          user: {
            id: 1,
            name: "Test User",
            phone: body.phone,
            email: "test@ecommerce.com"
          },
          token: "mock_jwt_token_123456789"
        }
      })
    } else {
      return NextResponse.json({
        status: false,
        message: "Invalid OTP"
      }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "Something went wrong"
    }, { status: 500 })
  }
}
