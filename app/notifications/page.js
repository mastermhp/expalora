"use client"
import { useState } from "react"
import { Bell, Check, Heart, Calendar, MessageSquare, Star, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "../components/header"
import Footer from "../components/footer"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "booking",
      title: "Booking Confirmed",
      message: "Your booking for Creative Kids Art Workshop has been confirmed for Saturday, Dec 14 at 10:00 AM.",
      time: "2 hours ago",
      read: false,
      icon: Calendar,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      type: "favorite",
      title: "New Activity Added",
      message: "A new activity 'Teen Photography Workshop' has been added to your favorite category Art & Crafts.",
      time: "4 hours ago",
      read: false,
      icon: Heart,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      id: 3,
      type: "message",
      title: "New Message",
      message: "Creative Arts Studio sent you a message about the upcoming art workshop.",
      time: "6 hours ago",
      read: true,
      icon: MessageSquare,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      type: "review",
      title: "Review Reminder",
      message: "How was your experience with Family Yoga Sessions? Leave a review to help other families.",
      time: "1 day ago",
      read: true,
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 5,
      type: "booking",
      title: "Booking Reminder",
      message: "Don't forget! Your Piano Lesson is scheduled for tomorrow at 3:00 PM.",
      time: "1 day ago",
      read: true,
      icon: Calendar,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ])

  const markAsRead = (id) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id))
  }

  const unreadCount = notifications.filter((notif) => !notif.read).length

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fadeInUp">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">
              {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : "You're all caught up!"}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button
              variant="outline"
              onClick={markAllAsRead}
              className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
            >
              <Check className="h-4 w-4 mr-2" />
              Mark All as Read
            </Button>
          )}
        </div>

        {notifications.length === 0 ? (
          <Card className="text-center py-16 animate-fadeInUp">
            <CardContent>
              <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-600">You&apos;re all caught up! Check back later for updates.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification, index) => {
              const IconComponent = notification.icon
              return (
                <Card
                  key={notification.id}
                  className={`transition-all duration-300 hover:shadow-md animate-fadeInUp ${
                    !notification.read ? "border-l-4 border-l-orange-500 bg-orange-50/30" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${notification.bgColor}`}>
                        <IconComponent className={`h-5 w-5 ${notification.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`font-semibold ${!notification.read ? "text-gray-900" : "text-gray-700"}`}>
                            {notification.title}
                            {!notification.read && (
                              <span className="ml-2 w-2 h-2 bg-orange-500 rounded-full inline-block"></span>
                            )}
                          </h3>
                          <div className="flex items-center gap-2 ml-4">
                            <span className="text-sm text-gray-500 whitespace-nowrap">{notification.time}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                              className="text-gray-400 hover:text-red-500 p-1"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p
                          className={`text-sm leading-relaxed ${!notification.read ? "text-gray-700" : "text-gray-600"}`}
                        >
                          {notification.message}
                        </p>
                        {!notification.read && (
                          <div className="mt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                              className="text-orange-500 border-orange-200 hover:bg-orange-50 bg-transparent"
                            >
                              <Check className="h-3 w-3 mr-1" />
                              Mark as Read
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {/* Notification Settings */}
        <Card className="mt-8 animate-slideInLeft">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Booking Confirmations</div>
                  <div className="text-sm text-gray-600">Get notified when your bookings are confirmed</div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">New Activities</div>
                  <div className="text-sm text-gray-600">
                    Get notified about new activities in your favorite categories
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Messages</div>
                  <div className="text-sm text-gray-600">Get notified when providers send you messages</div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Reminders</div>
                  <div className="text-sm text-gray-600">Get reminded about upcoming activities</div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mt-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
