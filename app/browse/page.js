"use client"
import { useState, useEffect } from "react"
import { Search, MapPin, Clock, Users, Star, Heart, Filter, Grid, List, Map, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from "next/link"

export default function BrowsePage() {
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    ageGroup: "",
    location: "",
    priceRange: "",
    rating: "",
  })
  const [filteredActivities, setFilteredActivities] = useState([])

  const allActivities = [
    {
      id: 1,
      title: "Creative Kids Art Workshop",
      description:
        "Fun and engaging art classes for children ages 6-12. Learn painting, drawing, and crafting techniques.",
      category: "Art & Crafts",
      ageGroup: "6-12",
      schedule: "Saturdays 10:00 AM - 12:00 PM",
      location: "Downtown Community Center",
      price: 45,
      priceDisplay: "$45/class",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      provider: "Creative Arts Studio",
      isNew: true,
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    {
      id: 2,
      title: "Teen Coding Bootcamp",
      description: "Learn Python programming and web development in this intensive summer bootcamp for teenagers.",
      category: "STEM",
      ageGroup: "13-17",
      schedule: "Mon-Fri 2:00 PM - 5:00 PM",
      location: "Tech Hub Innovation Center",
      price: 299,
      priceDisplay: "$299/week",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      provider: "Code Academy Plus",
      isPopular: true,
      coordinates: { lat: 34.0622, lng: -118.2537 },
    },
    {
      id: 3,
      title: "Family Yoga Sessions",
      description: "Relaxing yoga classes designed for families to practice together and build mindfulness.",
      category: "Fitness",
      ageGroup: "All Ages",
      schedule: "Sundays 9:00 AM - 10:30 AM",
      location: "Peaceful Mind Wellness Studio",
      price: 35,
      priceDisplay: "$35/family",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      provider: "Zen Wellness Center",
      coordinates: { lat: 34.0422, lng: -118.2337 },
    },
    {
      id: 4,
      title: "Junior Soccer League",
      description: "Competitive soccer training and games for young athletes. Build teamwork and athletic skills.",
      category: "Sports",
      ageGroup: "8-14",
      schedule: "Tuesdays & Thursdays 4:00 PM - 6:00 PM",
      location: "City Sports Complex",
      price: 120,
      priceDisplay: "$120/month",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      provider: "Champions Sports Club",
      coordinates: { lat: 34.0722, lng: -118.2637 },
    },
    {
      id: 5,
      title: "Piano Lessons for Beginners",
      description: "Individual piano lessons for children and adults. Learn to play your favorite songs.",
      category: "Music",
      ageGroup: "6+",
      schedule: "Flexible scheduling available",
      location: "Harmony Music School",
      price: 60,
      priceDisplay: "$60/lesson",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=250&fit=crop",
      provider: "Melody Masters",
      coordinates: { lat: 34.0322, lng: -118.2237 },
    },
    {
      id: 6,
      title: "Spanish Conversation Club",
      description: "Practice Spanish in a fun, supportive environment with native speakers and fellow learners.",
      category: "Language",
      ageGroup: "16+",
      schedule: "Wednesdays 7:00 PM - 8:30 PM",
      location: "Cultural Center",
      price: 25,
      priceDisplay: "$25/session",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      provider: "Global Languages Institute",
      coordinates: { lat: 34.0822, lng: -118.2737 },
    },
  ]

  // Filter activities based on search and filters
  useEffect(() => {
    let filtered = allActivities

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (activity) =>
          activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          activity.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
          activity.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter((activity) => activity.category === filters.category)
    }

    // Age group filter
    if (filters.ageGroup) {
      if (filters.ageGroup === "Kids (5-12)") {
        filtered = filtered.filter(
          (activity) =>
            activity.ageGroup.includes("6-12") ||
            activity.ageGroup.includes("8-14") ||
            activity.ageGroup.includes("6+"),
        )
      } else if (filters.ageGroup === "Teens (13-17)") {
        filtered = filtered.filter(
          (activity) =>
            activity.ageGroup.includes("13-17") ||
            activity.ageGroup.includes("8-14") ||
            activity.ageGroup.includes("16+"),
        )
      } else if (filters.ageGroup === "Adults (18+)") {
        filtered = filtered.filter((activity) => activity.ageGroup.includes("16+") || activity.ageGroup === "All Ages")
      } else if (filters.ageGroup === "All Ages") {
        filtered = filtered.filter((activity) => activity.ageGroup === "All Ages")
      }
    }

    // Price range filter
    if (filters.priceRange) {
      if (filters.priceRange === "Under $25") {
        filtered = filtered.filter((activity) => activity.price < 25)
      } else if (filters.priceRange === "$25 - $50") {
        filtered = filtered.filter((activity) => activity.price >= 25 && activity.price <= 50)
      } else if (filters.priceRange === "$50 - $100") {
        filtered = filtered.filter((activity) => activity.price >= 50 && activity.price <= 100)
      } else if (filters.priceRange === "Over $100") {
        filtered = filtered.filter((activity) => activity.price > 100)
      }
    }

    // Rating filter
    if (filters.rating) {
      const minRating = Number.parseFloat(filters.rating.replace("+", ""))
      filtered = filtered.filter((activity) => activity.rating >= minRating)
    }

    setFilteredActivities(filtered)
  }, [searchQuery, filters])

  // Initialize with all activities
  useEffect(() => {
    setFilteredActivities(allActivities)
  }, [])

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: "",
      ageGroup: "",
      location: "",
      priceRange: "",
      rating: "",
    })
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Search Header */}
      <section className="bg-white shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search activities, providers, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {searchQuery ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                ) : null}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-gray-300 hover:border-orange-500"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>

              <div className="flex border border-gray-300 rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-orange-500 text-white" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-orange-500 text-white" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className={viewMode === "map" ? "bg-orange-500 text-white" : ""}
                >
                  <Map className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={filters.category}
                  onChange={(e) => handleFilterChange("category", e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="Art & Crafts">Art & Crafts</option>
                  <option value="Sports">Sports & Fitness</option>
                  <option value="STEM">STEM & Technology</option>
                  <option value="Language">Language & Culture</option>
                  <option value="Music">Music & Dance</option>
                </select>
              </div>

              {/* Age Group Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Age Group</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={filters.ageGroup}
                  onChange={(e) => handleFilterChange("ageGroup", e.target.value)}
                >
                  <option value="">All Ages</option>
                  <option value="Kids (5-12)">Kids (5-12)</option>
                  <option value="Teens (13-17)">Teens (13-17)</option>
                  <option value="Adults (18+)">Adults (18+)</option>
                </select>
              </div>

              {/* Location Filter */}
              {/* <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Enter city or zip code"
                    className="pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div> */}

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                >
                  <option value="">Any Price</option>
                  <option value="Under $25">Under $25</option>
                  <option value="$25 - $50">$25 - $50</option>
                  <option value="$50 - $100">$50 - $100</option>
                  <option value="Over $100">Over $100</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Minimum Rating</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={filters.rating}
                  onChange={(e) => handleFilterChange("rating", e.target.value)}
                >
                  <option value="">Any Rating</option>
                  <option value="4.5+">4.5+ Stars</option>
                  <option value="4.0+">4.0+ Stars</option>
                  <option value="3.5+">3.5+ Stars</option>
                </select>
              </div>

              {/* <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Apply Filters</Button> */}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{filteredActivities.length} Activities Found</h1>
              {/* <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>Sort by Relevance</option>
                <option>Sort by Rating</option>
                <option>Sort by Price (Low to High)</option>
                <option>Sort by Price (High to Low)</option>
                <option>Sort by Distance</option>
              </select> */}
            </div>

            {/* Activities Grid */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredActivities.map((activity, index) => (
                  <Card
                    key={activity.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Heart className="h-6 w-6 text-white hover:text-red-500 cursor-pointer transition-colors" />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {activity.category}
                        </span>
                      </div>
                      {activity.isNew && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            NEW
                          </span>
                        </div>
                      )}
                      {activity.isPopular && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            POPULAR
                          </span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{activity.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{activity.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Ages {activity.ageGroup}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{activity.schedule}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-orange-500">{activity.priceDisplay}</span>
                        <Link href={`/activity/${activity.id}`}>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white">View Details</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Activities List View */}
            {viewMode === "list" && (
              <div className="space-y-4">
                {filteredActivities.map((activity, index) => (
                  <Card
                    key={activity.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative">
                          <img
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.title}
                            className="w-32 h-32 object-cover rounded-lg"
                          />
                          {activity.isNew && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              NEW
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-1">{activity.title}</h3>
                              <p className="text-sm text-gray-500 mb-2">by {activity.provider}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600 ml-1">{activity.rating}</span>
                              </div>
                              <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{activity.description}</p>
                          <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>Ages {activity.ageGroup}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{activity.schedule}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{activity.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-orange-500">{activity.priceDisplay}</span>
                            <Link href={`/activity/${activity.id}`}>
                              <Button className="bg-orange-500 hover:bg-orange-600 text-white">View Details</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Map View */}
            {viewMode === "map" && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-gray-500">View all activities on an interactive map with location pins</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
