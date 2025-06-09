import type { Metadata } from "next"
import CucumberClientPage from "./CucumberClientPage"

export const metadata: Metadata = {
  title: "Cucumber - Complete Nutrition Guide | NxHealth",
  description:
    "Discover the refreshing health benefits of cucumbers. Learn about their hydrating properties, nutritional content, and how they support skin health and weight management.",
  keywords: "cucumber, hydration, skin health, weight loss, nutrition, antioxidants, vitamin K, NxHealth",
}

export default function CucumberPage() {
  return <CucumberClientPage />
}
