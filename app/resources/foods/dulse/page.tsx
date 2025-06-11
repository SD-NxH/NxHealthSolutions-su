import type { Metadata } from "next"
import DulseClientPage from "./DulseClientPage"

export const metadata: Metadata = {
  title: "Dulse - Ocean's Superfood | NxHealth",
  description:
    "Discover dulse, the nutrient-rich red seaweed packed with minerals, vitamins, and unique ocean flavors. Learn about its health benefits and culinary uses.",
  keywords:
    "dulse, red seaweed, sea vegetables, ocean superfood, minerals, iodine, potassium, iron, vitamin B12, sustainable nutrition",
  openGraph: {
    title: "Dulse - Ocean's Superfood | NxHealth",
    description:
      "Discover dulse, the nutrient-rich red seaweed packed with minerals, vitamins, and unique ocean flavors.",
    images: ["/crimson-seaweed-harvest.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulse - Ocean's Superfood | NxHealth",
    description:
      "Discover dulse, the nutrient-rich red seaweed packed with minerals, vitamins, and unique ocean flavors.",
    images: ["/crimson-seaweed-harvest.png"],
  },
}

export default function DulsePage() {
  return <DulseClientPage />
}
