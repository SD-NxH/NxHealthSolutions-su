import type { Metadata } from "next"
import CollardGreensClientPage from "./CollardGreensClientPage"

export const metadata: Metadata = {
  title: "Collard Greens - Vitamin K Powerhouse | NxHealth",
  description:
    "Learn about the health benefits and nutritional value of collard greens, a nutrient-dense leafy green vegetable packed with vitamin K, calcium, and antioxidants.",
  openGraph: {
    title: "Collard Greens - Vitamin K Powerhouse | NxHealth",
    description:
      "Learn about the health benefits and nutritional value of collard greens, a nutrient-dense leafy green vegetable.",
    images: [
      {
        url: "/Collard Greens.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh collard greens with prominent white veins",
      },
    ],
  },
}

export default function CollardGreensPage() {
  return <CollardGreensClientPage />
}
