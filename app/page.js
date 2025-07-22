import { Search, MapPin, Clock, Users, Star, ArrowRight, CheckCircle, Heart, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Header from "./components/header"
import Footer from "./components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-black/10 to-orange-900 py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90">
            <source
              src="/hero_video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-800/70 to-black/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-1">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-orange-200 rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <div className="w-12 h-12 bg-blue-200 rounded-full opacity-60"></div>
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce-slow">
            <div className="w-20 h-20 bg-green-200 rounded-full opacity-60"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Explore Unique Activities
              <span className="gradient-text block"> AROUND YOU</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Find programs, workshops, and classes by age, interest, or location. Discover local activities and
              experiences near you.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-5xl mx-auto animate-slideInLeft">
            <div className="bg-white/20 rounded-3xl shadow-2xl p-8 border hover-scale">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-200 mb-3">Age Group</label>
                  <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                    <option>All Ages</option>
                    <option>Kids (5-12)</option>
                    <option>Teens (13-17)</option>
                    <option>Adults (18+)</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-200 mb-3">Category</label>
                  <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                    <option>All Categories</option>
                    <option>Art & Crafts</option>
                    <option>Sports & Fitness</option>
                    <option>STEM & Technology</option>
                    <option>Language & Culture</option>
                    <option>Music & Dance</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-200 mb-3">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-200 h-5 w-5 " />
                    <Input
                      placeholder="Enter city or zip"
                      className="pl-10 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">School Name (Optional)</label>
                  <Input
                    placeholder="Enter school name"
                    className="p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slideInRight">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Activities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Providers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Featured Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover popular programs and workshops in your area, handpicked by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Activity Card 1 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale animate-fadeInUp group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop"
                  alt="Kids Art Workshop"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Heart className="h-6 w-6 text-white hover:text-red-500 cursor-pointer transition-colors drop-shadow-lg" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    Art & Crafts
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    NEW
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    Creative Kids Art Workshop
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1 font-semibold">4.8</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Fun and engaging art classes for children ages 6-12. Learn painting, drawing, and crafting techniques
                  in a supportive environment.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Ages 6-12 • Max 8 students</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Saturdays 10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Downtown Community Center</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$45/class</span>
                  <Link href="/activity/1">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 transform hover:scale-105 transition-all">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Activity Card 2 */}
            <Card
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale animate-fadeInUp group"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
                  alt="Teen Coding Bootcamp"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Heart className="h-6 w-6 text-white hover:text-red-500 cursor-pointer transition-colors drop-shadow-lg" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    STEM
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    POPULAR
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    Teen Coding Bootcamp
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1 font-semibold">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Learn Python programming and web development in this intensive summer bootcamp designed for teenagers.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Ages 13-17 • Max 12 students</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Mon-Fri 2:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Tech Hub Innovation Center</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$299/week</span>
                  <Link href="/activity/2">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 transform hover:scale-105 transition-all">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Activity Card 3 */}
            <Card
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale animate-fadeInUp group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop"
                  alt="Family Yoga Sessions"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Heart className="h-6 w-6 text-white hover:text-red-500 cursor-pointer transition-colors drop-shadow-lg" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    Fitness
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    Family Yoga Sessions
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1 font-semibold">4.7</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Relaxing yoga classes designed for families to practice together and build mindfulness and connection.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    <span>All Ages • Max 6 families</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Sundays 9:00 AM - 10:30 AM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Peaceful Mind Wellness Studio</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$35/family</span>
                  <Link href="/activity/3">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 transform hover:scale-105 transition-all">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link href="/browse">
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent px-8 py-3 text-lg font-semibold"
              >
                View All Activities
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is easy - just three simple steps to discover amazing activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center animate-slideInLeft">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce-custom">
                <Search className="h-10 w-10 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-scale">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Search & Explore</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Browse local programs and providers using our smart filters. Find activities by age, category,
                  location, or even school name.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <div
                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce-custom"
                style={{ animationDelay: "0.5s" }}
              >
                <Play className="h-10 w-10 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-scale">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. View Details</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Check out photos, time slots, descriptions, and reviews to find the perfect match for your interests
                  and schedule.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center animate-slideInRight">
              <div
                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce-custom"
                style={{ animationDelay: "1s" }}
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-scale">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Contact & Join</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Connect with providers directly through email, phone, or internal messaging. Join activities with just
                  one click!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Popular Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore activities across different categories and find what interests you most
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Art & Crafts",
                icon: "🎨",
                color: "from-pink-500 to-purple-500",
                image: "art+crafts+painting+creative",
              },
              {
                name: "Sports",
                icon: "⚽",
                color: "from-green-500 to-teal-500",
                image: "sports+soccer+basketball+active",
              },
              {
                name: "STEM",
                icon: "🔬",
                color: "from-blue-500 to-cyan-500",
                image: "science+technology+coding+robot",
              },
              { name: "Music", icon: "🎵", color: "from-purple-500 to-pink-500", image: "music+piano+guitar+singing" },
              {
                name: "Language",
                icon: "🌍",
                color: "from-orange-500 to-red-500",
                image: "language+learning+books+global",
              },
              {
                name: "Events",
                icon: "🎉",
                color: "from-yellow-500 to-orange-500",
                image: "events+celebration+party+fun",
              },
            ].map((category, index) => (
              <div
                key={category.name}
                className="text-center animate-fadeInUp hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 mb-4 shadow-lg`}>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <img
                    src={`/placeholder.svg?height=80&width=80&query=${category.image}`}
                    alt={category.name}
                    className="w-16 h-16 mx-auto rounded-lg opacity-20"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fadeInUp">
            <h2 className="text-5xl font-bold mb-6">Ready to discover amazing activities?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Join thousands of families and individuals who have found their perfect local experiences through
              Expalora.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/browse">
                <Button className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  Browse Activities
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/list-activity">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-10 py-4 text-lg font-semibold bg-transparent"
                >
                  List Your Activity
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
