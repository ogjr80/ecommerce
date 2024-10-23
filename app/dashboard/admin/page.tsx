'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ArrowUpRight, ArrowDownRight, Users, ShoppingCart, DollarSign, 
  Package, Bell, Download, RefreshCcw, Search, Filter, Settings,
  Sun, Moon, Home, LayoutDashboard, CreditCard, Box, BarChart2,
  MessageSquare, LogOut, Menu, ChevronRight, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { id: 'products', icon: Box, label: 'Products', href: '/dashboard/products' },
    { id: 'orders', icon: ShoppingCart, label: 'Orders', href: '/dashboard/orders' },
    { id: 'customers', icon: Users, label: 'Customers', href: '/dashboard/customers' },
    { id: 'analytics', icon: BarChart2, label: 'Analytics', href: '/dashboard/analytics' },
    { id: 'payments', icon: CreditCard, label: 'Payments', href: '/dashboard/payments' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', href: '/dashboard/messages' },
    { id: 'settings', icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <div 
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        expanded ? 'w-64' : 'w-20'
      } z-50`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {expanded && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">Store</span>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="hover:bg-gray-100"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      <div className="p-4">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <Button
              variant={activeItem === item.id ? 'default' : 'ghost'}
              className={`w-full justify-start mb-2 ${
                expanded ? 'px-4' : 'px-2'
              } ${activeItem === item.id ? 'bg-indigo-600 text-white hover:bg-indigo-700' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <item.icon className={`w-5 h-5 ${expanded ? 'mr-3' : ''}`} />
              {expanded && <span>{item.label}</span>}
            </Button>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className={`w-5 h-5 ${expanded ? 'mr-3' : ''}`} />
          {expanded && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 z-40">
      <div className="h-full flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search..."
              className="pl-10 w-64 bg-gray-50 border-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <Sun className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-3 border-l pl-4">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickStats = () => {
  const stats = [
    {
      title: "Today's Revenue",
      value: "$12,426",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "blue"
    },
    {
      title: "Active Orders",
      value: "56",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "purple"
    },
    {
      title: "Active Users",
      value: "2,124",
      change: "+3.1%",
      trend: "up",
      icon: Users,
      color: "green"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-0.4%",
      trend: "down",
      icon: BarChart2,
      color: "orange"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
              </div>
              <Badge 
                variant={stat.trend === 'up' ? 'success' : 'destructive'}
                className="font-medium"
              >
                {stat.change}
              </Badge>
            </div>
            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2 text-gray-900">{stat.value}</p>
            <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${stat.color}-500 rounded-full transition-all duration-500`}
                style={{ width: `${Math.random() * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'order',
      title: 'New order received',
      description: 'Order #12345 - iPhone 13 Pro',
      time: '5 minutes ago',
      icon: ShoppingCart,
      color: 'blue'
    },
    {
      id: 2,
      type: 'alert',
      title: 'Low stock alert',
      description: 'Product XYZ is running low',
      time: '10 minutes ago',
      icon: AlertCircle,
      color: 'red'
    },
    {
      id: 3,
      type: 'user',
      title: 'New user registration',
      description: 'john.doe@example.com',
      time: '1 hour ago',
      icon: Users,
      color: 'green'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates from your store</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg bg-${activity.color}-50 mt-1`}>
                <activity.icon className={`w-5 h-5 text-${activity.color}-500`} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <TopBar />
      
      <div className="pl-64 pt-16">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, John! 👋</h1>
                <p className="text-gray-500 mt-1">Here's what's happening in your store today.</p>
              </div>
              <div className="flex items-center space-x-3">
                <Select defaultValue="today">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Download className="w-4 h-4 mr-2" /> Export
                </Button>
              </div>
            </div>

            <Alert className="mb-8 bg-indigo-50 border-indigo-200">
              <AlertCircle className="w-4 h-4 text-indigo-500" />
              <AlertDescription className="text-indigo-700">
                Your store has reached 1000+ orders this month! 🎉
              </AlertDescription>
            </Alert>

            <QuickStats />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    {/* Add your chart component here */}
                  </div>
                </CardContent>
              </Card>
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
