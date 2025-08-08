"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Users, Baby } from "lucide-react"

const categories = {
  male: {
    name: "Male",
    icon: User,
  },
  female: {
    name: "Female", 
    icon: Users,
  },
  kids: {
    name: "Kids",
    icon: Baby,
  },
}

const subcategories = {
  male: [
    { name: "Casual Shoes", description: "Comfortable everyday shoes", icon: User },
    { name: "Formal Shoes", description: "Elegant and professional footwear", icon: User },
    { name: "Sneakers", description: "Sporty and trendy sneakers", icon: User },
    { name: "Sandals", description: "Light and breathable sandals", icon: User },
    { name: "Sports / Running Shoes", description: "Performance athletic shoes", icon: User },
    { name: "Loafers", description: "Classic slip-on loafers", icon: User },
  ],
  female: [
    { name: "Heels", description: "Elegant high-heeled shoes", icon: Users },
    { name: "Flats / Ballerinas", description: "Comfortable flat shoes", icon: Users },
    { name: "Sneakers", description: "Sporty and trendy sneakers", icon: Users },
    { name: "Sandals", description: "Light and breathable sandals", icon: Users },
    { name: "Boots", description: "Stylish and durable boots", icon: Users },
    { name: "Sports / Running Shoes", description: "Performance athletic shoes", icon: Users },
  ],
  kids: [
    { name: "Sneakers / Sports Shoes", description: "Active and sporty shoes", icon: Baby },
    { name: "School Shoes", description: "Comfortable school footwear", icon: Baby },
    { name: "Sandals", description: "Light and breathable sandals", icon: Baby },
    { name: "Flip-Flops / Slippers", description: "Casual and comfortable", icon: Baby },
    { name: "LED / Character Shoes", description: "Fun and colorful shoes", icon: Baby },
    { name: "Boots (Rain / Winter)", description: "Weather-resistant boots", icon: Baby },
  ],
}

export default function ShopPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("male")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="flex">
        {/* Left Sidebar Navigation */}
        <div className="w-64 bg-white shadow-lg h-screen sticky top-0 pt-20">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Categories</h2>

            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <div key={key} className="mb-6">
                  <button
                    onClick={() => setSelectedCategory(key)}
                    className={`w-full text-left text-lg font-semibold py-2 px-3 rounded-lg flex items-center gap-3 transition-colors ${
                      selectedCategory === key ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {category.name}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 pt-28">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop All Categories</h1>
              <p className="text-gray-600">Choose a category to explore our collection</p>
            </div>

            {/* Subcategory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcategories[selectedCategory as keyof typeof subcategories].map((subcategory) => {
                const IconComponent = subcategory.icon
                return (
                  <Card 
                    key={subcategory.name} 
                    className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    onClick={() => router.push(`/shop/${selectedCategory}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{subcategory.name}</h3>
                      <p className="text-gray-600 text-sm">{subcategory.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
