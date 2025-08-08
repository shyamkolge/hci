"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Search, ShoppingCart, User, ChevronDown } from "lucide-react"

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 13,
    minutes: 48,
    seconds: 13
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const saleProducts = [
    {
      id: 1,
      name: "Nike Air Max 270",
      originalPrice: "$150.00",
      salePrice: "$75.00",
      discount: "50%",
      image: "/images/nike-air-max-hero.png",
      category: "Running Shoes"
    },
    {
      id: 2,
      name: "Colorful Street Sneakers",
      originalPrice: "$120.00",
      salePrice: "$60.00",
      discount: "50%",
      image: "/images/colorful-sneakers.png",
      category: "Lifestyle"
    },
    {
      id: 3,
      name: "Hero Performance Sneaker",
      originalPrice: "$180.00",
      salePrice: "$90.00",
      discount: "50%",
      image: "/images/hero-sneaker.png",
      category: "Training"
    },
    {
      id: 4,
      name: "Classic Running Shoes",
      originalPrice: "$140.00",
      salePrice: "$70.00",
      discount: "50%",
      image: "/images/nike-air-max-hero.png",
      category: "Running"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Discount Banner */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">SIGN UP & GET 10% OFF</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/help" className="hover:underline">help</Link>
            <Link href="/orders" className="hover:underline">orders and returns</Link>
            <Link href="/signup" className="hover:underline">sign up</Link>
            <Link href="/login" className="hover:underline">log in</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Shoefer</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/shop" className="text-gray-900 font-medium hover:text-orange-500">
            SHOES
          </Link>
          <Link href="/shop/male" className="text-gray-900 font-medium hover:text-orange-500">
            MEN
          </Link>
          <Link href="/shop/female" className="text-gray-900 font-medium hover:text-orange-500">
            WOMEN
          </Link>
          <Link href="/shop/kids" className="text-gray-900 font-medium hover:text-orange-500">
            KIDS
          </Link>
          <Link href="/about" className="text-gray-900 font-medium hover:text-orange-500">
            SPORTS & LIFESTYLE
          </Link>
          <Link href="/contact" className="text-gray-900 font-medium hover:text-orange-500">
            OUTLET
          </Link>
          <Link href="/sale" className="text-red-600 font-bold hover:text-red-700">
            EOSS SALE IS LIVE!
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <Heart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
          <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
        </div>
      </header>

      {/* Main Sale Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-medium tracking-wider opacity-90">
                  END OF SEASON SALE
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  END OF SEASON SALE
                  <br />
                  <span className="text-4xl lg:text-6xl opacity-75">
                    END OF SEASON SALE
                  </span>
                </h1>
              </div>

              {/* Countdown Timer */}
              <div className="bg-black bg-opacity-30 rounded-lg p-6 inline-block">
                <div className="text-sm font-medium mb-2">Ends In:</div>
                <div className="flex items-center space-x-4 text-2xl font-bold">
                  <div className="text-center">
                    <div>{timeLeft.days}</div>
                    <div className="text-xs opacity-75">DAYS</div>
                  </div>
                  <div>:</div>
                  <div className="text-center">
                    <div>{timeLeft.hours}</div>
                    <div className="text-xs opacity-75">HRS</div>
                  </div>
                  <div>:</div>
                  <div className="text-center">
                    <div>{timeLeft.minutes}</div>
                    <div className="text-xs opacity-75">MIN</div>
                  </div>
                  <div>:</div>
                  <div className="text-center">
                    <div>{timeLeft.seconds}</div>
                    <div className="text-xs opacity-75">SEC</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-lg font-medium">FLAT 50% OFF on select items</div>
                <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  SHOP NOW
                </Button>
              </div>
            </div>

            {/* Right Content - Large Discount Display */}
            <div className="relative">
              <div className="text-center">
                <div className="border-4 border-white rounded-lg p-12 inline-block">
                  <div className="text-sm font-bold tracking-wider mb-4">FLAT</div>
                  <div className="text-9xl font-bold leading-none">50%</div>
                  <div className="text-2xl font-bold mt-4 tracking-wider">OFF*</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SALE HIGHLIGHTS</h2>
            <p className="text-gray-600 text-lg">Don't miss out on these incredible deals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {saleProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-red-600">{product.salePrice}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">SHOP BY CATEGORY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop/male" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-200">
                <Image
                  src="/images/nike-air-max-hero.png"
                  alt="Men's Shoes"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">MEN'S SHOES</h3>
                <p className="text-sm opacity-90">Discover the latest collection</p>
              </div>
            </Link>

            <Link href="/shop/female" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/5] bg-gradient-to-br from-pink-100 to-pink-200">
                <Image
                  src="/images/colorful-sneakers.png"
                  alt="Women's Shoes"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">WOMEN'S SHOES</h3>
                <p className="text-sm opacity-90">Style meets comfort</p>
              </div>
            </Link>

            <Link href="/shop/kids" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/5] bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/images/hero-sneaker.png"
                  alt="Kids' Shoes"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">KIDS' SHOES</h3>
                <p className="text-sm opacity-90">Fun and functional</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">STAY IN THE LOOP</h2>
          <p className="text-gray-300 mb-8">Be the first to know about new arrivals, exclusive offers, and sale events</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">Shoefer</span>
              </div>
              <p className="text-gray-400 text-sm">
                Discover the latest trends in footwear. Quality shoes for every occasion.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/sale" className="hover:text-white">Sale</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/shop/male" className="hover:text-white">Men's Shoes</Link></li>
                <li><Link href="/shop/female" className="hover:text-white">Women's Shoes</Link></li>
                <li><Link href="/shop/kids" className="hover:text-white">Kids' Shoes</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>123 Shoe Street</p>
                <p>Fashion District, NY 10001</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@shoefer.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Shoefer. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
              <Link href="/shipping" className="text-sm text-gray-400 hover:text-white">Shipping Info</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
