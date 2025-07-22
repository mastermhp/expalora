"use client"
import { useState } from "react"
import { Heart, Calendar, MapPin, Star, Settings, Bell, BookOpen, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"
import ProtectedRoute from "../components/ProtectedRoute"
import { useAuth } from "@/contexts/AuthContext"

function UserDashboardContent() {
  const [activeTab, setActiveTab] = useState("favorites")
  const { user } = useAuth()

  const favoriteActivities = [
    {
      id: 1,
      title: "Creative Kids Art Workshop",
      provider: "Creative Arts Studio",
      location: "Downtown Community Center",
      schedule: "Saturdays 10:00 AM - 12:00 PM",
      price: "$45/class",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=150&fit=crop",
    },
    {
      id: 2,
      title: "Family Yoga Sessions",
      provider: "Zen Wellness Center",
      location: "Peaceful Mind Wellness Studio",
      schedule: "Sundays 9:00 AM - 10:30 AM",
      price: "$35/family",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=150&fit=crop",
    },
  ]

  const pastActivities = [
    {
      id: 1,
      title: "Summer Science Camp",
      provider: "STEM Academy",
      completedDate: "August 2024",
      rating: 5,
      review: "Amazing experience! My daughter loved every moment.",
    },
    {
      id: 2,
      title: "Piano Lessons",
      provider: "Melody Masters",
      completedDate: "July 2024",
      rating: 4,
      review: "Great instructor, very patient with beginners.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Dashboard Header */}
      <section className="bg-white shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-fadeInUp">
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
              <p className="text-gray-600 mt-2">Discover and manage your family's activities</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" className="border-gray-300 hover:border-orange-500 bg-transparent">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={user?.avatar || "/placeholder.svg"}
                      alt={user?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">{user?.name}</h3>
                  <p className="text-sm text-gray-500">Parent • {user?.children} Children</p>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("favorites")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "favorites"
                        ? "bg-orange-100 text-orange-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Heart className="h-5 w-5 mr-3" />
                    Favorites
                  </button>
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "bookings"
                        ? "bg-orange-100 text-orange-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Calendar className="h-5 w-5 mr-3" />
                    My Bookings
                  </button>
                  <button
                    onClick={() => setActiveTab("history")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "history"
                        ? "bg-orange-100 text-orange-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <BookOpen className="h-5 w-5 mr-3" />
                    Past Activities
                  </button>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "profile"
                        ? "bg-orange-100 text-orange-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    Profile Settings
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="animate-fadeInUp">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Favorites</div>
                </CardContent>
              </Card>
              <Card className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Active Bookings</div>
                </CardContent>
              </Card>
              <Card className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </CardContent>
              </Card>
              <Card className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-sm text-gray-600">Hours Learned</div>
                </CardContent>
              </Card>
            </div>

            {/* Favorites Tab */}
            {activeTab === "favorites" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-orange-500" />
                      Your Favorite Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {favoriteActivities.map((activity) => (
                        <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                          <div className="flex">
                            <img
                              src={activity.image || "/placeholder.svg"}
                              alt={activity.title}
                              className="w-32 h-32 object-cover"
                            />
                            <div className="p-4 flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                                <Heart className="h-5 w-5 text-red-500 fill-current" />
                              </div>
                              <p className="text-sm text-gray-600 mb-2">by {activity.provider}</p>
                              <div className="space-y-1 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  <span>{activity.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>{activity.schedule}</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                  <span className="font-semibold text-orange-500">{activity.price}</span>
                                  <div className="flex items-center">
                                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                    <span className="text-xs ml-1">{activity.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === "bookings" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                      Your Active Bookings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">Creative Kids Art Workshop</h3>
                            <p className="text-sm text-gray-600">Next session: Saturday, Dec 14 at 10:00 AM</p>
                            <p className="text-sm text-green-600 font-semibold">Confirmed</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">Family Yoga Sessions</h3>
                            <p className="text-sm text-gray-600">Next session: Sunday, Dec 15 at 9:00 AM</p>
                            <p className="text-sm text-blue-600 font-semibold">Confirmed</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* History Tab */}
            {activeTab === "history" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-green-500" />
                      Past Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {pastActivities.map((activity) => (
                        <div key={activity.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                              <p className="text-sm text-gray-600">by {activity.provider}</p>
                              <p className="text-sm text-gray-500">Completed: {activity.completedDate}</p>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < activity.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 italic">"{activity.review}"</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2 text-gray-500" />
                      Profile Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue={user?.name}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue={user?.email}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location Preferences</label>
                      <input
                        type="text"
                        defaultValue={user?.location}
                        placeholder="Enter your preferred location for activities"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age Range Interests</label>
                      <div className="flex flex-wrap gap-3">
                        {["Kids (5-12)", "Teens (13-17)", "Adults (18+)", "All Ages"].map((age) => (
                          <label key={age} className="flex items-center">
                            <input type="checkbox" className="mr-2 text-orange-500" />
                            <span className="text-sm">{age}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function UserDashboard() {
  return (
    <ProtectedRoute allowedUserTypes={["user"]}>
      <UserDashboardContent />
    </ProtectedRoute>
  )
}
