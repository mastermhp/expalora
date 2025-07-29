import Link from "next/link"
import { Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Main Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Main Pages</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Home V1
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Home V2
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Home V3
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-coral-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Location Single
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Activity Single
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Cities</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=40&h=40&fit=crop"
                    alt="New York"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <Link href="#" className="text-gray-900 hover:text-coral-500 transition-colors font-medium">
                      New York
                    </Link>
                    <p className="text-sm text-gray-600">Explore location</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=40&h=40&fit=crop"
                    alt="San Francisco"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <Link href="#" className="text-gray-900 hover:text-coral-500 transition-colors font-medium">
                      San Francisco
                    </Link>
                    <p className="text-sm text-gray-600">Explore location</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=40&h=40&fit=crop"
                    alt="Chicago"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <Link href="#" className="text-gray-900 hover:text-coral-500 transition-colors font-medium">
                      Chicago
                    </Link>
                    <p className="text-sm text-gray-600">Explore location</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Template Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Template Pages</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Start here
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Styleguide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  404 Not Found
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Password Protected
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Licenses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  More Webflow Templates →
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Utility Pages</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  FAQS
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Contact V1
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Contact V2
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Contact V3
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Pricing Single
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-coral-500 transition-colors">
                  Submission
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Subscribe to our newsletter</h3>
                <p className="text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma.
                </p>
              </div>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <div className="relative flex-1 md:flex-none">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-12 md:w-64 rounded-lg border-none bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-coral-500"
                />
              </div>
              <Button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-lg font-medium">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-lift">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-26%20at%2012.27.35%E2%80%AFAM-VI9v0uQYGi5bdGeWKqMOS0Sosxxcw2.png"
              alt="Expalora Logo"
              className="h-16 w-auto hover-glow transition-all duration-300"
            />
          </Link>
          <p className="text-gray-600 text-sm text-center md:text-right">
            Copyright © Expalora | All rights reserved{" "}
            <a href="#" className="text-coral-500 hover:underline">
              2025
            </a>{" "}
            - Powered by{" "}
            <a href="#" className="text-coral-500 hover:underline">
              Expalora
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
