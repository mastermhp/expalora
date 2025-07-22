"use client"
import { useState } from "react"
import { Menu, X, Heart, Bell, User, LogOut, Settings, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
    setIsProfileOpen(false)
  }

  const getDashboardLink = () => {
    if (!user) return "/auth/signin"

    switch (user.type) {
      case "user":
        return "/dashboard"
      case "provider":
        return "/provider-dashboard"
      case "admin":
        return "/admin"
      default:
        return "/dashboard"
    }
  }

  const getUserTypeLabel = () => {
    switch (user?.type) {
      case "user":
        return "Family Account"
      case "provider":
        return "Provider Account"
      case "admin":
        return "Admin Account"
      default:
        return ""
    }
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-18 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <img src="/lg.jpeg"/>
            </div>
            {/* <span className="text-2xl font-bold gradient-text">Expalora</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/browse" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Browse Activities
            </Link>
            <Link href="/list-activity" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              List Activity
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {/* User-specific navigation */}
                {user.type === "user" && (
                  <>
                    <Link href="/favorites" className="text-gray-700 hover:text-orange-500 transition-colors">
                      <Heart className="h-6 w-6" />
                    </Link>
                    <Link
                      href="/notifications"
                      className="text-gray-700 hover:text-orange-500 transition-colors relative"
                    >
                      <Bell className="h-6 w-6" />
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        3
                      </span>
                    </Link>
                  </>
                )}

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-orange-200"
                    />
                    <span className="font-medium">{user.name}</span>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <img
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                            <div className="text-xs text-orange-500 font-medium">{getUserTypeLabel()}</div>
                          </div>
                        </div>
                      </div>

                      <div className="py-2">
                        <Link
                          href={getDashboardLink()}
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="h-4 w-4 mr-3" />
                          Dashboard
                        </Link>

                        {user.type === "user" && (
                          <>
                            <Link
                              href="/favorites"
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                              onClick={() => setIsProfileOpen(false)}
                            >
                              <Heart className="h-4 w-4 mr-3" />
                              Favorites
                            </Link>
                            <Link
                              href="/notifications"
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                              onClick={() => setIsProfileOpen(false)}
                            >
                              <Bell className="h-4 w-4 mr-3" />
                              Notifications
                              <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                              </span>
                            </Link>
                          </>
                        )}

                        {user.type === "provider" && (
                          <Link
                            href="/provider-dashboard"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Calendar className="h-4 w-4 mr-3" />
                            My Listings
                          </Link>
                        )}

                        <Link
                          href="/settings"
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <Settings className="h-4 w-4 mr-3" />
                          Settings
                        </Link>

                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/signin">
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/browse"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Activities
              </Link>
              <Link
                href="/list-activity"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                List Activity
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {user ? (
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{user.name}</div>
                      <div className="text-sm text-orange-500">{getUserTypeLabel()}</div>
                    </div>
                  </div>

                  <Link
                    href={getDashboardLink()}
                    className="block text-gray-700 hover:text-orange-500 font-medium transition-colors mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>

                  {user.type === "user" && (
                    <>
                      <Link
                        href="/favorites"
                        className="block text-gray-700 hover:text-orange-500 font-medium transition-colors mb-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Favorites
                      </Link>
                      <Link
                        href="/notifications"
                        className="block text-gray-700 hover:text-orange-500 font-medium transition-colors mb-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Notifications
                      </Link>
                    </>
                  )}

                  <button
                    onClick={handleLogout}
                    className="block text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
