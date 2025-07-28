"use client"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedRoute({ children, allowedUserTypes = [] }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/signin")
        return
      }

      if (allowedUserTypes.length > 0 && !allowedUserTypes.includes(user.type)) {
        // Redirect to appropriate dashboard based on user type
        switch (user.type) {
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
    }
  }, [user, loading, router, allowedUserTypes])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-coral-500"></div>
          <p className="text-gray-600 mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (allowedUserTypes.length > 0 && !allowedUserTypes.includes(user.type)) {
    return null
  }

  return children
}
