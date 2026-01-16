import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (!body.phone) {
      return NextResponse.json({
        status: false,
        message: "Phone number is required"
      }, { status: 400 })
    }

    return NextResponse.json({
      status: true,
      message: "OTP sent successfully",
      data: {
        phone: body.phone,
        otp: "123456",
        expires_in: 300
      }
    })
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "Something went wrong"
    }, { status: 500 })
  }
}
