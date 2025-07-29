"use client"
import { useState, useEffect } from "react"
import { Menu, X, Heart, Bell, User, LogOut, Settings, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-card shadow-2xl backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-lift">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-26%20at%2012.27.35%E2%80%AFAM-VI9v0uQYGi5bdGeWKqMOS0Sosxxcw2.png"
              alt="Expalora Logo"
              className="h-14 w-auto hover-glow transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/browse", label: "Browse" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 hover-lift relative group ${
                  isScrolled ? "text-gray-700 hover:text-coral-500" : "text-coral-500 hover:text-rose-200"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-rose-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {/* User-specific navigation */}
                {user.type === "user" && (
                  <>
                    <Link
                      href="/favorites"
                      className={`transition-colors hover-lift ${
                        isScrolled ? "text-gray-700 hover:text-rose-500" : "text-white hover:text-rose-200"
                      }`}
                    >
                      <div className="relative">
                        <Heart className="h-6 w-6" />
                        <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                          3
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/notifications"
                      className={`transition-colors hover-lift relative ${
                        isScrolled ? "text-gray-700 hover:text-rose-500" : "text-white hover:text-rose-200"
                      }`}
                    >
                      <Bell className="h-6 w-6" />
                      <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                        3
                      </span>
                    </Link>
                  </>
                )}

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className={`flex items-center space-x-2 transition-colors hover-lift ${
                      isScrolled ? "text-gray-700 hover:text-rose-500" : "text-white hover:text-rose-200"
                    }`}
                  >
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-rose-200 hover-glow"
                    />
                    <span className="font-medium">{user.name}</span>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-64 glass-card rounded-2xl shadow-2xl border border-white/20 py-2 z-50 bg-white animate-scaleIn">
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
                            <div className="text-xs text-rose-500 font-medium">{getUserTypeLabel()}</div>
                          </div>
                        </div>
                      </div>

                      <div className="py-2">
                        <Link
                          href={getDashboardLink()}
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="h-4 w-4 mr-3" />
                          Dashboard
                        </Link>

                        {user.type === "user" && (
                          <>
                            <Link
                              href="/favorites"
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                              onClick={() => setIsProfileOpen(false)}
                            >
                              <Heart className="h-4 w-4 mr-3" />
                              Favorites
                            </Link>
                            <Link
                              href="/notifications"
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
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
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Calendar className="h-4 w-4 mr-3" />
                            My Listings
                          </Link>
                        )}

                        <Link
                          href="/settings"
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
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
                    className={`border-2 hover-lift transition-all duration-300 ${
                      isScrolled
                        ? "border-rose-500 text-coral-500 hover:bg-rose-50 bg-transparent"
                        : "border-coral-500 text-coral-500  hover:text-white bg-transparent"
                    }`}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="bg-coral-500 px-6 py-3 rounded-xl hover-lift">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors hover-lift ${
                isScrolled ? "text-gray-700 hover:text-rose-500" : "text-white hover:text-rose-200"
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-slideDown glass">
            <nav className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/browse", label: "Browse" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors hover-lift ${
                    isScrolled ? "text-gray-700 hover:text-rose-500" : "text-white hover:text-rose-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {user ? (
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className={`font-semibold ${isScrolled ? "text-gray-900" : "text-white"}`}>{user.name}</div>
                      <div className="text-sm text-rose-500">{getUserTypeLabel()}</div>
                    </div>
                  </div>

                  <Link
                    href={getDashboardLink()}
                    className={`block font-medium transition-colors mb-2 hover-lift ${
                      isScrolled ? "text-gray-700 hover:text-rose-500" : "text-white hover:text-rose-200"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>

                  {user.type === "user" && (
                    <>
                      <Link
                        href="/favorites"
                        className={`block font-medium transition-colors mb-2 hover-lift ${
                          isScrolled ? "text-gray-700 hover:text-rose-500" : "text-white hover:text-rose-200"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Favorites
                      </Link>
                      <Link
                        href="/notifications"
                        className={`block font-medium transition-colors mb-2 hover-lift ${
                          isScrolled ? "text-gray-700 hover:text-rose-500" : "text-white hover:text-rose-200"
                        }`}
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
                <div className="pt-4 border-t border-white/20 space-y-2">
                  <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className={`w-full border-2 transition-all ${
                        isScrolled
                          ? "border-rose-500 text-rose-500 hover:bg-rose-50 bg-transparent"
                          : "border-white/50 text-white hover:bg-white/20 bg-transparent"
                      }`}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full btn-primary">Sign Up</Button>
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
