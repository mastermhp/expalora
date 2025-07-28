import { Users, Target, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            About <span className="gradient-text">Expalora</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slideInLeft">
            Helping people discover meaningful activities in their local communities
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Expalora, we believe that learning and growth happen best when people can easily discover and connect
                with enriching activities in their local communities. WeIt&apos;re bridging the gap between passionate
                educators, skilled instructors, and families seeking meaningful experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether youIt&apos;re a parent looking for after-school programs, a student seeking new skills, or an adult
                wanting to explore creative hobbies, Expalora makes it simple to find and join activities that inspire
                and educate.
              </p>
            </div>
            <div className="animate-slideInRight">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Community Learning"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at Expalora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-scale animate-fadeInUp">
              <CardContent className="p-8">
                <div className="bg-coral-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-coral-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community First</h3>
                <p className="text-gray-600">
                  We prioritize building strong, supportive communities where everyone can learn and grow together.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Focus</h3>
                <p className="text-gray-600">
                  We carefully curate activities and providers to ensure high-quality, safe, and enriching experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from our platform to our customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Passion</h3>
                <p className="text-gray-600">
                  WeIt&apos;re passionate about connecting people with activities that spark joy and foster personal growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600 animate-slideInLeft">
            <p className="text-lg leading-relaxed mb-6">
              Expalora was born from a simple observation: finding quality local activities for families and individuals
              was surprisingly difficult. Parents spent hours searching through scattered websites, social media groups,
              and word-of-mouth recommendations to find suitable programs for their children.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Meanwhile, talented instructors and passionate educators struggled to reach their ideal students, often
              relying on limited marketing channels that didnIt&apos;t showcase the full value of their offerings.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              We realized there had to be a better way. A platform that could bring together the entire community of
              learners and educators, making it easy for families to discover amazing opportunities and for providers to
              share their expertise with those who need it most.
            </p>

            <p className="text-lg leading-relaxed">
              Today, Expalora serves thousands of families and hundreds of activity providers across multiple cities,
              creating connections that enrich lives and strengthen communities. WeIt&apos;re just getting started on our
              mission to make quality local activities accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WeIt&apos;re a passionate team dedicated to connecting communities through learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale animate-fadeInUp">
              <CardContent className="p-8">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Sarah Mitchell"
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Mitchell</h3>
                <p className="text-coral-500 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  Former educator with 10+ years of experience connecting families with learning opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="David Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">David Chen</h3>
                <p className="text-coral-500 font-medium mb-4">Head of Technology</p>
                <p className="text-gray-600">
                  Tech enthusiast focused on building user-friendly platforms that make a real difference.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Maria Rodriguez"
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Rodriguez</h3>
                <p className="text-coral-500 font-medium mb-4">Community Manager</p>
                <p className="text-gray-600">
                  Community builder passionate about creating meaningful connections between learners and educators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
