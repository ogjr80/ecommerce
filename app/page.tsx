'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, ArrowRight, Star, Heart, Package, RefreshCcw, 
  Truck, CheckCircle, ChevronRight, ChevronDown, Menu, X, Search 
} from 'lucide-react';

// Featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    image: "/api/placeholder/400/400",
    tag: "New Arrival"
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 399.99,
    rating: 4.9,
    image: "/api/placeholder/400/400",
    tag: "Best Seller"
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    price: 799.99,
    rating: 4.7,
    image: "/api/placeholder/400/400",
    tag: "Featured"
  },
  {
    id: 4,
    name: "Gaming Console Pro",
    price: 499.99,
    rating: 4.9,
    image: "/api/placeholder/400/400",
    tag: "Popular"
  }
];

// Categories data
const categories = [
  { name: "Electronics", count: "1.2k+" },
  { name: "Fashion", count: "2.5k+" },
  { name: "Home & Living", count: "1.8k+" },
  { name: "Sports", count: "950+" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-8 h-8 text-indigo-600" />
                <span className="text-2xl font-bold text-gray-900">Store</span>
              </div>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-900 hover:text-indigo-600 transition-colors">Home</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600 transition-colors">Shop</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600 transition-colors">Categories</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600 transition-colors">Deals</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600 transition-colors">About</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline">
              Sign In
            </Button>
            <Button>
              Sign Up
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">Categories</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">Deals</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Discover Amazing Products for Your Lifestyle
            </h1>
            <p className="text-xl text-gray-100">
              Shop the latest trends with unbeatable prices and exclusive deals.
              Join millions of happy customers today.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="/api/placeholder/600/400" 
              alt="Hero product" 
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover our handpicked selection of premium products
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg mb-4 group-hover:opacity-75 transition-opacity duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-indigo-600">
                    {product.tag}
                  </Badge>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white"
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <Button className="w-full">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="mt-4 text-xl text-gray-600">
            Browse through our extensive collection of products
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src="/api/placeholder/400/300"
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">{category.count} Products</span>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders over $100</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCcw className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day return policy</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Packaging</h3>
            <p className="text-gray-600">Safe & secure delivery</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">100% authentic products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Newsletter = () => {
    return (
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-indigo-100 mb-8">
              Get the latest updates on new products and exclusive offers
            </p>
            <div className="max-w-xl mx-auto flex space-x-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
              />
              <Button className="bg-white text-indigo-600 hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-indigo-200 mt-4">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Fashion Enthusiast",
        image: "/api/placeholder/100/100",
        content: "The quality of products and customer service is exceptional. I'm a regular customer and have never been disappointed!",
        rating: 5
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Tech Reviewer",
        image: "/api/placeholder/100/100",
        content: "Amazing selection of electronics at competitive prices. The shipping is fast and the packaging is secure.",
        rating: 5
      },
      {
        id: 3,
        name: "Emma Davis",
        role: "Interior Designer",
        image: "/api/placeholder/100/100",
        content: "Found beautiful home decor items here. The website is easy to navigate and the delivery was prompt.",
        rating: 5
      }
    ];
  
    return (
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const Brands = () => {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Leading Brands</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-6">
                  <img
                    src="/api/placeholder/120/60"
                    alt={`Brand ${i + 1}`}
                    className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <ShoppingCart className="w-8 h-8 text-indigo-400" />
                <span className="text-2xl font-bold">Store</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your one-stop shop for quality products at unbeatable prices.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li>1234 Street Name</li>
                <li>City, State 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: support@store.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Store. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default function LandingPage() {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <FeaturedProducts />
        <Categories />
        <Testimonials />
        <Brands />
        <Newsletter />
        <Footer />
      </div>
    );
  }