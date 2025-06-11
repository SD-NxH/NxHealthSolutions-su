"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Heart, Shield, Leaf, Users, BookOpen, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UnderstandingBreastCancerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/resources/articles"
            className="inline-flex items-center text-pink-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-pink-100 text-pink-800 text-sm px-3 py-1">Health Education</Badge>
              <Badge className="bg-rose-100 text-rose-800 text-sm px-3 py-1">Cancer Prevention</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">Understanding Breast Cancer</h1>

            <p className="text-xl text-pink-100 mb-8 leading-relaxed max-w-3xl">
              A comprehensive guide to understanding breast cancer, including risk factors, prevention strategies, and
              the role of nutrition in supporting breast health and recovery.
            </p>

            <div className="flex items-center gap-6 text-pink-100">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Health & Wellness</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Breast cancer is one of the most common cancers affecting women worldwide, though it can also occur in
                men. Understanding the disease, its risk factors, and prevention strategies is crucial for maintaining
                breast health and catching any potential issues early.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                While genetics play a role in breast cancer risk, lifestyle factors including diet, exercise, and
                environmental exposures also significantly impact your risk. The good news is that many of these factors
                are within your control.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Key Facts */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-8 text-center">
            Key Facts About Breast Cancer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-pink-100 hover:shadow-lg transition-shadow text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-3 bg-pink-100 rounded-full w-fit mb-3">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">1 in 8 Women</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Will develop breast cancer in their lifetime, making early detection and prevention crucial.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-3 bg-pink-100 rounded-full w-fit mb-3">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">90% Survival Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  When caught early (stage 0 or 1), breast cancer has a 5-year survival rate of over 90%.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-3 bg-pink-100 rounded-full w-fit mb-3">
                  <Shield className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Risk Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Up to 30% of breast cancers may be preventable through lifestyle modifications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-3 bg-pink-100 rounded-full w-fit mb-3">
                  <Leaf className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Nutrition Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Plant-based diets rich in antioxidants may help reduce breast cancer risk and support recovery.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Risk Factors */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-8 text-center">Understanding Risk Factors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-100 bg-red-50">
              <CardHeader>
                <CardTitle className="text-xl text-red-800 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Non-Modifiable Risk Factors
                </CardTitle>
                <CardDescription className="text-red-700">
                  Factors you cannot change but should be aware of
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-red-800">Age</h4>
                    <p className="text-red-700 text-sm">Risk increases with age, especially after 50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-red-800">Family History</h4>
                    <p className="text-red-700 text-sm">Having close relatives with breast or ovarian cancer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-red-800">Genetic Mutations</h4>
                    <p className="text-red-700 text-sm">BRCA1 and BRCA2 gene mutations significantly increase risk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-red-800">Gender</h4>
                    <p className="text-red-700 text-sm">Being female is the strongest risk factor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Modifiable Risk Factors
                </CardTitle>
                <CardDescription className="text-green-700">
                  Lifestyle factors you can control to reduce risk
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-green-800">Diet & Nutrition</h4>
                    <p className="text-green-700 text-sm">High-fat, low-fiber diets may increase risk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-green-800">Physical Activity</h4>
                    <p className="text-green-700 text-sm">Sedentary lifestyle increases risk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-green-800">Alcohol Consumption</h4>
                    <p className="text-green-700 text-sm">Even moderate alcohol intake increases risk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-green-800">Body Weight</h4>
                    <p className="text-green-700 text-sm">Obesity, especially after menopause, increases risk</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Prevention Strategies */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-8 text-center">Prevention Strategies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Nutrition Focus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Eat plenty of fruits and vegetables</li>
                  <li>• Choose whole grains over refined</li>
                  <li>• Include omega-3 rich foods</li>
                  <li>• Limit processed and red meat</li>
                  <li>• Reduce sugar and refined foods</li>
                  <li>• Consider soy foods (controversial but likely beneficial)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Heart className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Lifestyle Changes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Maintain a healthy weight</li>
                  <li>• Exercise regularly (150+ min/week)</li>
                  <li>• Limit alcohol consumption</li>
                  <li>• Don't smoke</li>
                  <li>• Manage stress effectively</li>
                  <li>• Get adequate sleep</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Early Detection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Regular self-examinations</li>
                  <li>• Annual clinical breast exams</li>
                  <li>• Mammograms as recommended</li>
                  <li>• Know your family history</li>
                  <li>• Consider genetic counseling if high risk</li>
                  <li>• Report changes to your doctor</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Nutritional Support */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-8 text-center">
            Foods That Support Breast Health
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-green-100 text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-3 bg-green-100 rounded-full w-fit mb-3">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Cruciferous Vegetables</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Broccoli, cauliflower, kale, and Brussels sprouts contain compounds that may help prevent cancer.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-purple-100 text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-3 bg-purple-100 rounded-full w-fit mb-3">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Berries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Blueberries, strawberries, and raspberries are rich in antioxidants that fight free radicals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-100 text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-3 bg-orange-100 rounded-full w-fit mb-3">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Omega-3 Rich Foods</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Fatty fish, walnuts, flaxseeds, and chia seeds provide anti-inflammatory omega-3 fatty acids.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-yellow-100 text-center">
              <CardHeader className="pb-3">
                <div className="mx-auto p-3 bg-yellow-100 rounded-full w-fit mb-3">
                  <Leaf className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Green Tea</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  Contains polyphenols and catechins that may have protective effects against breast cancer.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-pink-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">Take Action for Your Health</h2>
            <p className="text-gray-600 mb-6">
              Knowledge is power when it comes to breast health. Consult with healthcare professionals about your
              individual risk factors and develop a personalized prevention plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/articles"
                className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                More Health Articles
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full transition-colors"
              >
                Get Professional Guidance
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
