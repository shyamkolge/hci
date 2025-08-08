import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl opacity-90">Crafting exceptional footwear for over two decades</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At SoleStyle, we believe that great shoes are more than just footwear – they're a foundation for
                  confidence, comfort, and style. Since our founding in 2001, we've been dedicated to creating premium
                  shoes that combine traditional craftsmanship with modern innovation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every pair of shoes we create is designed with meticulous attention to detail, using only the finest
                  materials sourced from around the world. Our commitment to quality ensures that each step you take is
                  supported by excellence.
                </p>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Craftsman at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="aspect-square rounded-lg overflow-hidden md:order-1">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Our store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Values</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-500">Quality First</h3>
                    <p className="text-gray-600">
                      We never compromise on materials or craftsmanship, ensuring every shoe meets our exacting
                      standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-500">Sustainable Practices</h3>
                    <p className="text-gray-600">
                      We're committed to environmentally responsible manufacturing and ethical sourcing practices.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-500">Customer Satisfaction</h3>
                    <p className="text-gray-600">
                      Your comfort and satisfaction drive everything we do, from design to delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Journey</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you're looking for the perfect pair of dress shoes for a special occasion, comfortable sneakers
                for daily wear, or durable boots for outdoor adventures, we're here to help you find your perfect fit.
                Step into excellence with SoleStyle.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
