import type { Metadata } from "next"
import DarkChocolateClientPage from "./DarkChocolateClientPage"

export const metadata: Metadata = {
  title: "Dark Chocolate: Health Benefits & Nutrition | NxHealth",
  description:
    "Discover the surprising health benefits of dark chocolate. Learn about antioxidants, heart health, and how to incorporate this delicious superfood into your diet.",
  keywords: "dark chocolate, health benefits, antioxidants, flavonoids, heart health, brain function, nutrition",
  openGraph: {
    title: "Dark Chocolate: A Delicious Path to Wellness",
    description:
      "Explore the science-backed health benefits of dark chocolate and learn how this indulgent treat can support your wellbeing.",
    images: [
      {
        url: "/dark-chocolate-still-life.png",
        width: 1200,
        height: 630,
        alt: "Pieces of dark chocolate with cacao beans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Chocolate: A Delicious Path to Wellness",
    description:
      "Explore the science-backed health benefits of dark chocolate and learn how this indulgent treat can support your wellbeing.",
    images: ["/dark-chocolate-still-life.png"],
  },
}

export default function DarkChocolatePage() {
  return <DarkChocolateClientPage />
}
