"use client"
import { useState } from "react"
import { Heart, Star, MapPin, Clock, Users, Trash2, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from "next/link"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Creative Kids Art Workshop",
      provider: "Creative Arts Studio",
      location: "Downtown Community Center",
      schedule: "Saturdays 10:00 AM - 12:00 PM",
      price: "$45/class",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      category: "Art & Crafts",
      ageGroup: "6-12",
      addedDate: "2024-01-10",
    },
    {
      id: 2,
      title: "Family Yoga Sessions",
      provider: "Zen Wellness Center",
      location: "Peaceful Mind Wellness Studio",
      schedule: "Sundays 9:00 AM - 10:30 AM",
      price: "$35/family",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      category: "Fitness",
      ageGroup: "All Ages",
      addedDate: "2024-01-08",
    },
    {
      id: 3,
      title: "Piano Lessons for Beginners",
      provider: "Melody Masters",
      location: "Harmony Music School",
      schedule: "Flexible scheduling available",
      price: "$60/lesson",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=250&fit=crop",
      category: "Music",
      ageGroup: "6+",
      addedDate: "2024-01-05",
    },
  ])

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fadeInUp">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
          <p className="text-gray-600">Activities you&apos;ve saved for later</p>
        </div>

        {favorites.length === 0 ? (
          <Card className="text-center py-16 animate-fadeInUp">
            <CardContent>
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
              <p className="text-gray-600 mb-6">Start exploring activities and save your favorites here</p>
              <Link href="/browse">
                <Button className="bg-coral-500 hover:bg-coral-600 text-white">Browse Activities</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((activity, index) => (
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
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFavorite(activity.id)}
                      className="bg-white/90 backdrop-blur-sm text-red-500 hover:text-red-600"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/90 backdrop-blur-sm text-gray-600 hover:text-gray-700"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {activity.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{activity.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">by {activity.provider}</p>
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-coral-500">{activity.price}</span>
                    <span className="text-xs text-gray-500">Added {activity.addedDate}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/activity/${activity.id}`} className="flex-1">
                      <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">View Details</Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFavorite(activity.id)}
                      className="text-red-500 hover:text-red-600 border-red-200 hover:border-red-300 bg-transparent"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
