import type { Metadata } from "next"
import CranberriesClientPage from "./CranberriesClientPage"

export const metadata: Metadata = {
  title: "Cranberries - Antioxidant Powerhouse | NxHealth",
  description:
    "Discover the powerful antioxidant properties and health benefits of cranberries. Learn about their nutritional value, urinary tract health benefits, and delicious ways to incorporate them into your diet.",
  keywords: "cranberries, antioxidants, urinary tract health, vitamin C, nutrition, superfruit, proanthocyanidins",
  openGraph: {
    title: "Cranberries - Antioxidant Powerhouse | NxHealth",
    description: "Discover the powerful antioxidant properties and health benefits of cranberries.",
    images: [
      {
        url: "/fresh-cranberries-harvest.jpeg",
        width: 1200,
        height: 630,
        alt: "Fresh red cranberries",
      },
    ],
  },
}

export default function CranberriesPage() {
  return <CranberriesClientPage />
}
