import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Truck, CheckCircle, Clock, XCircle, Eye } from "lucide-react"
import Link from "next/link"

const orders = [
  {
    id: "ORD-2025-001",
    date: "2025-01-15",
    status: "pending",
    total: "৳ 2,450",
    items: 3,
    tracking: null
  },
  {
    id: "ORD-2025-002", 
    date: "2025-01-14",
    status: "processing",
    total: "৳ 1,890",
    items: 2,
    tracking: "TRK123456789"
  },
  {
    id: "ORD-2025-003",
    date: "2025-01-13", 
    status: "shipped",
    total: "৳ 3,200",
    items: 5,
    tracking: "TRK987654321"
  },
  {
    id: "ORD-2025-004",
    date: "2025-01-12",
    status: "delivered",
    total: "৳ 890",
    items: 1,
    tracking: "TRK456789123"
  }
]

const getStatusBadge = (status: string) => {
  const variants = {
    pending: { variant: "secondary" as const, icon: Clock, label: "Pending" },
    processing: { variant: "default" as const, icon: Package, label: "Processing" },
    shipped: { variant: "default" as const, icon: Truck, label: "Shipped" },
    delivered: { variant: "default" as const, icon: CheckCircle, label: "Delivered" },
    cancelled: { variant: "destructive" as const, icon: XCircle, label: "Cancelled" }
  }
  return variants[status as keyof typeof variants] || variants.pending
}

export default function DashboardPage() {
  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Orders</h1>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-600">{stats.processing}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Shipped</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-600">{stats.shipped}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Delivered</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">{stats.delivered}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {orders.map((order) => {
            const statusInfo = getStatusBadge(order.status)
            const StatusIcon = statusInfo.icon
            
            return (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{order.id}</h3>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <Badge variant={statusInfo.variant} className="flex items-center gap-1">
                      <StatusIcon className="h-3 w-3" />
                      {statusInfo.label}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Items</p>
                      <p className="font-medium">{order.items}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="font-medium text-blue-600">{order.total}</p>
                    </div>
                    {order.tracking && (
                      <div>
                        <p className="text-sm text-muted-foreground">Tracking</p>
                        <p className="font-medium text-xs">{order.tracking}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                    {order.tracking && (
                      <Button variant="outline" size="sm">
                        Track Order
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>
        
        {['pending', 'processing', 'shipped', 'delivered'].map((status) => (
          <TabsContent key={status} value={status} className="space-y-4">
            {orders
              .filter(order => order.status === status)
              .map((order) => {
                const statusInfo = getStatusBadge(order.status)
                const StatusIcon = statusInfo.icon
                
                return (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <Badge variant={statusInfo.variant} className="flex items-center gap-1">
                          <StatusIcon className="h-3 w-3" />
                          {statusInfo.label}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Items</p>
                          <p className="font-medium">{order.items}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total</p>
                          <p className="font-medium text-blue-600">{order.total}</p>
                        </div>
                        {order.tracking && (
                          <div>
                            <p className="text-sm text-muted-foreground">Tracking</p>
                            <p className="font-medium text-xs">{order.tracking}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          View Details
                        </Button>
                        {order.tracking && (
                          <Button variant="outline" size="sm">
                            Track Order
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
