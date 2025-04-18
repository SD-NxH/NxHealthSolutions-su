"use server"

export async function redirectToStripePayment() {
  return {
    redirect: "https://buy.stripe.com/fZe0057zydIT8z6cNe",
  }
}
