import type { Metadata } from "next"
import CucumbersClientPage from "./CucumbersClientPage"

export const metadata: Metadata = {
  title: "Cucumbers - Hydrating Superfood | NxHealth",
  description:
    "Discover the refreshing health benefits of cucumbers. Learn about their hydrating properties, nutritional content, and how they support skin health and weight management.",
  keywords: "cucumbers, hydration, skin health, weight loss, nutrition, antioxidants, vitamin K, NxHealth",
  openGraph: {
    title: "Cucumbers - Hydrating Superfood | NxHealth",
    description: "Discover the refreshing health benefits of cucumbers and their hydrating properties.",
    images: [
      {
        url: "/fresh-cucumbers-pile.jpeg",
        width: 1200,
        height: 630,
        alt: "Fresh cucumbers",
      },
    ],
  },
}

export default function CucumbersPage() {
  return <CucumbersClientPage />
}
