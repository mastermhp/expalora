"use client"
import { useState } from "react"
import { Upload, MapPin, Users, DollarSign, Camera, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ListActivityPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    ageRange: "",
    location: "",
    schedule: "",
    price: "",
    images: [],
    contactMethod: "email",
  })

  const steps = [
    { number: 1, title: "Basic Info", description: "Tell us about your activity" },
    { number: 2, title: "Details", description: "Add schedule and pricing" },
    { number: 3, title: "Media", description: "Upload photos and videos" },
    { number: 4, title: "Contact", description: "How people can reach you" },
  ]

  const categories = [
    "Art & Crafts",
    "Sports & Fitness",
    "STEM & Technology",
    "Music & Dance",
    "Language & Culture",
    "Cooking & Culinary",
    "Academic Tutoring",
    "Life Skills",
    "Events & Workshops",
    "Other",
  ]

  const ageRanges = ["Kids (5-12)", "Teens (13-17)", "Adults (18+)", "All Ages", "Seniors (65+)"]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral-500 to-coral-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">Share Your Amazing Activity</h1>
          <p className="text-xl opacity-90 mb-8 animate-slideInLeft">
            Help families and individuals discover enriching experiences in their community
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                    currentStep >= step.number
                      ? "bg-coral-500 border-coral-500 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {step.number}
                </div>
                <div className="ml-4 hidden md:block">
                  <div className={`font-semibold ${currentStep >= step.number ? "text-coral-500" : "text-gray-400"}`}>
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block w-24 h-0.5 mx-8 ${
                      currentStep > step.number ? "bg-coral-500" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="shadow-lg animate-fadeInUp">
          <CardHeader>
            <CardTitle className="text-2xl text-center">{steps[currentStep - 1].title}</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Activity Title *</label>
                  <Input
                    placeholder="e.g., Creative Kids Art Workshop"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Description *</label>
                  <textarea
                    placeholder="Describe your activity, what participants will learn, and what makes it special..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={6}
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Tag className="inline h-4 w-4 mr-2" />
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Users className="inline h-4 w-4 mr-2" />
                      Target Age Range *
                    </label>
                    <select
                      value={formData.ageRange}
                      onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    >
                      <option value="">Select age range</option>
                      {ageRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <MapPin className="inline h-4 w-4 mr-2" />
                    Location *
                  </label>
                  <Input
                    placeholder="e.g., Downtown Community Center, 123 Main St, City, State"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Clock className="inline h-4 w-4 mr-2" />
                    Schedule & Time Slots *
                  </label>
                  <textarea
                    placeholder="e.g., Saturdays 10:00 AM - 12:00 PM, or Mon-Fri 2:00 PM - 5:00 PM"
                    value={formData.schedule}
                    onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                    rows={4}
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <DollarSign className="inline h-4 w-4 mr-2" />
                    Pricing *
                  </label>
                  <Input
                    placeholder="e.g., $45/class, $120/month, Free"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Additional Information</label>
                  <textarea
                    placeholder="Any additional details about requirements, materials needed, cancellation policy, etc."
                    rows={4}
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Media */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Camera className="inline h-4 w-4 mr-2" />
                    Upload Photos *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-coral-500 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg text-gray-600 mb-2">Drag and drop your photos here</p>
                    <p className="text-sm text-gray-500 mb-4">or click to browse files</p>
                    <Button className="bg-coral-500 hover:bg-coral-600 text-white">Choose Files</Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Upload at least 3 high-quality photos showing your activity in action. Maximum 10 photos.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Video (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-coral-500 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg text-gray-600 mb-2">Upload a video showcasing your activity</p>
                    <p className="text-sm text-gray-500 mb-4">Maximum 2 minutes, MP4 format preferred</p>
                    <Button
                      variant="outline"
                      className="border-coral-500 text-coral-500 hover:bg-coral-50 bg-transparent"
                    >
                      Choose Video
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Provider Information</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      placeholder="Your Name or Organization"
                      className="p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    />
                    <Input
                      placeholder="Your Title/Role"
                      className="p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Bio/About You</label>
                  <textarea
                    placeholder="Tell people about your background, experience, and what makes you passionate about this activity..."
                    rows={4}
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    How should people contact you? *
                  </label>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="email"
                        name="contact"
                        value="email"
                        checked={formData.contactMethod === "email"}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        className="w-4 h-4 text-coral-500"
                      />
                      <label htmlFor="email" className="text-lg">
                        Email
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="phone"
                        name="contact"
                        value="phone"
                        checked={formData.contactMethod === "phone"}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        className="w-4 h-4 text-coral-500"
                      />
                      <label htmlFor="phone" className="text-lg">
                        Phone
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="internal"
                        name="contact"
                        value="internal"
                        checked={formData.contactMethod === "internal"}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        className="w-4 h-4 text-coral-500"
                      />
                      <label htmlFor="internal" className="text-lg">
                        Internal messaging through Expalora
                      </label>
                    </div>
                  </div>
                </div>

                {formData.contactMethod === "email" && (
                  <Input
                    placeholder="Your email address"
                    type="email"
                    className="p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  />
                )}

                {formData.contactMethod === "phone" && (
                  <Input
                    placeholder="Your phone number"
                    type="tel"
                    className="p-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  />
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="px-8 py-3 text-lg"
              >
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 text-lg"
                >
                  Next Step
                </Button>
              ) : (
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                  Submit for Review
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-8 bg-coral-50 border-coral-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-coral-800 mb-3">Need Help?</h3>
            <p className="text-coral-700 mb-4">
              Our team reviews all listings to ensure quality and safety. Your activity will be live within 24-48 hours
              after approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border-coral-500 text-coral-500 hover:bg-coral-100 bg-transparent"
              >
                View Listing Guidelines
              </Button>
              <Button
                variant="outline"
                className="border-coral-500 text-coral-500 hover:bg-coral-100 bg-transparent"
              >
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
