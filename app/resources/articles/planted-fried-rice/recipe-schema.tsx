"use client"
import Script from "next/script"

interface RecipeSchemaProps {
  name: string
  description: string
  prepTime: string
  cookTime: string
  totalTime: string
  recipeYield: string
  recipeIngredients: string[]
  recipeInstructions: {
    name: string
    text: string
  }[]
  image: string
  datePublished: string
  author: {
    name: string
    url?: string
  }
}

export default function RecipeSchema({
  name,
  description,
  prepTime,
  cookTime,
  totalTime,
  recipeYield,
  recipeIngredients,
  recipeInstructions,
  image,
  datePublished,
  author,
}: RecipeSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name,
    description,
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeIngredient: recipeIngredients,
    recipeInstructions: recipeInstructions.map((instruction) => ({
      "@type": "HowToStep",
      name: instruction.name,
      text: instruction.text,
    })),
    image,
    datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
  }

  return (
    <Script id="recipe-schema" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  )
}
