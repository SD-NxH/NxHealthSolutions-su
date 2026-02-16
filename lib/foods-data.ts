// Centralized A-Z Plant Health Compendium Dataset
// All food data sourced from the NxHealth A-Z Plant Health Compendium PDF

export type FoodCategory =
  | "Fruit"
  | "Vegetable"
  | "Herb"
  | "Grain"
  | "Seed"
  | "Nut"
  | "Legume"
  | "Root Vegetable"
  | "Leafy Green"
  | "Berry"
  | "Spice"
  | "Tuber"
  | "Squash"
  | "Mushroom"
  | "Superfood"
  | "Seaweed"

export interface FoodBenefit {
  title: string
  description: string
}

export interface FoodData {
  name: string
  slug: string
  letter: string
  category: FoodCategory
  shortDescription: string
  description: string
  nutritionalProfile?: string
  healthBenefits: FoodBenefit[]
  keyNutrients?: string[]
  howToUse?: string[]
  cautions?: string[]
  references?: string[]
  image?: string
  color: string // Tailwind color family for theming (e.g. "green", "red", "orange")
}

// ═══════════════════════════════════════════════════════════════
//  FRUITS
// ═══════════════════════════════════════════════════════════════

const fruits: FoodData[] = [
  {
    name: "Apple",
    slug: "apple",
    letter: "A",
    category: "Fruit",
    shortDescription: "High in fiber, vitamin C, and various antioxidants",
    description:
      "Apples are widely consumed fruits, recognized for their crisp texture and varied flavors, ranging from sweet to tart. They are best consumed fresh and unpeeled, as a significant portion of their beneficial compounds, including fiber and flavonoids, resides in the skin.",
    nutritionalProfile:
      "A medium apple (182g) contains about 95 calories, 25g carbohydrates (19g sugar), 4.4g fiber (16% DV), 0.5g protein, and 0.3g fat. Low in sodium, fat, and cholesterol. Good source of Vitamin C, dietary fiber, and potassium.",
    healthBenefits: [
      {
        title: "Digestive Health",
        description:
          "High fiber content, particularly pectin, slows digestion, promotes fullness, controls acid reflux, and regulates bowel movements.",
      },
      {
        title: "Cardiovascular Health",
        description:
          "Flavonoids and fiber protect blood vessels, lower LDL cholesterol and triglycerides, and improve blood flow.",
      },
      {
        title: "Cancer Protection",
        description:
          "Antioxidants inhibit cancer cell growth and safeguard pancreatic cells. Phytonutrients offer protection against lung and colon cancers.",
      },
      {
        title: "Blood Sugar Management",
        description:
          "Low to moderate GI score (42-44), combined with antioxidants, slows sugar digestion and absorption.",
      },
      {
        title: "Weight Management",
        description:
          "High fiber and low calorie content promote satiety and help reduce overall calorie intake.",
      },
      {
        title: "Immune System Support",
        description: "Vitamin C is a powerful antioxidant essential for robust immune system function.",
      },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Quercetin", "Pectin", "Potassium", "Catechin", "Chlorogenic Acid"],
    howToUse: [
      "Enjoy fresh as a convenient, portable snack",
      "Add sliced apples to salads for a sweet crunch",
      "Make homemade applesauce with cinnamon",
      "Bake apples with cinnamon for a warm treat",
      "Add diced apples to oatmeal or yogurt for breakfast",
      "Use in juices and smoothies",
    ],
    cautions: [
      "Excessive consumption may lead to weight gain",
      "FODMAP content and fructose may cause digestive discomfort in individuals with IBS or fructose intolerance",
    ],
    image: "/images/foods/apple.jpg",
    color: "green",
  },
  {
    name: "Apricot",
    slug: "apricot",
    letter: "A",
    category: "Fruit",
    shortDescription: "Rich in vitamin A, vitamin C, and antioxidants",
    description:
      "Apricots (Prunus armeniaca) are small, golden fruits with velvety skin and sweet-tart flesh. Originally from China, these fruits have been cultivated for over 4,000 years and are now enjoyed worldwide for their delicious flavor and impressive nutritional profile.",
    nutritionalProfile:
      "A typical serving of 3-4 fresh apricots (about 140g) contains: 50-60 calories, 1-2g protein, 2-3g fiber, 40-50% DV Vitamin A, 15-20% DV Vitamin C, 6-8% DV Potassium, plus antioxidants including beta-carotene, lutein, and zeaxanthin.",
    healthBenefits: [
      {
        title: "Vision Health",
        description:
          "Rich in vitamin A and carotenoids like beta-carotene, apricots support eye health and may help prevent age-related macular degeneration. The antioxidants lutein and zeaxanthin specifically protect retinal cells from damage.",
      },
      {
        title: "Immune Support",
        description:
          "The vitamin C and antioxidants in apricots help strengthen the immune system by protecting cells from oxidative damage and supporting the body's natural defense mechanisms against infections and diseases.",
      },
      {
        title: "Skin Health",
        description:
          "Apricots' vitamin E and vitamin C content helps maintain skin elasticity and protect against UV damage. The fruit's antioxidants combat free radicals that contribute to premature aging and skin damage.",
      },
      {
        title: "Digestive Health",
        description:
          "With a good amount of dietary fiber, apricots support healthy digestion, prevent constipation, and promote the growth of beneficial gut bacteria. They also contain natural compounds that aid in proper nutrient absorption.",
      },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Beta-Carotene", "Lutein", "Zeaxanthin", "Fiber", "Potassium"],
    howToUse: [
      "Fresh as a snack or in fruit salads",
      "Dried for a concentrated sweet treat",
      "Poached or baked in desserts",
      "Pureed for jams, preserves, and sauces",
      "Added to savory dishes like tagines and curries",
      "Blended into smoothies or juices",
    ],
    cautions: [
      "Apricot kernels (the seeds inside the pits) should be consumed with caution as they contain amygdalin, which can convert to cyanide in the body. The fruit flesh is completely safe.",
    ],
    image: "/images/foods/apricot.jpg",
    color: "orange",
  },
  {
    name: "Avocado",
    slug: "avocado",
    letter: "A",
    category: "Fruit",
    shortDescription: "Packed with healthy fats, fiber, and essential nutrients",
    description:
      'Avocado, botanically a fruit, is widely recognized as a "superfood" due to its rich content of monounsaturated and polyunsaturated fats. Beyond healthy fats, avocado is an excellent source of dietary fiber, vitamins, and minerals.',
    nutritionalProfile:
      "A 7-ounce (201g) avocado contains 20-30g fat, 41% DV Folate, 14% DV Magnesium, 20% DV Riboflavin (B2), 22% DV Niacin (B3), 56% DV Pantothenic acid (B5), 21% DV Potassium, 42% DV Copper, plus vitamins C, E, and K.",
    healthBenefits: [
      {
        title: "Cardiovascular Health",
        description:
          "Monounsaturated and polyunsaturated fats lower LDL cholesterol, increase HDL cholesterol, reduce plaque buildup, and lower risk of heart disease and stroke.",
      },
      {
        title: "Weight Management",
        description: "High fiber content promotes satiety, helping manage body weight by reducing overall food intake.",
      },
      {
        title: "Blood Sugar Control",
        description:
          "Does not cause rapid blood sugar spikes; helps prevent insulin levels from rising significantly after meals.",
      },
      {
        title: "Brain & Eye Function",
        description: "Contains lutein, a carotenoid important for both cognitive function and eye health.",
      },
      {
        title: "Gut Health",
        description: "Fiber supports a healthy digestive system by promoting beneficial gut bacteria.",
      },
    ],
    keyNutrients: [
      "Monounsaturated Fats",
      "Fiber",
      "Folate",
      "Potassium",
      "Vitamin K",
      "Vitamin E",
      "Vitamin C",
      "Lutein",
      "Copper",
    ],
    howToUse: [
      "Eat plain with salt, pepper, or lemon juice",
      "Add to salads and smoothies",
      "Make guacamole",
      "Use as a healthy substitute for butter in baking",
      "Use as a non-dairy binding agent in recipes",
    ],
    cautions: [
      "High in calories due to fat content",
      "Individuals sensitive to latex may experience allergic reactions",
      "May decrease effectiveness of Warfarin (Coumadin) - consult healthcare provider",
    ],
    image: "/images/foods/avocado.jpg",
    color: "green",
  },
  {
    name: "Banana",
    slug: "banana",
    letter: "B",
    category: "Fruit",
    shortDescription: "Rich in potassium, fiber, and vitamin B6",
    description:
      "Bananas are widely consumed fruits, appreciated for their versatility and affordability, originating from Southeast Asia. They are characterized by their yellow color when ripe and green when unripe.",
    nutritionalProfile:
      "A medium banana contains ~112 calories, 0.4g fat, 1g protein, 29g carbs, 3g fiber. Rich in potassium (10% DV), vitamin B6 (25% DV), vitamin C (12% DV), copper (11% DV), magnesium (8% DV).",
    healthBenefits: [
      {
        title: "Digestive Health",
        description:
          "Dietary fiber, resistant starch (prebiotic), and pectin improve digestion. Prebiotics nourish beneficial gut bacteria.",
      },
      {
        title: "Cardiovascular Health",
        description:
          "Excellent source of potassium for heart health and blood pressure management. Consuming >3,000mg potassium daily linked to 25% lower cardiovascular disease risk.",
      },
      {
        title: "Blood Sugar Management",
        description:
          "Soluble fiber and resistant starch moderate blood sugar levels after meals. Unripe bananas have a low GI of 47.",
      },
      {
        title: "Muscle Recovery",
        description:
          "Potassium and magnesium act as electrolytes, replenishing those lost during physical activity and preventing cramps.",
      },
      {
        title: "Kidney Health",
        description:
          "Potassium supports healthy kidney function. Linked to lower blood pressure and slower progression of kidney disease.",
      },
    ],
    keyNutrients: [
      "Potassium",
      "Fiber",
      "Vitamin B6",
      "Vitamin C",
      "Magnesium",
      "Copper",
      "Resistant Starch",
      "Pectin",
    ],
    howToUse: [
      "Eat on their own as a quick snack",
      "Add to yogurt, cereal, or smoothies",
      "Use as a topping for toast",
      "Use as a sugar substitute in baking",
      "Use unripe bananas similarly to plantains",
    ],
    cautions: [
      "Individuals with late-stage kidney disease or on dialysis may need to restrict potassium intake",
    ],
    image: "/images/foods/banana.jpg",
    color: "yellow",
  },
  {
    name: "Cherry",
    slug: "cherry",
    letter: "C",
    category: "Fruit",
    shortDescription: "Rich in polyphenols and vitamin C with anti-inflammatory properties",
    description:
      "Cherries are a rich source of polyphenols and vitamin C, compounds known for their potent antioxidant and anti-inflammatory properties. Both sweet and tart varieties promote health.",
    healthBenefits: [
      {
        title: "Reduced Oxidative Stress",
        description:
          "Studies consistently show cherry consumption decreases markers for oxidative stress and inflammation in the body.",
      },
      {
        title: "Muscle Soreness & Recovery",
        description:
          "Significantly reduces exercise-induced muscle soreness and helps in recovery of muscle strength.",
      },
      {
        title: "Blood Pressure Regulation",
        description: "Consumption linked to a decrease in blood pressure.",
      },
      {
        title: "Improved Sleep",
        description: "Studies suggest cherry consumption can lead to improved sleep quality.",
      },
      {
        title: "Diabetes Management",
        description:
          "In diabetic women, cherries decreased HbA1C, VLDL, and TG/HDL ratios.",
      },
    ],
    keyNutrients: ["Polyphenols", "Vitamin C", "Anthocyanins", "Melatonin"],
    howToUse: [
      "Eat fresh as a sweet snack",
      "Add to smoothies and yogurt",
      "Use tart cherry juice for recovery drinks",
      "Add dried cherries to trail mix and salads",
      "Bake into pies, cobblers, and desserts",
    ],
    image: "/images/foods/cherry.jpg",
    color: "red",
  },
  {
    name: "Date",
    slug: "dates",
    letter: "D",
    category: "Fruit",
    shortDescription: "Highly nutritious fruit rich in natural sugars, potassium, and fiber",
    description:
      "Dates are a highly nutritious fruit, serving as a staple food in hot, dry regions, particularly the Middle East and North Africa, where they have been a source of sustenance for millennia.",
    nutritionalProfile:
      "Fresh dates contain ~157 calories per 100g (dried >300). Rich in natural sugars (fructose, glucose), proteins, crude fiber, lipids, antioxidants. Abundant in potassium, magnesium, copper, selenium (~15% daily intake per 100g). Contain 23 types of amino acids.",
    healthBenefits: [
      {
        title: "Energy & Invigoration",
        description:
          "Soft, easily digestible flesh with simple carbohydrates rapidly replenishes energy.",
      },
      {
        title: "Cardiovascular Health",
        description:
          "High potassium and low sodium regulate heart rhythm and blood pressure, protecting against stroke and coronary heart disease.",
      },
      {
        title: "Antioxidant & Anti-inflammatory",
        description:
          "Diverse phytochemicals (carotenoids, polyphenols) exhibit strong antioxidant activity. Tannins possess anti-inflammatory properties.",
      },
      {
        title: "Cancer Prevention",
        description:
          "Linked to protection against colon, prostate, breast, endometrial, lung, and pancreatic cancers.",
      },
      {
        title: "Eye Health",
        description: "Zea-xanthin protects against age-related macular degeneration.",
      },
    ],
    keyNutrients: [
      "Potassium",
      "Fiber",
      "Tannins",
      "Carotenoids",
      "Polyphenols",
      "Selenium",
      "Magnesium",
      "Iron",
      "B Vitamins",
    ],
    howToUse: [
      "Eat as a natural energy-boosting snack",
      "Use as a natural sweetener in smoothies",
      "Stuff with nuts or cheese for appetizers",
      "Add to baked goods for natural sweetness",
      "Blend into energy balls and bars",
    ],
    image: "/images/foods/dates.jpg",
    color: "amber",
  },
  {
    name: "Grapefruit",
    slug: "grapefruit",
    letter: "G",
    category: "Fruit",
    shortDescription: "Sour citrus fruit rich in vitamin C with potent antioxidant properties",
    description:
      "Grapefruit is a sour citrus fruit, available in pink, red, or white varieties. It is rich in health-inducing vitamins and minerals but requires caution due to extensive drug interactions.",
    nutritionalProfile:
      "Half a grapefruit (154g) contains ~64.7 calories, 16.4g carbs, 2.46g fiber, 33.9g calcium, 13.9g magnesium, 208g potassium, 48g vitamin C. Also a source of pectin.",
    healthBenefits: [
      {
        title: "Antioxidant & Anti-tumor Properties",
        description:
          "Furanocoumarins may help protect against oxidative stress and tumors, potentially possessing anticancer properties.",
      },
      {
        title: "Bone Health",
        description: "May contribute to healthy bones through its mineral content.",
      },
      {
        title: "Weight Loss",
        description: "Traditionally used for weight loss due to its low calorie density and fiber content.",
      },
      {
        title: "Immune Support",
        description: "Rich vitamin C content supports immune function.",
      },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Potassium", "Calcium", "Magnesium", "Furanocoumarins", "Pectin"],
    howToUse: [
      "Eat fresh segments as a snack or breakfast",
      "Juice for a refreshing citrus drink",
      "Add to fruit and green salads",
      "Use in cocktails and mocktails",
    ],
    cautions: [
      "CRITICAL: Consult a doctor before incorporating grapefruit - it interacts with numerous medications",
      "May be unsafe in large amounts for postmenopausal adults",
      "May increase risk of abnormal heart rhythm in individuals with cardiomyopathy",
      "Large amounts might increase hormone levels, raising risk of hormone-sensitive conditions",
      "Major drug interactions include statins, blood pressure medications, sedatives, and many others",
    ],
    image: "/images/foods/grapefruit.jpg",
    color: "pink",
  },
  {
    name: "Lemon",
    slug: "lemon",
    letter: "L",
    category: "Fruit",
    shortDescription: "Sour citrus fruit rich in vitamin C and flavonoids",
    description:
      "Lemons are a well-known citrus fruit, recognized for their sour taste and high vitamin C content. They offer remarkable versatility for both internal health benefits and external cosmetic applications.",
    nutritionalProfile:
      "A 48g serving of lemon juice contains ~10.6 calories, 3.31g carbs, 49.4mg potassium, 18.6mg vitamin C, 2.88mg calcium, 0.1g fiber. Also provides thiamin, riboflavin, niacin, B6, folate, vitamin A, phosphorus, magnesium.",
    healthBenefits: [
      {
        title: "Antioxidant & Immune Support",
        description:
          "Vitamin C acts as a powerful antioxidant, essential for immune function and iron absorption from plant-based foods.",
      },
      {
        title: "Cholesterol & Cancer Protection",
        description:
          "Citrus limonoids, particularly limonin, may reduce cholesterol and exhibit protective properties against cancer. Limonin can remain in bloodstream for up to 24 hours.",
      },
      {
        title: "Digestive Improvement",
        description:
          "High acidity stimulates hydrochloric acid production, aiding digestion. Slows food absorption for better nutrient breakdown.",
      },
      {
        title: "Mood & Energy Enhancement",
        description:
          "Natural energy booster providing electrolytes. Lemon aromatherapy has been shown to enhance mood.",
      },
    ],
    keyNutrients: ["Vitamin C", "Flavonoids", "Limonoids", "Potassium", "Folate", "B Vitamins"],
    howToUse: [
      "Squeeze into water for a morning health drink",
      "Use juice in cooking and dressings",
      "Add zest to baked goods and dishes",
      "Use to prevent browning in cut fruits",
      "Make homemade lemon tea",
    ],
    image: "/images/foods/lemon.jpg",
    color: "yellow",
  },
  {
    name: "Lime",
    slug: "lime",
    letter: "L",
    category: "Fruit",
    shortDescription: "Sour citrus fruit providing a healthful dose of vitamin C",
    description:
      "Limes are a sour citrus fruit sharing characteristics with other members of the citrus family. They are primarily noted for providing a healthful dose of vitamin C.",
    nutritionalProfile:
      "Juice of one lime provides ~11 calories, 3.7g carbs, 6.16g calcium, 3.52mg magnesium, 51.5mg potassium, 13.2mg vitamin C.",
    healthBenefits: [
      {
        title: "Immune Support",
        description: "Provides vitamin C, a key antioxidant and immune-supporting nutrient.",
      },
      {
        title: "Antioxidant Protection",
        description: "Vitamin C and citrus compounds protect against free radical damage.",
      },
    ],
    keyNutrients: ["Vitamin C", "Potassium", "Calcium", "Magnesium"],
    howToUse: [
      "Squeeze over dishes for flavor",
      "Add to water, teas, and beverages",
      "Use in marinades and dressings",
      "Add zest to cooking and baking",
    ],
    image: "/images/foods/lime.jpg",
    color: "green",
  },
  {
    name: "Mango",
    slug: "mango",
    letter: "M",
    category: "Fruit",
    shortDescription: "Rich in vitamin C, copper, folate, and polyphenols",
    description:
      'Mango, often referred to as the "king of fruits," is a drupe with a large central seed, native to India and Southeast Asia. There are hundreds of varieties, each with unique taste, shape, size, and color.',
    nutritionalProfile:
      "One cup (165g) fresh mango: ~99 calories, 1.4g protein, 24.8g carbs, 0.6g fat, 2.6g fiber, 22.6g sugar. Rich in vitamin C (67% DV), copper (20% DV), folate (18% DV), vitamin B6 (15% DV), vitamin A (10% DV), vitamin E (10% DV).",
    healthBenefits: [
      {
        title: "Immune System Support",
        description:
          "Excellent source of vitamin C supporting immune system, iron absorption, cell growth and repair.",
      },
      {
        title: "Antioxidant Properties",
        description:
          "Rich in polyphenols (mangiferin, catechins, anthocyanins) protecting cells against free radicals linked to aging and chronic diseases.",
      },
      {
        title: "Heart Health",
        description:
          "Magnesium and potassium help maintain healthy blood flow by relaxing blood vessels and lowering blood pressure.",
      },
      {
        title: "Digestive Health",
        description:
          "Contains digestive enzymes (amylases) that break down food. High water and fiber content alleviate constipation and diarrhea.",
      },
      {
        title: "Eye Health",
        description:
          "Rich in lutein, zeaxanthin, and vitamin A supporting healthy eyes.",
      },
    ],
    keyNutrients: [
      "Vitamin C",
      "Copper",
      "Folate",
      "Vitamin B6",
      "Vitamin A",
      "Polyphenols",
      "Mangiferin",
      "Carotenoids",
    ],
    howToUse: [
      "Incorporate into smoothies and salsas",
      "Add to summer salads",
      "Serve with tropical fruits",
      "Add to quinoa salads, yogurt, or oatmeal",
      "Use as a topping for grilled burgers or seafood",
    ],
    cautions: [
      "Consume in moderation (~1 cup at a time) due to natural sugar content",
      "Dried mango has significantly higher calorie and sugar density - consume sparingly",
    ],
    image: "/images/foods/mango.jpg",
    color: "orange",
  },
  {
    name: "Orange",
    slug: "orange",
    letter: "O",
    category: "Fruit",
    shortDescription: "Sweet citrus fruit renowned for high vitamin C content",
    description:
      "Oranges are sweet, round citrus fruits renowned for their high vitamin C content. They are among the richest sources of vitamin C, with one medium orange providing approximately 78% of daily value.",
    nutritionalProfile:
      "A 140g orange: ~65 calories, 16.5g carbs, 2.8g fiber, 60.2mg calcium, 15mg magnesium, 232mg potassium, 82.7mg vitamin C. One navel orange provides about 4 oz of water.",
    healthBenefits: [
      {
        title: "Immune System Support",
        description:
          "Vitamin C boosts immunity, aids iron absorption, and citrus juice enhances immune function and reduces inflammation.",
      },
      {
        title: "Hydration",
        description:
          "High water content supports digestion, waste elimination, joint lubrication, and body temperature regulation.",
      },
      {
        title: "Digestive Health",
        description: "Fiber aids digestion, regulates blood sugar, normalizes bowel movements, and promotes satiety.",
      },
      {
        title: "Disease Protection",
        description:
          "Flavonoids protect cells from oxidative stress associated with diabetes, heart disease, and certain cancers.",
      },
      {
        title: "Cognitive Function",
        description:
          "High citrus juice intake shown to improve cognitive function in older adults and enhance blood flow to the brain.",
      },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Flavonoids", "Potassium", "Calcium", "Folate", "Thiamin"],
    howToUse: [
      "Eat fresh segments",
      "Juice for a refreshing drink",
      "Add to fruit salads",
      "Use zest in baking and cooking",
      "Add to smoothies",
    ],
    cautions: ["Increase fiber intake gradually to avoid stomach upset such as bloating and gas"],
    image: "/images/foods/orange.jpg",
    color: "orange",
  },
  {
    name: "Pineapple",
    slug: "pineapple",
    letter: "P",
    category: "Fruit",
    shortDescription: "Tropical fruit uniquely containing bromelain enzyme",
    description:
      "Pineapple is a sweet, tropical fruit characterized by its spiny skin. It is uniquely known for containing bromelain, an enzyme complex that provides distinct therapeutic benefits.",
    nutritionalProfile:
      "One cup (165g): ~75 calories, no cholesterol/sodium/fat. Good source of Vitamin C (~1/3 daily amount), Manganese (>100% daily amount), ~10% daily fiber. Contains B vitamins and minerals like copper, potassium, magnesium.",
    healthBenefits: [
      {
        title: "Promotes Tissue Healing",
        description: "Bromelain aids skin and tissue healing by producing substances that combat pain and swelling.",
      },
      {
        title: "Fights Inflammation",
        description:
          "Bromelain's anti-inflammatory properties combat inflammation linked to rheumatoid arthritis and cancer.",
      },
      {
        title: "Aids Digestion",
        description:
          "Substantial fiber content linked to improved digestion. Bromelain is also believed to aid digestion.",
      },
      {
        title: "Post-Workout Recovery",
        description:
          "Anti-inflammatory properties soothe muscles and accelerate recovery after intense physical activity.",
      },
      {
        title: "Bone Health",
        description: "Manganese plays a role in bone formation.",
      },
    ],
    keyNutrients: ["Vitamin C", "Manganese", "Bromelain", "Fiber", "B Vitamins", "Copper", "Potassium"],
    howToUse: [
      "Enjoy as a standalone snack",
      "Grill for a caramelized treat",
      "Add to fruit salads and yogurt",
      "Use in smoothies and popsicles",
      "Incorporate into sweet and savory dishes",
    ],
    cautions: [
      "Individuals with arthritis should consult their doctor before altering medications based on pineapple consumption",
    ],
    image: "/images/foods/pineapple.jpg",
    color: "yellow",
  },
  {
    name: "Raspberry",
    slug: "raspberry",
    letter: "R",
    category: "Berry",
    shortDescription: "Rich in antioxidants, fiber, and various vitamins",
    description:
      "Raspberries are popular berries known for their rich color and sweet, juicy taste, available in red, black, purple, yellow, or golden varieties. They contain a diverse array of antioxidants.",
    nutritionalProfile:
      "Good source of vitamins C, E, K, and B9 (Folate), manganese, potassium, and selenium. One cup provides over 1/3 daily vitamin C requirement and 8 grams of fiber.",
    healthBenefits: [
      {
        title: "Antioxidant Properties",
        description:
          "Excellent source of numerous antioxidants helping eliminate toxic free radicals and prevent health conditions.",
      },
      {
        title: "Cardiovascular Health",
        description:
          "Anthocyanins suppress inflammation linked to cardiovascular disease. Fiber manages blood pressure and cholesterol.",
      },
      {
        title: "Diabetes Management",
        description:
          "Antioxidants help prevent inflammation (risk factor for type 2 diabetes). Abundant fiber lowers diabetes risk.",
      },
      {
        title: "Eye Health",
        description:
          "Zeaxanthin filters harmful blue light rays and may protect against age-related macular degeneration.",
      },
      {
        title: "Skin & Joint Health",
        description: "Vitamin C is crucial for collagen production, essential for healthy skin and joints.",
      },
    ],
    keyNutrients: [
      "Vitamin C",
      "Fiber",
      "Anthocyanins",
      "Zeaxanthin",
      "Vitamin E",
      "Vitamin K",
      "Folate",
      "Manganese",
      "Ellagic Acid",
    ],
    howToUse: [
      "Add to oatmeal and yogurt",
      "Blend into smoothies",
      "Eat fresh as a snack",
      "Use in jams and desserts",
      "Add to salads",
    ],
    cautions: ["Contains some natural sugar which individuals with diabetes should factor into dietary intake"],
    image: "/images/foods/raspberry.jpg",
    color: "rose",
  },
  {
    name: "Strawberry",
    slug: "strawberry",
    letter: "S",
    category: "Berry",
    shortDescription: "Bright, juicy berry rich in vitamin C, manganese, and anthocyanins",
    description:
      "Strawberries are bright red, juicy, and sweet fruits, originating as a hybrid of wild species from North America and Chile. They are low in calories (~32 per half cup) and are ranked among top sources of phenolic antioxidants.",
    nutritionalProfile:
      "Per 150g: ~48 calories, 11.5g carbs, 3g fiber, 24mg calcium, 19.5mg magnesium, 230mg potassium, 88.2mg vitamin C. Primarily water (91%), low GI of 40.",
    healthBenefits: [
      {
        title: "Cardiovascular Health",
        description:
          "Anthocyanins boost heart health. May improve HDL cholesterol, blood pressure, and blood platelet function. Reduce inflammation and harmful LDL oxidation.",
      },
      {
        title: "Blood Sugar Regulation",
        description:
          "Slow glucose digestion and mitigate spikes in glucose and insulin levels following carb-rich meals.",
      },
      {
        title: "Cancer Prevention",
        description:
          "Help prevent cancers by combating oxidative stress and chronic inflammation. Ellagic acid and ellagitannins offer protective effects.",
      },
      {
        title: "Immune & Skin Health",
        description: "Excellent source of vitamin C essential for immune function and healthy skin.",
      },
    ],
    keyNutrients: [
      "Vitamin C",
      "Manganese",
      "Anthocyanins",
      "Ellagic Acid",
      "Folate",
      "Potassium",
      "Fiber",
    ],
    howToUse: [
      "Eat raw and fresh",
      "Add to smoothies and yogurt",
      "Use in jams, jellies, and desserts",
      "Add to salads",
      "Dip in dark chocolate for a healthy treat",
    ],
    cautions: [
      "Strawberry allergy is relatively common, particularly in young children",
      "Contains goitrogens which may interfere with thyroid function in those with pre-existing thyroid conditions",
    ],
    image: "/images/foods/strawberry.jpg",
    color: "red",
  },
  {
    name: "Watermelon",
    slug: "watermelon",
    letter: "W",
    category: "Fruit",
    shortDescription: "Sweet, refreshing fruit rich in lycopene and citrulline",
    description:
      "Watermelon is a sweet, juicy fruit often enjoyed in summer for its refreshing qualities. It is characterized by its bright red flesh and is composed of over 96% water.",
    nutritionalProfile:
      "Per 1-cup (152g): ~46 calories, 11.5g carbs, 0.6g fiber, 9.4g sugar, 0.9g protein, 0.2g fat. Good source of potassium, magnesium, vitamins A, C, B6. Over 96% water.",
    healthBenefits: [
      {
        title: "Hydration",
        description:
          "Over 96% water content makes it excellent for daily fluid intake, supporting temperature regulation, organ function, nutrient delivery, and alertness.",
      },
      {
        title: "Antioxidant Properties",
        description:
          "Rich in lycopene, vitamin C, carotenoids, and cucurbitacin E which combat free radicals and reduce inflammation.",
      },
      {
        title: "Anti-cancer Effects",
        description:
          "Lycopene and cucurbitacin E may reduce risk of certain cancers including prostate and colorectal.",
      },
      {
        title: "Heart Health",
        description:
          "Lycopene may lower cholesterol and blood pressure. Citrulline increases nitric oxide levels helping blood vessels expand.",
      },
      {
        title: "Exercise Performance",
        description:
          "Citrulline may improve exercise performance. Watermelon juice reduced muscle soreness for up to 24 hours in athletes.",
      },
    ],
    keyNutrients: [
      "Water",
      "Lycopene",
      "Citrulline",
      "Vitamins A & C",
      "Potassium",
      "Cucurbitacin E",
      "Vitamin B6",
    ],
    howToUse: [
      "Eat fresh as a refreshing snack",
      "Blend into juice for post-workout recovery",
      "Add to fruit salads",
      "Grill watermelon slices",
      "Use in smoothies",
    ],
    cautions: [
      "Consume in moderation (~one cup at a time) to avoid excessive sugar intake",
    ],
    image: "/images/foods/watermelon.jpg",
    color: "green",
  },
  {
    name: "Blackberry",
    slug: "blackberry",
    letter: "B",
    category: "Berry",
    shortDescription: "Antioxidant-rich dark berries great for digestive and brain health",
    description: "Blackberries are nutrient-dense berries loaded with vitamins, minerals, and antioxidants. Their deep purple color indicates high levels of anthocyanins.",
    healthBenefits: [
      { title: "Brain Health", description: "Rich in anthocyanins that support cognitive function and may help prevent age-related mental decline." },
      { title: "Digestive Health", description: "High fiber content supports healthy digestion and bowel regularity." },
      { title: "Immune Support", description: "Excellent source of vitamin C for immune system function." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Manganese", "Fiber", "Anthocyanins"],
    howToUse: ["Eat fresh as a snack", "Add to smoothies and yogurt", "Bake into pies and cobblers", "Make jams and preserves"],
    image: "/images/foods/blackberry.jpg",
    color: "purple",
  },
  {
    name: "Blueberry",
    slug: "blueberry",
    letter: "B",
    category: "Berry",
    shortDescription: "Powerful antioxidant-rich superfruit for brain and heart health",
    description: "Blueberries are among the most nutrient-dense berries available, packed with anthocyanins and flavonoids that give them their distinctive blue color.",
    healthBenefits: [
      { title: "Brain Health", description: "Anthocyanins in blueberries improve memory and cognitive function." },
      { title: "Heart Health", description: "Regular consumption may help lower blood pressure and reduce LDL cholesterol oxidation." },
      { title: "Antioxidant Protection", description: "Among the highest antioxidant content of any common fruit." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Manganese", "Fiber", "Anthocyanins"],
    howToUse: ["Eat fresh or frozen as a snack", "Add to oatmeal and cereal", "Blend into smoothies", "Bake into muffins and pancakes"],
    image: "/images/foods/blueberry.jpg",
    color: "blue",
  },
  {
    name: "Coconut",
    slug: "coconut",
    letter: "C",
    category: "Fruit",
    shortDescription: "Tropical fruit rich in healthy fats and electrolytes",
    description: "Coconut is a versatile tropical fruit providing water, milk, oil, and meat, all with unique nutritional profiles.",
    healthBenefits: [
      { title: "Hydration", description: "Coconut water is a natural source of electrolytes for rehydration." },
      { title: "Heart Health", description: "Contains medium-chain triglycerides (MCTs) that may support cardiovascular function." },
      { title: "Immune Support", description: "Lauric acid in coconut has antimicrobial and antiviral properties." },
    ],
    keyNutrients: ["Manganese", "Copper", "Iron", "Fiber", "MCTs", "Potassium"],
    howToUse: ["Drink coconut water for hydration", "Use coconut oil in cooking", "Add shredded coconut to baked goods", "Make coconut milk curries"],
    image: "/images/foods/coconut.jpg",
    color: "stone",
  },
  {
    name: "Cranberries",
    slug: "cranberries",
    letter: "C",
    category: "Berry",
    shortDescription: "Tart berries known for urinary tract and immune health support",
    description: "Cranberries are tart, bright red berries rich in proanthocyanidins and other antioxidants, widely recognized for their role in urinary tract health.",
    healthBenefits: [
      { title: "Urinary Tract Health", description: "Proanthocyanidins prevent bacteria from adhering to the urinary tract walls." },
      { title: "Immune Support", description: "High vitamin C content supports immune function." },
      { title: "Heart Health", description: "Polyphenols may help reduce blood pressure and cholesterol." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin E", "Manganese", "Fiber", "Proanthocyanidins"],
    howToUse: ["Drink as unsweetened juice", "Add dried cranberries to salads", "Use in sauces and relishes", "Bake into breads and muffins"],
    image: "/images/foods/cranberries.jpg",
    color: "red",
  },
  {
    name: "Damson Plums",
    slug: "damson-plums",
    letter: "D",
    category: "Fruit",
    shortDescription: "Small, tart plums rich in vitamins and antioxidants",
    description: "Damson plums are small, oval-shaped fruits with a distinctive tart flavor and deep purple skin, prized for making jams and preserves.",
    healthBenefits: [
      { title: "Digestive Health", description: "High fiber content supports healthy digestion and regularity." },
      { title: "Antioxidant Protection", description: "Purple skin contains anthocyanins with strong antioxidant properties." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Fiber", "Potassium", "Anthocyanins"],
    howToUse: ["Make jams and preserves", "Bake into pies and tarts", "Stew with sugar for a compote", "Add to sauces for meat dishes"],
    image: "/images/foods/damson-plums.jpg",
    color: "purple",
  },
  {
    name: "Dragon Fruit",
    slug: "dragon-fruit",
    letter: "D",
    category: "Fruit",
    shortDescription: "Exotic, antioxidant-rich fruit with striking appearance",
    description: "Dragon fruit (pitaya) is a tropical fruit with striking pink or yellow skin and speckled flesh, packed with antioxidants and essential nutrients.",
    healthBenefits: [
      { title: "Immune Support", description: "Rich in vitamin C and carotenoids supporting immune function." },
      { title: "Digestive Health", description: "Contains prebiotic fiber that feeds beneficial gut bacteria." },
      { title: "Antioxidant Protection", description: "Betalains and flavonoids provide strong antioxidant effects." },
    ],
    keyNutrients: ["Vitamin C", "Iron", "Magnesium", "Fiber", "Betalains"],
    howToUse: ["Eat fresh by scooping out the flesh", "Blend into smoothie bowls", "Add to fruit salads", "Make refreshing juices"],
    image: "/images/foods/dragon-fruit.jpg",
    color: "pink",
  },
  {
    name: "Elderberry",
    slug: "elderberry",
    letter: "E",
    category: "Berry",
    shortDescription: "Immune-boosting berry rich in anthocyanins and flavonoids",
    description: "Elderberries are small, dark purple berries from the elder tree, traditionally used for immune support and cold/flu relief.",
    healthBenefits: [
      { title: "Immune Support", description: "Contains anthocyanins and flavonoids that boost immune response and may reduce cold and flu duration." },
      { title: "Antioxidant Protection", description: "One of the highest antioxidant capacities among berries." },
      { title: "Anti-inflammatory", description: "Compounds in elderberry help reduce inflammation throughout the body." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Anthocyanins", "Flavonoids", "Phenolic Acids"],
    howToUse: ["Make elderberry syrup", "Brew into tea", "Add to jams and jellies", "Use in baked goods"],
    cautions: ["Raw elderberries contain cyanogenic glycosides and must be cooked before consumption."],
    image: "/images/foods/elderberry.jpg",
    color: "purple",
  },
]

// ═══════════════════════════════════════════════════════════════
//  VEGETABLES
// ═══════════════════════════════════════════════════════════════

const vegetables: FoodData[] = [
  {
    name: "Beetroot",
    slug: "beetroot",
    letter: "B",
    category: "Root Vegetable",
    shortDescription: "Vibrant root vegetable rich in nitrates and betalains",
    description: "Beetroot is a deeply pigmented root vegetable known for its earthy-sweet flavor and impressive nutritional profile, particularly its high nitrate content.",
    healthBenefits: [
      { title: "Heart Health", description: "Dietary nitrates convert to nitric oxide, supporting healthy blood pressure and circulation." },
      { title: "Athletic Performance", description: "Nitrates improve oxygen efficiency during exercise, enhancing endurance." },
      { title: "Liver Support", description: "Betalains support liver detoxification processes." },
    ],
    keyNutrients: ["Folate", "Manganese", "Potassium", "Iron", "Vitamin C", "Betalains", "Nitrates"],
    howToUse: ["Roast for concentrated sweetness", "Juice raw for a nutritious drink", "Grate into salads", "Add to smoothies", "Pickle for a tangy condiment"],
    image: "/images/foods/beetroot.jpg",
    color: "red",
  },
  {
    name: "Bell Pepper",
    slug: "bell-pepper",
    letter: "B",
    category: "Vegetable",
    shortDescription: "Colorful, crunchy vegetable extremely high in vitamin C",
    description: "Bell peppers are sweet, crunchy vegetables available in green, red, yellow, and orange varieties, each with slightly different nutrient profiles.",
    healthBenefits: [
      { title: "Immune Support", description: "Among the highest vitamin C foods available, with red peppers containing over 150% DV per serving." },
      { title: "Eye Health", description: "Rich in carotenoids including lutein and zeaxanthin for eye protection." },
      { title: "Antioxidant Protection", description: "Contains capsanthin and other antioxidants with anti-inflammatory effects." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin A", "Vitamin B6", "Folate", "Lutein", "Zeaxanthin"],
    howToUse: ["Eat raw with dips", "Stuff and bake", "Add to stir-fries", "Roast for concentrated flavor", "Slice into salads"],
    image: "/images/foods/bell-pepper.jpg",
    color: "red",
  },
  {
    name: "Butternut Squash",
    slug: "butternut-squash",
    letter: "B",
    category: "Squash",
    shortDescription: "Sweet, nutty winter squash packed with beta-carotene",
    description: "Butternut squash is a popular winter squash with sweet, nutty flesh and vibrant orange color indicating its rich beta-carotene content.",
    healthBenefits: [
      { title: "Eye Health", description: "Extremely high in beta-carotene, which the body converts to vitamin A for vision health." },
      { title: "Immune Support", description: "Rich in vitamins A and C supporting immune function." },
      { title: "Heart Health", description: "Potassium and fiber content support cardiovascular health." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Potassium", "Fiber", "Manganese", "Beta-Carotene"],
    howToUse: ["Roast in cubes with olive oil", "Puree into soups", "Use in risotto", "Bake into pies", "Add to pasta dishes"],
    image: "/images/foods/butternut-squash.jpg",
    color: "orange",
  },
  {
    name: "Dandelion Greens",
    slug: "dandelion-greens",
    letter: "D",
    category: "Leafy Green",
    shortDescription: "Bitter, nutrient-dense greens with liver-supporting properties",
    description: "Dandelion greens are the edible leaves of the common dandelion plant, valued for their slightly bitter flavor and impressive nutrient density.",
    healthBenefits: [
      { title: "Liver Support", description: "Traditional use for liver and gallbladder health, promoting bile production." },
      { title: "Digestive Health", description: "Bitter compounds stimulate digestive enzymes and support gut function." },
      { title: "Nutrient Dense", description: "Among the most nutrient-dense leafy greens, rich in vitamins A, C, and K." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Vitamin K", "Iron", "Calcium", "Potassium"],
    howToUse: ["Saute with garlic and lemon", "Add to salads", "Brew into tea", "Blend into smoothies"],
    image: "/images/foods/dandelion-greens.jpg",
    color: "green",
  },
  {
    name: "Endive",
    slug: "endive",
    letter: "E",
    category: "Leafy Green",
    shortDescription: "Crisp, mildly bitter leafy green rich in folate",
    description: "Endive is a leafy green vegetable with a mild, pleasant bitterness and crisp texture, commonly used in salads and appetizers.",
    healthBenefits: [
      { title: "Digestive Health", description: "Contains inulin, a prebiotic fiber that supports beneficial gut bacteria." },
      { title: "Nutrient Dense", description: "Good source of folate, vitamin A, and vitamin K while being very low in calories." },
    ],
    keyNutrients: ["Folate", "Vitamin A", "Vitamin K", "Fiber", "Manganese"],
    howToUse: ["Use leaves as cups for appetizers", "Add to salads", "Braise or grill", "Include in soups"],
    image: "/images/foods/endive.jpg",
    color: "green",
  },
  {
    name: "Escarole",
    slug: "escarole",
    letter: "E",
    category: "Leafy Green",
    shortDescription: "Hardy, slightly bitter green from the chicory family",
    description: "Escarole is a broad-leafed endive from the chicory family with a slightly bitter, nutty flavor that mellows when cooked.",
    healthBenefits: [
      { title: "Bone Health", description: "Rich in vitamin K supporting bone health and blood clotting." },
      { title: "Eye Health", description: "Contains vitamin A and beta-carotene for eye protection." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin K", "Folate", "Fiber", "Manganese"],
    howToUse: ["Add to Italian soups (escarole and beans)", "Saute with garlic", "Use in salads", "Braise as a side dish"],
    image: "/images/foods/escarole.jpg",
    color: "green",
  },
  {
    name: "Artichoke",
    slug: "artichoke",
    letter: "A",
    category: "Vegetable",
    shortDescription: "High in fiber, antioxidants, and liver-supporting compounds",
    description:
      "Artichokes are actually flower buds that haven't yet bloomed. They are low in fat while rich in fiber, vitamins, minerals, and antioxidants. If allowed to flower, artichokes produce beautiful violet-blue blossoms that can reach up to 7 inches in diameter.",
    nutritionalProfile:
      "One medium artichoke contains only about 60 calories but provides nearly 7 grams of fiber. Particularly high in folate and vitamins C and K, they also provide important minerals such as magnesium, potassium, and phosphorus.",
    healthBenefits: [
      {
        title: "Digestive Health",
        description:
          "The high fiber content in artichokes supports healthy digestion, helps prevent constipation, and promotes the growth of beneficial gut bacteria.",
      },
      {
        title: "Liver Support",
        description:
          "Artichokes contain cynarin and silymarin, compounds that may help protect the liver, stimulate bile production, and support detoxification processes.",
      },
      {
        title: "Cholesterol Management",
        description:
          "Studies suggest that artichoke leaf extract may help lower cholesterol levels by inhibiting cholesterol synthesis and increasing bile production.",
      },
      {
        title: "Antioxidant Protection",
        description:
          "Artichokes are rich in antioxidants, including quercetin, rutin, and anthocyanins, which help protect cells from damage caused by free radicals.",
      },
    ],
    keyNutrients: ["Fiber", "Folate", "Vitamin C", "Vitamin K", "Magnesium", "Potassium", "Phosphorus", "Cynarin", "Silymarin"],
    howToUse: [
      "Steam or boil whole artichokes and enjoy the tender flesh by pulling off the leaves",
      "Add marinated artichoke hearts to salads, pasta dishes, or pizzas",
      "Blend artichoke hearts into dips or spreads with herbs and olive oil",
      "Grill halved artichokes for a smoky flavor",
      "Incorporate artichoke hearts into omelets or frittatas",
    ],
    image: "/images/foods/artichoke.jpg",
    color: "green",
  },
  {
    name: "Asparagus",
    slug: "asparagus",
    letter: "A",
    category: "Vegetable",
    shortDescription: "Good source of dietary fiber, folic acid, and vitamins",
    description:
      "Asparagus (Asparagus officinalis) is a plant widely cultivated as a vegetable, with its spears being the most commonly consumed part. The root and seeds are also utilized for medicinal purposes.",
    nutritionalProfile:
      "Good source of dietary fiber, folic acid, vitamin C, vitamin E, vitamin B6, and several minerals.",
    healthBenefits: [
      {
        title: "Diuretic Effect",
        description: "Can increase urine production, indicating a natural diuretic property.",
      },
      {
        title: "Digestive Health",
        description: "Good content of dietary fiber supports healthy digestive function.",
      },
      {
        title: "Nutrient Dense",
        description: "Provides a wide range of vitamins and minerals while being low in calories.",
      },
    ],
    keyNutrients: ["Dietary Fiber", "Folic Acid", "Vitamin C", "Vitamin E", "Vitamin B6"],
    howToUse: [
      "Steam or roast spears as a side dish",
      "Add to stir-fries and pasta dishes",
      "Grill with olive oil and seasoning",
      "Add to salads and omelets",
      "Use in soups and risottos",
    ],
    cautions: [
      "Can cause pungent smell in urine",
      "May cause allergic reactions in sensitive individuals",
      "Extracts are possibly unsafe during pregnancy due to potential hormone effects",
      "May interact with lithium and diuretic medications",
    ],
    image: "/images/foods/asparagus.jpg",
    color: "green",
  },
  {
    name: "Broccoli",
    slug: "broccoli",
    letter: "B",
    category: "Vegetable",
    shortDescription: "Cruciferous vegetable rich in vitamins, minerals, fiber, and sulforaphane",
    description:
      "Broccoli is a green cruciferous vegetable, visually resembling a miniature tree, belonging to the Brassica oleracea species. It is rich in vitamins, minerals, fiber, and bioactive compounds.",
    nutritionalProfile:
      "One cup (91g) raw: ~6g carbs, 2.6g protein, 0.3g fat, 2.4g fiber, 35 calories. Excellent source of Vitamin C (135% RDI), Vitamin K (116% RDI), Folate (14% RDI), Vitamin A (11% RDI).",
    healthBenefits: [
      {
        title: "Antioxidant Properties",
        description:
          "Sulforaphane, lutein, and zeaxanthin inhibit cell damage from free radicals. May reduce blood sugar, cholesterol, and oxidative stress.",
      },
      {
        title: "Cancer Protection",
        description:
          "Linked to reduced risk of lung, colorectal, breast, prostate, pancreatic, and stomach cancers. Isothiocyanates reduce oxidative stress and inflammation.",
      },
      {
        title: "Heart Health",
        description:
          "May improve LDL cholesterol and triglycerides. Fiber reduces heart disease risk. Potassium controls blood pressure.",
      },
      {
        title: "Brain Function",
        description:
          "Nutrients and bioactive compounds may slow mental decline. Kaempferol shown to reduce brain injury after stroke.",
      },
      {
        title: "Immune System Support",
        description: "Abundant vitamin C essential for immune function.",
      },
    ],
    keyNutrients: [
      "Vitamin C",
      "Vitamin K",
      "Folate",
      "Sulforaphane",
      "Kaempferol",
      "Lutein",
      "Zeaxanthin",
      "Fiber",
    ],
    howToUse: [
      "Steam for maximum nutrient retention",
      "Eat raw with dips",
      "Roast with olive oil and garlic",
      "Add to stir-fries and soups",
      "Use in salads and pasta dishes",
    ],
    cautions: [
      "Contains goitrogens that may impair thyroid function in very large quantities",
      "High vitamin K1 content may interact with blood thinner warfarin",
    ],
    image: "/images/foods/broccoli.jpg",
    color: "green",
  },
  {
    name: "Carrot",
    slug: "carrots",
    letter: "C",
    category: "Root Vegetable",
    shortDescription: "Root vegetable rich in beta carotene, vitamin A, and antioxidants",
    description:
      "Carrots are root vegetables originally from Afghanistan, widely known for their orange color, though they also come in purple, yellow, red, and white varieties.",
    nutritionalProfile:
      "Half-cup: ~25 calories, 6g carbs, 2g fiber, 3g sugar, 0.5g protein. Provides 73% DV vitamin A, 9% DV vitamin K, 8% DV potassium, 8% DV fiber, 5% DV vitamin C.",
    healthBenefits: [
      {
        title: "Vision Health",
        description:
          "Vitamin A content is crucial for eye health. Lutein and zeaxanthin prevent age-related macular degeneration.",
      },
      {
        title: "Cancer Prevention",
        description:
          "Carotenoids and anthocyanins combat free radicals. Research links carotenoid-rich diets to lower risk of prostate and colorectal cancers.",
      },
      {
        title: "Cardiovascular Health",
        description:
          "Antioxidants and potassium support heart health. Fiber-rich carrots lower cardiovascular disease risk and LDL cholesterol.",
      },
      {
        title: "Skin Benefits",
        description:
          "Beta carotene (converted to vitamin A) protects skin from sunburn and slows aging. Vitamin C supports collagen production.",
      },
      {
        title: "Diabetes Control",
        description:
          "Non-starchy vegetables with low glycemic index. Fiber manages blood sugar levels.",
      },
    ],
    keyNutrients: [
      "Beta Carotene",
      "Vitamin A",
      "Vitamin K",
      "Potassium",
      "Fiber",
      "Lutein",
      "Zeaxanthin",
      "Lycopene",
    ],
    howToUse: [
      "Eat raw as a crunchy snack",
      "Roast with herbs and olive oil",
      "Add to soups, stews, and stir-fries",
      "Juice for a nutrient-dense drink",
      "Shred into salads and slaws",
    ],
    cautions: [
      "Excessive beta carotene may interfere with vitamin A function in rare cases",
      "Some individuals may experience oral allergy syndrome with raw carrots",
      "Overconsumption may harmlessly turn skin orange-yellow (carotenemia)",
    ],
    image: "/images/foods/carrots.jpg",
    color: "orange",
  },
  {
    name: "Corn",
    slug: "corn",
    letter: "C",
    category: "Grain",
    shortDescription: "Whole grain rich in antioxidants, fiber, vitamins, and minerals",
    description:
      "Corn (Zea mays) is a member of the whole grain family, recognized for its rich content of antioxidants, fiber, vitamins, and minerals. It is naturally gluten-free.",
    nutritionalProfile:
      "One medium ear sweet yellow corn: ~87.7 calories, 1.4g fat, 19.1g carbs, 2g fiber, 3.3g protein. Source of insoluble fiber, carotenoid antioxidants (lutein, zeaxanthin), potassium.",
    healthBenefits: [
      {
        title: "Digestive Health",
        description:
          "Insoluble fiber increases stool bulk and aids waste movement. Supports healthy gut microbiome.",
      },
      {
        title: "Eye Health",
        description:
          "Carotenoid antioxidants (lutein, zeaxanthin) reduce risk of eye disease. Converted to vitamin A for retina function.",
      },
      {
        title: "Heart Health",
        description:
          "Carotenoids lower inflammation linked to heart disease. Potassium maintains healthy blood pressure and heart rhythm.",
      },
      {
        title: "Blood Sugar Regulation",
        description:
          "Fiber slows starch-to-glucose conversion, maintaining steady blood sugar and preventing spikes.",
      },
    ],
    keyNutrients: ["Fiber", "Lutein", "Zeaxanthin", "Potassium", "Quercetin", "B Vitamins"],
    howToUse: [
      "Eat fresh, frozen, or canned kernels",
      "Pop for healthy popcorn snack",
      "Use whole cornmeal in baking",
      "Make tortillas with whole-grain corn",
      "Add to soups, salads, and salsas",
    ],
    cautions: [
      "Rare corn allergies exist",
      "Corn oil is high in omega-6 fatty acids - consume in moderation",
      "Over 90% of US corn is genetically modified - look for USDA Certified Organic",
      "Avoid high-fructose corn syrup (processed derivative)",
    ],
    image: "/images/foods/corn.jpg",
    color: "yellow",
  },
  {
    name: "Cucumber",
    slug: "cucumber",
    letter: "C",
    category: "Vegetable",
    shortDescription: "Over 96% water content, excellent for hydration and bone health",
    description:
      "Cucumber is botanically a fruit but commonly consumed as a vegetable. It belongs to the Cucurbitaceae family and is notable for being composed of over 96% water.",
    nutritionalProfile:
      "Per 100g raw with peel: ~15 calories, 0.1g fat, 3.6g carbs, 0.5g fiber, 1.7g sugar, 0.7g protein. Provides Vitamin K (14% DV), Potassium (3% DV), Vitamin C (3% DV).",
    healthBenefits: [
      {
        title: "Increased Hydration",
        description:
          "Over 96% water content makes cucumbers excellent for supplementing daily water intake. Supports digestion, joint health, kidney function, and cognition.",
      },
      {
        title: "Bone Strengthening",
        description:
          "Rich in vitamin K for bone health. Combined with calcium, it reduces risk of fractures and promotes healthy bone mass.",
      },
      {
        title: "Gut Health",
        description:
          "High water content aids digestion. Fiber regulates bowel movements. Fermented pickles contain probiotic properties.",
      },
      {
        title: "Cancer Protection",
        description:
          "Contains Cucurbitacin B (CuB) which has shown promise in fighting liver, breast, lung, and prostate cancer cells.",
      },
    ],
    keyNutrients: ["Water", "Vitamin K", "Potassium", "Vitamin C", "Cucurbitacin B", "Fiber"],
    howToUse: [
      "Eat fresh as a hydrating snack",
      "Add to salads, wraps, and sandwiches",
      "Pickle for enhanced gut benefits",
      "Slice into water for flavored hydration",
      "Use in cold soups like gazpacho",
    ],
    cautions: ["A diet heavily reliant on pickles may not be ideal due to high sodium levels"],
    image: "/images/foods/cucumber.jpg",
    color: "green",
  },
  {
    name: "Eggplant",
    slug: "eggplant",
    letter: "E",
    category: "Vegetable",
    shortDescription: "Nutrient-dense with powerful antioxidants, particularly nasunin",
    description:
      "Eggplant, also known as aubergine, is botanically a fruit but culinarily treated as a vegetable. It belongs to the nightshade family and comes in various sizes and colors, with deep purple most common.",
    nutritionalProfile:
      "Per 100g raw: ~26 calories, 5.4g carbs, 2.4g fiber, 0.85g protein, 0.106mg manganese, 222mg potassium. Also contains niacin, magnesium, copper.",
    healthBenefits: [
      {
        title: "High in Antioxidants",
        description:
          "Rich in anthocyanins, particularly nasunin, which protect against oxidative damage and aid tissue repair.",
      },
      {
        title: "Heart Health",
        description:
          "Antioxidant content may reduce heart disease risk. Anthocyanins reduce inflammatory markers linked to heart disease.",
      },
      {
        title: "Blood Sugar Control",
        description:
          "High fiber content slows digestion and sugar absorption. Polyphenols may reduce sugar absorption and increase insulin secretion.",
      },
      {
        title: "Cancer-Fighting Benefits",
        description:
          "Contains solasodine rhamnosyl glycosides (SRGs) which can induce cancer cell death, particularly skin cancer.",
      },
    ],
    keyNutrients: [
      "Anthocyanins",
      "Nasunin",
      "Fiber",
      "Manganese",
      "Potassium",
      "Polyphenols",
    ],
    howToUse: [
      "Bake, roast, grill, or saute with olive oil",
      "Use as a low-calorie substitute for higher-calorie ingredients",
      "Make baba ganoush or eggplant parmesan",
      "Add to stir-fries and curries",
      "Grill slices for sandwiches",
    ],
    image: "/images/foods/eggplant.jpg",
    color: "purple",
  },
  {
    name: "Garlic",
    slug: "garlic",
    letter: "G",
    category: "Vegetable",
    shortDescription: "Fragrant, potent root with anti-inflammatory and heart-protective properties",
    description:
      "Garlic is a fragrant and potent root, cultivated worldwide, with a long history of use in both culinary and health applications dating back to ancient Egypt, Greece, and India.",
    nutritionalProfile:
      "One raw clove contains manganese, selenium, vitamin C, vitamin B6, fiber, calcium, copper, potassium, phosphorus, iron, vitamin B1.",
    healthBenefits: [
      {
        title: "Combats Common Cold",
        description:
          "Studies suggest garlic supplements can reduce frequency and duration of common cold symptoms.",
      },
      {
        title: "Reduces High Blood Pressure",
        description:
          "Daily garlic consumption (~four cloves) may help blood flow more easily, lowering blood pressure.",
      },
      {
        title: "Anti-inflammatory Properties",
        description:
          "Contains diallyl disulfide which limits pro-inflammatory cytokines. Garlic oil can soothe inflamed joints.",
      },
      {
        title: "Heart Protection",
        description: "May help lower cholesterol and blood pressure, and fights germs.",
      },
    ],
    keyNutrients: [
      "Manganese",
      "Selenium",
      "Vitamin C",
      "Vitamin B6",
      "Fiber",
      "Diallyl Disulfide",
    ],
    howToUse: [
      "Add minced garlic to cooking",
      "Roast whole garlic heads for a mellow flavor",
      "Use raw in dressings and sauces",
      "Add to soups, stir-fries, and marinades",
    ],
    cautions: [
      "Fresh raw garlic applied to skin may cause severe irritation and chemical burns",
      "May increase risk of bleeding - avoid large amounts before surgery",
      "Should not be used with warfarin or other blood thinners",
      "May not be safe in medicinal amounts during pregnancy or breastfeeding",
    ],
    image: "/images/foods/garlic.jpg",
    color: "green",
  },
  {
    name: "Kale",
    slug: "kale",
    letter: "K",
    category: "Leafy Green",
    shortDescription: "Nutrient-dense leafy green rich in vitamins A, C, and K",
    description:
      "Kale is a leafy, dark green, and sometimes purple vegetable belonging to the same family as broccoli, collard greens, cabbage, and cauliflower. It is recognized for its rich nutrient and flavor profile.",
    nutritionalProfile:
      "Packed with vitamins A, C, and K. Rich in calcium and potassium. Two cups raw: ~4.5g fiber, 4.5g protein, <50 calories.",
    healthBenefits: [
      {
        title: "Eye Health",
        description: "Nutrients support eye health including lutein and zeaxanthin.",
      },
      {
        title: "Immune System Support",
        description: "Contributes to a healthy immune system through vitamin C content.",
      },
      {
        title: "Heart Health",
        description: "Nutrients support cardiovascular health.",
      },
      {
        title: "Weight Management",
        description: "Low-calorie and filling, helping maintain a healthy weight.",
      },
      {
        title: "Cancer Protection",
        description: "Contains antioxidants that help prevent cell damage and may protect against cancer.",
      },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Vitamin K", "Calcium", "Potassium", "Fiber", "Antioxidants"],
    howToUse: [
      "Eat raw in salads (rub with lemon juice to soften)",
      "Add to smoothies",
      "Steam or saute with garlic and olive oil",
      "Roast to make kale chips",
      "Add to soups and stir-fries",
    ],
    cautions: [
      "Individuals taking blood-thinning medications (warfarin) may need to limit intake due to high vitamin K",
    ],
    image: "/images/foods/kale.jpg",
    color: "green",
  },
  {
    name: "Lettuce",
    slug: "lettuce",
    letter: "L",
    category: "Leafy Green",
    shortDescription: "Low-calorie leafy green with antioxidants and soothing properties",
    description:
      "Various types of lettuce (Arugula, Butter, Endive, Green and Red Leaf, Romaine) are common vegetables containing vitamin C, carotenoids, folates, chlorophyll, and phenolic compounds.",
    healthBenefits: [
      {
        title: "Promoting Weight Loss",
        description: "Low-calorie, high-fiber vegetable that promotes satiety and reduces calorie intake.",
      },
      {
        title: "Regulating Blood Sugar",
        description:
          "Fiber slows carbohydrate absorption, preventing rapid blood sugar increases. Beneficial for diabetes.",
      },
      {
        title: "Eye Health",
        description:
          "Rich in vitamin A for maintaining eye health. Prevents xerophthalmia, night blindness, and age-related macular degeneration.",
      },
      {
        title: "Bone Health",
        description:
          "Rich in calcium, phosphorus, magnesium. Vitamin K strengthens bones.",
      },
      {
        title: "Fighting Insomnia",
        description:
          "Possesses soothing properties that reduce stress and excitability of the central nervous system. Can be prepared as tea.",
      },
    ],
    keyNutrients: [
      "Vitamin C",
      "Vitamin A",
      "Carotenoids",
      "Folates",
      "Chlorophyll",
      "Phenolic Compounds",
      "Iron",
      "Calcium",
    ],
    howToUse: [
      "Use as a base for salads",
      "Add to sandwiches and wraps",
      "Use leaves as low-carb wraps",
      "Prepare as a tea for sleep benefits",
      "Add to smoothies for extra nutrition",
    ],
    image: "/images/foods/lettuce.jpg",
    color: "green",
  },
  {
    name: "Mushroom",
    slug: "mushroom",
    letter: "M",
    category: "Mushroom",
    shortDescription: "Low-calorie, cholesterol-free food with potent immune-enhancing properties",
    description:
      "Mushrooms are valued foods due to their low calorie, carbohydrate, fat, and sodium content. They are cholesterol-free and are the only non-animal food source of vitamin D.",
    nutritionalProfile:
      "High protein content with all essential amino acids. Rich in selenium, potassium, riboflavin (B2), niacin, vitamin D, proteins, and fiber. Good source of B vitamins.",
    healthBenefits: [
      {
        title: "Immune System Enhancement",
        description:
          "Polysaccharides, particularly beta-glucans, are potent immunological stimulators protecting against pathogens, toxins, and cancer.",
      },
      {
        title: "Cardiovascular Health",
        description:
          "Help prevent hypertension and reduce stroke risk. Act as cholesterol-lowering agents.",
      },
      {
        title: "Cancer Prevention",
        description:
          "Reduce cancer invasion and metastasis through antitumoral attributes. Inhibit tumor growth and induce apoptosis.",
      },
      {
        title: "Neurodegenerative Diseases",
        description: "Properties for prevention or treatment of Parkinson's and Alzheimer's diseases.",
      },
      {
        title: "Antioxidant & Anti-inflammatory",
        description: "Important sources of bioactive compounds with antioxidant and anti-inflammatory properties.",
      },
    ],
    keyNutrients: [
      "Vitamin D",
      "Selenium",
      "Potassium",
      "Riboflavin",
      "Niacin",
      "Beta-Glucans",
      "Protein",
      "Fiber",
    ],
    howToUse: [
      "Saute with garlic and herbs",
      "Add to stir-fries, soups, and stews",
      "Use as a meat substitute in burgers",
      "Stuff with filling for appetizers",
      "Grill portobello caps",
    ],
    image: "/images/foods/mushroom.jpg",
    color: "stone",
  },
  {
    name: "Onion",
    slug: "onion",
    letter: "O",
    category: "Vegetable",
    shortDescription: "High in vitamin C, quercetin, and organosulfur compounds",
    description:
      "Onions are a common vegetable, high in Vitamin C, dietary fiber, and folic acid. They contain quercetin (with superior bioavailability compared to tea or apples) and organosulfur compounds.",
    nutritionalProfile:
      "High in Vitamin C, dietary fiber, folic acid, calcium, iron, good protein quality. Low in sodium, no fat.",
    healthBenefits: [
      {
        title: "Antioxidant & Anti-inflammatory",
        description:
          "Quercetin and other antioxidants delay oxidative damage, eliminate free radicals, and protect against atherosclerosis.",
      },
      {
        title: "Blood Pressure Regulation",
        description:
          "Quercetin from onion skin extract shown to lower ambulatory blood pressure in hypertensive patients.",
      },
      {
        title: "Diabetes Control",
        description: "Demonstrated anti-diabetic effects and blood sugar-lowering effect in humans.",
      },
      {
        title: "Cancer Prevention",
        description:
          "Quercetin shows beneficial effects against breast, colon, ovarian, gastric, lung, and bladder cancer. Regular consumption linked to reduced colorectal cancer risk.",
      },
      {
        title: "Bone Health",
        description:
          "Daily consumption can increase bone mineral content and density, potentially decreasing osteoporosis incidence.",
      },
    ],
    keyNutrients: [
      "Vitamin C",
      "Quercetin",
      "Dietary Fiber",
      "Folic Acid",
      "Organosulfur Compounds",
      "Calcium",
    ],
    howToUse: [
      "Use as a base for soups, stews, and sauces",
      "Caramelize for a sweet flavor",
      "Add raw to salads and sandwiches",
      "Roast whole or in wedges",
      "Use in stir-fries and curries",
    ],
    image: "/images/foods/onion.jpg",
    color: "amber",
  },
  {
    name: "Potato",
    slug: "potato",
    letter: "P",
    category: "Tuber",
    shortDescription: "Edible tuber rich in potassium, vitamin C, and vitamin B6",
    description:
      "Potatoes are edible tubers, classified as starchy vegetables, available worldwide year-round. They are a versatile and affordable food providing important nutrients.",
    nutritionalProfile:
      "Per 100g white potato baked with skin: ~94 calories, 21.08g carbs, 2.1g fiber, 2.10g protein. Good source of potassium (544mg), vitamin C (12.6mg), vitamin B6 (0.211mg), folate (38mcg).",
    healthBenefits: [
      {
        title: "Bone Health",
        description:
          "Iron, phosphorus, calcium, magnesium, and zinc build and maintain bone structure and strength.",
      },
      {
        title: "Blood Pressure",
        description:
          "Potassium, calcium, and magnesium naturally decrease blood pressure.",
      },
      {
        title: "Heart Health",
        description:
          "Fiber, potassium, vitamin C, and B6 support heart health. Fiber lowers total blood cholesterol.",
      },
      {
        title: "Cancer Prevention",
        description:
          "Folate aids DNA synthesis and repair. Fiber reduces colorectal cancer risk. Vitamin C and quercetin act as antioxidants.",
      },
      {
        title: "Metabolism & Energy",
        description:
          "Vitamin B6 is vital for energy metabolism. Alpha-lipoic acid helps convert glucose into energy.",
      },
    ],
    keyNutrients: [
      "Potassium",
      "Vitamin C",
      "Vitamin B6",
      "Fiber",
      "Folate",
      "Iron",
      "Magnesium",
      "Alpha-lipoic Acid",
      "Quercetin",
    ],
    howToUse: [
      "Bake whole with skin for maximum nutrition",
      "Roast with herbs and olive oil",
      "Mash for a comforting side dish",
      "Add to soups and stews",
      "Use in salads",
    ],
    image: "/images/foods/potato.jpg",
    color: "amber",
  },
  {
    name: "Spinach",
    slug: "spinach",
    letter: "S",
    category: "Leafy Green",
    shortDescription: "Nutrient-dense leafy green with iron, calcium, and antioxidants",
    description:
      "Spinach is a nutritious leafy green vegetable offering a range of potential health benefits. It is very low in calories while being packed with vitamins and minerals.",
    nutritionalProfile:
      "One cup raw: ~7 calories, 0.86g protein, 29.7mg calcium, 0.81g iron, 24mg magnesium, 167mg potassium, 141mcg vitamin A, 58mcg folate. Per 100g: 28.1mg vitamin C (34% DV).",
    healthBenefits: [
      {
        title: "Blood Glucose Control",
        description:
          "Contains alpha-lipoic acid (ALA) which may lower glucose levels, increase insulin sensitivity, and prevent oxidative stress-induced changes.",
      },
      {
        title: "Cancer Prevention",
        description:
          "Contains chlorophyll with potential anticancer properties. Diets rich in green vegetables linked to lower cancer incidence.",
      },
      {
        title: "Blood Pressure",
        description:
          "High potassium content helps reduce or manage high blood pressure by counteracting sodium effects.",
      },
      {
        title: "Bone Health",
        description:
          "Adequate vitamin K improves calcium absorption, reduces calcium excretion, and acts as a bone matrix protein modifier.",
      },
      {
        title: "Healthy Skin & Hair",
        description:
          "Vitamin A moderates oil production. Vitamin C builds collagen. Iron prevents hair loss.",
      },
    ],
    keyNutrients: [
      "Vitamin K",
      "Vitamin A",
      "Vitamin C",
      "Folate",
      "Iron",
      "Calcium",
      "Potassium",
      "Magnesium",
      "Lutein",
      "Alpha-lipoic Acid",
    ],
    howToUse: [
      "Add raw to salads and sandwiches",
      "Blend into smoothies",
      "Saute with garlic as a side dish",
      "Add to soups, omelets, and pasta",
      "Use in dips and spreads",
    ],
    cautions: [
      "Rich in dietary oxalate - large amounts may increase kidney stone risk",
      "Sudden changes in vitamin K intake may interfere with blood thinners (warfarin)",
      "High potassium may be harmful to individuals with reduced kidney function",
    ],
    image: "/images/foods/spinach.jpg",
    color: "green",
  },
  {
    name: "Tomato",
    slug: "tomato",
    letter: "T",
    category: "Vegetable",
    shortDescription: "Rich in lycopene, vitamin C, and potassium",
    description:
      "Tomatoes are botanically a fruit from the nightshade family, native to South America, but generally eaten and prepared like a vegetable. Typically red when ripe but can be yellow, orange, green, or purple.",
    nutritionalProfile:
      "Per 100g raw: ~18 calories, 95% water, 0.9g protein, 3.9g carbs, 2.6g sugar, 1.2g fiber, 0.2g fat. Good source of vitamin C (28% RDI), potassium, vitamin K1, folate.",
    healthBenefits: [
      {
        title: "Cancer Risk Reduction",
        description:
          "Men with high tomato intake have reduced prostate cancer risk. Lycopene and beta-carotene have anticancer properties. Protection against lung and stomach cancers.",
      },
      {
        title: "Heart Health",
        description:
          "Tomato-rich diet may significantly lower heart disease risk. Lycopene associated with reduced heart disease risk and lower LDL cholesterol.",
      },
      {
        title: "Skin Health",
        description:
          "Lycopene may protect against sunburn. One study showed 40% reduction in sunburns with daily tomato paste and olive oil.",
      },
      {
        title: "Cognitive Function",
        description:
          "Lycopene may offer protection against Alzheimer's. Higher intake associated with slower cognitive decline.",
      },
    ],
    keyNutrients: [
      "Lycopene",
      "Vitamin C",
      "Potassium",
      "Vitamin K1",
      "Folate",
      "Beta Carotene",
      "Naringenin",
      "Chlorogenic Acid",
    ],
    howToUse: [
      "Eat raw in salads and sandwiches",
      "Cook to increase lycopene content",
      "Eat with healthy fats (olive oil, avocado) to boost lycopene absorption",
      "Use in sauces, salsas, and soups",
      "Roast for concentrated flavor",
    ],
    image: "/images/foods/tomato.jpg",
    color: "red",
  },
  {
    name: "Bok Choy",
    slug: "bok-choy",
    letter: "B",
    category: "Leafy Green",
    shortDescription: "Cruciferous leafy green vegetable with mild flavor",
    description:
      "Bok Choy is a widely recognized cruciferous vegetable, belonging to the cabbage family. It is known for its mild, slightly sweet flavor and crisp texture.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "As a cruciferous vegetable, bok choy shares broad health-promoting properties common to the Brassica family." },
      { title: "Bone Health", description: "Contains calcium, phosphorus, and vitamin K which support strong bones." },
      { title: "Immune Support", description: "Good source of vitamin C and selenium for immune function." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin A", "Vitamin K", "Calcium", "Folate", "Potassium"],
    howToUse: ["Stir-fry with garlic and ginger", "Add to soups and noodle dishes", "Steam as a side dish", "Use raw in salads"],
    image: "/images/foods/bok-choy.jpg",
    color: "green",
  },
  {
    name: "Brussels Sprouts",
    slug: "brussels-sprouts",
    letter: "B",
    category: "Vegetable",
    shortDescription: "Cruciferous vegetable rich in vitamins K and C",
    description:
      "Brussels sprouts are small, compact cruciferous vegetables that resemble miniature cabbages. As members of the Brassica oleracea family, they share many health-promoting properties with broccoli and cabbage.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Rich in vitamins K and C, providing broad health-promoting properties common to cruciferous vegetables." },
      { title: "Antioxidant Properties", description: "Contains kaempferol and other antioxidants that reduce inflammation and oxidative stress." },
      { title: "Digestive Health", description: "High fiber content supports healthy digestion and gut function." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin C", "Fiber", "Folate", "Manganese", "Potassium"],
    howToUse: ["Roast with olive oil until crispy", "Shave raw into salads", "Saute with garlic and balsamic", "Steam as a side dish"],
    image: "/images/foods/brussels-sprouts.jpg",
    color: "green",
  },
  {
    name: "Cabbage",
    slug: "cabbage",
    letter: "C",
    category: "Vegetable",
    shortDescription: "Cruciferous vegetable available in Chinese, green, purple, and savoy varieties",
    description:
      "Various types of cabbage, including Chinese, Green, Purple, and Savoy, are cruciferous vegetables from the Brassica family. They share broad health-promoting properties with broccoli and other cruciferous vegetables.",
    healthBenefits: [
      { title: "Anti-inflammatory", description: "Contains anthocyanins (especially purple cabbage) with potent anti-inflammatory properties." },
      { title: "Digestive Health", description: "Rich in fiber supporting digestive function. Fermented cabbage (sauerkraut) provides probiotics." },
      { title: "Immune Support", description: "Good source of vitamin C essential for immune function." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Fiber", "Folate", "Manganese", "Anthocyanins"],
    howToUse: ["Use raw in coleslaw and salads", "Ferment into sauerkraut or kimchi", "Stir-fry or braise", "Add to soups and stews"],
    image: "/images/foods/cabbage.jpg",
    color: "green",
  },
  {
    name: "Cauliflower",
    slug: "cauliflower",
    letter: "C",
    category: "Vegetable",
    shortDescription: "Versatile cruciferous vegetable with broad health benefits",
    description:
      "Cauliflower is a member of the Brassica oleracea family alongside broccoli, and is generally considered a healthy vegetable sharing broad health-promoting properties with other cruciferous vegetables.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Low in calories while providing essential vitamins and minerals including vitamin C and vitamin K." },
      { title: "Antioxidant Properties", description: "Contains glucosinolates and isothiocyanates common to cruciferous vegetables." },
      { title: "Digestive Health", description: "Good source of fiber supporting healthy digestion." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Fiber", "Folate", "Choline", "B Vitamins"],
    howToUse: ["Roast with spices", "Rice as a low-carb substitute", "Mash as a potato alternative", "Use in soups and curries", "Eat raw with dips"],
    image: "/images/foods/cauliflower.jpg",
    color: "stone",
  },
  {
    name: "Celery",
    slug: "celery",
    letter: "C",
    category: "Vegetable",
    shortDescription: "Low-calorie vegetable with high water content",
    description:
      "Celery is a widely consumed vegetable known for its crisp texture and very low calorie content. It is popular as a snack and as a base for soups and stocks.",
    healthBenefits: [
      { title: "Hydration", description: "High water content helps maintain hydration throughout the day." },
      { title: "Low-Calorie Snack", description: "Very low in calories while providing essential nutrients and fiber." },
      { title: "Anti-inflammatory", description: "Contains various antioxidants with anti-inflammatory properties." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin C", "Potassium", "Folate", "Fiber"],
    howToUse: ["Eat raw with dips", "Add to soups and stocks as aromatics", "Juice for a refreshing drink", "Add to salads and stir-fries"],
    image: "/images/foods/celery.jpg",
    color: "green",
  },
  {
    name: "Chard",
    slug: "chard",
    letter: "C",
    category: "Leafy Green",
    shortDescription: "Colorful leafy green available in red and Swiss varieties",
    description:
      "Both Red Chard and Swiss Chard are nutritious leafy green vegetables with colorful stems. They belong to the same family as beets and spinach.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Packed with vitamins A, C, and K while being very low in calories." },
      { title: "Bone Health", description: "Rich in vitamin K which supports bone health and proper blood clotting." },
      { title: "Antioxidant Properties", description: "Contains betalains and flavonoids with antioxidant activity." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin A", "Vitamin C", "Magnesium", "Iron", "Potassium"],
    howToUse: ["Saute with garlic and olive oil", "Add to soups and stews", "Use in omelets and frittatas", "Steam as a side dish"],
    image: "/images/foods/chard.jpg",
    color: "red",
  },
  {
    name: "Collard Greens",
    slug: "collard-greens",
    letter: "C",
    category: "Leafy Green",
    shortDescription: "Hearty, nutrient-dense leafy green from the cabbage family",
    description:
      "Collard greens are large, dark-colored leafy greens from the Brassica family. They are a staple in Southern cuisine and are packed with vitamins and minerals.",
    healthBenefits: [
      { title: "Bone Health", description: "Excellent source of vitamin K and calcium supporting bone strength." },
      { title: "Cancer Protection", description: "As a cruciferous vegetable, contains glucosinolates with potential cancer-protective properties." },
      { title: "Heart Health", description: "Fiber and folate support cardiovascular health." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin A", "Vitamin C", "Calcium", "Folate", "Manganese", "Fiber"],
    howToUse: ["Braise with smoked seasonings", "Add to soups and stews", "Saute with garlic", "Use as a wrap substitute"],
    image: "/images/foods/collard-greens.jpg",
    color: "green",
  },
  {
    name: "Cress",
    slug: "cress",
    letter: "C",
    category: "Leafy Green",
    shortDescription: "Peppery leafy green rich in vitamins",
    description:
      "Cress is a fast-growing, edible leafy green with a peppery, tangy flavor. It is commonly used as a garnish and in salads.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Rich in vitamins A, C, and K despite its small size." },
      { title: "Antioxidant Properties", description: "Contains antioxidants that help protect against free radical damage." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Vitamin K", "Iron", "Calcium"],
    howToUse: ["Use as a garnish", "Add to salads and sandwiches", "Blend into soups", "Mix into dips and spreads"],
    image: "/images/foods/cress.jpg",
    color: "green",
  },
  {
    name: "Daikon",
    slug: "daikon",
    letter: "D",
    category: "Root Vegetable",
    shortDescription: "Mild-flavored white radish popular in Asian cuisine",
    description:
      "Daikon is a large, mild-flavored white radish commonly used in Asian cuisine. It is low in calories and provides various vitamins and minerals.",
    healthBenefits: [
      { title: "Digestive Health", description: "Contains enzymes that aid in digestion and high water content for hydration." },
      { title: "Low-Calorie", description: "Very low in calories while providing essential vitamins and minerals." },
    ],
    keyNutrients: ["Vitamin C", "Potassium", "Fiber", "Folate"],
    howToUse: ["Eat raw in salads and slaws", "Pickle for a tangy condiment", "Add to soups and stews", "Grate as a garnish"],
    image: "/images/foods/daikon.jpg",
    color: "stone",
  },
  {
    name: "Green Beans",
    slug: "green-beans",
    letter: "G",
    category: "Vegetable",
    shortDescription: "Versatile, low-calorie vegetable rich in vitamins",
    description:
      "Green beans, also known as string beans or snap beans, are a widely consumed vegetable enjoyed for their crisp texture and mild flavor.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Good source of vitamins A, C, and K while being very low in calories." },
      { title: "Heart Health", description: "Contains fiber and folate that support cardiovascular health." },
      { title: "Bone Health", description: "Provides vitamin K and calcium for bone strength." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin C", "Vitamin A", "Fiber", "Folate", "Manganese"],
    howToUse: ["Steam or blanch as a side dish", "Stir-fry with garlic", "Roast with olive oil", "Add to casseroles and soups"],
    image: "/images/foods/green-beans.jpg",
    color: "green",
  },
  {
    name: "Gourds",
    slug: "gourds",
    letter: "G",
    category: "Squash",
    shortDescription: "Diverse family of vegetables from the Cucurbitaceae family",
    description:
      "Gourds are a diverse group of vegetables from the Cucurbitaceae family, encompassing many shapes and sizes used in cooking worldwide.",
    healthBenefits: [
      { title: "Low-Calorie", description: "Generally very low in calories while providing hydration." },
      { title: "Digestive Health", description: "High water and fiber content support digestive health." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Potassium", "Vitamin A"],
    howToUse: ["Add to curries and stews", "Stuff and bake", "Use in soups", "Stir-fry with spices"],
    image: "/images/foods/gourds.jpg",
    color: "green",
  },
  {
    name: "Mustard Greens",
    slug: "mustard-greens",
    letter: "M",
    category: "Leafy Green",
    shortDescription: "Peppery, nutrient-rich leafy green",
    description:
      "Mustard greens are peppery, pungent leafy greens from the Brassica family. They are popular in Southern, Indian, and Chinese cuisines.",
    healthBenefits: [
      { title: "Immune Support", description: "Rich in vitamin C supporting immune function." },
      { title: "Bone Health", description: "High in vitamin K for bone health and blood clotting." },
      { title: "Antioxidant Properties", description: "Contains glucosinolates and other antioxidants common to cruciferous vegetables." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin A", "Vitamin C", "Folate", "Calcium", "Fiber"],
    howToUse: ["Saute with garlic and vinegar", "Add to soups and stews", "Use in stir-fries", "Mix raw into salads"],
    image: "/images/foods/mustard-greens.jpg",
    color: "green",
  },
  {
    name: "Jicama",
    slug: "jicama",
    letter: "J",
    category: "Root Vegetable",
    shortDescription: "Crunchy root vegetable with mild, slightly sweet flavor",
    description:
      "Jicama is a crunchy root vegetable with a mild, slightly sweet flavor, popular in Mexican and Asian cuisines. It is low in calories and high in fiber.",
    healthBenefits: [
      { title: "Digestive Health", description: "High in prebiotic fiber (inulin) that feeds beneficial gut bacteria." },
      { title: "Hydration", description: "High water content helps maintain hydration." },
      { title: "Weight Management", description: "Low in calories and high in fiber, promoting satiety." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Potassium", "Iron", "Inulin"],
    howToUse: ["Eat raw with lime juice and chili", "Add to salads and slaws", "Use in stir-fries", "Cut into sticks for dipping"],
    image: "/images/foods/jicama.jpg",
    color: "stone",
  },
  {
    name: "Kohlrabi",
    slug: "kohlrabi",
    letter: "K",
    category: "Vegetable",
    shortDescription: "Cruciferous vegetable with a mild, sweet flavor",
    description:
      "Kohlrabi is a cruciferous vegetable related to cabbage and broccoli. Its bulbous stem has a crisp, juicy texture and mild, sweet flavor.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Rich in vitamin C and fiber while being very low in calories." },
      { title: "Digestive Health", description: "High fiber content supports healthy digestion." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Potassium", "Vitamin B6", "Manganese"],
    howToUse: ["Eat raw in salads", "Roast with other root vegetables", "Add to soups and stews", "Spiralize as a noodle substitute"],
    image: "/images/foods/kohlrabi.jpg",
    color: "green",
  },
  {
    name: "Leeks",
    slug: "leeks",
    letter: "L",
    category: "Vegetable",
    shortDescription: "Mild-flavored allium vegetable related to onions and garlic",
    description:
      "Leeks are a mild-flavored allium vegetable closely related to onions and garlic. They have a sweet, subtle flavor when cooked.",
    healthBenefits: [
      { title: "Heart Health", description: "As an allium vegetable, leeks contain organosulfur compounds that may support cardiovascular health." },
      { title: "Digestive Health", description: "Good source of prebiotic fiber supporting gut health." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin A", "Vitamin C", "Folate", "Manganese", "Iron"],
    howToUse: ["Use in soups (especially vichyssoise)", "Braise or roast as a side dish", "Add to quiches and tarts", "Saute as a base for sauces"],
    image: "/images/foods/leeks.jpg",
    color: "green",
  },
  {
    name: "Lima Beans",
    slug: "lima-beans",
    letter: "L",
    category: "Legume",
    shortDescription: "Protein-rich legume with high fiber content",
    description:
      "Lima beans, also known as butter beans, are a protein-rich legume valued for their creamy texture and mild flavor.",
    healthBenefits: [
      { title: "Protein Source", description: "Excellent plant-based protein source for vegetarian and vegan diets." },
      { title: "Heart Health", description: "High fiber and potassium content support cardiovascular health." },
      { title: "Blood Sugar Regulation", description: "High fiber content helps maintain steady blood sugar levels." },
    ],
    keyNutrients: ["Protein", "Fiber", "Folate", "Manganese", "Potassium", "Iron"],
    howToUse: ["Add to soups and stews", "Make succotash", "Puree into dips", "Use as a side dish"],
    image: "/images/foods/lima-beans.jpg",
    color: "green",
  },
  {
    name: "Okra",
    slug: "okra",
    letter: "O",
    category: "Vegetable",
    shortDescription: "Nutrient-rich pod vegetable popular in Southern and African cuisines",
    description:
      "Okra is a warm-season vegetable known for its edible green seed pods. It is popular in Southern United States, African, and Indian cuisines.",
    healthBenefits: [
      { title: "Digestive Health", description: "Rich in mucilage fiber that supports digestive health and regularity." },
      { title: "Blood Sugar Control", description: "Fiber content helps manage blood sugar levels." },
      { title: "Nutrient Dense", description: "Good source of vitamins C and K, folate, and magnesium." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Folate", "Fiber", "Magnesium"],
    howToUse: ["Fry or roast until crispy", "Add to gumbo and stews", "Pickle for a tangy side", "Grill or saute"],
    image: "/images/foods/okra.jpg",
    color: "green",
  },
  {
    name: "Parsnips",
    slug: "parsnips",
    letter: "P",
    category: "Root Vegetable",
    shortDescription: "Sweet, earthy root vegetable related to carrots",
    description:
      "Parsnips are cream-colored root vegetables related to carrots and parsley. They have a sweet, nutty flavor that intensifies when roasted.",
    healthBenefits: [
      { title: "Digestive Health", description: "High fiber content supports healthy digestion and bowel regularity." },
      { title: "Heart Health", description: "Potassium and folate support cardiovascular function." },
      { title: "Nutrient Dense", description: "Good source of vitamin C, folate, and manganese." },
    ],
    keyNutrients: ["Fiber", "Folate", "Vitamin C", "Vitamin K", "Manganese", "Potassium"],
    howToUse: ["Roast with other root vegetables", "Add to soups and stews", "Mash as a potato alternative", "Use in gratins"],
    image: "/images/foods/parsnips.jpg",
    color: "stone",
  },
  {
    name: "Peas",
    slug: "peas",
    letter: "P",
    category: "Legume",
    shortDescription: "Sweet, protein-rich legume available as snap and snow varieties",
    description:
      "Snap Sugar Peas and Snow Peas are popular vegetables known for their sweet flavor and crisp texture. They are enjoyed whole, pod and all.",
    healthBenefits: [
      { title: "Protein Source", description: "Good plant-based protein source supporting muscle health." },
      { title: "Digestive Health", description: "Rich in fiber supporting healthy digestion." },
      { title: "Immune Support", description: "Good source of vitamin C for immune function." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Fiber", "Protein", "Folate", "Manganese"],
    howToUse: ["Eat raw as a snack", "Add to stir-fries", "Steam as a side dish", "Add to salads and pasta"],
    image: "/images/foods/peas.jpg",
    color: "green",
  },
  {
    name: "Peppers",
    slug: "peppers",
    letter: "P",
    category: "Vegetable",
    shortDescription: "Colorful vegetables rich in vitamins A and C",
    description:
      "Peppers come in various types including Anaheim and Sweet varieties. They are known for their vibrant colors and high vitamin content.",
    healthBenefits: [
      { title: "Antioxidant Properties", description: "Rich in vitamins A and C with potent antioxidant effects." },
      { title: "Eye Health", description: "Carotenoids like lutein and zeaxanthin support eye health." },
      { title: "Immune Support", description: "Extremely high vitamin C content boosts immune function." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin A", "Vitamin B6", "Folate", "Fiber", "Potassium"],
    howToUse: ["Eat raw with dips", "Stuff and bake", "Add to stir-fries and fajitas", "Roast for concentrated flavor", "Slice into salads"],
    image: "/images/foods/peppers.jpg",
    color: "red",
  },
  {
    name: "Pumpkin",
    slug: "pumpkin",
    letter: "P",
    category: "Squash",
    shortDescription: "Nutrient-rich winter squash high in beta-carotene",
    description:
      "Pumpkin is a winter squash known for its orange flesh and high beta-carotene content. It is versatile in both sweet and savory cooking.",
    healthBenefits: [
      { title: "Eye Health", description: "Very high in beta-carotene which the body converts to vitamin A for eye health." },
      { title: "Immune Support", description: "Rich in vitamins A and C supporting immune function." },
      { title: "Heart Health", description: "Fiber, potassium, and vitamin C content support cardiovascular health." },
    ],
    keyNutrients: ["Vitamin A", "Beta-Carotene", "Vitamin C", "Potassium", "Fiber", "Iron"],
    howToUse: ["Roast and puree for soups", "Use in pies and baked goods", "Add to smoothies", "Roast seeds as a snack"],
    image: "/images/foods/pumpkin.jpg",
    color: "orange",
  },
  {
    name: "Radicchio",
    slug: "radicchio",
    letter: "R",
    category: "Leafy Green",
    shortDescription: "Bitter, colorful Italian chicory with antioxidant properties",
    description:
      "Radicchio is a type of Italian chicory with vibrant purple-red leaves and a pleasantly bitter flavor. It adds color and nutrients to salads.",
    healthBenefits: [
      { title: "Antioxidant Properties", description: "Rich in anthocyanins that give it its red-purple color and provide antioxidant benefits." },
      { title: "Digestive Health", description: "Contains inulin, a prebiotic fiber that feeds beneficial gut bacteria." },
    ],
    keyNutrients: ["Vitamin K", "Anthocyanins", "Fiber", "Folate", "Copper"],
    howToUse: ["Add to salads for color and flavor", "Grill or roast for a smoky taste", "Use in risotto", "Braise with balsamic vinegar"],
    image: "/images/foods/radicchio.jpg",
    color: "purple",
  },
  {
    name: "Radish",
    slug: "radish",
    letter: "R",
    category: "Root Vegetable",
    shortDescription: "Crunchy, peppery root vegetable with cleansing properties",
    description:
      "Radishes are crisp, peppery root vegetables available in various colors including red, white, and black. They add a sharp flavor to dishes.",
    healthBenefits: [
      { title: "Digestive Health", description: "High water and fiber content support healthy digestion." },
      { title: "Antioxidant Properties", description: "Contains anthocyanins and other compounds with antioxidant activity." },
    ],
    keyNutrients: ["Vitamin C", "Folate", "Fiber", "Potassium", "Anthocyanins"],
    howToUse: ["Eat raw in salads", "Pickle for a tangy condiment", "Roast for a mellower flavor", "Use as a garnish"],
    image: "/images/foods/radish.jpg",
    color: "red",
  },
  {
    name: "Rhubarb",
    slug: "rhubarb",
    letter: "R",
    category: "Vegetable",
    shortDescription: "Tart, colorful stalks used in desserts and preserves",
    description:
      "Rhubarb is known for its long, tart stalks that are commonly used in pies and desserts. While botanically a vegetable, it is often treated as a fruit in cooking.",
    healthBenefits: [
      { title: "Digestive Health", description: "Contains fiber supporting digestive regularity." },
      { title: "Bone Health", description: "Good source of vitamin K and calcium for bone health." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin C", "Calcium", "Potassium", "Manganese", "Fiber"],
    howToUse: ["Bake into pies and crumbles", "Stew with strawberries", "Make jams and preserves", "Add to compotes"],
    image: "/images/foods/rhubarb.jpg",
    color: "red",
  },
  {
    name: "Romanesco",
    slug: "romanesco",
    letter: "R",
    category: "Vegetable",
    shortDescription: "Striking fractal-shaped cruciferous vegetable",
    description:
      "Romanesco, a type of cauliflower, is known for its striking fractal-like appearance. It belongs to the Brassica family and shares health-promoting properties with other cruciferous vegetables.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Rich in vitamins C and K, providing broad health benefits from cruciferous compounds." },
      { title: "Antioxidant Properties", description: "Contains glucosinolates and other antioxidants." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Fiber", "Folate", "Carotenoids"],
    howToUse: ["Roast with olive oil and garlic", "Steam as a side dish", "Use in gratins", "Add to pasta dishes"],
    image: "/images/foods/romanesco.jpg",
    color: "green",
  },
  {
    name: "Rutabaga",
    slug: "rutabaga",
    letter: "R",
    category: "Root Vegetable",
    shortDescription: "Sweet, mild root vegetable cross between cabbage and turnip",
    description:
      "Rutabaga is a root vegetable that is a cross between cabbage and turnip. It has a sweet, mild flavor and is commonly used in soups and stews.",
    healthBenefits: [
      { title: "Digestive Health", description: "High fiber content supports healthy digestion and regularity." },
      { title: "Immune Support", description: "Good source of vitamin C for immune function." },
    ],
    keyNutrients: ["Vitamin C", "Potassium", "Fiber", "Manganese", "Phosphorus"],
    howToUse: ["Mash as a potato alternative", "Roast with other root vegetables", "Add to soups and stews", "Use in gratins"],
    image: "/images/foods/rutabaga.jpg",
    color: "amber",
  },
  {
    name: "Shallots",
    slug: "shallots",
    letter: "S",
    category: "Vegetable",
    shortDescription: "Mild, sweet allium vegetable with culinary versatility",
    description:
      "Shallots are a mild, sweet member of the allium family, closely related to onions and garlic. They are prized for their delicate flavor in cooking.",
    healthBenefits: [
      { title: "Antioxidant Properties", description: "Contains quercetin and other flavonoids with antioxidant effects, similar to onions." },
      { title: "Heart Health", description: "As an allium vegetable, may support cardiovascular health through organosulfur compounds." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Potassium", "Iron", "Quercetin"],
    howToUse: ["Use in dressings and vinaigrettes", "Caramelize for a sweet flavor", "Mince into sauces", "Roast whole"],
    image: "/images/foods/shallots.jpg",
    color: "amber",
  },
  {
    name: "Squash",
    slug: "squash",
    letter: "S",
    category: "Squash",
    shortDescription: "Versatile gourd family vegetables in acorn, butternut, and spaghetti varieties",
    description:
      "Various types of squash including Acorn, Butternut, Patti Pan, and Spaghetti varieties are versatile vegetables from the Cucurbitaceae family.",
    healthBenefits: [
      { title: "Eye Health", description: "Rich in beta-carotene and other carotenoids supporting eye health." },
      { title: "Immune Support", description: "Good source of vitamin C for immune function." },
      { title: "Heart Health", description: "Fiber and potassium content support cardiovascular health." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Potassium", "Fiber", "Manganese", "Beta-Carotene"],
    howToUse: ["Roast and serve as a side", "Use spaghetti squash as a pasta substitute", "Puree into soups", "Stuff and bake"],
    image: "/images/foods/squash.jpg",
    color: "orange",
  },
  {
    name: "Swede",
    slug: "swede",
    letter: "S",
    category: "Root Vegetable",
    shortDescription: "Hardy root vegetable with sweet, earthy flavor",
    description:
      "Swede is a hardy root vegetable with a sweet, earthy flavor, closely related to rutabaga. It is commonly used in European cuisines.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Good source of vitamin C, potassium, and fiber." },
      { title: "Digestive Health", description: "Fiber content supports healthy digestion." },
    ],
    keyNutrients: ["Vitamin C", "Potassium", "Fiber", "Manganese", "Calcium"],
    howToUse: ["Mash with butter", "Roast with herbs", "Add to soups and stews", "Use in gratins"],
    image: "/images/foods/swede.jpg",
    color: "amber",
  },
  {
    name: "Sweet Potato",
    slug: "sweet-potato",
    letter: "S",
    category: "Tuber",
    shortDescription: "Nutrient-dense tuber rich in beta-carotene and fiber",
    description:
      "Sweet potatoes are nutrient-dense tubers with vibrant orange flesh, known for their natural sweetness and high beta-carotene content.",
    healthBenefits: [
      { title: "Eye Health", description: "Extremely rich in beta-carotene, which the body converts to vitamin A for eye health." },
      { title: "Immune Support", description: "High in vitamins A and C supporting immune function." },
      { title: "Digestive Health", description: "Good source of fiber supporting gut health." },
      { title: "Blood Sugar Management", description: "Complex carbohydrates and fiber help regulate blood sugar levels." },
    ],
    keyNutrients: ["Beta-Carotene", "Vitamin A", "Vitamin C", "Fiber", "Potassium", "Manganese"],
    howToUse: ["Bake whole as a side dish", "Mash with cinnamon", "Roast in cubes", "Use in soups and curries", "Make sweet potato fries"],
    image: "/images/foods/sweet-potato.jpg",
    color: "orange",
  },
  {
    name: "Tomatillo",
    slug: "tomatillo",
    letter: "T",
    category: "Vegetable",
    shortDescription: "Small, tangy fruit used in Mexican cuisine",
    description:
      "Tomatillos are small, green fruits enclosed in a papery husk, commonly used in Mexican cuisine for salsas and sauces.",
    healthBenefits: [
      { title: "Immune Support", description: "Good source of vitamin C for immune function." },
      { title: "Digestive Health", description: "Contains fiber supporting digestive health." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Niacin", "Potassium", "Fiber"],
    howToUse: ["Roast for salsa verde", "Add to stews and soups", "Use in enchilada sauce", "Grill and serve as a side"],
    image: "/images/foods/tomatillo.jpg",
    color: "green",
  },
  {
    name: "Turnips",
    slug: "turnips",
    letter: "T",
    category: "Root Vegetable",
    shortDescription: "Versatile root vegetable with peppery flavor",
    description:
      "Turnips are versatile root vegetables with a slightly peppery flavor. Both the root and greens are edible and nutritious.",
    healthBenefits: [
      { title: "Digestive Health", description: "High fiber content supports healthy digestion and regularity." },
      { title: "Immune Support", description: "Good source of vitamin C for immune function." },
      { title: "Bone Health", description: "Provides calcium and potassium for bone strength." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Potassium", "Calcium", "Manganese"],
    howToUse: ["Roast with other root vegetables", "Mash as a potato alternative", "Add to soups and stews", "Eat raw in salads"],
    image: "/images/foods/turnips.jpg",
    color: "stone",
  },
  {
    name: "Water Chestnuts",
    slug: "water-chestnuts",
    letter: "W",
    category: "Vegetable",
    shortDescription: "Crunchy aquatic vegetable popular in Asian cooking",
    description:
      "Water chestnuts are aquatic vegetables known for their crunchy texture and mildly sweet flavor. They are commonly used in Asian stir-fries and dim sum.",
    healthBenefits: [
      { title: "Low-Calorie", description: "Very low in calories while providing satisfying crunch and texture." },
      { title: "Digestive Health", description: "Contains fiber supporting digestive function." },
    ],
    keyNutrients: ["Potassium", "Manganese", "Vitamin B6", "Fiber", "Copper"],
    howToUse: ["Add to stir-fries for crunch", "Use in lettuce wraps", "Add to salads", "Include in dim sum fillings"],
    image: "/images/foods/water-chestnuts.jpg",
    color: "stone",
  },
  {
    name: "Yam",
    slug: "yam",
    letter: "Y",
    category: "Tuber",
    shortDescription: "Starchy tuber with earthy flavor and rough skin",
    description:
      "Yams are starchy tubers native to Africa and Asia, distinct from sweet potatoes. They have a rough, bark-like skin and starchy, dry flesh.",
    healthBenefits: [
      { title: "Energy Source", description: "High in complex carbohydrates providing sustained energy." },
      { title: "Digestive Health", description: "Contains fiber supporting digestive health and regularity." },
    ],
    keyNutrients: ["Vitamin C", "Potassium", "Fiber", "Manganese", "Vitamin B6"],
    howToUse: ["Boil and mash", "Roast with spices", "Add to stews", "Fry into chips"],
    image: "/images/foods/yam.jpg",
    color: "orange",
  },
  {
    name: "Zucchini",
    slug: "zucchini",
    letter: "Z",
    category: "Squash",
    shortDescription: "Low-calorie summer squash rich in vitamins A and C",
    description:
      "Zucchini, also known as courgette, is a summer squash belonging to the Cucurbitaceae family. Botanically a fruit but commonly treated as a vegetable. Varies from deep yellow to dark green.",
    nutritionalProfile:
      "One cup (180g) cooked: ~27 calories, 2g protein, <1g fat, 5g carbs, 3g sugar, 2g fiber. Rich in vitamin A (11% DV), manganese (14% DV), vitamin C (26% DV), potassium (10% DV), folate (13% DV).",
    healthBenefits: [
      {
        title: "Healthy Digestion",
        description:
          "High water content softens stools. Soluble fiber feeds beneficial gut bacteria producing short-chain fatty acids.",
      },
      {
        title: "Blood Sugar Reduction",
        description:
          "Low carb content (3g per cooked cup). Fiber stabilizes blood sugar. Zucchini peel extract may reduce blood sugar and insulin.",
      },
      {
        title: "Eye Health",
        description:
          "Lutein and zeaxanthin positively associated with eye health, reducing risk of cataracts and macular degeneration.",
      },
      {
        title: "Anti-cancer Benefits",
        description:
          "Zeaxanthin, phenolics, carotenoids, and vitamin C may lower risk of esophageal, stomach, mouth, and larynx cancers.",
      },
    ],
    keyNutrients: [
      "Vitamin A",
      "Vitamin C",
      "Manganese",
      "Potassium",
      "Folate",
      "Lutein",
      "Zeaxanthin",
      "Polyphenols",
    ],
    howToUse: [
      "Spiralize into zoodles as a pasta substitute",
      "Grill or roast with olive oil",
      "Add to stir-fries and soups",
      "Use in baked goods (zucchini bread)",
      "Eat raw with dips",
    ],
    image: "/images/foods/zucchini.jpg",
    color: "green",
  },
]

// ═══════════════════════════════════════════════════════════════
//  COMBINE ALL FOODS
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
//  NUTS & SEEDS
// ═══════════════════════════════════════════════════════════════

const nutsAndSeeds: FoodData[] = [
  {
    name: "Almonds",
    slug: "almond",
    letter: "A",
    category: "Nut",
    shortDescription: "Rich in healthy fats, protein, and essential minerals",
    description:
      "Almonds are incredibly nutritious tree nuts packed with vitamins, minerals, protein, and fiber. Botanically speaking, they're actually seeds of the almond fruit, which is related to peaches, plums, and cherries.",
    nutritionalProfile:
      "A 1-ounce (28-gram) serving of almonds contains approximately 6 grams of protein, 14 grams of fat (mostly healthy monounsaturated fats), 3.5 grams of fiber, and is rich in vitamin E, manganese, and magnesium.",
    healthBenefits: [
      {
        title: "Heart Health",
        description:
          "Almonds help reduce LDL (bad) cholesterol levels and increase HDL (good) cholesterol, supporting cardiovascular health.",
      },
      {
        title: "Blood Sugar Regulation",
        description:
          "Despite containing carbohydrates, almonds have a low glycemic index and can help regulate blood sugar levels.",
      },
      {
        title: "Weight Management",
        description:
          "The protein and fiber in almonds help increase feelings of fullness, potentially reducing overall calorie intake.",
      },
      {
        title: "Brain Function",
        description:
          "Almonds contain nutrients like riboflavin and L-carnitine that support brain activity and cognitive function.",
      },
    ],
    keyNutrients: ["Vitamin E", "Manganese", "Magnesium", "Protein", "Fiber", "Riboflavin", "L-Carnitine", "Monounsaturated Fats"],
    howToUse: [
      "Enjoy a handful of raw or roasted almonds as a convenient and portable snack",
      "Add sliced almonds to your morning oatmeal or yogurt for extra crunch",
      "Use almond flour in baking for a gluten-free alternative",
      "Blend almonds into smoothies for added nutrition",
      "Make homemade almond butter for spreading on toast or fruit",
      "Use almond milk as a dairy alternative in recipes",
    ],
    image: "/images/foods/almond.jpg",
    color: "amber",
  },
  {
    name: "Brazil Nuts",
    slug: "brazil-nuts",
    letter: "B",
    category: "Nut",
    shortDescription: "Selenium-rich nut supporting thyroid and immune health",
    description: "Brazil nuts are large, creamy nuts from the Amazon rainforest, renowned as the richest natural food source of the mineral selenium.",
    healthBenefits: [
      { title: "Thyroid Support", description: "A single nut provides over 100% DV of selenium, critical for thyroid hormone production." },
      { title: "Immune Support", description: "Selenium acts as a powerful antioxidant supporting immune function." },
      { title: "Heart Health", description: "Rich in unsaturated fats and magnesium for cardiovascular support." },
    ],
    keyNutrients: ["Selenium", "Magnesium", "Copper", "Phosphorus", "Manganese", "Healthy Fats"],
    howToUse: ["Eat 1-3 per day for selenium needs", "Add to trail mix", "Chop into salads", "Blend into nut butter"],
    cautions: ["Limit to 1-3 nuts per day to avoid selenium toxicity."],
    image: "/images/foods/brazil-nuts.jpg",
    color: "amber",
  },
]

// ═══════════════════════════════════════════════════════════════
//  HERBS & SPICES
// ═══════════════════════════════════════════════════════════════

const herbsAndSpices: FoodData[] = [
  {
    name: "Cinnamon",
    slug: "cinnamon",
    letter: "C",
    category: "Spice",
    shortDescription: "Warm spice with blood sugar-regulating properties",
    description: "Cinnamon is a widely used spice obtained from the inner bark of Cinnamomum trees, valued for its warm flavor and medicinal properties.",
    healthBenefits: [
      { title: "Blood Sugar Control", description: "May help improve insulin sensitivity and lower blood sugar levels after meals." },
      { title: "Anti-inflammatory", description: "Contains cinnamaldehyde with potent anti-inflammatory and antimicrobial effects." },
      { title: "Antioxidant Protection", description: "Rich in polyphenols that combat oxidative stress." },
    ],
    keyNutrients: ["Manganese", "Calcium", "Iron", "Cinnamaldehyde", "Polyphenols"],
    howToUse: ["Add to oatmeal and baked goods", "Sprinkle on coffee or tea", "Use in curries and stews", "Mix into smoothies"],
    image: "/images/foods/cinnamon.jpg",
    color: "amber",
  },
  {
    name: "Cumin",
    slug: "cumin",
    letter: "C",
    category: "Spice",
    shortDescription: "Earthy spice with digestive and immune benefits",
    description: "Cumin is a warm, earthy spice made from the seeds of the Cuminum cyminum plant, a staple in cuisines worldwide.",
    healthBenefits: [
      { title: "Digestive Health", description: "Stimulates digestive enzyme production and promotes healthy digestion." },
      { title: "Iron Source", description: "Excellent source of iron, particularly beneficial for those on plant-based diets." },
      { title: "Immune Support", description: "Contains thymoquinone and other compounds with antimicrobial properties." },
    ],
    keyNutrients: ["Iron", "Manganese", "Calcium", "Magnesium", "Thymoquinone"],
    howToUse: ["Toast seeds for enhanced flavor", "Add to curries, stews, and soups", "Mix into spice blends", "Use in rice dishes"],
    image: "/images/foods/cumin.jpg",
    color: "amber",
  },
  {
    name: "Dill",
    slug: "dill",
    letter: "D",
    category: "Herb",
    shortDescription: "Fresh herb with digestive and antibacterial properties",
    description: "Dill is an aromatic herb with feathery green leaves and a distinctive flavor, used in cuisines across Europe and Asia.",
    healthBenefits: [
      { title: "Digestive Health", description: "Traditionally used to soothe digestive issues and reduce gas." },
      { title: "Bone Health", description: "Contains calcium and manganese supporting bone strength." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Manganese", "Iron", "Calcium"],
    howToUse: ["Add to fish dishes", "Mix into yogurt sauces and dips", "Use in pickles", "Garnish salads and soups"],
    image: "/images/foods/dill.jpg",
    color: "green",
  },
  {
    name: "Epazote",
    slug: "epazote",
    letter: "E",
    category: "Herb",
    shortDescription: "Traditional Mexican herb used to aid digestion of beans",
    description: "Epazote is a pungent herb widely used in Mexican and Central American cuisine, traditionally added to bean dishes to reduce gas.",
    healthBenefits: [
      { title: "Digestive Health", description: "Carminative properties help reduce gas and bloating from bean consumption." },
      { title: "Antimicrobial", description: "Contains compounds with antimicrobial and antiparasitic properties." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Folate", "Calcium", "Manganese"],
    howToUse: ["Add to black bean dishes", "Use in quesadillas and tamales", "Brew as a digestive tea", "Add to soups and stews"],
    cautions: ["Use in small amounts as concentrated quantities can be toxic. Not recommended during pregnancy."],
    image: "/images/foods/epazote.jpg",
    color: "green",
  },
  {
    name: "Fenugreek",
    slug: "fenugreek",
    letter: "F",
    category: "Herb",
    shortDescription: "Aromatic herb and spice with blood sugar benefits",
    description: "Fenugreek is both an herb (leaves) and a spice (seeds) used in Indian and Middle Eastern cuisines, valued for its maple-like aroma.",
    healthBenefits: [
      { title: "Blood Sugar Control", description: "Soluble fiber in seeds helps regulate blood sugar levels." },
      { title: "Digestive Health", description: "Mucilage content soothes the digestive tract." },
      { title: "Anti-inflammatory", description: "Contains compounds with anti-inflammatory properties." },
    ],
    keyNutrients: ["Iron", "Manganese", "Fiber", "Magnesium", "Protein"],
    howToUse: ["Toast seeds for curries", "Use leaves in Indian dishes", "Brew as a tea", "Add ground seeds to spice blends"],
    image: "/images/foods/fenugreek.jpg",
    color: "amber",
  },
  {
    name: "Ginger",
    slug: "ginger",
    letter: "G",
    category: "Spice",
    shortDescription: "Warming root with powerful anti-nausea and anti-inflammatory effects",
    description: "Ginger is a flowering plant whose rhizome is widely used as a spice and traditional medicine, known for its distinctive pungent flavor.",
    healthBenefits: [
      { title: "Anti-Nausea", description: "Effective against nausea including morning sickness and motion sickness." },
      { title: "Anti-inflammatory", description: "Gingerols and shogaols provide potent anti-inflammatory effects." },
      { title: "Digestive Health", description: "Stimulates gastric motility and aids in food digestion." },
    ],
    keyNutrients: ["Gingerols", "Shogaols", "Vitamin B6", "Magnesium", "Manganese"],
    howToUse: ["Brew fresh ginger tea", "Add to stir-fries and curries", "Use in baking", "Juice with other vegetables", "Add to marinades"],
    image: "/images/foods/ginger.jpg",
    color: "amber",
  },
  {
    name: "Ginseng",
    slug: "ginseng",
    letter: "G",
    category: "Herb",
    shortDescription: "Adaptogenic root used for energy and cognitive support",
    description: "Ginseng is a slow-growing perennial plant whose roots have been used for centuries in traditional medicine for their adaptogenic properties.",
    healthBenefits: [
      { title: "Energy & Vitality", description: "Ginsenosides may help reduce fatigue and increase energy levels." },
      { title: "Cognitive Function", description: "May support memory, concentration, and mental performance." },
      { title: "Immune Support", description: "Contains compounds that may enhance immune system function." },
    ],
    keyNutrients: ["Ginsenosides", "Polysaccharides", "Peptides", "B Vitamins"],
    howToUse: ["Brew as a tea", "Take as a supplement", "Add to soups", "Use in tonics"],
    image: "/images/foods/ginseng.jpg",
    color: "stone",
  },
  {
    name: "Hibiscus",
    slug: "hibiscus",
    letter: "H",
    category: "Herb",
    shortDescription: "Tart, vibrant flower used for blood pressure support",
    description: "Hibiscus flowers, particularly Hibiscus sabdariffa, produce a tart, cranberry-like tea that has been studied for cardiovascular benefits.",
    healthBenefits: [
      { title: "Blood Pressure", description: "Studies suggest hibiscus tea may help lower systolic blood pressure." },
      { title: "Antioxidant Protection", description: "Rich in anthocyanins and other polyphenols with strong antioxidant effects." },
      { title: "Liver Health", description: "Antioxidants may support liver health and function." },
    ],
    keyNutrients: ["Vitamin C", "Anthocyanins", "Organic Acids", "Polyphenols"],
    howToUse: ["Brew as hot or iced tea", "Make agua de jamaica", "Add to cocktails and mocktails", "Use in jams and syrups"],
    image: "/images/foods/hibiscus.jpg",
    color: "red",
  },
  {
    name: "Holy Basil (Tulsi)",
    slug: "holy-basil",
    letter: "H",
    category: "Herb",
    shortDescription: "Sacred adaptogenic herb for stress relief and immune support",
    description: "Holy basil, or Tulsi, is a sacred plant in Ayurvedic medicine known for its adaptogenic properties and ability to help the body manage stress.",
    healthBenefits: [
      { title: "Stress Relief", description: "Adaptogenic properties help the body cope with physical and emotional stress." },
      { title: "Immune Support", description: "Contains eugenol and other compounds that support immune function." },
      { title: "Anti-inflammatory", description: "Rich in anti-inflammatory compounds that reduce swelling and pain." },
    ],
    keyNutrients: ["Eugenol", "Vitamin A", "Vitamin K", "Iron", "Calcium"],
    howToUse: ["Brew as tulsi tea", "Add fresh leaves to salads", "Use in Thai and Indian cooking", "Make a calming infusion"],
    image: "/images/foods/holy-basil.jpg",
    color: "green",
  },
  {
    name: "Hops",
    slug: "hops",
    letter: "H",
    category: "Herb",
    shortDescription: "Calming flower used for sleep support and relaxation",
    description: "Hops are the flowers of the Humulus lupulus plant, best known for beer-making but also valued for their calming, sleep-supporting properties.",
    healthBenefits: [
      { title: "Sleep Support", description: "Contains compounds that promote relaxation and may improve sleep quality." },
      { title: "Digestive Health", description: "Bitter compounds stimulate digestive processes." },
    ],
    keyNutrients: ["Xanthohumol", "Humulone", "Lupulone", "B Vitamins"],
    howToUse: ["Brew as a tea for relaxation", "Use in herbal sleep blends", "Add to brewing", "Make herbal pillows"],
    image: "/images/foods/hops.jpg",
    color: "green",
  },
  {
    name: "Horseradish",
    slug: "horseradish",
    letter: "H",
    category: "Spice",
    shortDescription: "Pungent root with antimicrobial and sinus-clearing properties",
    description: "Horseradish is a pungent root vegetable from the Brassicaceae family, related to mustard and wasabi, known for its sinus-clearing heat.",
    healthBenefits: [
      { title: "Respiratory Health", description: "Isothiocyanates help clear sinuses and relieve respiratory congestion." },
      { title: "Antimicrobial", description: "Contains allyl isothiocyanate with strong antimicrobial properties." },
      { title: "Immune Support", description: "High vitamin C content supports immune function." },
    ],
    keyNutrients: ["Vitamin C", "Folate", "Potassium", "Calcium", "Isothiocyanates"],
    howToUse: ["Grate fresh into sauces", "Mix with cream for a condiment", "Add to cocktail sauce", "Pair with roast beef"],
    image: "/images/foods/horseradish.jpg",
    color: "stone",
  },
]

// ═══════════════════════════════════════════════════════════════
//  GRAINS & LEGUMES
// ═══════════════════════════════════════════════════════════════

const grainsAndLegumes: FoodData[] = [
  {
    name: "Buckwheat",
    slug: "buckwheat",
    letter: "B",
    category: "Grain",
    shortDescription: "Gluten-free pseudocereal rich in rutin and complete protein",
    description: "Despite its name, buckwheat is not related to wheat and is naturally gluten-free. It is a nutrient-dense pseudocereal rich in minerals and plant compounds.",
    healthBenefits: [
      { title: "Heart Health", description: "Contains rutin, a flavonoid that strengthens blood vessels and improves circulation." },
      { title: "Blood Sugar Control", description: "Low glycemic index and high fiber content help regulate blood sugar." },
      { title: "Complete Protein", description: "Contains all essential amino acids, making it a valuable protein source." },
    ],
    keyNutrients: ["Manganese", "Copper", "Magnesium", "Fiber", "Protein", "Rutin"],
    howToUse: ["Cook as a porridge", "Use buckwheat flour for pancakes", "Make soba noodles", "Toast groats for kasha"],
    image: "/images/foods/buckwheat.jpg",
    color: "amber",
  },
  {
    name: "Chia Seeds",
    slug: "chia-seeds",
    letter: "C",
    category: "Seed",
    shortDescription: "Tiny seeds packed with omega-3s, fiber, and protein",
    description: "Chia seeds are tiny but nutritionally powerful seeds from the Salvia hispanica plant, prized for their exceptional omega-3 fatty acid content.",
    healthBenefits: [
      { title: "Heart Health", description: "Rich in alpha-linolenic acid (ALA), a plant-based omega-3 fatty acid for cardiovascular health." },
      { title: "Digestive Health", description: "Extremely high fiber content supports digestive health and satiety." },
      { title: "Blood Sugar Control", description: "Fiber and protein slow digestion and stabilize blood sugar levels." },
    ],
    keyNutrients: ["Omega-3 (ALA)", "Fiber", "Protein", "Calcium", "Manganese", "Phosphorus"],
    howToUse: ["Make chia pudding", "Add to smoothies", "Mix into yogurt and oatmeal", "Use as an egg substitute in baking", "Sprinkle on salads"],
    image: "/images/foods/chia-seeds.jpg",
    color: "stone",
  },
  {
    name: "Chickpeas",
    slug: "chickpeas",
    letter: "C",
    category: "Legume",
    shortDescription: "Versatile legume rich in plant protein and fiber",
    description: "Chickpeas (garbanzo beans) are a nutrient-dense legume widely used in Mediterranean and Middle Eastern cuisines.",
    healthBenefits: [
      { title: "Blood Sugar Control", description: "High fiber and protein content helps regulate blood sugar levels." },
      { title: "Heart Health", description: "Soluble fiber helps lower LDL cholesterol." },
      { title: "Weight Management", description: "Protein and fiber promote satiety and reduce overall calorie intake." },
    ],
    keyNutrients: ["Protein", "Fiber", "Folate", "Iron", "Manganese", "Phosphorus"],
    howToUse: ["Make hummus", "Roast for a crunchy snack", "Add to salads and soups", "Use in curries", "Blend into falafel"],
    image: "/images/foods/chickpeas.jpg",
    color: "amber",
  },
  {
    name: "Einkorn",
    slug: "einkorn",
    letter: "E",
    category: "Grain",
    shortDescription: "Ancient wheat variety with simpler gluten structure",
    description: "Einkorn is one of the earliest cultivated forms of wheat, with a simpler gluten structure that some people find easier to digest.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Higher in protein, healthy fats, and carotenoids compared to modern wheat." },
      { title: "Digestive Health", description: "Simpler gluten structure may be easier to digest for some individuals." },
    ],
    keyNutrients: ["Protein", "Manganese", "Thiamine", "Niacin", "Carotenoids", "Zinc"],
    howToUse: ["Use einkorn flour in baking", "Cook whole berries as a grain bowl", "Make pasta", "Use in bread recipes"],
    image: "/images/foods/einkorn.jpg",
    color: "amber",
  },
  {
    name: "Emmer",
    slug: "emmer",
    letter: "E",
    category: "Grain",
    shortDescription: "Ancient grain with nutty flavor and high mineral content",
    description: "Emmer (also known as farro) is an ancient wheat variety with a nutty flavor and chewy texture, rich in fiber and minerals.",
    healthBenefits: [
      { title: "Digestive Health", description: "High fiber content supports healthy digestion and bowel regularity." },
      { title: "Sustained Energy", description: "Complex carbohydrates provide long-lasting energy." },
    ],
    keyNutrients: ["Fiber", "Protein", "Manganese", "Magnesium", "B Vitamins", "Iron"],
    howToUse: ["Cook as a grain bowl base", "Add to soups and stews", "Use in salads", "Make risotto-style dishes"],
    image: "/images/foods/emmer.jpg",
    color: "amber",
  },
  {
    name: "Fava Beans",
    slug: "fava-beans",
    letter: "F",
    category: "Legume",
    shortDescription: "Protein-rich legume with high folate and manganese content",
    description: "Fava beans (broad beans) are large, flat legumes with a creamy texture and slightly sweet, earthy flavor, popular in Mediterranean cuisine.",
    healthBenefits: [
      { title: "Protein Source", description: "Excellent plant-based protein source for muscle health and repair." },
      { title: "Heart Health", description: "Rich in folate and fiber supporting cardiovascular health." },
      { title: "Energy Production", description: "Good source of iron and B vitamins for energy metabolism." },
    ],
    keyNutrients: ["Protein", "Folate", "Manganese", "Fiber", "Iron", "Copper"],
    howToUse: ["Puree into a dip or spread", "Add to salads and pasta", "Saute with herbs", "Use in soups and stews"],
    image: "/images/foods/fava-beans.jpg",
    color: "green",
  },
]

// ═══════════════════════════════════════════════════════════════
//  SPECIALTY & OTHER FOODS
// ═══════════════════════════════════════════════════════════════

const specialtyFoods: FoodData[] = [
  {
    name: "Dark Chocolate",
    slug: "dark-chocolate",
    letter: "D",
    category: "Superfood",
    shortDescription: "Cocoa-rich treat packed with flavonoids and minerals",
    description: "Dark chocolate with a high cocoa percentage (70%+) is a nutrient-rich food packed with flavonoids, iron, and magnesium.",
    healthBenefits: [
      { title: "Heart Health", description: "Flavonoids improve blood flow, lower blood pressure, and reduce LDL oxidation." },
      { title: "Brain Health", description: "Stimulates blood flow to the brain and contains mood-enhancing compounds." },
      { title: "Antioxidant Protection", description: "Contains more antioxidants than many fruits including blueberries." },
    ],
    keyNutrients: ["Iron", "Magnesium", "Copper", "Manganese", "Flavonoids", "Theobromine"],
    howToUse: ["Eat a small square as a treat", "Add to trail mix", "Use in baking", "Make hot chocolate", "Melt over fruit"],
    image: "/images/foods/dark-chocolate.jpg",
    color: "stone",
  },
  {
    name: "Dulse",
    slug: "dulse",
    letter: "D",
    category: "Seaweed",
    shortDescription: "Mineral-rich red seaweed with savory umami flavor",
    description: "Dulse is a red seaweed found in the North Atlantic and Pacific, valued for its savory, slightly salty umami flavor and exceptional mineral content.",
    healthBenefits: [
      { title: "Thyroid Support", description: "Natural source of iodine essential for thyroid hormone production." },
      { title: "Mineral Dense", description: "Rich in iron, potassium, and other trace minerals often lacking in modern diets." },
      { title: "Protein Source", description: "Contains a significant amount of protein for a sea vegetable." },
    ],
    keyNutrients: ["Iodine", "Iron", "Potassium", "Protein", "Vitamin B6", "Fiber"],
    howToUse: ["Add flakes to soups and salads", "Use as a salt substitute", "Pan-fry for a bacon-like snack", "Mix into smoothies"],
    image: "/images/foods/dulse.jpg",
    color: "red",
  },
  {
    name: "Durian",
    slug: "durian",
    letter: "D",
    category: "Fruit",
    shortDescription: "Nutrient-dense tropical fruit known for its strong aroma",
    description: "Durian is a large, spiky tropical fruit known for its polarizing strong odor and creamy, custard-like flesh rich in nutrients.",
    healthBenefits: [
      { title: "Energy Source", description: "High in natural sugars and complex carbohydrates for sustained energy." },
      { title: "Immune Support", description: "Good source of vitamin C for immune function." },
      { title: "Heart Health", description: "Contains potassium and healthy fats supporting cardiovascular health." },
    ],
    keyNutrients: ["Vitamin C", "Potassium", "Fiber", "Iron", "B Vitamins", "Healthy Fats"],
    howToUse: ["Eat fresh from the pod", "Blend into smoothies", "Use in ice cream and desserts", "Add to sticky rice"],
    image: "/images/foods/durian.jpg",
    color: "amber",
  },
  {
    name: "Figs",
    slug: "figs",
    letter: "F",
    category: "Fruit",
    shortDescription: "Sweet, fiber-rich fruit with natural laxative properties",
    description: "Figs are sweet, soft fruits with a unique texture combining chewy flesh and crunchy seeds, enjoyed fresh or dried.",
    healthBenefits: [
      { title: "Digestive Health", description: "High fiber content acts as a natural laxative and supports gut health." },
      { title: "Bone Health", description: "Rich in calcium and potassium supporting bone density." },
      { title: "Heart Health", description: "Potassium helps regulate blood pressure." },
    ],
    keyNutrients: ["Fiber", "Potassium", "Calcium", "Manganese", "Vitamin K", "Iron"],
    howToUse: ["Eat fresh as a snack", "Add to cheese boards", "Bake into desserts", "Use in salads with nuts and cheese", "Dry for a portable snack"],
    image: "/images/foods/figs.jpg",
    color: "purple",
  },
  {
    name: "Fennel",
    slug: "fennel",
    letter: "F",
    category: "Vegetable",
    shortDescription: "Aromatic vegetable with digestive and anti-inflammatory properties",
    description: "Fennel is a crunchy, aromatic vegetable with a mild licorice-like flavor. The bulb, fronds, and seeds are all edible and nutritious.",
    healthBenefits: [
      { title: "Digestive Health", description: "Anethole compounds help relax the digestive tract and reduce bloating." },
      { title: "Anti-inflammatory", description: "Contains anti-inflammatory compounds that may help reduce swelling." },
      { title: "Bone Health", description: "Good source of vitamin K, calcium, and manganese for bone strength." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Potassium", "Manganese", "Anethole"],
    howToUse: ["Slice raw into salads", "Roast for a caramelized side dish", "Add to soups and stews", "Brew fennel seed tea"],
    image: "/images/foods/fennel.jpg",
    color: "green",
  },
  {
    name: "Feijoa",
    slug: "feijoa",
    letter: "F",
    category: "Fruit",
    shortDescription: "Tropical guava relative with sweet, aromatic flavor",
    description: "Feijoa (pineapple guava) is a fragrant tropical fruit with a sweet, complex flavor combining notes of pineapple, guava, and mint.",
    healthBenefits: [
      { title: "Immune Support", description: "Rich in vitamin C supporting immune function." },
      { title: "Digestive Health", description: "Good source of dietary fiber for digestive regularity." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Potassium", "Folate", "Manganese"],
    howToUse: ["Eat fresh by scooping out the flesh", "Blend into smoothies", "Make jams and chutneys", "Add to fruit salads"],
    image: "/images/foods/feijoa.jpg",
    color: "green",
  },
  {
    name: "Fiddlehead Ferns",
    slug: "fiddlehead-ferns",
    letter: "F",
    category: "Vegetable",
    shortDescription: "Seasonal spring delicacy rich in omega-3s and antioxidants",
    description: "Fiddlehead ferns are the furled fronds of young ferns, harvested in spring as a seasonal delicacy with a grassy, spring-like flavor.",
    healthBenefits: [
      { title: "Antioxidant Protection", description: "Rich in antioxidants including carotenoids and flavonoids." },
      { title: "Omega-3 Source", description: "Unusual for a vegetable, fiddleheads contain omega-3 fatty acids." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Iron", "Omega-3", "Fiber", "Manganese"],
    howToUse: ["Saute with butter and garlic", "Add to pasta dishes", "Steam as a side vegetable", "Pickle for preservation"],
    cautions: ["Must be thoroughly cooked before eating; raw fiddleheads can cause illness."],
    image: "/images/foods/fiddlehead-ferns.jpg",
    color: "green",
  },
  {
    name: "Finger Limes",
    slug: "finger-limes",
    letter: "F",
    category: "Fruit",
    shortDescription: "Australian citrus with caviar-like juice vesicles",
    description: "Finger limes are a unique Australian citrus fruit with elongated shape and caviar-like juice vesicles that burst with tart citrus flavor.",
    healthBenefits: [
      { title: "Immune Support", description: "Rich in vitamin C supporting immune function." },
      { title: "Antioxidant Protection", description: "Contains citrus flavonoids with antioxidant properties." },
    ],
    keyNutrients: ["Vitamin C", "Folate", "Potassium", "Vitamin E", "Flavonoids"],
    howToUse: ["Use as a garnish for seafood", "Add to cocktails", "Top sushi and sashimi", "Incorporate into desserts"],
    image: "/images/foods/finger-limes.jpg",
    color: "green",
  },
  {
    name: "Forelle Pears",
    slug: "forelle-pears",
    letter: "F",
    category: "Fruit",
    shortDescription: "Small, sweet pear with distinctive red speckles",
    description: "Forelle pears are petite, bell-shaped pears with distinctive red speckles on golden-green skin and a sweet, juicy flavor.",
    healthBenefits: [
      { title: "Digestive Health", description: "Good source of dietary fiber supporting digestive regularity." },
      { title: "Heart Health", description: "Contains potassium and fiber supporting cardiovascular health." },
    ],
    keyNutrients: ["Fiber", "Vitamin C", "Copper", "Potassium", "Vitamin K"],
    howToUse: ["Eat fresh as a snack", "Add to cheese boards", "Poach in wine", "Slice into salads"],
    image: "/images/foods/forelle-pears.jpg",
    color: "green",
  },
  {
    name: "Frisee",
    slug: "frisee",
    letter: "F",
    category: "Leafy Green",
    shortDescription: "Curly, mildly bitter chicory green used in French cuisine",
    description: "Frisee (curly endive) is a member of the chicory family with curly, pale green leaves and a pleasantly bitter flavor.",
    healthBenefits: [
      { title: "Digestive Health", description: "Contains inulin, a prebiotic fiber supporting gut health." },
      { title: "Nutrient Dense", description: "Good source of vitamins A and K while being very low in calories." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin K", "Folate", "Fiber", "Manganese"],
    howToUse: ["Use as a salad base", "Add to composed salads (frisee aux lardons)", "Wilt into warm dishes", "Use as a garnish"],
    image: "/images/foods/frisee.jpg",
    color: "green",
  },
  {
    name: "Gooseberries",
    slug: "gooseberries",
    letter: "G",
    category: "Berry",
    shortDescription: "Tart, translucent berries rich in vitamin C and fiber",
    description: "Gooseberries are small, round berries with a tart flavor and translucent skin, used in pies, jams, and desserts.",
    healthBenefits: [
      { title: "Immune Support", description: "Very high in vitamin C for immune system support." },
      { title: "Digestive Health", description: "Good source of fiber supporting digestive regularity." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Manganese", "Potassium", "Vitamin A"],
    howToUse: ["Make gooseberry fool or crumble", "Cook into jams and preserves", "Add to pies and tarts", "Eat fresh when ripe"],
    image: "/images/foods/gooseberries.jpg",
    color: "green",
  },
  {
    name: "Guava",
    slug: "guava",
    letter: "G",
    category: "Fruit",
    shortDescription: "Tropical fruit exceptionally high in vitamin C and lycopene",
    description: "Guava is a tropical fruit with pink or white flesh, known for having one of the highest vitamin C contents of any fruit.",
    healthBenefits: [
      { title: "Immune Support", description: "Contains 4x more vitamin C than oranges, powerfully supporting immune function." },
      { title: "Heart Health", description: "Lycopene and potassium support cardiovascular health and blood pressure regulation." },
      { title: "Digestive Health", description: "Extremely high fiber content promotes digestive regularity." },
    ],
    keyNutrients: ["Vitamin C", "Fiber", "Folate", "Potassium", "Lycopene", "Vitamin A"],
    howToUse: ["Eat fresh as a snack", "Blend into juices and smoothies", "Make guava paste", "Add to tropical fruit salads"],
    image: "/images/foods/guava.jpg",
    color: "pink",
  },
  {
    name: "Grapes",
    slug: "grapes",
    letter: "G",
    category: "Fruit",
    shortDescription: "Heart-healthy fruit rich in resveratrol and polyphenols",
    description: "Dark and red grapes are rich in resveratrol and other polyphenols, providing powerful antioxidant and cardiovascular benefits.",
    healthBenefits: [
      { title: "Heart Health", description: "Resveratrol supports cardiovascular health by protecting blood vessel linings." },
      { title: "Antioxidant Protection", description: "Polyphenols and flavonoids combat oxidative stress and inflammation." },
      { title: "Brain Health", description: "Resveratrol may support cognitive function and brain health." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin K", "Resveratrol", "Quercetin", "Anthocyanins", "Copper"],
    howToUse: ["Eat fresh as a snack", "Freeze for a cool treat", "Add to salads and cheese boards", "Make juice or wine"],
    image: "/images/foods/grapes.jpg",
    color: "purple",
  },
  {
    name: "Goji Berries",
    slug: "goji-berries",
    letter: "G",
    category: "Berry",
    shortDescription: "Nutrient-dense superfruit used in traditional Chinese medicine",
    description: "Goji berries (wolfberries) are bright red berries used for thousands of years in traditional Chinese medicine for longevity and vitality.",
    healthBenefits: [
      { title: "Eye Health", description: "Rich in zeaxanthin and other carotenoids protecting against age-related eye diseases." },
      { title: "Immune Support", description: "High in vitamin C and polysaccharides that modulate immune function." },
      { title: "Antioxidant Protection", description: "Contains unique antioxidants including Lycium barbarum polysaccharides (LBPs)." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin A", "Zeaxanthin", "Iron", "Fiber", "Polysaccharides"],
    howToUse: ["Add to trail mix", "Brew in tea", "Sprinkle on oatmeal and yogurt", "Blend into smoothies"],
    image: "/images/foods/goji-berries.jpg",
    color: "red",
  },
  {
    name: "Galia Melon",
    slug: "galia-melon",
    letter: "G",
    category: "Fruit",
    shortDescription: "Sweet, aromatic melon hybrid with refreshing flavor",
    description: "Galia melon is a sweet, aromatic hybrid melon with netted green skin and pale green to white flesh, known for its refreshing sweetness.",
    healthBenefits: [
      { title: "Hydration", description: "High water content supports hydration and electrolyte balance." },
      { title: "Immune Support", description: "Good source of vitamin C for immune function." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin A", "Potassium", "Fiber"],
    howToUse: ["Eat fresh as a snack", "Add to fruit salads", "Blend into smoothies", "Wrap with prosciutto"],
    image: "/images/foods/galia-melon.jpg",
    color: "green",
  },
  {
    name: "Garden Cress",
    slug: "garden-cress",
    letter: "G",
    category: "Leafy Green",
    shortDescription: "Peppery microgreen packed with vitamins and iron",
    description: "Garden cress is a fast-growing, peppery green often enjoyed as a microgreen, rich in vitamins and minerals.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Exceptionally high in vitamins A, C, and K per calorie." },
      { title: "Iron Source", description: "Good plant-based source of iron for energy and oxygen transport." },
    ],
    keyNutrients: ["Vitamin A", "Vitamin C", "Vitamin K", "Iron", "Manganese"],
    howToUse: ["Add to sandwiches and salads", "Use as a garnish", "Blend into soups", "Grow as microgreens"],
    image: "/images/foods/garden-cress.jpg",
    color: "green",
  },
  {
    name: "Glandular Kale",
    slug: "glandular-kale",
    letter: "G",
    category: "Leafy Green",
    shortDescription: "Heirloom kale variety with exceptional nutrient density",
    description: "Glandular kale is a unique heirloom variety of kale known for its tender leaves and impressive nutritional profile.",
    healthBenefits: [
      { title: "Nutrient Dense", description: "Rich in vitamins A, C, and K like other kale varieties." },
      { title: "Antioxidant Protection", description: "Contains glucosinolates and flavonoids common to cruciferous vegetables." },
    ],
    keyNutrients: ["Vitamin K", "Vitamin A", "Vitamin C", "Manganese", "Calcium"],
    howToUse: ["Saute with garlic", "Add to smoothies", "Make kale chips", "Use in salads"],
    image: "/images/foods/glandular-kale.jpg",
    color: "green",
  },
  {
    name: "Habanero Pepper",
    slug: "habanero-pepper",
    letter: "H",
    category: "Vegetable",
    shortDescription: "Intensely hot pepper rich in capsaicin and vitamin C",
    description: "Habanero peppers are among the hottest chili peppers, with a fruity, citrusy heat and exceptionally high capsaicin content.",
    healthBenefits: [
      { title: "Metabolism Boost", description: "Capsaicin increases metabolic rate and thermogenesis." },
      { title: "Pain Relief", description: "Capsaicin has analgesic properties used in topical pain relief." },
      { title: "Immune Support", description: "Extremely high in vitamin C for immune function." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin A", "Capsaicin", "Potassium", "B Vitamins"],
    howToUse: ["Add to hot sauces", "Dice into salsas", "Use sparingly in stir-fries", "Infuse into oils"],
    cautions: ["Extremely hot; handle with gloves and use in small amounts."],
    image: "/images/foods/habanero-pepper.jpg",
    color: "orange",
  },
  {
    name: "Hass Avocado",
    slug: "hass-avocado",
    letter: "H",
    category: "Fruit",
    shortDescription: "Creamy avocado variety rich in heart-healthy monounsaturated fats",
    description: "Hass avocados are the most popular avocado variety, with a creamy texture and nutty flavor, packed with heart-healthy monounsaturated fats.",
    healthBenefits: [
      { title: "Heart Health", description: "Rich in oleic acid and potassium supporting cardiovascular function." },
      { title: "Nutrient Absorption", description: "Healthy fats enhance absorption of fat-soluble vitamins from other foods." },
      { title: "Skin Health", description: "Vitamin E and healthy fats promote skin elasticity and hydration." },
    ],
    keyNutrients: ["Monounsaturated Fats", "Potassium", "Fiber", "Vitamin K", "Folate", "Vitamin E"],
    howToUse: ["Make guacamole", "Spread on toast", "Add to salads and bowls", "Blend into smoothies"],
    image: "/images/foods/hass-avocado.jpg",
    color: "green",
  },
  {
    name: "Hazelnut",
    slug: "hazelnut",
    letter: "H",
    category: "Nut",
    shortDescription: "Rich, buttery nut high in vitamin E and healthy fats",
    description: "Hazelnuts are flavorful tree nuts with a rich, buttery taste, prized for their high vitamin E content and heart-healthy fats.",
    healthBenefits: [
      { title: "Heart Health", description: "Oleic acid and proanthocyanidins support cardiovascular function." },
      { title: "Brain Health", description: "Vitamin E, folate, and manganese support cognitive function." },
      { title: "Antioxidant Protection", description: "Among the highest vitamin E content of any nut." },
    ],
    keyNutrients: ["Vitamin E", "Manganese", "Copper", "Folate", "Magnesium", "Healthy Fats"],
    howToUse: ["Eat raw or roasted", "Make hazelnut butter", "Add to baked goods and desserts", "Use hazelnut oil in dressings"],
    image: "/images/foods/hazelnut.jpg",
    color: "amber",
  },
  {
    name: "Hearts of Palm",
    slug: "hearts-of-palm",
    letter: "H",
    category: "Vegetable",
    shortDescription: "Tender, low-calorie vegetable harvested from palm trees",
    description: "Hearts of palm are the tender inner core harvested from certain palm trees, with a mild, slightly sweet flavor and crunchy texture.",
    healthBenefits: [
      { title: "Low-Calorie", description: "Very low in calories while providing satisfying crunch and mild flavor." },
      { title: "Heart Health", description: "Good source of potassium supporting blood pressure regulation." },
    ],
    keyNutrients: ["Potassium", "Fiber", "Iron", "Zinc", "Vitamin C", "Phosphorus"],
    howToUse: ["Add to salads", "Use as a vegan meat substitute", "Make plant-based pasta", "Grill or saute"],
    image: "/images/foods/hearts-of-palm.jpg",
    color: "stone",
  },
  {
    name: "Heirloom Tomatoes",
    slug: "heirloom-tomatoes",
    letter: "H",
    category: "Fruit",
    shortDescription: "Heritage tomato varieties with superior flavor and nutrients",
    description: "Heirloom tomatoes are open-pollinated heritage varieties known for their exceptional flavor, vibrant colors, and diverse shapes.",
    healthBenefits: [
      { title: "Heart Health", description: "Rich in lycopene, a powerful antioxidant that supports cardiovascular health." },
      { title: "Eye Health", description: "Contains beta-carotene and lutein for eye protection." },
      { title: "Skin Health", description: "Vitamin C and lycopene help protect skin from UV damage." },
    ],
    keyNutrients: ["Lycopene", "Vitamin C", "Vitamin K", "Potassium", "Folate", "Beta-Carotene"],
    howToUse: ["Eat fresh in caprese salads", "Make bruschetta", "Use in sandwiches", "Roast for sauces"],
    image: "/images/foods/heirloom-tomatoes.jpg",
    color: "red",
  },
  {
    name: "Honeydew Melon",
    slug: "honeydew-melon",
    letter: "H",
    category: "Fruit",
    shortDescription: "Sweet, pale green melon with hydrating and refreshing properties",
    description: "Honeydew melon is a pale green, sweet melon with smooth skin and refreshing juicy flesh, perfect for hydration.",
    healthBenefits: [
      { title: "Hydration", description: "Over 90% water content makes it excellent for hydration." },
      { title: "Immune Support", description: "Good source of vitamin C for immune function." },
      { title: "Heart Health", description: "Potassium content supports healthy blood pressure." },
    ],
    keyNutrients: ["Vitamin C", "Vitamin B6", "Potassium", "Fiber", "Folate"],
    howToUse: ["Eat fresh as a snack", "Add to fruit salads", "Blend into smoothies", "Wrap with prosciutto"],
    image: "/images/foods/honeydew-melon.jpg",
    color: "green",
  },
  {
    name: "Huckleberries",
    slug: "huckleberries",
    letter: "H",
    category: "Berry",
    shortDescription: "Wild berries similar to blueberries with intense antioxidant levels",
    description: "Huckleberries are small, wild berries similar to blueberries but with a more intense flavor, found in mountainous regions of North America.",
    healthBenefits: [
      { title: "Antioxidant Protection", description: "Contains anthocyanins and flavonoids with potent antioxidant properties." },
      { title: "Heart Health", description: "Polyphenols may help improve cardiovascular function." },
    ],
    keyNutrients: ["Vitamin C", "Anthocyanins", "Fiber", "Iron", "Manganese"],
    howToUse: ["Eat fresh when available", "Bake into pies and muffins", "Make jams and preserves", "Add to pancakes and waffles"],
    image: "/images/foods/huckleberries.jpg",
    color: "purple",
  },
]

export const allFoods: FoodData[] = [...fruits, ...vegetables, ...nutsAndSeeds, ...herbsAndSpices, ...grainsAndLegumes, ...specialtyFoods]

// ═══════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

export function getFoodBySlug(slug: string): FoodData | undefined {
  return allFoods.find((food) => food.slug === slug)
}

export function getFoodsByLetter(letter: string): FoodData[] {
  return allFoods.filter((food) => food.letter.toUpperCase() === letter.toUpperCase())
}

export function getRelatedFoods(currentSlug: string, limit = 3): FoodData[] {
  const current = getFoodBySlug(currentSlug)
  if (!current) return allFoods.slice(0, limit)

  // First try same letter, then same category, then any
  const sameLetter = allFoods.filter((f) => f.letter === current.letter && f.slug !== currentSlug)
  const sameCategory = allFoods.filter(
    (f) => f.category === current.category && f.slug !== currentSlug && f.letter !== current.letter,
  )

  const related = [...sameLetter, ...sameCategory]
  const unique = related.filter((f, i, arr) => arr.findIndex((x) => x.slug === f.slug) === i)

  if (unique.length >= limit) return unique.slice(0, limit)

  // Fill with other foods
  const remaining = allFoods.filter((f) => f.slug !== currentSlug && !unique.find((u) => u.slug === f.slug))
  return [...unique, ...remaining].slice(0, limit)
}

export function getAllLetters(): string[] {
  const letters = new Set(allFoods.map((f) => f.letter.toUpperCase()))
  return Array.from(letters).sort()
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Color utilities for dynamic theming
export function getFoodColorClasses(color: string) {
  const colorMap: Record<string, { bg: string; bgLight: string; text: string; textLight: string; border: string; gradient: string; badge: string }> = {
    green: {
      bg: "bg-green-600",
      bgLight: "bg-green-50",
      text: "text-green-900",
      textLight: "text-green-700",
      border: "border-green-200",
      gradient: "from-green-50 via-emerald-50 to-teal-50",
      badge: "bg-green-100 text-green-800 border-green-200",
    },
    red: {
      bg: "bg-red-600",
      bgLight: "bg-red-50",
      text: "text-red-900",
      textLight: "text-red-700",
      border: "border-red-200",
      gradient: "from-red-50 via-rose-50 to-pink-50",
      badge: "bg-red-100 text-red-800 border-red-200",
    },
    yellow: {
      bg: "bg-yellow-600",
      bgLight: "bg-yellow-50",
      text: "text-yellow-900",
      textLight: "text-yellow-700",
      border: "border-yellow-200",
      gradient: "from-yellow-50 via-amber-50 to-orange-50",
      badge: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    orange: {
      bg: "bg-orange-600",
      bgLight: "bg-orange-50",
      text: "text-orange-900",
      textLight: "text-orange-700",
      border: "border-orange-200",
      gradient: "from-orange-50 via-amber-50 to-yellow-50",
      badge: "bg-orange-100 text-orange-800 border-orange-200",
    },
    purple: {
      bg: "bg-purple-600",
      bgLight: "bg-purple-50",
      text: "text-purple-900",
      textLight: "text-purple-700",
      border: "border-purple-200",
      gradient: "from-purple-50 via-violet-50 to-fuchsia-50",
      badge: "bg-purple-100 text-purple-800 border-purple-200",
    },
    pink: {
      bg: "bg-pink-600",
      bgLight: "bg-pink-50",
      text: "text-pink-900",
      textLight: "text-pink-700",
      border: "border-pink-200",
      gradient: "from-pink-50 via-rose-50 to-red-50",
      badge: "bg-pink-100 text-pink-800 border-pink-200",
    },
    amber: {
      bg: "bg-amber-600",
      bgLight: "bg-amber-50",
      text: "text-amber-900",
      textLight: "text-amber-700",
      border: "border-amber-200",
      gradient: "from-amber-50 via-yellow-50 to-orange-50",
      badge: "bg-amber-100 text-amber-800 border-amber-200",
    },
    rose: {
      bg: "bg-rose-600",
      bgLight: "bg-rose-50",
      text: "text-rose-900",
      textLight: "text-rose-700",
      border: "border-rose-200",
      gradient: "from-rose-50 via-pink-50 to-red-50",
      badge: "bg-rose-100 text-rose-800 border-rose-200",
    },
    stone: {
      bg: "bg-stone-600",
      bgLight: "bg-stone-50",
      text: "text-stone-900",
      textLight: "text-stone-700",
      border: "border-stone-200",
      gradient: "from-stone-50 via-neutral-50 to-zinc-50",
      badge: "bg-stone-100 text-stone-800 border-stone-200",
    },
  }
  return colorMap[color] || colorMap.green
}
