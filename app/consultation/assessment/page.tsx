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

export default function ConsultationAssessmentPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    height: "",
    weight: "",

    // Health History
    medicalConditions: [] as string[],
    medications: "",
    allergies: "",
    familyHistory: "",
    previousTreatments: "",

    // Current Health Status
    primaryConcern: "",
    secondaryConcerns: [] as string[],
    painAreas: [] as string[],
    painLevel: "",
    painFrequency: "",
    symptomsStarted: "",
    symptomsTriggers: "",

    // Lifestyle Information
    dietType: "",
    mealFrequency: "",
    waterIntake: "",
    alcoholConsumption: "",
    caffeineConsumption: "",
    tobaccoUse: "",
    activityLevel: "",
    exerciseFrequency: "",
    exerciseTypes: [] as string[],
    sleepQuality: "",
    sleepHours: "",
    stressLevel: "",
    stressManagement: [] as string[],

    // Nutrition Assessment
    typicalBreakfast: "",
    typicalLunch: "",
    typicalDinner: "",
    typicalSnacks: "",
    foodDislikes: "",
    foodCravings: "",
    dietaryRestrictions: [] as string[],
    supplementsVitamins: "",

    // Goals and Expectations
    healthGoals: [] as string[],
    priorityGoal: "",
    timeframe: "",
    motivationLevel: "",
    barriers: "",
    supportSystem: "",

    // Additional Information
    additionalInfo: "",
    heardFrom: "",
    preferredContact: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const headerRef = useRef(null)
  const formRef = useRef(null)

  const isFormInView = useInView(formRef, { once: true, amount: 0.1 })

  const totalSteps = 7

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

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Log form data to console (in a real app, you'd send this to your backend)
    console.log(formData)

    setIsSubmitting(false)
    setSubmitted(true)

    toast({
      title: "Assessment Submitted",
      description:
        "Thank you for completing your health assessment. We'll be in touch soon with your personalized plan!",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative w-full py-16 md:py-24 bg-gradient-to-b from-brand-lighter to-background"
      >
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
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-brand mb-4">
              Comprehensive Health Assessment
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please complete this detailed assessment to help us create your personalized health plan.
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
                          ? "bg-brand text-white"
                          : step === index + 1
                            ? "bg-brand-lighter text-brand border-2 border-brand"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div
                    className="bg-brand h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Step {step} of {totalSteps}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-12 bg-background flex-grow">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-brand"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-serif font-light text-foreground mb-4">
                      Thank You for Your Submission!
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      We've received your comprehensive health assessment. Our team will carefully review your
                      information and create a personalized health plan tailored to your specific needs and goals.
                    </p>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      You can expect to receive your plan within 3-5 business days. We'll send it to the email address
                      you provided.
                    </p>
                    <div className="space-y-4">
                      <Link href="/">
                        <Button className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8">
                          Return to Homepage
                        </Button>
                      </Link>
                      <div>
                        <Link href="/resources" className="text-brand hover:underline block mt-4">
                          Explore our health resources while you wait
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-foreground mb-2">Personal Information</h2>
                          <p className="text-muted-foreground mb-6">
                            Please provide your basic information to get started.
                          </p>
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
                            </div>
                          </div>

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
                        </div>

                        <div className="pt-4 flex justify-end">
                          <Button
                            onClick={nextStep}
                            className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Health History */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-foreground mb-2">Health History</h2>
                          <p className="text-muted-foreground mb-6">
                            Please provide information about your health history.
                          </p>
                        </div>

                        <div className="space-y-4">
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
                                "Respiratory condition",
                                "Cancer",
                                "Arthritis",
                                "Osteoporosis",
                                "Kidney disease",
                                "Liver disease",
                                "Neurological disorder",
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
                              placeholder="Please list any medications or supplements you take regularly, including dosages if known"
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="allergies">Do you have any allergies or intolerances?</Label>
                            <Textarea
                              id="allergies"
                              name="allergies"
                              value={formData.allergies}
                              onChange={handleInputChange}
                              placeholder="Please list any food, medication, or environmental allergies or intolerances"
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="familyHistory">Family Health History</Label>
                            <Textarea
                              id="familyHistory"
                              name="familyHistory"
                              value={formData.familyHistory}
                              onChange={handleInputChange}
                              placeholder="Please describe any significant health conditions that run in your family"
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="previousTreatments">Previous Treatments or Therapies</Label>
                            <Textarea
                              id="previousTreatments"
                              name="previousTreatments"
                              value={formData.previousTreatments}
                              onChange={handleInputChange}
                              placeholder="Please describe any previous treatments, therapies, or approaches you've tried for your health concerns"
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            variant="outline"
                            onClick={prevStep}
                            className="border-brand text-brand hover:bg-brand-lighter rounded-full px-6 bg-transparent"
                          >
                            Previous
                          </Button>
                          <Button
                            onClick={nextStep}
                            className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Current Health Status */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-foreground mb-2">Current Health Status</h2>
                          <p className="text-muted-foreground mb-6">
                            Tell us about your current health concerns and symptoms.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="primaryConcern">What is your primary health concern?</Label>
                            <Textarea
                              id="primaryConcern"
                              name="primaryConcern"
                              value={formData.primaryConcern}
                              onChange={handleInputChange}
                              placeholder="Please describe your main health concern in detail"
                              className="min-h-[80px]"
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
                                "Weight management",
                                "Headaches/migraines",
                                "Allergies",
                                "Inflammation",
                                "Immune function",
                                "Cognitive function",
                                "Mood disorders",
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
                          </div>

                          <div className="space-y-2">
                            <Label>Do you experience pain in any of these areas? (Select all that apply)</Label>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Head",
                                "Neck",
                                "Shoulders",
                                "Back (upper)",
                                "Back (lower)",
                                "Chest",
                                "Abdomen",
                                "Hips",
                                "Knees",
                                "Feet",
                                "Hands/wrists",
                                "Joints (general)",
                                "None",
                              ].map((area) => (
                                <div key={area} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={area.toLowerCase().replace(/\s+/g, "-")}
                                    checked={formData.painAreas.includes(area)}
                                    onCheckedChange={(checked) =>
                                      handleCheckboxChange("painAreas", area, checked as boolean)
                                    }
                                  />
                                  <Label htmlFor={area.toLowerCase().replace(/\s+/g, "-")} className="font-normal">
                                    {area}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>If you experience pain, how would you rate it on average?</Label>
                            <RadioGroup
                              value={formData.painLevel}
                              onValueChange={(value) => handleRadioChange("painLevel", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="none" id="pain-none" />
                                <Label htmlFor="pain-none" className="font-normal">
                                  No pain
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="mild" id="pain-mild" />
                                <Label htmlFor="pain-mild" className="font-normal">
                                  Mild (1-3 out of 10)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="moderate" id="pain-moderate" />
                                <Label htmlFor="pain-moderate" className="font-normal">
                                  Moderate (4-6 out of 10)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="severe" id="pain-severe" />
                                <Label htmlFor="pain-severe" className="font-normal">
                                  Severe (7-10 out of 10)
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label>How often do you experience your symptoms?</Label>
                            <RadioGroup
                              value={formData.painFrequency}
                              onValueChange={(value) => handleRadioChange("painFrequency", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="rarely" id="freq-rarely" />
                                <Label htmlFor="freq-rarely" className="font-normal">
                                  Rarely (a few times a month)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="occasionally" id="freq-occasionally" />
                                <Label htmlFor="freq-occasionally" className="font-normal">
                                  Occasionally (a few times a week)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="frequently" id="freq-frequently" />
                                <Label htmlFor="freq-frequently" className="font-normal">
                                  Frequently (daily)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="constantly" id="freq-constantly" />
                                <Label htmlFor="freq-constantly" className="font-normal">
                                  Constantly (throughout the day)
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="symptomsStarted">When did your symptoms first begin?</Label>
                            <Input
                              id="symptomsStarted"
                              name="symptomsStarted"
                              value={formData.symptomsStarted}
                              onChange={handleInputChange}
                              placeholder="e.g., 6 months ago, 2 years ago, since childhood"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="symptomsTriggers">
                              Are there any specific triggers that worsen your symptoms?
                            </Label>
                            <Textarea
                              id="symptomsTriggers"
                              name="symptomsTriggers"
                              value={formData.symptomsTriggers}
                              onChange={handleInputChange}
                              placeholder="e.g., certain foods, stress, physical activity, weather changes"
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            variant="outline"
                            onClick={prevStep}
                            className="border-brand text-brand hover:bg-brand-lighter rounded-full px-6 bg-transparent"
                          >
                            Previous
                          </Button>
                          <Button
                            onClick={nextStep}
                            className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Lifestyle Information */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-foreground mb-2">Lifestyle Information</h2>
                          <p className="text-muted-foreground mb-6">Tell us about your daily habits and lifestyle.</p>
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
                                "Dairy-free",
                                "Pescatarian",
                                "Intermittent fasting",
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
                          </div>

                          <div className="space-y-2">
                            <Label>How many meals do you typically eat per day?</Label>
                            <RadioGroup
                              value={formData.mealFrequency}
                              onValueChange={(value) => handleRadioChange("mealFrequency", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1-2" id="meals-1-2" />
                                <Label htmlFor="meals-1-2" className="font-normal">
                                  1-2 meals
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="3" id="meals-3" />
                                <Label htmlFor="meals-3" className="font-normal">
                                  3 meals
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="3-plus-snacks" id="meals-3-plus-snacks" />
                                <Label htmlFor="meals-3-plus-snacks" className="font-normal">
                                  3 meals plus snacks
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="5-plus" id="meals-5-plus" />
                                <Label htmlFor="meals-5-plus" className="font-normal">
                                  5+ small meals/snacks
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="irregular" id="meals-irregular" />
                                <Label htmlFor="meals-irregular" className="font-normal">
                                  Irregular/varies significantly
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label>How much water do you drink daily?</Label>
                            <RadioGroup
                              value={formData.waterIntake}
                              onValueChange={(value) => handleRadioChange("waterIntake", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="less-than-2" id="water-less-than-2" />
                                <Label htmlFor="water-less-than-2" className="font-normal">
                                  Less than 2 cups
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="2-4" id="water-2-4" />
                                <Label htmlFor="water-2-4" className="font-normal">
                                  2-4 cups
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="5-7" id="water-5-7" />
                                <Label htmlFor="water-5-7" className="font-normal">
                                  5-7 cups
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="8-plus" id="water-8-plus" />
                                <Label htmlFor="water-8-plus" className="font-normal">
                                  8+ cups
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label>How would you describe your alcohol consumption?</Label>
                            <RadioGroup
                              value={formData.alcoholConsumption}
                              onValueChange={(value) => handleRadioChange("alcoholConsumption", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="none" id="alcohol-none" />
                                <Label htmlFor="alcohol-none" className="font-normal">
                                  None
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="occasional" id="alcohol-occasional" />
                                <Label htmlFor="alcohol-occasional" className="font-normal">
                                  Occasional (1-2 drinks per week)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="moderate" id="alcohol-moderate" />
                                <Label htmlFor="alcohol-moderate" className="font-normal">
                                  Moderate (3-7 drinks per week)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="regular" id="alcohol-regular" />
                                <Label htmlFor="alcohol-regular" className="font-normal">
                                  Regular (1-2 drinks daily)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="heavy" id="alcohol-heavy" />
                                <Label htmlFor="alcohol-heavy" className="font-normal">
                                  Heavy (3+ drinks daily)
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label>How would you describe your caffeine consumption?</Label>
                            <RadioGroup
                              value={formData.caffeineConsumption}
                              onValueChange={(value) => handleRadioChange("caffeineConsumption", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="none" id="caffeine-none" />
                                <Label htmlFor="caffeine-none" className="font-normal">
                                  None
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="light" id="caffeine-light" />
                                <Label htmlFor="caffeine-light" className="font-normal">
                                  Light (1 cup per day)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="moderate" id="caffeine-moderate" />
                                <Label htmlFor="caffeine-moderate" className="font-normal">
                                  Moderate (2-3 cups per day)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="heavy" id="caffeine-heavy" />
                                <Label htmlFor="caffeine-heavy" className="font-normal">
                                  Heavy (4+ cups per day)
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label>Do you use tobacco products?</Label>
                            <RadioGroup
                              value={formData.tobaccoUse}
                              onValueChange={(value) => handleRadioChange("tobaccoUse", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="never" id="tobacco-never" />
                                <Label htmlFor="tobacco-never" className="font-normal">
                                  Never
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="former" id="tobacco-former" />
                                <Label htmlFor="tobacco-former" className="font-normal">
                                  Former user
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="occasional" id="tobacco-occasional" />
                                <Label htmlFor="tobacco-occasional" className="font-normal">
                                  Occasional user
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="regular" id="tobacco-regular" />
                                <Label htmlFor="tobacco-regular" className="font-normal">
                                  Regular user
                                </Label>
                              </div>
                            </RadioGroup>
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
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            variant="outline"
                            onClick={prevStep}
                            className="border-brand text-brand hover:bg-brand-lighter rounded-full px-6 bg-transparent"
                          >
                            Previous
                          </Button>
                          <Button
                            onClick={nextStep}
                            className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Nutrition Assessment */}
                    {step === 5 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-foreground mb-2">Nutrition Assessment</h2>
                          <p className="text-muted-foreground mb-6">
                            Tell us about your eating habits and preferences.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="typicalBreakfast">Describe your typical breakfast:</Label>
                            <Textarea
                              id="typicalBreakfast"
                              name="typicalBreakfast"
                              value={formData.typicalBreakfast}
                              onChange={handleInputChange}
                              placeholder="What do you usually eat for breakfast? Include portion sizes if possible."
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="typicalLunch">Describe your typical lunch:</Label>
                            <Textarea
                              id="typicalLunch"
                              name="typicalLunch"
                              value={formData.typicalLunch}
                              onChange={handleInputChange}
                              placeholder="What do you usually eat for lunch? Include portion sizes if possible."
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="typicalDinner">Describe your typical dinner:</Label>
                            <Textarea
                              id="typicalDinner"
                              name="typicalDinner"
                              value={formData.typicalDinner}
                              onChange={handleInputChange}
                              placeholder="What do you usually eat for dinner? Include portion sizes if possible."
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="typicalSnacks">Describe your typical snacks:</Label>
                            <Textarea
                              id="typicalSnacks"
                              name="typicalSnacks"
                              value={formData.typicalSnacks}
                              onChange={handleInputChange}
                              placeholder="What snacks do you typically eat throughout the day?"
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="foodDislikes">Are there any foods you dislike or avoid?</Label>
                            <Textarea
                              id="foodDislikes"
                              name="foodDislikes"
                              value={formData.foodDislikes}
                              onChange={handleInputChange}
                              placeholder="List any foods you dislike or intentionally avoid"
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="foodCravings">Do you experience food cravings? If so, for what?</Label>
                            <Textarea
                              id="foodCravings"
                              name="foodCravings"
                              value={formData.foodCravings}
                              onChange={handleInputChange}
                              placeholder="Describe any food cravings you experience and how often"
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Do you have any dietary restrictions? (Select all that apply)</Label>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Gluten-free",
                                "Dairy-free",
                                "Vegetarian",
                                "Vegan",
                                "Nut-free",
                                "Soy-free",
                                "Egg-free",
                                "Low-FODMAP",
                                "Kosher",
                                "Halal",
                                "Other",
                                "None",
                              ].map((restriction) => (
                                <div key={restriction} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={restriction.toLowerCase().replace(/\s+/g, "-")}
                                    checked={formData.dietaryRestrictions.includes(restriction)}
                                    onCheckedChange={(checked) =>
                                      handleCheckboxChange("dietaryRestrictions", restriction, checked as boolean)
                                    }
                                  />
                                  <Label
                                    htmlFor={restriction.toLowerCase().replace(/\s+/g, "-")}
                                    className="font-normal"
                                  >
                                    {restriction}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="supplementsVitamins">
                              What supplements or vitamins do you currently take?
                            </Label>
                            <Textarea
                              id="supplementsVitamins"
                              name="supplementsVitamins"
                              value={formData.supplementsVitamins}
                              onChange={handleInputChange}
                              placeholder="List any supplements or vitamins you take, including brand and dosage if known"
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            variant="outline"
                            onClick={prevStep}
                            className="border-brand text-brand hover:bg-brand-lighter rounded-full px-6 bg-transparent"
                          >
                            Previous
                          </Button>
                          <Button
                            onClick={nextStep}
                            className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 6: Goals and Expectations */}
                    {step === 6 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-foreground mb-2">
                            Goals and Expectations
                          </h2>
                          <p className="text-muted-foreground mb-6">
                            Tell us about your health goals and what you hope to achieve.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>What are your health goals? (Select all that apply)</Label>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                "Weight loss",
                                "Weight gain",
                                "Muscle gain",
                                "Increased energy",
                                "Better sleep",
                                "Stress reduction",
                                "Improved digestion",
                                "Better mental clarity",
                                "Disease prevention",
                                "Hormone balance",
                                "Pain reduction",
                                "Improved athletic performance",
                                "Better skin health",
                                "Reduced inflammation",
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
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="priorityGoal">What is your top priority health goal?</Label>
                            <Textarea
                              id="priorityGoal"
                              name="priorityGoal"
                              value={formData.priorityGoal}
                              onChange={handleInputChange}
                              placeholder="Describe your most important health goal in detail"
                              className="min-h-[80px]"
                            />
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
                          </div>

                          <div className="space-y-2">
                            <Label>How motivated are you to make changes to improve your health?</Label>
                            <RadioGroup
                              value={formData.motivationLevel}
                              onValueChange={(value) => handleRadioChange("motivationLevel", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="very-motivated" id="very-motivated" />
                                <Label htmlFor="very-motivated" className="font-normal">
                                  Very motivated (ready to make significant changes)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="somewhat-motivated" id="somewhat-motivated" />
                                <Label htmlFor="somewhat-motivated" className="font-normal">
                                  Somewhat motivated (willing to make moderate changes)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="slightly-motivated" id="slightly-motivated" />
                                <Label htmlFor="slightly-motivated" className="font-normal">
                                  Slightly motivated (willing to make small changes)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="not-motivated" id="not-motivated" />
                                <Label htmlFor="not-motivated" className="font-normal">
                                  Not very motivated (unsure about making changes)
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="barriers">
                              What barriers or challenges might prevent you from achieving your health goals?
                            </Label>
                            <Textarea
                              id="barriers"
                              name="barriers"
                              value={formData.barriers}
                              onChange={handleInputChange}
                              placeholder="e.g., time constraints, financial limitations, lack of support, etc."
                              className="min-h-[80px]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="supportSystem">
                              Do you have a support system to help you achieve your health goals?
                            </Label>
                            <Textarea
                              id="supportSystem"
                              name="supportSystem"
                              value={formData.supportSystem}
                              onChange={handleInputChange}
                              placeholder="Describe your support system (family, friends, health professionals, etc.)"
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            variant="outline"
                            onClick={prevStep}
                            className="border-brand text-brand hover:bg-brand-lighter rounded-full px-6 bg-transparent"
                          >
                            Previous
                          </Button>
                          <Button
                            onClick={nextStep}
                            className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 7: Additional Information */}
                    {step === 7 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-serif font-light text-foreground mb-2">
                            Additional Information
                          </h2>
                          <p className="text-muted-foreground mb-6">
                            Please provide any additional information that might be helpful for us to know.
                          </p>
                        </div>

                        <div className="space-y-4">
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
                          </div>

                          <div className="pt-4">
                            <div className="bg-brand-lighter p-4 rounded-lg mb-6">
                              <p className="text-sm text-muted-foreground">
                                By submitting this form, you agree to our{" "}
                                <Link href="/privacy" className="text-brand hover:underline">
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
                            variant="outline"
                            onClick={prevStep}
                            className="border-brand text-brand hover:bg-brand-lighter rounded-full px-6 bg-transparent"
                          >
                            Previous
                          </Button>
                          <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-brand hover:bg-brand-hover text-brand-foreground rounded-full px-8"
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
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
