"use client"
import { useState } from "react"
import { Star, Heart, MapPin, Clock, Users, Calendar, Phone, Mail, MessageSquare, Share2, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function ActivityDetailPage({ params }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock data - in real app, fetch based on params.id
  const activity = {
    id: 1,
    title: "Creative Kids Art Workshop",
    provider: "Creative Arts Studio",
    providerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 15,
    price: "$45/class",
    category: "Art & Crafts",
    ageRange: "6-12",
    maxParticipants: 8,
    currentParticipants: 5,
    schedule: "Saturdays 10:00 AM - 12:00 PM",
    location: "Downtown Community Center",
    address: "123 Main Street, Downtown, CA 90210",
    description: `Join our fun and engaging art classes designed specifically for children ages 6-12. In this workshop, kids will explore various art techniques including painting, drawing, and crafting in a supportive and creative environment.

Our experienced instructors guide children through different projects each week, helping them develop their artistic skills while building confidence and creativity. All materials are provided, and each child will take home their masterpieces!

What's included:
• All art supplies and materials
• Individual guidance from certified art instructors
• Take-home artwork each session
• Small class sizes for personalized attention
• Safe and clean environment`,
    images: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    ],
    instructor: {
      name: "Sarah Mitchell",
      bio: "Professional art educator with 8+ years of experience working with children. Certified in early childhood art education.",
      experience: "8+ years",
      specialties: ["Children's Art", "Painting", "Crafts"],
    },
    reviews: [
      {
        id: 1,
        name: "Jennifer L.",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "My daughter absolutely loves this class! Sarah is amazing with kids and so patient. Highly recommend!",
      },
      {
        id: 2,
        name: "Mike C.",
        rating: 5,
        date: "1 month ago",
        comment:
          "Great class! My son has learned so much and his confidence has really grown. The projects are creative and fun.",
      },
      {
        id: 3,
        name: "Lisa R.",
        rating: 4,
        date: "1 month ago",
        comment:
          "Wonderful art program. The instructor is very skilled and the kids always come home excited about what they created.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 animate-fadeInUp">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <span>/</span>
            <Link href="/browse" className="hover:text-orange-500">
              Browse Activities
            </Link>
            <span>/</span>
            <span className="text-gray-900">{activity.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card className="overflow-hidden animate-slideInLeft">
              <div className="relative">
                <img
                  src={activity.images[selectedImage] || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`bg-white/90 backdrop-blur-sm ${isFavorited ? "text-red-500" : "text-gray-600"}`}
                  >
                    <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm text-gray-600">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {activity.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {activity.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index ? "border-orange-500" : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Activity Details */}
            <Card className="animate-fadeInUp">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{activity.title}</h1>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold ml-1">{activity.rating}</span>
                        <span className="text-gray-600 ml-1">({activity.reviewCount} reviews)</span>
                      </div>
                      <span className="text-3xl font-bold text-orange-500">{activity.price}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Ages {activity.ageRange}</div>
                    <div className="text-sm text-gray-600">Target age group</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{activity.schedule}</div>
                    <div className="text-sm text-gray-600">Weekly schedule</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{activity.location}</div>
                    <div className="text-sm text-gray-600">Location</div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Activity</h3>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">{activity.description}</div>
                </div>
              </CardContent>
            </Card>

            {/* Instructor Info */}
            <Card className="animate-slideInLeft">
              <CardHeader>
                <CardTitle>Meet Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6">
                  <img
                    src={activity.providerImage || "/placeholder.svg"}
                    alt={activity.instructor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{activity.instructor.name}</h4>
                    <p className="text-gray-600 mb-4">{activity.instructor.bio}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Experience:</span>
                        <span className="text-gray-600 ml-1">{activity.instructor.experience}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Specialties:</span>
                        <span className="text-gray-600 ml-1">{activity.instructor.specialties.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="animate-fadeInUp">
              <CardHeader>
                <CardTitle>Reviews ({activity.reviewCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activity.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-orange-600">{review.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24 animate-slideInRight">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">{activity.price}</div>
                  <div className="text-gray-600">per class</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Available spots:</span>
                    <span className="font-semibold text-green-600">
                      {activity.maxParticipants - activity.currentParticipants} of {activity.maxParticipants}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(activity.currentParticipants / activity.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white p-4 text-lg font-semibold">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent p-4"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Message Provider
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>info@creativeartstudio.com</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                      <span>{activity.address}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-gray-500 hover:text-red-500 border-gray-300 hover:border-red-300 bg-transparent"
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    Report this listing
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="animate-fadeInUp">
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive map coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{activity.address}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
