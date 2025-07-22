import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slideInLeft">
            WeIt&apos;d love to hear from you. Send us a message and weIt&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slideInLeft">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <Input
                      placeholder="Your first name"
                      className="p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <Input
                      placeholder="Your last name"
                      className="p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Provider Support</option>
                    <option>Technical Issue</option>
                    <option>Partnership Opportunity</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white p-4 text-lg font-semibold">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slideInRight">
            <div className="space-y-8">
              <Card className="hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600 mb-2">Send us an email and weIt&apos;ll get back to you within 24 hours.</p>
                      <a
                        href="mailto:info@expalora.com"
                        className="text-orange-500 hover:text-orange-600 font-semibold"
                      >
                        info@expalora.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600 mb-2">Speak with our support team during business hours.</p>
                      <a href="tel:+1-555-123-4567" className="text-blue-500 hover:text-blue-600 font-semibold">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                      <p className="text-gray-600 mb-2">Come visit our office for in-person support.</p>
                      <address className="text-green-500 not-italic">
                        123 Innovation Drive
                        <br />
                        San Francisco, CA 94105
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-scale animate-fadeInUp">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I list my activity on Expalora?</h3>
                <p className="text-gray-600">
                  Simply click It &quot;List Your Activity&quot; in the header, fill out our easy form with your activity details,
                  and our team will review and approve your listing within 24-48 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a fee to use Expalora?</h3>
                <p className="text-gray-600">
                  Browsing and contacting providers is completely free for families. Activity providers pay a small
                  commission only when they receive bookings through our platform.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you ensure activity quality?</h3>
                <p className="text-gray-600">
                  We carefully review all activity listings, verify provider credentials, and encourage honest reviews
                  from participants to maintain high quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I cancel or reschedule activities?</h3>
                <p className="text-gray-600">
                  Cancellation and rescheduling policies vary by provider. Each activity listing includes the specific
                  terms, and you can contact providers directly to discuss changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
