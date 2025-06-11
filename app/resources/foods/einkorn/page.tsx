import type { Metadata } from "next"
import EinkornClientPage from "./EinkornClientPage"

export const metadata: Metadata = {
  title: "Einkorn - Ancient Grain with Superior Nutrition | Nx Health",
  description:
    "Discover the nutritional benefits of Einkorn, an ancient wheat variety with superior nutrition and easier digestibility than modern wheat.",
  openGraph: {
    title: "Einkorn - Ancient Grain with Superior Nutrition | Nx Health",
    description:
      "Discover the nutritional benefits of Einkorn, an ancient wheat variety with superior nutrition and easier digestibility than modern wheat.",
    images: [{ url: "/fresh-einkorn-grain.jpg", width: 1200, height: 630 }],
  },
}

export default function EinkornPage() {
  return <EinkornClientPage />
}
