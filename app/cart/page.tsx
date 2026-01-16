"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([])

  // Load cart items from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }, [])

  // Update cart in localStorage
  const updateCart = (newCart: any[]) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
    setCartItems(newCart)
    window.dispatchEvent(new Event('cartUpdate'))
    
    const cartCount = newCart.reduce((sum: number, item: any) => sum + item.qty, 0)
    localStorage.setItem('cartCount', cartCount.toString())
  }

  // Increment quantity
  const incrementQuantity = (itemId: string) => {
    const newCart = cartItems.map((item: any) => 
      item.product_id === itemId 
        ? { ...item, qty: item.qty + 1, subtotal: item.price * (item.qty + 1) }
        : item
    )
    updateCart(newCart)
  }

  // Decrement quantity
  const decrementQuantity = (itemId: string) => {
    const newCart = cartItems.map((item: any) => 
      item.product_id === itemId && item.qty > 1
        ? { ...item, qty: item.qty - 1, subtotal: item.price * (item.qty - 1) }
        : item
    )
    updateCart(newCart)
  }

  // Remove item
  const removeItem = (itemId: string) => {
    const newCart = cartItems.filter((item: any) => item.product_id !== itemId)
    updateCart(newCart)
  }

  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.qty)
  }, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <Link href="/">
                  <Button>Continue Shopping</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            cartItems.map((item) => (
              <Card key={item.product_id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium line-clamp-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">৳ {item.price}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-blue-600">৳ {item.subtotal || item.price * item.qty}</p>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => decrementQuantity(item.product_id)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.qty}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => incrementQuantity(item.product_id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-red-500"
                            onClick={() => removeItem(item.product_id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">৳ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">৳ {subtotal.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => {
                  // Navigate to checkout page
                  window.location.href = '/checkout'
                }}
              >
                Proceed to Checkout
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
