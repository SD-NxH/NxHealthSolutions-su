"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { toast } from "@/hooks/use-toast"
import Image from "next/image"

export default function GetStartedPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",

    // Health Information
    height: "",
    weight: "",
    primaryConcern: "",
    secondaryConcerns: [] as string[],
    medicalConditions: [] as string[],
    medications: "",
    allergies: "",

    // Lifestyle Information
    dietType: "",
    activityLevel: "",
    sleepQuality: "",
    stressLevel: "",

    // Goals
    healthGoals: [] as string[],
    timeframe: "",

    // Additional Information
    additionalInfo: "",
    heardFrom: "",
    preferredContact: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const headerRef = useRef(null)
  const formRef = useRef(null)
  const formElement = useRef<HTMLFormElement>(null)

  const isFormInView = useInView(formRef, { once: true, amount: 0.1 })

  const totalSteps = 4

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const currentValues = prev[name as keyof typeof prev] as string[]

      if (checked) {
        return { ...prev, [name]: [...currentValues, value] }
      } else {
        return { ...prev, [name]: currentValues.filter((item) => item !== value) }
      }
    })
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Remove this line:
    // if (formElement.current) {
    //   formElement.current.submit()
    // }

    // Simulate form submission without actually submitting
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)

    toast({
      title: "Assessment Submitted",
      description: "Thank you for completing your health assessment. We'll be in touch soon!",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section ref={headerRef} className="relative w-full py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/nxlogo-alt-2.png"
                alt="NX Health Solutions Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-green-800 mb-4">
              Get Started with NxHealth
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete this health assessment to help us understand your needs and create a personalized plan for you.
            </p>

            {/* Progress Indicator */}
            {!submitted && (
              <div className="max-w-md mx-auto mb-8">
                <div className="flex justify-between mb-2">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step > index + 1
                          ? "bg-green-600 text-white"
                          : step === index + 1
                            ? "bg-green-100 text-green-600 border-2 border-green-600"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Step {step} of {totalSteps}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-12 bg-white flex-grow">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">
                      Thank You for Your Submission!
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      We've received your health assessment. Our team will review your information and contact you
                      within 24-48 hours to discuss your personalized health plan.
                    </p>
                    <div className="space-y-4">
                      <Link href="/">
                        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8">
                          Return to Homepage
                        </Button>
                      </Link>
                      <div>
                        <Link href="/resources" className="text-green-600 hover:underline block mt-4">
                          Explore our health resources while you wait
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form
                    ref={formElement}
                    action="https://formsubmit.co/nxhealthsolutions@gmail.com"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_next" value="https://nxhealthsolutions.org" />
                    <input type="hidden" name="_subject" value="New Health Assessment Submission" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{ display: "none" }} />

                    <input type="hidden" name="firstName" value={formData.firstName} />
                    <input type="hidden" name="lastName" value={formData.lastName} />
                    <input type="hidden" name="email" value={formData.email} />
                    <input type="hidden" name="phone" value={formData.phone} />
                    <input type="hidden" name="age" value={formData.age} />
                    <input type="hidden" name="height" value={formData.height} />
                    <input type="hidden" name="weight" value={formData.weight} />
                    <input type="hidden" name="primaryConcern" value={formData.primaryConcern} />
                    <input type="hidden" name="allergies" value={formData.allergies} />
                    <input type="hidden" name="medicalConditions" value={formData.medicalConditions.join(", ")} />
                    <input type="hidden" name="medications" value={formData.medications} />
                    <input type="hidden" name="dietType" value={formData.dietType} />
                    <input type="hidden" name="activityLevel" value={formData.activityLevel} />
                    <input type="hidden" name="sleepQuality" value={formData.sleepQuality} />
                    <input type="hidden" name="stressLevel" value={formData.stressLevel} />
                    <input type="hidden" name="healthGoals" value={formData.healthGoals.join(", ")} />
                    <input type="hidden" name="timeframe" value={formData.timeframe} />
                    <input type="hidden" name="additionalInfo" value={formData.additionalInfo} />
                    <input type="hidden" name="heardFrom" value={formData.heardFrom} />
                    <input type="hidden" name="preferredContact" value={formData.preferredContact} />

                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-gray-900 mb-2">Personal Information</h2>
                          <p className="text-gray-600 mb-6">Please provide your basic information to get started.</p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="John"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Doe"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john.doe@example.com"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="(555) 123-4567"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="age">Age</Label>
                              <Input
                                id="age"
                                name="age"
                                type="number"
                                value={formData.age}
                                onChange={handleInputChange}
                                placeholder="35"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Gender</Label>
                              <RadioGroup
                                value={formData.gender}
                                onValueChange={(value) => handleRadioChange("gender", value)}
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="male" id="male" />
                                  <Label htmlFor="male" className="font-normal">
                                    Male
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="female" id="female" />
                                  <Label htmlFor="female" className="font-normal">
                                    Female
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="other" id="other" />
                                  <Label htmlFor="other" className="font-normal">
                                    Other
                                  </Label>
                                </div>
                              </RadioGroup>
                              <input type="hidden" name="gender" value={formData.gender} />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Health Information */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-gray-900 mb-2">Health Information</h2>
                          <p className="text-gray-600 mb-6">Tell us about your current health status.</p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="height">Height (in/cm)</Label>
                              <Input
                                id="height"
                                name="height"
                                value={formData.height}
                                onChange={handleInputChange}
                                placeholder="5&#39;10&quot; or 178cm"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="weight">Weight (lbs/kg)</Label>
                              <Input
                                id="weight"
                                name="weight"
                                value={formData.weight}
                                onChange={handleInputChange}
                                placeholder="160lbs or 73kg"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="primaryConcern">What is your primary health concern?</Label>
                            <Input
                              id="primaryConcern"
                              name="primaryConcern"
                              value={formData.primaryConcern}
                              onChange={handleInputChange}
                              placeholder="e.g., Weight management, energy levels, etc."
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Do you have any secondary health concerns? (Select all that apply)</Label>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Digestive issues",
                                "Sleep problems",
                                "Stress/anxiety",
                                "Joint pain",
                                "Skin issues",
                                "Low energy",
                                "Hormonal imbalance",
                                "Blood sugar control",
                              ].map((concern) => (
                                <div key={concern} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={concern.toLowerCase().replace(/\s+/g, "-")}
                                    checked={formData.secondaryConcerns.includes(concern)}
                                    onCheckedChange={(checked) =>
                                      handleCheckboxChange("secondaryConcerns", concern, checked as boolean)
                                    }
                                  />
                                  <Label htmlFor={concern.toLowerCase().replace(/\s+/g, "-")} className="font-normal">
                                    {concern}
                                  </Label>
                                </div>
                              ))}
                            </div>
                            <input
                              type="hidden"
                              name="secondaryConcerns"
                              value={formData.secondaryConcerns.join(", ")}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Do you have any diagnosed medical conditions? (Select all that apply)</Label>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Diabetes",
                                "Hypertension",
                                "Heart disease",
                                "Thyroid disorder",
                                "Autoimmune condition",
                                "Gastrointestinal disorder",
                                "Depression/anxiety",
                                "None",
                              ].map((condition) => (
                                <div key={condition} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={condition.toLowerCase().replace(/\s+/g, "-")}
                                    checked={formData.medicalConditions.includes(condition)}
                                    onCheckedChange={(checked) =>
                                      handleCheckboxChange("medicalConditions", condition, checked as boolean)
                                    }
                                  />
                                  <Label htmlFor={condition.toLowerCase().replace(/\s+/g, "-")} className="font-normal">
                                    {condition}
                                  </Label>
                                </div>
                              ))}
                            </div>
                            <input
                              type="hidden"
                              name="medicalConditions"
                              value={formData.medicalConditions.join(", ")}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="medications">
                              Are you currently taking any medications or supplements?
                            </Label>
                            <Textarea
                              id="medications"
                              name="medications"
                              value={formData.medications}
                              onChange={handleInputChange}
                              placeholder="Please list any medications or supplements you take regularly"
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="allergies">Do you have any food allergies or intolerances?</Label>
                            <Textarea
                              id="allergies"
                              name="allergies"
                              value={formData.allergies}
                              onChange={handleInputChange}
                              placeholder="Please list any food allergies or intolerances"
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-6"
                          >
                            Previous
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Lifestyle Information */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-gray-900 mb-2">Lifestyle Information</h2>
                          <p className="text-gray-600 mb-6">Tell us about your daily habits and lifestyle.</p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>What type of diet do you currently follow?</Label>
                            <RadioGroup
                              value={formData.dietType}
                              onValueChange={(value) => handleRadioChange("dietType", value)}
                            >
                              {[
                                "Standard American Diet",
                                "Vegetarian",
                                "Vegan",
                                "Paleo",
                                "Keto/Low-carb",
                                "Mediterranean",
                                "Gluten-free",
                                "Other",
                              ].map((diet) => (
                                <div key={diet} className="flex items-center space-x-2 py-1">
                                  <RadioGroupItem
                                    value={diet.toLowerCase().replace(/\s+/g, "-")}
                                    id={diet.toLowerCase().replace(/\s+/g, "-")}
                                  />
                                  <Label htmlFor={diet.toLowerCase().replace(/\s+/g, "-")} className="font-normal">
                                    {diet}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                            <input type="hidden" name="dietType" value={formData.dietType} />
                          </div>

                          <div className="space-y-2">
                            <Label>How would you describe your activity level?</Label>
                            <RadioGroup
                              value={formData.activityLevel}
                              onValueChange={(value) => handleRadioChange("activityLevel", value)}
                            >
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="sedentary" id="sedentary" />
                                <Label htmlFor="sedentary" className="font-normal">
                                  Sedentary (little to no exercise)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="lightly-active" id="lightly-active" />
                                <Label htmlFor="lightly-active" className="font-normal">
                                  Lightly Active (light exercise 1-3 days/week)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="moderately-active" id="moderately-active" />
                                <Label htmlFor="moderately-active" className="font-normal">
                                  Moderately Active (moderate exercise 3-5 days/week)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="very-active" id="very-active" />
                                <Label htmlFor="very-active" className="font-normal">
                                  Very Active (intense exercise 6-7 days/week)
                                </Label>
                              </div>
                            </RadioGroup>
                            <input type="hidden" name="activityLevel" value={formData.activityLevel} />
                          </div>

                          <div className="space-y-2">
                            <Label>How would you rate your sleep quality?</Label>
                            <RadioGroup
                              value={formData.sleepQuality}
                              onValueChange={(value) => handleRadioChange("sleepQuality", value)}
                            >
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="excellent" id="sleep-excellent" />
                                <Label htmlFor="sleep-excellent" className="font-normal">
                                  Excellent (7-9 hours, wake refreshed)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="good" id="sleep-good" />
                                <Label htmlFor="sleep-good" className="font-normal">
                                  Good (6-7 hours, generally rested)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="fair" id="sleep-fair" />
                                <Label htmlFor="sleep-fair" className="font-normal">
                                  Fair (5-6 hours, sometimes tired)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="poor" id="sleep-poor" />
                                <Label htmlFor="sleep-poor" className="font-normal">
                                  Poor (less than 5 hours or very disrupted)
                                </Label>
                              </div>
                            </RadioGroup>
                            <input type="hidden" name="sleepQuality" value={formData.sleepQuality} />
                          </div>

                          <div className="space-y-2">
                            <Label>How would you rate your stress level?</Label>
                            <RadioGroup
                              value={formData.stressLevel}
                              onValueChange={(value) => handleRadioChange("stressLevel", value)}
                            >
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="low" id="stress-low" />
                                <Label htmlFor="stress-low" className="font-normal">
                                  Low (rarely feel stressed)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="moderate" id="stress-moderate" />
                                <Label htmlFor="stress-moderate" className="font-normal">
                                  Moderate (occasionally stressed)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="high" id="stress-high" />
                                <Label htmlFor="stress-high" className="font-normal">
                                  High (frequently stressed)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="very-high" id="stress-very-high" />
                                <Label htmlFor="stress-very-high" className="font-normal">
                                  Very High (constantly stressed)
                                </Label>
                              </div>
                            </RadioGroup>
                            <input type="hidden" name="stressLevel" value={formData.stressLevel} />
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-6"
                          >
                            Previous
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Goals and Additional Information */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-gray-900 mb-2">
                            Goals & Additional Information
                          </h2>
                          <p className="text-gray-600 mb-6">
                            Tell us about your health goals and any additional information.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>What are your health goals? (Select all that apply)</Label>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Weight loss",
                                "Muscle gain",
                                "Increased energy",
                                "Better sleep",
                                "Stress reduction",
                                "Improved digestion",
                                "Better mental clarity",
                                "Disease prevention",
                                "Hormone balance",
                                "Overall wellness",
                              ].map((goal) => (
                                <div key={goal} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={goal.toLowerCase().replace(/\s+/g, "-")}
                                    checked={formData.healthGoals.includes(goal)}
                                    onCheckedChange={(checked) =>
                                      handleCheckboxChange("healthGoals", goal, checked as boolean)
                                    }
                                  />
                                  <Label htmlFor={goal.toLowerCase().replace(/\s+/g, "-")} className="font-normal">
                                    {goal}
                                  </Label>
                                </div>
                              ))}
                            </div>
                            <input type="hidden" name="healthGoals" value={formData.healthGoals.join(", ")} />
                          </div>

                          <div className="space-y-2">
                            <Label>What is your timeframe for achieving your health goals?</Label>
                            <RadioGroup
                              value={formData.timeframe}
                              onValueChange={(value) => handleRadioChange("timeframe", value)}
                            >
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="1-3-months" id="1-3-months" />
                                <Label htmlFor="1-3-months" className="font-normal">
                                  1-3 months
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="3-6-months" id="3-6-months" />
                                <Label htmlFor="3-6-months" className="font-normal">
                                  3-6 months
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="6-12-months" id="6-12-months" />
                                <Label htmlFor="6-12-months" className="font-normal">
                                  6-12 months
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="ongoing" id="ongoing" />
                                <Label htmlFor="ongoing" className="font-normal">
                                  Ongoing/Maintenance
                                </Label>
                              </div>
                            </RadioGroup>
                            <input type="hidden" name="timeframe" value={formData.timeframe} />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="additionalInfo">Is there anything else you'd like us to know?</Label>
                            <Textarea
                              id="additionalInfo"
                              name="additionalInfo"
                              value={formData.additionalInfo}
                              onChange={handleInputChange}
                              placeholder="Please share any additional information that might be helpful"
                              className="min-h-[120px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>How did you hear about NxHealth Solutions?</Label>
                            <RadioGroup
                              value={formData.heardFrom}
                              onValueChange={(value) => handleRadioChange("heardFrom", value)}
                            >
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="search" id="search" />
                                <Label htmlFor="search" className="font-normal">
                                  Search Engine
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="social-media" id="social-media" />
                                <Label htmlFor="social-media" className="font-normal">
                                  Social Media
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="friend" id="friend" />
                                <Label htmlFor="friend" className="font-normal">
                                  Friend or Family
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="healthcare-provider" id="healthcare-provider" />
                                <Label htmlFor="healthcare-provider" className="font-normal">
                                  Healthcare Provider
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="other" id="other-source" />
                                <Label htmlFor="other-source" className="font-normal">
                                  Other
                                </Label>
                              </div>
                            </RadioGroup>
                            <input type="hidden" name="heardFrom" value={formData.heardFrom} />
                          </div>

                          <div className="space-y-2">
                            <Label>How would you prefer to be contacted?</Label>
                            <RadioGroup
                              value={formData.preferredContact}
                              onValueChange={(value) => handleRadioChange("preferredContact", value)}
                            >
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="email" id="contact-email" />
                                <Label htmlFor="contact-email" className="font-normal">
                                  Email
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="phone" id="contact-phone" />
                                <Label htmlFor="contact-phone" className="font-normal">
                                  Phone
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="text" id="contact-text" />
                                <Label htmlFor="contact-text" className="font-normal">
                                  Text Message
                                </Label>
                              </div>
                            </RadioGroup>
                            <input type="hidden" name="preferredContact" value={formData.preferredContact} />
                          </div>

                          <div className="pt-4">
                            <div className="bg-green-50 p-4 rounded-lg mb-6">
                              <p className="text-sm text-gray-700">
                                By submitting this form, you agree to our{" "}
                                <Link href="/privacy" className="text-green-600 hover:underline">
                                  Privacy Policy
                                </Link>{" "}
                                and consent to being contacted by NxHealth Solutions regarding your health assessment
                                and our services.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-6"
                          >
                            Previous
                          </Button>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Submitting...
                              </span>
                            ) : (
                              "Submit Assessment"
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
