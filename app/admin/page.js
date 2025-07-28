"use client"
import { useState } from "react"
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"
import ProtectedRoute from "../components/ProtectedRoute"
import { useAuth } from "@/contexts/AuthContext"

function AdminDashboardContent() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const { user } = useAuth()

  const pendingListings = [
    {
      id: 1,
      title: "Advanced Photography Workshop",
      provider: "Photo Masters Studio",
      category: "Art & Crafts",
      submittedDate: "2024-01-15",
      status: "pending",
    },
    {
      id: 2,
      title: "Kids Martial Arts",
      provider: "Dragon Dojo",
      category: "Sports",
      submittedDate: "2024-01-14",
      status: "pending",
    },
  ]

  const allUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@email.com",
      type: "Family",
      joinDate: "2024-01-10",
      status: "active",
      activities: 5,
    },
    {
      id: 2,
      name: "Creative Arts Studio",
      email: "info@creativeartstudio.com",
      type: "Provider",
      joinDate: "2024-01-08",
      status: "active",
      activities: 3,
    },
  ]

  const categories = [
    { id: 1, name: "Art & Crafts", count: 45, status: "active" },
    { id: 2, name: "Sports & Fitness", count: 38, status: "active" },
    { id: 3, name: "STEM & Technology", count: 32, status: "active" },
    { id: 4, name: "Music & Dance", count: 28, status: "active" },
    { id: 5, name: "Language & Culture", count: 22, status: "active" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Dashboard Header */}
      <section className="bg-white shadow-sm py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-fadeInUp">
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Welcome back, {user?.name}! Manage platform activities, users, and content
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-coral-500 hover:bg-coral-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-fadeInUp">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Total Users</div>
              <div className="text-xs text-green-600 mt-1">+12% this month</div>
            </CardContent>
          </Card>
          <Card className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">456</div>
              <div className="text-sm text-gray-600">Active Listings</div>
              <div className="text-xs text-green-600 mt-1">+8% this month</div>
            </CardContent>
          </Card>
          <Card className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-coral-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">$24,580</div>
              <div className="text-sm text-gray-600">Monthly Revenue</div>
              <div className="text-xs text-green-600 mt-1">+15% this month</div>
            </CardContent>
          </Card>
          <Card className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">89%</div>
              <div className="text-sm text-gray-600">User Satisfaction</div>
              <div className="text-xs text-green-600 mt-1">+2% this month</div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "overview"
                        ? "bg-coral-100 text-coral-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <TrendingUp className="h-5 w-5 mr-3" />
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("listings")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "listings"
                        ? "bg-coral-100 text-coral-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Calendar className="h-5 w-5 mr-3" />
                    Manage Listings
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {pendingListings.length}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("users")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "users"
                        ? "bg-coral-100 text-coral-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Users className="h-5 w-5 mr-3" />
                    Manage Users
                  </button>
                  <button
                    onClick={() => setActiveTab("categories")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === "categories"
                        ? "bg-coral-100 text-coral-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Filter className="h-5 w-5 mr-3" />
                    Categories
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="animate-fadeInUp space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="font-semibold text-gray-900">New listing approved</div>
                            <div className="text-sm text-gray-600">
                              Creative Kids Art Workshop by Creative Arts Studio
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">2 hours ago</div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-blue-500" />
                          <div>
                            <div className="font-semibold text-gray-900">New user registered</div>
                            <div className="text-sm text-gray-600">Sarah Johnson joined as a family user</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">4 hours ago</div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-coral-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-coral-500" />
                          <div>
                            <div className="font-semibold text-gray-900">Listing pending review</div>
                            <div className="text-sm text-gray-600">Advanced Photography Workshop needs approval</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">6 hours ago</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {categories.slice(0, 5).map((category) => (
                          <div key={category.id} className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">{category.name}</span>
                            <span className="text-sm text-gray-600">{category.count} activities</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Platform Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">New Users (This Month)</span>
                          <span className="font-semibold text-green-600">+156</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">New Listings (This Month)</span>
                          <span className="font-semibold text-blue-600">+43</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Revenue Growth</span>
                          <span className="font-semibold text-coral-600">+15%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">User Retention</span>
                          <span className="font-semibold text-purple-600">92%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Listings Tab */}
            {activeTab === "listings" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Pending Listings ({pendingListings.length})</CardTitle>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="Search listings..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingListings.map((listing) => (
                        <Card key={listing.id} className="border-l-4 border-l-coral-500">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{listing.title}</h3>
                                <p className="text-gray-600 mb-2">by {listing.provider}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <span>Category: {listing.category}</span>
                                  <span>Submitted: {listing.submittedDate}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4 mr-1" />
                                  Review
                                </Button>
                                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-600 hover:text-red-700 bg-transparent"
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
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

            {/* Users Tab */}
            {activeTab === "users" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>All Users ({allUsers.length})</CardTitle>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Search users..." className="pl-10 w-64" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Join Date</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allUsers.map((user) => (
                            <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-3 px-4 font-medium text-gray-900">{user.name}</td>
                              <td className="py-3 px-4 text-gray-600">{user.email}</td>
                              <td className="py-3 px-4">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    user.type === "Provider"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-green-100 text-green-800"
                                  }`}
                                >
                                  {user.type}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-gray-600">{user.joinDate}</td>
                              <td className="py-3 px-4">
                                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                  {user.status}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600 hover:text-red-700 bg-transparent"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Categories Tab */}
            {activeTab === "categories" && (
              <div className="animate-fadeInUp">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Activity Categories</CardTitle>
                      <Button className="bg-coral-500 hover:bg-coral-600 text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Category
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categories.map((category) => (
                        <Card key={category.id} className="border-l-4 border-l-coral-500">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-gray-900">{category.name}</h3>
                              <div className="flex items-center gap-1">
                                <Button variant="outline" size="sm">
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-600 hover:text-red-700 bg-transparent"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">{category.count} activities</div>
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              {category.status}
                            </span>
                          </CardContent>
                        </Card>
                      ))}
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

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedUserTypes={["admin"]}>
      <AdminDashboardContent />
    </ProtectedRoute>
  )
}
