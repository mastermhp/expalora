"use client"
import { useState } from "react"
import { Plus, Edit, Eye, Trash2, Users, Calendar, DollarSign, Star, TrendingUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"
import ProtectedRoute from "../components/ProtectedRoute"
import { useAuth } from "@/contexts/AuthContext"

function ProviderDashboardContent() {
  const [activeTab, setActiveTab] = useState("listings")
  const { user } = useAuth()

  const myListings = [
    {
      id: 1,
      title: "Creative Kids Art Workshop",
      status: "approved",
      participants: 8,
      maxParticipants: 12,
      nextSession: "Dec 14, 2024",
      revenue: "$360",
      rating: 4.8,
      reviews: 15,
    },
    {
      id: 2,
      title: "Advanced Painting Techniques",
      status: "pending",
      participants: 0,
      maxParticipants: 8,
      nextSession: "Dec 20, 2024",
      revenue: "$0",
      rating: 0,
      reviews: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Dashboard Header */}
      <section className="bg-white shadow-sm py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-fadeInUp">
              <h1 className="text-3xl font-bold text-gray-900">Provider Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Welcome back, {user?.name}! Manage your activities and connect with learners
              </p>
            </div>
            <Button className="bg-coral-500 hover:bg-coral-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create New Activity
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-fadeInUp">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">Total Students</div>
            </CardContent>
          </Card>
          <Card className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </CardContent>
          </Card>
          <Card className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-coral-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$1,240</div>
              <div className="text-sm text-gray-600">Monthly Revenue</div>
            </CardContent>
          </Card>
          <Card className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={user?.avatar || "/placeholder.svg"}
                      alt="Provider"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">{user?.businessName || user?.name}</h3>
                  <p className="text-sm text-gray-500">{user?.specialization || "Activity Provider"}</p>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("listings")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "listings"
                        ? "bg-coral-100 text-coral-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Calendar className="h-5 w-5 mr-3" />
                    My Listings
                  </button>
                  <button
                    onClick={() => setActiveTab("analytics")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "analytics"
                        ? "bg-coral-100 text-coral-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <TrendingUp className="h-5 w-5 mr-3" />
                    Analytics
                  </button>
                  <button
                    onClick={() => setActiveTab("messages")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "messages"
                        ? "bg-coral-100 text-coral-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <MessageSquare className="h-5 w-5 mr-3" />
                    Messages
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Listings Tab */}
            {activeTab === "listings" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>My Activity Listings</CardTitle>
                      <Button className="bg-coral-500 hover:bg-coral-600 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Activity
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {myListings.map((listing) => (
                        <Card key={listing.id} className="border-l-4 border-l-coral-500">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">{listing.title}</h3>
                                <div className="flex items-center gap-4 mt-2">
                                  <span
                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                      listing.status === "approved"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {listing.status === "approved" ? "Live" : "Pending Review"}
                                  </span>
                                  {listing.rating > 0 && (
                                    <div className="flex items-center">
                                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                      <span className="text-sm text-gray-600 ml-1">
                                        {listing.rating} ({listing.reviews} reviews)
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-600 hover:text-red-700 bg-transparent"
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Delete
                                </Button>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Participants:</span>
                                <div className="font-semibold">
                                  {listing.participants}/{listing.maxParticipants}
                                </div>
                              </div>
                              <div>
                                <span className="text-gray-500">Next Session:</span>
                                <div className="font-semibold">{listing.nextSession}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Revenue:</span>
                                <div className="font-semibold text-green-600">{listing.revenue}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Status:</span>
                                <div className="font-semibold capitalize">{listing.status}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="animate-fadeInUp space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">156</div>
                        <div className="text-sm text-gray-600">Profile Views</div>
                        <div className="text-xs text-green-600 mt-1">+12% this month</div>
                      </div>
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">24</div>
                        <div className="text-sm text-gray-600">New Bookings</div>
                        <div className="text-xs text-green-600 mt-1">+8% this month</div>
                      </div>
                      <div className="text-center p-6 bg-coral-50 rounded-lg">
                        <Star className="h-8 w-8 text-coral-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-coral-600">4.8</div>
                        <div className="text-sm text-gray-600">Avg Rating</div>
                        <div className="text-xs text-green-600 mt-1">+0.2 this month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Revenue chart will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === "messages" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                            <p className="text-sm text-gray-500">2 hours ago</p>
                          </div>
                          <span className="bg-coral-100 text-coral-800 px-2 py-1 rounded-full text-xs">New</span>
                        </div>
                        <p className="text-gray-700">
                          Hi! I&apos;m interested in enrolling my 8-year-old daughter in your art workshop. Could you tell me
                          more about the materials needed?
                        </p>
                        <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                          Reply
                        </Button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">Mike Chen</h4>
                            <p className="text-sm text-gray-500">1 day ago</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Thank you for the wonderful art class! My son really enjoyed it and can&apos;t wait for next week.
                        </p>
                        <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                          Reply
                        </Button>
                      </div>
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

export default function ProviderDashboard() {
  return (
    <ProtectedRoute allowedUserTypes={["provider"]}>
      <ProviderDashboardContent />
    </ProtectedRoute>
  )
}
