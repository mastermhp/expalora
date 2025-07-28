import { MapPin, Clock, ArrowRight, Wifi, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";

// Mock data exactly as shown in screenshots
const cities = [
  {
    name: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    name: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=400&h=300&fit=crop",
    description:
      "Nunc sagittis quis lectus in tempus lorem posuere id fermentum magna.",
  },
  {
    name: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    description:
      "Eros pellentesque volutpat viverra ac non vitae cursus velit at lobortis.",
  },
  {
    name: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description:
      "Tincidunt turpis sed arcu placerat ut sit nisl donec sodales tristique a sit.",
  },
];

const categories = [
  { name: "Food & drinks", icon: "🍴", color: "text-red-500" },
  { name: "Art & Culture", icon: "🎨", color: "text-pink-500" },
  { name: "Entertainment", icon: "🎭", color: "text-blue-500" },
  { name: "Outdoors", icon: "⛰️", color: "text-green-500" },
  { name: "Nightlife", icon: "🍸", color: "text-purple-500" },
  { name: "Activities", icon: "💡", color: "text-coral-500" },
];

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

const popularExperiences = [
  {
    id: 1,
    title: "Spanish Conversation Club",
    category: "Language",
    location: "472 Border St. Freeport, NY 1152",
    schedule: "Mon - Fri: 9:00 AM - 8:00 PM",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    buttonText: "Book a table",
    categoryColor: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    title: "Piano Lessons for Beginners",
    category: "Music",
    location: "762 Fulton St. San Francisco, CA 9410",
    schedule: "Mon - Fri: 2:00 PM - 8:00 PM",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=250&fit=crop",
    buttonText: "Book now",
    categoryColor: "bg-pink-100 text-pink-600",
  },
  {
    id: 3,
    title: "Junior Soccer League",
    category: "Sports",
    location: "762 Fulton St. San Francisco, CA 9410",
    schedule: "Mon - Fri: 2:00 PM - 8:00 PM",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    buttonText: "Book now",
    categoryColor: "bg-pink-100 text-pink-600",
  },
];

const articles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=250&fit=crop",
    category: "Sports",
    date: "Feb 10, 2023",
    title: "What to do and see in 10 days in New York City",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit molestie id ac at egestas.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop",
    category: "Guides",
    date: "Feb 10, 2023",
    title: "A beginner's guide on how to plan your travel budget",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit molestie id ac at egestas.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
    category: "Tips",
    date: "Feb 10, 2023",
    title: "16 restaurants that you must visit in Chicago, Illinois",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit molestie id ac at egestas.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Exactly as in screenshot with correct image grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover the best{" "}
                <span className="text-coral-500">Activities</span> to do in
                your city
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Dui vel mattis morbi sit urna sapien purus purus aliquam platea
                purus libero et viverra vitae sit sed duis mi erat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-coral-500 h-12 hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium">
                  Subscribe
                </Button>
                <Link href="/browse">
                  <Button
                    variant="outline"
                    className="border-2 border-coral-500 h-12 text-coral-500 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-medium bg-transparent"
                  >
                    Explore Activities
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image Gallery - EXACT layout from screenshot */}
            <div className="animate-slideInRight">
              <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[600px]">
                {/* Miami Beach - Large left image */}
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
                  alt="Miami Beach"
                  className="col-span-4 row-span-5 rounded-xl object-cover w-full h-full shadow-lg"
                />

                {/* Beach scene - Top right medium */}
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop"
                  alt="Beach"
                  className="col-span-4 row-span-7 rounded-xl object-cover w-full h-full shadow-lg"
                />

                {/* NYC Chrysler Building - Large center */}
                <img
                  src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=400&fit=crop"
                  alt="New York"
                  className="col-span-4 row-span-6 rounded-xl object-cover w-full h-full shadow-lg"
                />

                {/* Golden Gate Bridge - Bottom left */}
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop"
                  alt="San Francisco"
                  className="col-span-4 row-span-4 rounded-xl object-cover w-full h-full shadow-lg"
                />

                {/* Miami Buildings - Small top right */}
                <img
                  src="https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=200&h=200&fit=crop"
                  alt="Miami Buildings"
                  className="col-span-4 row-span-3 rounded-xl object-cover w-full h-full shadow-lg"
                />

                {/* LA Skyline - Small bottom right */}
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=200&fit=crop"
                  alt="Los Angeles"
                  className="col-span-4 row-span-3 rounded-xl object-cover w-full h-full shadow-lg"
                />
                {/* NYC Chrysler Building - Large center */}
                <img
                  src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=400&fit=crop"
                  alt="New York"
                  className="col-span-4 row-span-6 rounded-xl object-cover w-full h-full shadow-lg"
                />

                {/* Golden Gate Bridge - Bottom left */}
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop"
                  alt="San Francisco"
                  className="col-span-4 row-span-6 rounded-xl object-cover w-full h-full shadow-lg"
                />

                {/* Miami Buildings - Small top right */}
                <img
                  src="https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=200&h=200&fit=crop"
                  alt="Miami Buildings"
                  className="col-span-4 row-span-5 rounded-xl object-cover w-full h-full shadow-lg"
                />

                {/* LA Skyline - Small bottom right */}
                {/* <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=200&fit=crop"
                  alt="Los Angeles"
                  className="col-span-4 row-span-5 rounded-xl object-cover w-full h-full shadow-lg"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Our Cities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900">
              Browse our cities
            </h2>
            <Link href="#">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent rounded-lg"
              >
                Browse all cities
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide space-x-6 py-4">
              {cities.map((city, index) => (
                <Link
                  href="#"
                  key={index}
                  className="flex-shrink-0 w-80 group animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="p-0 overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover-scale bg-white">
                    <img
                      src={city.image || "/placeholder.svg"}
                      alt={city.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-coral-500 transition-colors">
                          {city.name}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-coral-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-gray-600 text-sm">
                        {city.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Category Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-coral-500">
              Explore by category
            </h2>
            <Link href="/browse">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent rounded-lg"
              >
                Browse Activities
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                href="#"
                key={index}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-8 text-left border border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale bg-white">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{category.icon}</span>
                    <h3
                      className={`text-xl font-bold  group-hover:text-coral-500 transition-colors`}
                    >
                      {category.name}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Experiences Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900">
              Popular Activities
            </h2>
            <Link href="/browse">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent rounded-lg"
              >
                Browse all activities
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide space-x-6 py-4">
              {popularExperiences.map((activity, index) => (
                <Link
                  href={`/activity/${activity.id}`}
                  key={activity.id}
                  className="flex-shrink-0 w-96 group animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="p-0 overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover-scale bg-white">
                    <div className="relative">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className={`absolute top-4 left-4 ${activity.categoryColor} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}
                      >
                        <span className="w-2 h-2 bg-current rounded-full"></span>
                        {activity.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-coral-500 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Urna amet tristique enim hac convallis lacus lorem
                        tempus eget vivamus orci viverra lorem amet.
                      </p>
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <MapPin className="h-4 w-4 mr-2 text-red-500" />
                        <span>{activity.location}</span>
                      </div>
                      <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 rounded-lg font-medium">
                        {activity.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with TILTED iPhone Mockup - EXACTLY as in screenshot */}
      <section className="my-16 md:my-24 h-[452px] bg-gray-900 text-white relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <h2 className="text-[34px] font-bold mb-6 leading-tight">
                Subscribe to our newsletter to <br/> get daily free Activities!
              </h2>
              <p className="text-gray-300 text-[14px] mb-8 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 w-[86%]">
                <div className="relative flex-1 w-20">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12 rounded-xl border-none h-12 w-[90%] bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-coral-500"
                  />
                </div>
                <Button className="bg-coral-500 h-12 hover:bg-coral-600 text-white px-8 py-4 rounded-xl text-lg font-medium">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Right iPhone Mockup - TILTED and positioned exactly like screenshot */}

            {/* iPhone Frame - TILTED at angle like in screenshot */}
            <div className="w-full">
              <img src="/newsl.png" alt="" className="w-full h-full -mt-18" />
            </div>
          </div>
        </div>
      </section>

      {/* Browse All Experiences Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900">
              Browse all Activities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularExperiences.map((activity, index) => (
              <Link
                href={`/activity/${activity.id}`}
                key={activity.id}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-0 overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale bg-white">
                  <div className="relative">
                    <img
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className={`absolute top-4 left-4 ${activity.categoryColor} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}
                    >
                      <span className="w-2 h-2 bg-current rounded-full"></span>
                      {activity.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-coral-500 transition-colors">
                      {activity.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-6">
                      <Clock className="h-4 w-4 mr-2 text-red-500" />
                      <span>{activity.schedule}</span>
                    </div>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium">
                      {activity.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Articles & News Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900">
              Browse articles & news
            </h2>
            <Link href="#">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent rounded-lg"
              >
                Browse all articles
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                href="#"
                key={article.id}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-0 overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover-scale bg-white">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <span
                        className={`px-2 py-1 rounded-full font-medium text-xs ${
                          article.category === "Traveling"
                            ? "bg-red-100 text-red-600"
                            : article.category === "Guides"
                            ? "bg-coral-100 text-coral-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-coral-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex items-center text-gray-900 font-medium group-hover:text-coral-500 transition-colors">
                      Read more
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
