"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Dna } from "lucide-react"

// Amino acid data (mg per 100g)
const proteinFoods = {
  quinoa: {
    name: "Quinoa",
    category: "Grain",
    protein: 4.4,
    complete: true,
    aminoAcids: {
      histidine: 107,
      isoleucine: 135,
      leucine: 239,
      lysine: 239,
      methionine: 83,
      phenylalanine: 158,
      threonine: 148,
      tryptophan: 49,
      valine: 166,
    },
  },
  lentils: {
    name: "Lentils",
    category: "Legume",
    protein: 9.0,
    complete: false,
    aminoAcids: {
      histidine: 275,
      isoleucine: 398,
      leucine: 716,
      lysine: 637,
      methionine: 77,
      phenylalanine: 481,
      threonine: 362,
      tryptophan: 95,
      valine: 473,
    },
  },
  chickpeas: {
    name: "Chickpeas",
    category: "Legume",
    protein: 8.9,
    complete: false,
    aminoAcids: {
      histidine: 253,
      isoleucine: 349,
      leucine: 611,
      lysine: 578,
      methionine: 120,
      phenylalanine: 458,
      threonine: 302,
      tryptophan: 81,
      valine: 355,
    },
  },
  tofu: {
    name: "Tofu (Firm)",
    category: "Soy",
    protein: 8.0,
    complete: true,
    aminoAcids: {
      histidine: 204,
      isoleucine: 352,
      leucine: 567,
      lysine: 469,
      methionine: 97,
      phenylalanine: 368,
      threonine: 302,
      tryptophan: 108,
      valine: 371,
    },
  },
  tempeh: {
    name: "Tempeh",
    category: "Soy",
    protein: 19.0,
    complete: true,
    aminoAcids: {
      histidine: 466,
      isoleucine: 912,
      leucine: 1500,
      lysine: 909,
      methionine: 231,
      phenylalanine: 919,
      threonine: 784,
      tryptophan: 265,
      valine: 940,
    },
  },
  hemp_seeds: {
    name: "Hemp Seeds",
    category: "Seed",
    protein: 31.6,
    complete: true,
    aminoAcids: {
      histidine: 887,
      isoleucine: 1217,
      leucine: 2136,
      lysine: 1218,
      methionine: 777,
      phenylalanine: 1443,
      threonine: 1085,
      tryptophan: 369,
      valine: 1603,
    },
  },
  pumpkin_seeds: {
    name: "Pumpkin Seeds",
    category: "Seed",
    protein: 30.2,
    complete: false,
    aminoAcids: {
      histidine: 762,
      isoleucine: 1281,
      leucine: 2419,
      lysine: 1236,
      methionine: 603,
      phenylalanine: 1684,
      threonine: 998,
      tryptophan: 576,
      valine: 1579,
    },
  },
  brown_rice: {
    name: "Brown Rice",
    category: "Grain",
    protein: 2.6,
    complete: false,
    aminoAcids: {
      histidine: 63,
      isoleucine: 110,
      leucine: 213,
      lysine: 95,
      methionine: 60,
      phenylalanine: 138,
      threonine: 94,
      tryptophan: 32,
      valine: 152,
    },
  },
}

const essentialAminoAcids = [
  { key: "histidine", name: "Histidine", dailyNeed: 14 },
  { key: "isoleucine", name: "Isoleucine", dailyNeed: 19 },
  { key: "leucine", name: "Leucine", dailyNeed: 42 },
  { key: "lysine", name: "Lysine", dailyNeed: 38 },
  { key: "methionine", name: "Methionine", dailyNeed: 19 },
  { key: "phenylalanine", name: "Phenylalanine", dailyNeed: 33 },
  { key: "threonine", name: "Threonine", dailyNeed: 20 },
  { key: "tryptophan", name: "Tryptophan", dailyNeed: 5 },
  { key: "valine", name: "Valine", dailyNeed: 24 },
]

export default function AminoAcidProfilePage() {
  const [selectedFood, setSelectedFood] = useState<keyof typeof proteinFoods>("quinoa")

  const food = proteinFoods[selectedFood]
  const maxValue = Math.max(...Object.values(food.aminoAcids))

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-background">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/resources"
          className="inline-flex items-center text-brand hover:text-brand-hover mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Resources
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-600 rounded-full mb-6">
              <Dna className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-serif font-light text-brand-dark mb-4">Amino Acid Profile</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the essential amino acid content of plant-based protein sources. Understanding amino acid profiles
              helps you combine foods for complete protein nutrition.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select a Protein Source</CardTitle>
              <CardDescription>View the amino acid breakdown for different plant-based foods</CardDescription>
            </CardHeader>
            <CardContent>
              <Select
                value={selectedFood}
                onValueChange={(value) => setSelectedFood(value as keyof typeof proteinFoods)}
              >
                <SelectTrigger className="max-w-md">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(proteinFoods).map(([key, data]) => (
                    <SelectItem key={key} value={key}>
                      {data.name} ({data.category})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-brand-lighter border-0">
              <CardContent className="pt-6 text-center">
                <span className="text-3xl font-bold text-brand">{food.protein}g</span>
                <span className="block text-muted-foreground">Protein per 100g</span>
              </CardContent>
            </Card>
            <Card className="bg-brand-lighter border-0">
              <CardContent className="pt-6 text-center">
                <span className="text-3xl font-bold text-brand">{food.category}</span>
                <span className="block text-muted-foreground">Food Category</span>
              </CardContent>
            </Card>
            <Card className={`border-0 ${food.complete ? "bg-green-100" : "bg-amber-100"}`}>
              <CardContent className="pt-6 text-center">
                <span className={`text-3xl font-bold ${food.complete ? "text-green-700" : "text-amber-700"}`}>
                  {food.complete ? "Yes" : "No"}
                </span>
                <span className="block text-muted-foreground">Complete Protein</span>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Essential Amino Acids in {food.name}</CardTitle>
              <CardDescription>Milligrams per 100g serving</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {essentialAminoAcids.map((amino) => {
                  const value = food.aminoAcids[amino.key as keyof typeof food.aminoAcids]
                  const percentage = (value / maxValue) * 100

                  return (
                    <div key={amino.key}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{amino.name}</span>
                        <span className="text-brand font-semibold">{value} mg</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-rose-50 border-0">
              <CardHeader>
                <CardTitle className="text-lg">What Are Essential Amino Acids?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Essential amino acids are the building blocks of protein that your body cannot produce on its own.
                  There are 9 essential amino acids that must come from your diet.
                </p>
                <p className="text-muted-foreground text-sm">
                  These include histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine,
                  tryptophan, and valine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-0">
              <CardHeader>
                <CardTitle className="text-lg">Complete vs Incomplete Proteins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete proteins contain all 9 essential amino acids in adequate amounts. Plant-based complete
                  proteins include quinoa, soy products, hemp seeds, and chia seeds.
                </p>
                <p className="text-muted-foreground text-sm">
                  Incomplete proteins can be combined throughout the day (like rice and beans) to get all essential
                  amino acids.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="font-semibold mb-3">Plant-Based Protein Combining Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Grains + Legumes = Complete protein (e.g., rice and beans, hummus with pita)</li>
              <li>• Seeds + Legumes = Complete protein (e.g., chickpea salad with pumpkin seeds)</li>
              <li>• You don't need to combine at every meal - just eat a variety throughout the day</li>
              <li>• Soy products (tofu, tempeh, edamame) are complete proteins on their own</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
