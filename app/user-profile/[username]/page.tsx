"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import {
  Award,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Home,
  LineChart,
  LogOut,
  Settings,
  ShoppingBag,
  BookOpen,
  Save,
  PlusCircle,
  Smile,
  Frown,
  Meh,
  Target,
  CheckCircle,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { safeParseJson } from "@/lib/safe-json"

interface JournalEntry {
  id: number
  date: string
  content: string
  mood: "happy" | "neutral" | "sad"
}

interface Goal {
  id: number
  title: string
  description: string
  targetDate: string
  progress: number
  completed: boolean
}

interface Event {
  id: number
  title: string
  date: string
  time: string
  type: string
  location: string
}

interface UserData {
  firstName: string
  lastName: string
  email: string
  username: string
  isLoggedIn: boolean
  joinedDate: string
  purchasedServices: {
    id: number
    name: string
    status: string
    completedSessions: number
    totalSessions: number
  }[]
  accolades: {
    id: number
    name: string
    description: string
    date: string
  }[]
  progress: {
    nutritionScore: number
    fitnessScore: number
    overallWellness: number
  }
  journal?: JournalEntry[]
  goals?: Goal[]
  upcomingEvents?: Event[]
}

export default function UserProfilePage() {
  const router = useRouter()
  const params = useParams<{ username: string }>()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")

  // Journal state
  const [journalEntry, setJournalEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState<"happy" | "neutral" | "sad">("neutral")

  // Goals state
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    targetDate: "",
  })
  const [showNewGoalForm, setShowNewGoalForm] = useState(false)

  const journalRef = useRef<HTMLDivElement>(null)
  const goalsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading user data
    const loadUserData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const storedUser = localStorage.getItem("nxhealth_user")
      if (storedUser) {
        const parsedUser = safeParseJson<{
          firstName: string
          lastName: string
          email: string
          username: string
          isLoggedIn: boolean
          joinedDate: string
          purchasedServices: {
            id: number
            name: string
            status: string
            completedSessions: number
            totalSessions: number
          }[]
          accolades: {
            id: number
            name: string
            description: string
            date: string
          }[]
          progress: {
            nutritionScore: number
            fitnessScore: number
            overallWellness: number
          }
          journal?: Array<{ id: number; date: string; content: string; mood: string }>
          goals?: Array<{
            id: number
            title: string
            description: string
            targetDate: string
            progress: number
            completed: boolean
          }>
          upcomingEvents?: Array<{
            id: number
            title: string
            date: string
            time: string
            type: string
            location: string
          }>
        }>(storedUser, {})

        if (parsedUser.username === params.username) {
          // Add journal entries if they don't exist
          if (!parsedUser.journal) {
            parsedUser.journal = [
              {
                id: 1,
                date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                content: "Started my new nutrition plan today. Feeling optimistic about the changes!",
                mood: "happy",
              },
              {
                id: 2,
                date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                content: "Had a challenging workout session. Muscles are sore but it feels good to be making progress.",
                mood: "neutral",
              },
            ]
          }

          // Add goals if they don't exist
          if (!parsedUser.goals) {
            parsedUser.goals = [
              {
                id: 1,
                title: "Improve Nutrition",
                description: "Follow the meal plan and stay hydrated",
                targetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                progress: 35,
                completed: false,
              },
              {
                id: 2,
                title: "Exercise Regularly",
                description: "Complete 3 workout sessions per week",
                targetDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
                progress: 50,
                completed: false,
              },
            ]
          }

          // Add upcoming events if they don't exist
          if (!parsedUser.upcomingEvents) {
            parsedUser.upcomingEvents = [
              {
                id: 1,
                title: "Nutrition Consultation",
                date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
                time: "10:00 AM",
                type: "Virtual",
                location: "Zoom",
              },
              {
                id: 2,
                title: "Group Fitness Class",
                date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
                time: "5:30 PM",
                type: "In-Person",
                location: "NxHealth Studio",
              },
            ]
          }

          setUserData(parsedUser as typeof userData)
          localStorage.setItem("nxhealth_user", JSON.stringify(parsedUser))
        } else {
          // Redirect if username doesn't match
          router.push("/login")
        }
      } else {
        // Redirect if no user data
        router.push("/login")
      }

      setLoading(false)
    }

    loadUserData()
  }, [params.username, router])

  const handleLogout = () => {
    if (userData) {
      const updatedUser = { ...userData, isLoggedIn: false }
      localStorage.setItem("nxhealth_user", JSON.stringify(updatedUser))
    }
    router.push("/")
  }

  const handleJournalSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!journalEntry.trim()) {
      toast({
        title: "Entry Required",
        description: "Please write something in your journal entry.",
        variant: "destructive",
      })
      return
    }

    if (userData) {
      const newEntry: JournalEntry = {
        id: Date.now(),
        date: new Date().toISOString(),
        content: journalEntry,
        mood: selectedMood,
      }

      const journal = userData.journal || []
      const updatedUser = {
        ...userData,
        journal: [newEntry, ...journal],
      }

      setUserData(updatedUser)
      localStorage.setItem("nxhealth_user", JSON.stringify(updatedUser))

      setJournalEntry("")
      setSelectedMood("neutral")

      toast({
        title: "Journal Entry Saved",
        description: "Your journal entry has been saved successfully.",
      })

      // Scroll to the top of the journal entries
      if (journalRef.current) {
        journalRef.current.scrollTop = 0
      }
    }
  }

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newGoal.title.trim() || !newGoal.description.trim() || !newGoal.targetDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all the goal fields.",
        variant: "destructive",
      })
      return
    }

    if (userData) {
      const newGoalItem: Goal = {
        id: Date.now(),
        title: newGoal.title,
        description: newGoal.description,
        targetDate: new Date(newGoal.targetDate).toISOString(),
        progress: 0,
        completed: false,
      }

      const goals = userData.goals || []
      const updatedUser = {
        ...userData,
        goals: [...goals, newGoalItem],
      }

      setUserData(updatedUser)
      localStorage.setItem("nxhealth_user", JSON.stringify(updatedUser))

      setNewGoal({
        title: "",
        description: "",
        targetDate: "",
      })
      setShowNewGoalForm(false)

      toast({
        title: "Goal Added",
        description: "Your new goal has been added successfully.",
      })
    }
  }

  const updateGoalProgress = (goalId: number, progress: number) => {
    if (userData && userData.goals) {
      const updatedGoals = userData.goals.map((goal) => {
        if (goal.id === goalId) {
          const completed = progress >= 100
          return { ...goal, progress, completed }
        }
        return goal
      })

      const updatedUser = {
        ...userData,
        goals: updatedGoals,
      }

      setUserData(updatedUser)
      localStorage.setItem("nxhealth_user", JSON.stringify(updatedUser))

      toast({
        title: "Progress Updated",
        description: "Your goal progress has been updated.",
      })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="container max-w-screen-lg mx-auto py-10 px-4">
        <Card>
          <CardHeader>
            <CardTitle>User Not Found</CardTitle>
            <CardDescription>
              The user profile you're looking for doesn't exist or you're not authorized to view it.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-screen-xl mx-auto py-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl font-semibold text-green-700">
                    {userData.firstName.charAt(0)}
                    {userData.lastName.charAt(0)}
                  </span>
                </div>
              </div>
              <CardTitle>
                {userData.firstName} {userData.lastName}
              </CardTitle>
              <CardDescription>{userData.email}</CardDescription>
              <div className="mt-2 text-sm text-gray-500">
                Member since {new Date(userData.joinedDate).toLocaleDateString()}
              </div>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "dashboard" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "services" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>My Services</span>
                </button>
                <button
                  onClick={() => setActiveTab("progress")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "progress" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <LineChart className="h-4 w-4" />
                  <span>Progress</span>
                </button>
                <button
                  onClick={() => setActiveTab("goals")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "goals" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <Target className="h-4 w-4" />
                  <span>Goals</span>
                </button>
                <button
                  onClick={() => setActiveTab("journal")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "journal" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Journal</span>
                </button>
                <button
                  onClick={() => setActiveTab("events")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "events" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Events</span>
                </button>
                <button
                  onClick={() => setActiveTab("accolades")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "accolades" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <Award className="h-4 w-4" />
                  <span>Accolades</span>
                </button>
                <button
                  onClick={() => setActiveTab("documents")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "documents" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>Documents</span>
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700 w-full text-left ${
                    activeTab === "settings" ? "bg-green-50 text-green-700" : ""
                  }`}
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </button>
                <Separator className="my-2" />
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-50 text-red-600 w-full text-left"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Dashboard</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Nutrition Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{userData.progress.nutritionScore}%</div>
                    <Progress value={userData.progress.nutritionScore} className="h-2 mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Fitness Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{userData.progress.fitnessScore}%</div>
                    <Progress value={userData.progress.fitnessScore} className="h-2 mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Overall Wellness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{userData.progress.overallWellness}%</div>
                    <Progress value={userData.progress.overallWellness} className="h-2 mt-2" />
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Purchased Services */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>My Services</CardTitle>
                      <button
                        onClick={() => setActiveTab("services")}
                        className="text-sm text-green-600 hover:underline flex items-center"
                      >
                        View All <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.purchasedServices.slice(0, 2).map((service) => (
                        <div key={service.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-gray-500">
                              {service.completedSessions} of {service.totalSessions} sessions completed
                            </div>
                          </div>
                          <div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                service.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : service.status === "completed"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/shop">Browse More Services</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Upcoming Events</CardTitle>
                      <button
                        onClick={() => setActiveTab("events")}
                        className="text-sm text-green-600 hover:underline flex items-center"
                      >
                        View All <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.upcomingEvents && userData.upcomingEvents.length > 0 ? (
                        userData.upcomingEvents.slice(0, 2).map((event) => (
                          <div key={event.id} className="p-3 border rounded-md">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">{event.title}</h3>
                              <span className="text-sm text-gray-500">{event.type}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>
                                {event.date} at {event.time}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              <span>Location: {event.location}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="flex items-center justify-center h-32 border rounded-md border-dashed">
                          <div className="text-center">
                            <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <div className="text-sm text-gray-500">No upcoming events</div>
                            <Button variant="link" className="mt-2 text-green-600">
                              Schedule Now
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Journal Entries */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Journal</CardTitle>
                      <button
                        onClick={() => setActiveTab("journal")}
                        className="text-sm text-green-600 hover:underline flex items-center"
                      >
                        View All <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.journal && userData.journal.length > 0 ? (
                        userData.journal.slice(0, 2).map((entry) => (
                          <div key={entry.id} className="p-3 border rounded-md">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString()}</span>
                              <span>
                                {entry.mood === "happy" ? (
                                  <Smile className="h-5 w-5 text-green-500" />
                                ) : entry.mood === "sad" ? (
                                  <Frown className="h-5 w-5 text-red-500" />
                                ) : (
                                  <Meh className="h-5 w-5 text-yellow-500" />
                                )}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm line-clamp-3">{entry.content}</p>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-6">
                          <BookOpen className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500">No journal entries yet</p>
                          <Button variant="link" className="text-green-600" onClick={() => setActiveTab("journal")}>
                            Start Journaling
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Goals */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Goals</CardTitle>
                      <button
                        onClick={() => setActiveTab("goals")}
                        className="text-sm text-green-600 hover:underline flex items-center"
                      >
                        View All <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.goals && userData.goals.length > 0 ? (
                        userData.goals.slice(0, 2).map((goal) => (
                          <div key={goal.id} className="p-3 border rounded-md">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">{goal.title}</h3>
                              {goal.completed && (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  Completed
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                            <div className="flex justify-between text-xs text-gray-500 mb-2">
                              <span>Progress: {goal.progress}%</span>
                              <span>Target: {new Date(goal.targetDate).toLocaleDateString()}</span>
                            </div>
                            <Progress value={goal.progress} className="h-2" />
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-6">
                          <Target className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500">No goals set yet</p>
                          <Button variant="link" className="text-green-600" onClick={() => setActiveTab("goals")}>
                            Set Goals
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div>
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">My Services</h2>

              <div className="space-y-6">
                {userData.purchasedServices.map((service) => (
                  <Card key={service.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-medium text-gray-900">{service.name}</h3>
                          <div className="flex items-center mt-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                service.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : service.status === "completed"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                            </span>
                            <span className="text-sm text-gray-500 ml-4">
                              {service.completedSessions} of {service.totalSessions} sessions completed
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col md:items-end">
                          <div className="w-full md:w-48">
                            <Progress
                              value={(service.completedSessions / service.totalSessions) * 100}
                              className="h-2 mb-2"
                            />
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            {service.status === "active" && (
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                Schedule Session
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Card className="bg-green-50 border-0">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900">Discover More Services</h3>
                        <p className="text-gray-600 mt-1">
                          Explore our range of health and wellness services to enhance your journey.
                        </p>
                      </div>
                      <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                        <Link href="/shop">Browse Services</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Journal Tab */}
          {activeTab === "journal" && (
            <div>
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">My Journal</h2>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <form onSubmit={handleJournalSubmit}>
                    <div className="mb-4">
                      <label htmlFor="journal-entry" className="block text-sm font-medium text-gray-700 mb-2">
                        New Entry
                      </label>
                      <Textarea
                        id="journal-entry"
                        placeholder="Write about your health journey, feelings, or reflections..."
                        className="min-h-[120px]"
                        value={journalEntry}
                        onChange={(e) => setJournalEntry(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-700">Mood:</span>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedMood("happy")}
                            className={`p-2 rounded-full ${
                              selectedMood === "happy"
                                ? "bg-green-100 text-green-600"
                                : "text-gray-400 hover:text-green-600"
                            }`}
                          >
                            <Smile className="h-6 w-6" />
                            <span className="sr-only">Happy</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedMood("neutral")}
                            className={`p-2 rounded-full ${
                              selectedMood === "neutral"
                                ? "bg-yellow-100 text-yellow-600"
                                : "text-gray-400 hover:text-yellow-600"
                            }`}
                          >
                            <Meh className="h-6 w-6" />
                            <span className="sr-only">Neutral</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedMood("sad")}
                            className={`p-2 rounded-full ${
                              selectedMood === "sad" ? "bg-red-100 text-red-600" : "text-gray-400 hover:text-red-600"
                            }`}
                          >
                            <Frown className="h-6 w-6" />
                            <span className="sr-only">Sad</span>
                          </button>
                        </div>
                      </div>

                      <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                        <Save className="h-4 w-4 mr-2" />
                        Save Entry
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6" ref={journalRef}>
                {userData.journal && userData.journal.length > 0 ? (
                  userData.journal.map((entry) => (
                    <Card key={entry.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-sm text-gray-500">
                            {new Date(entry.date).toLocaleDateString()} at{" "}
                            {new Date(entry.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </div>
                          <div>
                            {entry.mood === "happy" ? (
                              <div className="flex items-center text-green-600">
                                <Smile className="h-5 w-5 mr-1" />
                                <span className="text-sm">Happy</span>
                              </div>
                            ) : entry.mood === "sad" ? (
                              <div className="flex items-center text-red-600">
                                <Frown className="h-5 w-5 mr-1" />
                                <span className="text-sm">Sad</span>
                              </div>
                            ) : (
                              <div className="flex items-center text-yellow-600">
                                <Meh className="h-5 w-5 mr-1" />
                                <span className="text-sm">Neutral</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700 whitespace-pre-line">{entry.content}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Journal Entries Yet</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      Start journaling to track your health journey, record your thoughts, and monitor your mood over
                      time.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Goals Tab */}
          {activeTab === "goals" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-medium text-gray-900">My Goals</h2>
                <Button
                  onClick={() => setShowNewGoalForm(!showNewGoalForm)}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Goal
                </Button>
              </div>

              {showNewGoalForm && (
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <form onSubmit={handleAddGoal}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="goal-title" className="block text-sm font-medium text-gray-700 mb-1">
                            Goal Title
                          </label>
                          <Input
                            id="goal-title"
                            placeholder="e.g., Improve Nutrition"
                            value={newGoal.title}
                            onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                          />
                        </div>

                        <div>
                          <label htmlFor="goal-description" className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                          </label>
                          <Textarea
                            id="goal-description"
                            placeholder="Describe your goal in detail..."
                            value={newGoal.description}
                            onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                          />
                        </div>

                        <div>
                          <label htmlFor="goal-target-date" className="block text-sm font-medium text-gray-700 mb-1">
                            Target Date
                          </label>
                          <Input
                            id="goal-target-date"
                            type="date"
                            value={newGoal.targetDate}
                            onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>

                        <div className="flex justify-end gap-2 pt-2">
                          <Button type="button" variant="outline" onClick={() => setShowNewGoalForm(false)}>
                            Cancel
                          </Button>
                          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                            Save Goal
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-6" ref={goalsRef}>
                {userData.goals && userData.goals.length > 0 ? (
                  userData.goals.map((goal) => (
                    <Card key={goal.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-medium text-gray-900">{goal.title}</h3>
                              {goal.completed && <CheckCircle className="h-5 w-5 text-green-600" />}
                            </div>
                            <p className="text-gray-600 mt-1">{goal.description}</p>
                            <div className="text-sm text-gray-500 mt-2">
                              Target date: {new Date(goal.targetDate).toLocaleDateString()}
                            </div>
                          </div>

                          <div className="flex flex-col md:items-end">
                            <div className="w-full md:w-48">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{goal.progress}%</span>
                              </div>
                              <Progress value={goal.progress} className="h-2 mb-3" />
                            </div>

                            {!goal.completed && (
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateGoalProgress(goal.id, Math.max(0, goal.progress - 10))}
                                  disabled={goal.progress <= 0}
                                >
                                  -10%
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateGoalProgress(goal.id, Math.min(100, goal.progress + 10))}
                                  disabled={goal.progress >= 100}
                                >
                                  +10%
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700 text-white"
                                  onClick={() => updateGoalProgress(goal.id, 100)}
                                  disabled={goal.progress === 100}
                                >
                                  Complete
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Goals Set Yet</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      Setting clear goals helps you track your progress and stay motivated on your health journey.
                    </p>
                    <Button
                      onClick={() => setShowNewGoalForm(true)}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Your First Goal
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === "events" && (
            <div>
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Upcoming Events</h2>

              <div className="space-y-6">
                {userData.upcomingEvents && userData.upcomingEvents.length > 0 ? (
                  userData.upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-medium text-gray-900">{event.title}</h3>
                            <div className="flex items-center text-gray-600 mt-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>
                                {event.date} at {event.time}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-600 mt-1">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <div>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                event.type === "Virtual" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                              }`}
                            >
                              {event.type}
                            </span>
                            <div className="flex gap-2 mt-3">
                              <Button variant="outline" size="sm">
                                Reschedule
                              </Button>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                Join
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Events</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      You don't have any scheduled events. Book a consultation or join a class to get started.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Schedule an Event</Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Other tabs would be implemented similarly */}
          {(activeTab === "progress" ||
            activeTab === "accolades" ||
            activeTab === "documents" ||
            activeTab === "settings") && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <p className="text-gray-600 mb-8">This section is coming soon.</p>
              <Button onClick={() => setActiveTab("dashboard")} className="bg-green-600 hover:bg-green-700 text-white">
                Return to Dashboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
