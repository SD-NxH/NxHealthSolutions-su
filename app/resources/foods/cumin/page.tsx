import type { Metadata } from "next"
import CuminClientPage from "./CuminClientPage"

export const metadata: Metadata = {
  title: "Cumin - Ancient Aromatic Spice | NxHealth",
  description:
    "Discover the powerful health benefits of cumin, including digestive support, antioxidant properties, and immune system enhancement. Learn about this aromatic spice's nutritional value and culinary uses.",
  keywords: "cumin, spice, digestive health, antioxidants, immune support, nutrition, cooking, health benefits",
  openGraph: {
    title: "Cumin - Ancient Aromatic Spice | NxHealth",
    description:
      "Discover the powerful health benefits of cumin, including digestive support and antioxidant properties.",
    images: [
      {
        url: "/cumin-seeds-detailed.jpeg",
        width: 1200,
        height: 630,
        alt: "Cumin seeds",
      },
    ],
  },
}

export default function CuminPage() {
  return <CuminClientPage />
}
