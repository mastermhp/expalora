"use client"
import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Demo users
  const demoUsers = {
    user: {
      id: 1,
      name: "Sarah Johnson",
      email: "demo@user.com",
      type: "user",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      children: 2,
      location: "San Francisco, CA",
    },
    provider: {
      id: 2,
      name: "Creative Arts Studio",
      email: "demo@provider.com",
      type: "provider",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      businessName: "Creative Arts Studio",
      specialization: "Art & Crafts",
    },
    admin: {
      id: 3,
      name: "Admin User",
      email: "demo@admin.com",
      type: "admin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      role: "Platform Administrator",
    },
  }

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("expalora_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (userType) => {
    const userData = demoUsers[userType]
    if (userData) {
      setUser(userData)
      localStorage.setItem("expalora_user", JSON.stringify(userData))
      return userData
    }
    return null
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("expalora_user")
  }

  const value = {
    user,
    login,
    logout,
    loading,
    demoUsers,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
