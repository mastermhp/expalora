"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, ArrowRight, User, Building, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle regular sign in logic here
    console.log("Sign in:", formData)
  }

  const handleDemoLogin = async (userType) => {
    setIsLoading(true)

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = login(userType)
    if (user) {
      // Redirect based on user type
      switch (userType) {
        case "user":
          router.push("/dashboard")
          break
        case "provider":
          router.push("/provider-dashboard")
          break
        case "admin":
          router.push("/admin")
          break
        default:
          router.push("/")
      }
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Header />

      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome back!</h2>
            <p className="text-gray-600">Sign in to your Expalora account</p>
          </div>

          {/* Demo Login Section */}
          <Card className="shadow-2xl border-0 animate-slideInLeft bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-white">🎭 Demo Login</CardTitle>
              <p className="text-orange-100 text-sm">Try different user experiences</p>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <Button
                onClick={() => handleDemoLogin("user")}
                disabled={isLoading}
                className="w-full bg-white text-orange-600 hover:bg-orange-50 p-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <User className="h-5 w-5 mr-3" />
                Login as Family User
                <div className="text-xs text-orange-500 ml-auto">Sarah Johnson</div>
              </Button>

              <Button
                onClick={() => handleDemoLogin("provider")}
                disabled={isLoading}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 p-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Building className="h-5 w-5 mr-3" />
                Login as Provider
                <div className="text-xs text-blue-500 ml-auto">Creative Arts Studio</div>
              </Button>

              <Button
                onClick={() => handleDemoLogin("admin")}
                disabled={isLoading}
                className="w-full bg-white text-purple-600 hover:bg-purple-50 p-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Shield className="h-5 w-5 mr-3" />
                Login as Admin
                <div className="text-xs text-purple-500 ml-auto">Platform Admin</div>
              </Button>

              {isLoading && (
                <div className="text-center py-2">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <p className="text-orange-100 text-sm mt-2">Logging you in...</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Regular Login Form */}
          <Card className="shadow-2xl border-0 animate-slideInRight">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl gradient-text">Regular Sign In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <Link href="/auth/forgot-password" className="text-sm text-orange-500 hover:text-orange-600">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Sign In
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 bg-transparent p-4 rounded-xl transition-all"
                >
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 bg-transparent p-4 rounded-xl transition-all"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                    className="w-5 h-5 mr-2"
                  />
                  Facebook
                </Button>
              </div>

              <div className="text-center">
                <p className="text-gray-600">
                  DonIt&apos;t have an account?{" "}
                  <Link href="/auth/signup" className="text-orange-500 hover:text-orange-600 font-semibold">
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
