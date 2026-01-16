"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    setOrders(savedOrders.reverse()) // Show most recent first
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'shipped':
        return 'bg-purple-100 text-purple-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">My Orders</h1>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start shopping to see your orders here.</p>
            <Link href="/">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                  <p className="text-sm text-gray-600">
                    Placed on {new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString()}
                  </p>
                </div>
                <Badge className={getStatusColor(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                <h4 className="font-semibold">Items ({order.items.length})</h4>
                {order.items.map((item: any) => (
                  <div key={item.product_id} className="flex gap-3 p-3 bg-gray-50 rounded">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-gray-500">IMG</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium">{item.name}</h5>
                      <p className="text-sm text-gray-600">Quantity: {item.qty} × ৳{item.price}</p>
                    </div>
                    <p className="font-medium">৳{item.price * item.qty}</p>
                  </div>
                ))}
              </div>

              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 bg-gray-50 rounded">
                <div>
                  <h4 className="font-semibold mb-2">Shipping Address</h4>
                  <p className="text-sm text-gray-600">
                    {order.customer.firstName} {order.customer.lastName}<br />
                    {order.customer.address}<br />
                    {order.customer.city}, {order.customer.postalCode}<br />
                    {order.customer.country}<br />
                    {order.customer.phone}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <p className="text-sm text-gray-600">
                    Email: {order.customer.email}<br />
                    Phone: {order.customer.phone}
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>৳ {order.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>৳ {order.shipping}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">৳ {order.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button variant="outline" size="sm">
                  Track Order
                </Button>
                <Button variant="outline" size="sm">
                  Download Invoice
                </Button>
                <Link href="/">
                  <Button variant="outline" size="sm">
                    Shop Again
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
