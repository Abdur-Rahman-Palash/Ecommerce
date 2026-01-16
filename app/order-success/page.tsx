"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function OrderSuccessPage() {
  const [orderDetails, setOrderDetails] = useState<any>(null)

  useEffect(() => {
    // Get the most recent order from localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    if (orders.length > 0) {
      setOrderDetails(orders[orders.length - 1])
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <CardTitle className="text-2xl text-green-600">Order Placed Successfully!</CardTitle>
            <p className="text-gray-600 mt-2">Thank you for your purchase. Your order has been received and is being processed.</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {orderDetails && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Order Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-medium">#{orderDetails.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{new Date(orderDetails.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-yellow-600">Pending</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-medium text-lg">৳ {orderDetails.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What's Next?</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• You will receive an order confirmation email shortly</li>
                <li>• Our team will process your order within 1-2 business days</li>
                <li>• You will receive tracking information once your order ships</li>
                <li>• Expected delivery time: 7-14 business days</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/" className="flex-1">
                <Button className="w-full">Continue Shopping</Button>
              </Link>
              <Link href="/orders" className="flex-1">
                <Button variant="outline" className="w-full">View My Orders</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
