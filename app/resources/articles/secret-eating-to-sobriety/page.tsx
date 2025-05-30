import type { Metadata } from "next"
import SecretEatingToSobrietyClientPage from "./SecretEatingToSobrietyClientPage"

export const metadata: Metadata = {
  title: "From Secret Eating to Sobriety: One Woman's Journey to Lasting Health | NxHealth",
  description:
    "A powerful story of transformation from addiction and disordered eating to lasting health and sobriety. Discover the journey of recovery, weight loss, and finding sustainable wellness.",
  keywords: [
    "addiction recovery",
    "weight loss journey",
    "sobriety",
    "eating disorders",
    "health transformation",
    "wellness",
  ],
}

export default function SecretEatingToSobrietyPage() {
  return <SecretEatingToSobrietyClientPage />
}
