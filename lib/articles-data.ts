export interface Article {
  id: string
  title: string
  description: string
  image: string
  category: string
  date: string
  readTime: string
  url: string
  featured?: boolean
  tags?: string[]
}

export const articles: Article[] = [
  // Quality Life Articles - Latest
  {
    id: "quality-life-episode-4",
    title: "This Is Why You're Stuck",
    description:
      "Mental health is a lifestyle. Your thoughts, feelings, and behaviors are all connected. In this episode with Fatima, we explore how to break through barriers and create lasting change.",
    image: "/images/articles/quality-life-video-4.jpg",
    category: "Quality Life",
    date: "Apr 12, 2026",
    readTime: "8 min read",
    url: "/resources/articles/quality-life-episode-4",
    featured: true,
  },
  {
    id: "quality-life-series-has-begun",
    title: "The Quality Life Series Has BEGUN",
    description:
      "This week marked the start of something I've been wanting to build for a long time. I officially launched a new recurring series called Quality Life. The goal is simple: to make health clearer, calmer, and more practical.",
    image: "/images/articles/quality-life-tn1.jpg",
    category: "Quality Life",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    url: "/resources/articles/quality-life-series-has-begun",
    featured: true,
  },
  {
    id: "a-powerful-seed-of-truth",
    title: "A Powerful Seed of Truth",
    description:
      "You'll hear people claim magnesium can improve sleep, calm the nervous system, boost energy, and even regulate blood sugar. The interesting part is that some of the best sources aren't expensive supplements at all.",
    image: "/images/articles/powerful-seed-truth.jpg",
    category: "Nutrition",
    date: "Apr 7, 2026",
    readTime: "8 min read",
    url: "/resources/articles/a-powerful-seed-of-truth",
    featured: true,
  },
  {
    id: "protein-was-never-the-problem",
    title: "Oh Gosh, Protein Was Never The Problem",
    description:
      "You don't technically 'need protein.' You need amino acids. Protein is just the delivery system. The biggest problem isn't protein — it's ultra-processed 'fitness food' pretending to be infrastructure.",
    image: "/images/articles/protein-problem.jpg",
    category: "Quality Life",
    date: "Apr 3, 2026",
    readTime: "6 min read",
    url: "/resources/articles/protein-was-never-the-problem",
    featured: true,
  },
  {
    id: "quiet-realization-about-health",
    title: "A Quiet Realization About Health",
    description:
      "Health doesn't fall apart randomly. It usually breaks down in this order: Environment, Habits, Biology, Symptoms. If you skip the first two, the body never really gets a chance to heal.",
    image: "/images/articles/quiet-realization.jpg",
    category: "Quality Life",
    date: "Mar 25, 2026",
    readTime: "4 min read",
    url: "/resources/articles/quiet-realization-about-health",
    featured: true,
  },
  {
    id: "food-is-a-tool-or-liability",
    title: "Your Food Is Either A Tool or a Liability",
    description:
      "Are you eating to pass time or to power your life? Food isn't random. It's not neutral. It's either a tool or it quietly works against you.",
    image: "/images/articles/food-tool-liability.jpg",
    category: "Quality Life",
    date: "Mar 20, 2026",
    readTime: "6 min read",
    url: "/resources/articles/food-is-a-tool-or-liability",
    featured: true,
  },
  {
    id: "practical-way-to-think-about-food",
    title: "A Practical Way to Think About Food (Without Diet Culture)",
    description:
      "Diet isn't a trend. Diet is simply what you eat to nourish your body. The problem isn't food itself — it's how disconnected we've become from it.",
    image: "/images/articles/practical-food.jpg",
    category: "Quality Life",
    date: "Mar 15, 2026",
    readTime: "7 min read",
    url: "/resources/articles/practical-way-to-think-about-food",
    featured: true,
  },
  {
    id: "truth-doesnt-go-viral",
    title: "The TRUTH Doesn't Go Viral (But It Works)",
    description:
      "Why do biohack powders explode and quick fixes trend, but real health advice struggles? Because the lie looks exciting and the truth looks like responsibility.",
    image: "/images/articles/truth-viral.jpg",
    category: "Quality Life",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    url: "/resources/articles/truth-doesnt-go-viral",
    featured: true,
  },
  {
    id: "stop-quitting-cold-turkey",
    title: "Stop Quitting Cold Turkey, Do This Instead",
    description:
      "Most diet changes fail not because of discipline issues — it's pure shock. Instead of deleting everything overnight, add first and let your body level out.",
    image: "/images/articles/cold-turkey.jpg",
    category: "Quality Life",
    date: "Mar 5, 2026",
    readTime: "6 min read",
    url: "/resources/articles/stop-quitting-cold-turkey",
    featured: true,
  },
  {
    id: "how-a-silly-game-could-help",
    title: "How a Silly Game Could Help",
    description:
      "What if a game secretly made you healthier? Personal daily state determines your missions. Stability earns points. Consistency multiplies power. Miss a day, reset.",
    image: "/images/articles/silly-game.jpg",
    category: "Quality Life",
    date: "Mar 1, 2026",
    readTime: "5 min read",
    url: "/resources/articles/how-a-silly-game-could-help",
    featured: true,
  },
  {
    id: "navigating-protein-phobia",
    title: "Navigating the Protein Phobia: Debunking the Myths Around Plant-Based Protein",
    description:
      "Discover the truth about plant-based protein — why protein combining is a myth, how much you really need, and why overconsumption may be the real issue.",
    image: "/images/articles/protein-phobia.jpg",
    category: "Nutrition",
    date: "Mar 10, 2026",
    readTime: "10 min read",
    url: "/resources/articles/navigating-protein-phobia",
    featured: true,
  },
  {
    id: "accountability-groups-cheat-code-health",
    title: "Why Accountability Groups Are the Fastest \"Cheat Code\" for Better Health",
    description:
      "Health changes faster when it's social — structured, supportive, consistent.",
    image: "/images/articles/accountability.jpg",
    category: "Lifestyle",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    url: "/resources/articles/accountability-groups-cheat-code-health",
    featured: true,
  },
  {
    id: "why-diets-fail-what-actually-works",
    title: "Why Diets Keep Failing (and What Actually Works Long-Term)",
    description:
      "Real health isn't restriction — it's habits, biology, and systems that last.",
    image: "/images/articles/diets-failing.jpg",
    category: "Nutrition",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    url: "/resources/articles/why-diets-fail-what-actually-works",
    featured: true,
  },
  {
    id: "intermittent-fasting-body-repair",
    title: "Intermittent Fasting: Giving the Body Time to Repair, Not Just React",
    description:
      "Not deprivation — timing. Give your body space to reset and repair.",
    image: "/images/articles/intermittent-fasting.jpg",
    category: "Health",
    date: "Feb 5, 2026",
    readTime: "8 min read",
    url: "/resources/articles/intermittent-fasting-body-repair",
    featured: true,
  },
  {
    id: "free-vaccines-but-not-free-food",
    title: "Free Vaccines but Not Free Food? The Hidden Health Divide No One Talks About",
    description:
      "We can get a free shot to treat disease — but not free food to prevent it. Explore the policies, priorities, and paradoxes behind modern health with Coach J.",
    image: "/articles/free-vaccines-food-cover.jpg",
    category: "Public Health",
    date: "Nov 2, 2025",
    readTime: "7 min read",
    url: "/resources/articles/free-vaccines-but-not-free-food",
    featured: true,
  },
  {
    id: "food-pyramid-deception",
    title: "The Food Pyramid Deception: It's Time to Reclaim Control of Your Plate",
    description:
      "Challenge conventional nutritional wisdom as we unpack the flaws in the traditional food pyramid and discover how to make truly informed choices about what goes on your plate.",
    image: "/food-pyramid-deception.png",
    category: "Nutrition",
    date: "May 15, 2025",
    readTime: "12 min read",
    url: "/resources/articles/food-pyramid-deception",
    featured: true,
  },
  {
    id: "plant-based-strategies-colorectal-cancer",
    title: "Plant-Based Dietary Strategies and Lifestyle Modifications for Colorectal Cancer",
    description:
      "A comprehensive examination of plant-based dietary strategies and lifestyle modifications as approaches for addressing colorectal cancer.",
    image: "/colorful-fruits-vegetables.png",
    category: "Health",
    date: "March 30, 2025",
    readTime: "15 min read",
    url: "/resources/articles/plant-based-strategies-colorectal-cancer",
    featured: true,
  },
  {
    id: "understanding-breast-cancer",
    title: "Understanding Breast Cancer: A Holistic Approach to Management",
    description:
      "A comprehensive guide to breast cancer, including types, stages, and holistic management strategies with a focus on plant-based nutrition and lifestyle interventions.",
    image: "/breast-cancer-awareness.png",
    category: "Health",
    date: "May 10, 2023",
    readTime: "15 min read",
    url: "/resources/articles/understanding-breast-cancer",
    featured: true,
  },
  {
    id: "power-up-with-plants",
    title: "The Power of Plant-Based Eating",
    description:
      "Discover how incorporating more plant-based foods into your diet can transform your health and energy levels.",
    image: "/colorful-fruits-vegetables.png",
    category: "Nutrition",
    date: "May 2, 2023",
    readTime: "6 min read",
    url: "/resources/articles/power-up-with-plants",
  },
  {
    id: "dark-chocolate",
    title: "Dark Chocolate: A Healthy Indulgence",
    description:
      "Learn about the surprising health benefits of dark chocolate and how to incorporate it into a balanced diet.",
    image: "/dark-chocolate-still-life.png",
    category: "Wellness",
    date: "April 15, 2023",
    readTime: "5 min read",
    url: "/resources/foods/dark-chocolate",
  },
  {
    id: "understanding-caloric-needs",
    title: "Decoding Your Fuel: Understanding Your Caloric Needs",
    description:
      "Find out how to calculate your daily caloric needs and create a balanced nutrition plan that works for your lifestyle.",
    image: "/balanced-diet-calculation.png",
    category: "Health",
    date: "April 8, 2023",
    readTime: "7 min read",
    url: "/resources/articles/understanding-caloric-needs",
  },
  {
    id: "seasonal-eating",
    title: "Seasonal Eating: Why It Matters",
    description:
      "Explore the benefits of eating foods when they're in season and how it can improve your health and the environment.",
    image: "/seasonal-produce.png",
    category: "Nutrition",
    date: "March 22, 2023",
    readTime: "4 min read",
    url: "#",
  },
  {
    id: "meal-prep-101",
    title: "Meal Prep 101: Save Time and Eat Better",
    description: "Learn the basics of meal preparation to save time, reduce stress, and improve your eating habits.",
    image: "/healthy-meal-prep.png",
    category: "Lifestyle",
    date: "March 10, 2023",
    readTime: "8 min read",
    url: "#",
  },
  {
    id: "gut-health",
    title: "The Gut-Brain Connection: How Your Diet Affects Your Mood",
    description: "Understand the fascinating relationship between your gut microbiome and your mental wellbeing.",
    image: "/gut-health-microbiome.jpg",
    category: "Health",
    date: "February 28, 2023",
    readTime: "9 min read",
    url: "#",
  },
  {
    id: "fitness-beginners",
    title: "Fitness for Beginners: Where to Start",
    description: "A comprehensive guide to starting your fitness journey with confidence and safety.",
    image: "/fitness-beginners.png",
    category: "Fitness",
    date: "February 15, 2023",
    readTime: "10 min read",
    url: "#",
  },
  {
    id: "quick-healthy-recipes",
    title: "10 Quick and Healthy Recipes for Busy Professionals",
    description: "Delicious, nutritious meals you can prepare in under 30 minutes for your busy lifestyle.",
    image: "/healthy-quick-meals.png",
    category: "Recipes",
    date: "January 28, 2023",
    readTime: "8 min read",
    url: "/resources/articles/quick-healthy-recipes",
  },
  {
    id: "mindfulness-practice",
    title: "Mindfulness Practices for Daily Wellness",
    description: "Simple mindfulness techniques you can incorporate into your daily routine for better mental health.",
    image: "/mindfulness-meditation.png",
    category: "Wellness",
    date: "January 10, 2023",
    readTime: "6 min read",
    url: "#",
  },
  {
    id: "planted-fried-rice",
    title: "Planted Fried Rice: A Nutrient-Dense Plant-Based Recipe",
    description:
      "A delicious and nutritious plant-based fried rice recipe packed with vegetables and plant protein that's perfect for a quick weeknight dinner.",
    image: "/colorful-vegetable-fried-rice.png",
    category: "Recipes",
    date: "May 18, 2023",
    readTime: "5 min read",
    url: "/resources/planted-fried-rice",
  },
  {
    id: "tropical-green-smoothie",
    title: "Tropical Green Smoothie: A Nutrient-Packed Refreshing Blend",
    description:
      "This vibrant smoothie is packed with vitamins, minerals, and healthy fats from avocado, tropical fruits, and fresh greens, making it a refreshing and filling option perfect for any time of day.",
    image: "/tropical-green-smoothie.png",
    category: "Recipes",
    date: "May 20, 2023",
    readTime: "3 min read",
    url: "/resources/tropical-green-smoothie",
  },
  {
    id: "banana-buckwheat-muffins",
    title: "Banana Buckwheat Muffins with Nuts & Seeds",
    description:
      "Naturally gluten-free muffins packed with flavor and fiber, made with buckwheat flour and loaded with nutritious nuts and seeds for a perfect snack or breakfast.",
    image: "/banana-buckwheat-muffins.png",
    category: "Recipes",
    date: "May 27, 2025",
    readTime: "4 min read",
    url: "/resources/banana-buckwheat-muffins",
  },
  {
    id: "vanilla-coconut-ice-cream",
    title: "Vanilla 'Nice' Cream (Freeze & Blend Method)",
    description:
      "A simple, plant-based frozen treat made with almond milk that's naturally sweet and creamy. This easy recipe focuses on simplicity and natural sweetness for a refreshing dessert.",
    image: "/vanilla-coconut-ice-cream.jpeg",
    category: "Recipes",
    date: "May 29, 2025",
    readTime: "3 min read",
    url: "/resources/vanilla-coconut-ice-cream",
  },
  {
    id: "secret-eating-to-sobriety",
    title: "From Secret Eating To Sobriety",
    description:
      "A personal journey exploring the connections between disordered eating patterns and addiction, with insights on finding balance and recovery through mindful nutrition and self-compassion.",
    image: "/weight-scale-measuring-tape.png",
    category: "Wellness",
    date: "June 2, 2025",
    readTime: "8 min read",
    url: "/resources/articles/secret-eating-to-sobriety",
  },
  {
    id: "sweet-potato-oat-mix-waffles",
    title: "Sweet Potato Oat Mix Waffles",
    description:
      "Gluten-free, plant-based waffles made with oat mix and creamy sweet potato—perfect for nourishing breakfast or freezer-friendly meal prep.",
    image: "/images/recipes/sweet-potato-oat-waffles.jpg",
    category: "Recipes",
    date: "January 10, 2026",
    readTime: "5 min read",
    url: "/resources/articles/sweet-potato-oat-mix-waffles",
    tags: ["Gluten-Free", "Plant-Based"],
  },
]

export const categories = ["All", "Quality Life", "Nutrition", "Health", "Wellness", "Lifestyle", "Fitness", "Recipes", "Public Health"]

/**
 * Get random featured articles for the homepage
 * Prioritizes newest and featured articles, then shuffles
 */
export function getRandomFeaturedArticles(count: number = 3): Article[] {
  // Filter to only articles with valid URLs (not "#")
  const validArticles = articles.filter(article => article.url !== "#")
  
  // Shuffle using Fisher-Yates algorithm for true randomness
  const shuffled = [...validArticles]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  return shuffled.slice(0, count)
}
