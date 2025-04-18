"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function CalorieCounter() {
  const [age, setAge] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [gender, setGender] = useState("female")
  const [activityLevel, setActivityLevel] = useState("moderate")
  const [calories, setCalories] = useState<number | null>(null)

  const calculateCalories = () => {
    if (!age || !weight || !height) return

    // Basic BMR calculation using the Harris-Benedict equation
    let bmr = 0
    if (gender === "male") {
      bmr =
        88.362 + 13.397 * Number.parseFloat(weight) + 4.799 * Number.parseFloat(height) - 5.677 * Number.parseFloat(age)
    } else {
      bmr =
        447.593 + 9.247 * Number.parseFloat(weight) + 3.098 * Number.parseFloat(height) - 4.33 * Number.parseFloat(age)
    }

    // Activity multiplier
    let activityMultiplier = 1.2 // Sedentary
    if (activityLevel === "light") activityMultiplier = 1.375
    if (activityLevel === "moderate") activityMultiplier = 1.55
    if (activityLevel === "active") activityMultiplier = 1.725
    if (activityLevel === "very-active") activityMultiplier = 1.9

    // Calculate total daily calories
    const totalCalories = Math.round(bmr * activityMultiplier)
    setCalories(totalCalories)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Daily Calorie Calculator</CardTitle>
        <CardDescription>Calculate your estimated daily calorie needs based on your profile.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" placeholder="Years" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight</Label>
            <Input
              id="weight"
              type="number"
              placeholder="kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            type="number"
            placeholder="cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Gender</Label>
          <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="activity">Activity Level</Label>
          <Select value={activityLevel} onValueChange={setActivityLevel}>
            <SelectTrigger id="activity">
              <SelectValue placeholder="Select activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
              <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
              <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
              <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
              <SelectItem value="very-active">Very Active (hard exercise daily)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={calculateCalories}>Calculate Calories</Button>
        {calories !== null && (
          <div className="text-center w-full">
            <p className="text-lg font-medium">Your estimated daily calorie needs:</p>
            <p className="text-3xl font-bold text-green-600">{calories} calories</p>
            <p className="text-sm text-gray-500 mt-2">
              This is an estimate based on the Harris-Benedict equation. Consult with a healthcare professional for
              personalized advice.
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
