"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Bangladesh'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Load cart items from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }, [])

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.qty)
  }, 0)
  const shipping = 50 // Fixed shipping cost
  const total = subtotal + shipping

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    console.log('Form submission started')
    e.preventDefault()
    setIsSubmitting(true)
    
    // Get the form element
    const form = e.target as HTMLFormElement
    console.log('Form element:', form)
    
    // Check form validity
    if (!form.checkValidity()) {
      console.log('Form is not valid')
      form.reportValidity()
      setIsSubmitting(false)
      return
    }
    
    console.log('Form is valid, processing order')
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Create order object
    const order = {
      id: Date.now().toString(),
      items: cartItems,
      customer: formData,
      subtotal,
      shipping,
      total,
      date: new Date().toISOString(),
      status: 'pending'
    }
    
    console.log('Order created:', order)

    // Save order to localStorage (in real app, send to backend)
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    orders.push(order)
    localStorage.setItem('orders', JSON.stringify(orders))

    // Clear cart
    localStorage.setItem('cart', JSON.stringify([]))
    window.dispatchEvent(new Event('cartUpdate'))

    console.log('Cart cleared, showing success message')

    // Show success message
    setShowSuccess(true)
    setIsSubmitting(false)
    
    console.log('Success message should be visible now')
    
    // Redirect to success page after 2 seconds
    setTimeout(() => {
      console.log('Redirecting to order success page')
      window.location.href = '/order-success'
    }, 2000)
  }

  // Handle place order button click
  const handlePlaceOrderClick = async () => {
    console.log('Place Order button clicked')
    console.log('Cart items:', cartItems)
    console.log('Form data:', formData)
    
    // Check if cart has items
    if (cartItems.length === 0) {
      console.error('Cart is empty')
      alert('Your cart is empty. Please add items before checkout.')
      return
    }
    
    // Check if all required fields are filled
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode']
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
    
    if (missingFields.length > 0) {
      console.log('Missing fields:', missingFields)
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`)
      return
    }
    
    // Show success message immediately
    console.log('Setting showSuccess to true')
    setShowSuccess(true)
    setIsSubmitting(true)
    
    // Process order in background
    setTimeout(async () => {
      // Create order object
      const order = {
        id: Date.now().toString(),
        items: cartItems,
        customer: formData,
        subtotal,
        shipping,
        total,
        date: new Date().toISOString(),
        status: 'pending'
      }
      
      console.log('Order created:', order)

      // Save order to localStorage
      const orders = JSON.parse(localStorage.getItem('orders') || '[]')
      orders.push(order)
      localStorage.setItem('orders', JSON.stringify(orders))

      // Clear cart
      localStorage.setItem('cart', JSON.stringify([]))
      window.dispatchEvent(new Event('cartUpdate'))

      console.log('Order saved and cart cleared')
      
      // Redirect to success page after 2 seconds
      setTimeout(() => {
        console.log('Redirecting to order success page')
        window.location.href = '/order-success'
      }, 2000)
    }, 1000)
  }

  // Fallback direct submission
  const handleDirectSubmission = async () => {
    console.log('Direct submission started')
    setIsSubmitting(true)
    
    // Check if all required fields are filled
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode']
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
    
    if (missingFields.length > 0) {
      console.log('Missing fields:', missingFields)
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`)
      setIsSubmitting(false)
      return
    }
    
    console.log('All fields filled, processing order')
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Create order object
    const order = {
      id: Date.now().toString(),
      items: cartItems,
      customer: formData,
      subtotal,
      shipping,
      total,
      date: new Date().toISOString(),
      status: 'pending'
    }
    
    console.log('Order created:', order)

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    orders.push(order)
    localStorage.setItem('orders', JSON.stringify(orders))

    // Clear cart
    localStorage.setItem('cart', JSON.stringify([]))
    window.dispatchEvent(new Event('cartUpdate'))

    console.log('Cart cleared, showing success message')

    // Show success message
    setShowSuccess(true)
    setIsSubmitting(false)
    
    console.log('Success message should be visible now')
    
    // Redirect to success page after 2 seconds
    setTimeout(() => {
      console.log('Redirecting to order success page')
      window.location.href = '/order-success'
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-600 mb-4">Thank you for your purchase. Your order has been received.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600">Order ID: <span className="font-bold">#{Date.now().toString()}</span></p>
              <p className="text-sm text-gray-600">Total: <span className="font-bold">৳ {total.toLocaleString()}</span></p>
            </div>
            <p className="text-sm text-gray-500">Redirecting to order confirmation...</p>
            <div className="mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Billing Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Postal Code</label>
                    <Input
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <Input
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                
                {/* Hidden submit button for form validation */}
                <button type="submit" className="hidden" />
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Cart Items */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.product_id} className="flex gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-gray-500">IMG</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{item.name}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.qty} × ৳{item.price}</p>
                    </div>
                    <p className="text-sm font-medium">৳{item.price * item.qty}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">৳ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">৳ {shipping}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">৳ {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button 
                onClick={handlePlaceOrderClick}
                className="w-full" 
                size="lg"
                disabled={cartItems.length === 0 || isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Place Order'
                )}
              </Button>
              <Link href="/cart">
                <Button variant="outline" className="w-full">
                  Back to Cart
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
