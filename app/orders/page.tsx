"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([])
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    setOrders(savedOrders.reverse()) // Show most recent first
  }, [])

  // Handle order selection
  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    )
  }

  // Handle select all
  const toggleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([])
    } else {
      setSelectedOrders(orders.map(order => order.id))
    }
  }

  // Handle delete orders
  const deleteOrders = () => {
    if (selectedOrders.length === 0) return
    
    const updatedOrders = orders.filter(order => !selectedOrders.includes(order.id))
    setOrders(updatedOrders)
    localStorage.setItem('orders', JSON.stringify(updatedOrders))
    setSelectedOrders([])
    setShowDeleteModal(false)
    
    // Trigger cart update event if needed
    window.dispatchEvent(new Event('ordersUpdate'))
  }

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

  // Download invoice functionality
  const downloadInvoice = (order: any) => {
    // Create a professional HTML invoice
    const invoiceHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice #${order.id}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Arial', sans-serif; 
          line-height: 1.6; 
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header { 
          text-align: center; 
          border-bottom: 3px solid #333; 
          padding-bottom: 20px; 
          margin-bottom: 30px; 
          background: #f8f9fa;
          padding: 30px 20px;
        }
        .header h1 { 
          color: #333; 
          margin: 0 0 10px 0;
          font-size: 28px;
          font-weight: bold;
        }
        .header p { 
          margin: 5px 0;
          font-size: 14px;
        }
        .section { 
          margin-bottom: 30px; 
          background: white;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .section h2 { 
          color: #333; 
          border-bottom: 2px solid #007bff; 
          padding-bottom: 8px; 
          margin-bottom: 15px;
          font-size: 18px;
        }
        .info-row { 
          margin: 8px 0; 
          font-size: 14px;
        }
        .items-table { 
          width: 100%; 
          border-collapse: collapse; 
          margin: 20px 0; 
        }
        .items-table th, .items-table td { 
          border: 1px solid #ddd; 
          padding: 12px; 
          text-align: left; 
          font-size: 14px;
        }
        .items-table th { 
          background-color: #007bff; 
          color: white;
          font-weight: bold; 
        }
        .items-table tr:nth-child(even) {
          background-color: #f8f9fa;
        }
        .total-section { 
          margin-top: 30px; 
          text-align: right; 
          background: #f8f9fa;
          padding: 20px;
          border-radius: 5px;
        }
        .total-row { 
          margin: 8px 0; 
          font-size: 16px;
        }
        .total-row.grand-total { 
          font-weight: bold; 
          font-size: 20px; 
          color: #007bff;
          border-top: 2px solid #007bff;
          padding-top: 10px;
        }
        .footer { 
          margin-top: 40px; 
          text-align: center; 
          color: #666; 
          font-style: italic; 
          padding: 20px;
          border-top: 1px solid #ddd;
        }
        @media print {
          body { margin: 0; padding: 15px; }
          .section { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>ORDER INVOICE</h1>
        <p><strong>Order ID:</strong> #${order.id}</p>
        <p><strong>Date:</strong> ${order.date ? new Date(order.date).toLocaleDateString() : 'Unknown'}</p>
        <p><strong>Status:</strong> <span style="color: #28a745; font-weight: bold;">${order.status || 'pending'}</span></p>
      </div>

      <div class="section">
        <h2>Billing Information</h2>
        <div class="info-row"><strong>${order.customer?.firstName || ''} ${order.customer?.lastName || ''}</strong></div>
        <div class="info-row">${order.customer?.address || 'No address provided'}</div>
        <div class="info-row">${order.customer?.city || ''}, ${order.customer?.postalCode || ''}</div>
        <div class="info-row">${order.customer?.country || 'No country provided'}</div>
        <div class="info-row"><strong>Email:</strong> ${order.customer?.email || 'No email provided'}</div>
        <div class="info-row"><strong>Phone:</strong> ${order.customer?.phone || 'No phone provided'}</div>
      </div>

      <div class="section">
        <h2>Order Items</h2>
        <table class="items-table">
          <thead>
            <tr>
              <th style="width: 50%;">Item</th>
              <th style="width: 15%;">Quantity</th>
              <th style="width: 15%;">Price</th>
              <th style="width: 20%;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${(order.items || []).map((item: any) => `
              <tr>
                <td>${item.name || 'Unknown Product'}</td>
                <td style="text-align: center;">${item.qty || 1}</td>
                <td style="text-align: right;">৳${item.price || 0}</td>
                <td style="text-align: right; font-weight: bold;">৳${(item.price || 0) * (item.qty || 1)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="total-section">
        <div class="total-row">Subtotal: <span style="float: right;">৳${order.subtotal ? order.subtotal.toLocaleString() : '0'}</span></div>
        <div class="total-row">Shipping: <span style="float: right;">৳${order.shipping ? order.shipping.toLocaleString() : '0'}</span></div>
        <div class="total-row grand-total">Total: <span style="float: right;">৳${order.total ? order.total.toLocaleString() : '0'}</span></div>
      </div>

      <div class="footer">
        <p><strong>Thank you for your order!</strong></p>
        <p>This is a computer-generated invoice and does not require a signature.</p>
        <p style="margin-top: 10px; font-size: 12px;">Generated on ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
    `

    // Create a new window and trigger print dialog for PDF
    const printWindow = window.open('', '_blank', 'width=900,height=700')
    if (printWindow) {
      printWindow.document.write(invoiceHTML)
      printWindow.document.close()
      
      // Wait for content to load, then trigger print
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
          // Don't close immediately to allow user to save
          setTimeout(() => {
            printWindow.close()
          }, 1000)
        }, 500)
      }
    } else {
      // Fallback: download as HTML file
      const blob = new Blob([invoiceHTML], { type: 'text/html' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `invoice-${order.id}.html`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
      
      alert('Invoice downloaded as HTML file. Open it and print to PDF.')
    }
  }

  // Track order functionality
  const trackOrder = (order: any) => {
    // Create tracking information
    const trackingInfo = `
ORDER TRACKING
==============
Order ID: #${order.id}
Current Status: ${order.status || 'pending'}

Tracking Timeline:
• Order Placed: ${order.date ? new Date(order.date).toLocaleString() : 'Unknown'}
• Processing: ${order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? 'Completed' : 'Pending'}
• Shipped: ${order.status === 'shipped' || order.status === 'delivered' ? 'Completed' : 'Pending'}
• Delivered: ${order.status === 'delivered' ? 'Completed' : 'Pending'}

Estimated Delivery: 7-14 business days
    `.trim()

    alert(trackingInfo)
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
            <div className="bg-gray-100 p-2 rounded text-xs mb-4">
              Debug: Check browser console for order data
            </div>
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
      <div className="bg-gray-100 p-2 rounded text-xs mb-4">
        Debug: Found {orders.length} orders in localStorage
      </div>
      
      {/* Bulk Selection Controls */}
      {orders.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedOrders.length === orders.length && orders.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium">
                  Select All ({selectedOrders.length} selected)
                </span>
              </label>
              {selectedOrders.length > 0 && (
                <span className="text-sm text-blue-600 font-medium">
                  {selectedOrders.length} order{selectedOrders.length > 1 ? 's' : ''} selected
                </span>
              )}
            </div>
            {selectedOrders.length > 0 && (
              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Delete Selected ({selectedOrders.length})
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedOrders([])}
                >
                  Clear Selection
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
      
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id} className={selectedOrders.includes(order.id) ? 'border-blue-500 bg-blue-50' : ''}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => toggleOrderSelection(order.id)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <div>
                    <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                    <p className="text-sm text-gray-600">
                      Placed on {order.date ? new Date(order.date).toLocaleDateString() : 'Unknown date'} at {order.date ? new Date(order.date).toLocaleTimeString() : 'Unknown time'}
                    </p>
                  </div>
                </div>
                <Badge className={getStatusColor(order.status || 'pending')}>
                  {(order.status || 'pending').charAt(0).toUpperCase() + (order.status || 'pending').slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                <h4 className="font-semibold">Items ({order.items ? order.items.length : 0})</h4>
                {(order.items || []).map((item: any) => (
                  <div key={item.product_id} className="flex gap-3 p-3 bg-gray-50 rounded">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-gray-500">IMG</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium">{item.name || 'Unknown Product'}</h5>
                      <p className="text-sm text-gray-600">Quantity: {item.qty || 1} × ৳{item.price || 0}</p>
                    </div>
                    <p className="font-medium">৳{(item.price || 0) * (item.qty || 1)}</p>
                  </div>
                ))}
              </div>

              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 bg-gray-50 rounded">
                <div>
                  <h4 className="font-semibold mb-2">Shipping Address</h4>
                  <p className="text-sm text-gray-600">
                    {order.customer?.firstName || ''} {order.customer?.lastName || ''}<br />
                    {order.customer?.address || 'No address provided'}<br />
                    {order.customer?.city || ''}, {order.customer?.postalCode || ''}<br />
                    {order.customer?.country || 'No country provided'}<br />
                    {order.customer?.phone || 'No phone provided'}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <p className="text-sm text-gray-600">
                    Email: {order.customer?.email || 'No email provided'}<br />
                    Phone: {order.customer?.phone || 'No phone provided'}
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>৳ {order.subtotal ? order.subtotal.toLocaleString() : '0'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>৳ {order.shipping ? order.shipping.toLocaleString() : '0'}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">৳ {order.total ? order.total.toLocaleString() : '0'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => trackOrder(order)}
                >
                  Track Order
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => downloadInvoice(order)}
                >
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
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Delete Orders</h3>
                <p className="text-sm text-gray-600">This action cannot be undone</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">
                Are you sure you want to delete <span className="font-semibold">{selectedOrders.length}</span> order{selectedOrders.length > 1 ? 's' : ''}?
              </p>
              {selectedOrders.length > 0 && (
                <div className="mt-2 text-sm text-gray-600">
                  Orders to be deleted: {selectedOrders.map(id => `#${id}`).join(', ')}
                </div>
              )}
            </div>
            
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={deleteOrders}
              >
                Delete {selectedOrders.length} Order{selectedOrders.length > 1 ? 's' : ''}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
