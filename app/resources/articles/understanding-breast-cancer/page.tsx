import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BreastCancerArticlePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src="/breast-cancer-awareness.png"
          alt="Breast Cancer Awareness"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          <div className="container mx-auto px-4 py-8 flex flex-row items-center justify-between relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-serif text-white mb-2">
                Understanding Breast Cancer: A Holistic Approach to Management
              </h1>
              <div className="flex items-center text-white/80 text-sm">
                <span>May 10, 2023</span>
                <span className="mx-2">•</span>
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>Health</span>
              </div>
            </div>
            <div className="hidden md:block w-64 h-64 bg-pink-400 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-32 h-32">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/resources/articles" className="inline-flex items-center text-green-600 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
        </Link>

        <article className="prose prose-green max-w-none">
          <p className="lead text-xl text-gray-700 mb-6">
            Breast cancer is a disease characterized by the uncontrolled growth of abnormal cells in the breast tissue.
            This occurs when breast cells undergo mutations, becoming cancerous and subsequently multiplying to form
            tumors. While it is one of the most common cancers affecting women, particularly those aged 50 and older, it
            is important to recognize that breast cancer can also develop in younger women and men.
          </p>

          <p>
            A significant proportion of breast cancer cases, approximately 80%, are invasive, meaning the tumor has the
            potential to spread from its original location in the breast to other parts of the body. The understanding
            of this disease has evolved considerably, revealing a complex interplay of factors that contribute to its
            development and progression.
          </p>

          <h2 className="text-2xl font-serif font-medium text-gray-900 mt-8 mb-4">Types of Breast Cancer</h2>

          <p>
            Breast cancer is not a singular entity but rather encompasses a diverse group of diseases, each with its own
            characteristics and requiring tailored management strategies. The most common type is invasive ductal
            carcinoma (IDC), which originates in the milk ducts and spreads to the surrounding breast tissue. The second
            most common is invasive lobular carcinoma (ILC), which begins in the milk-producing lobules and can spread
            to nearby tissue. ILC can be more challenging to detect on mammograms and may spread to unusual sites in the
            body.
          </p>

          <p>
            Ductal carcinoma in situ (DCIS) is a non-invasive condition where cancerous cells are confined to the milk
            ducts and have not spread to other breast tissues. Other notable types include triple-negative breast cancer
            (TNBC), an aggressive form that lacks estrogen, progesterone, and HER2 receptors, and inflammatory breast
            cancer (IBC), a rare and rapidly progressing cancer that often presents with symptoms of inflammation rather
            than a distinct lump. Additionally, there are less common types such as Paget disease, angiosarcoma, and
            phyllodes tumors.
          </p>

          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Type of Breast Cancer</TableHead>
                  <TableHead className="w-1/3">Description</TableHead>
                  <TableHead className="w-1/3">Key Characteristics</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Invasive Ductal Carcinoma (IDC)</TableCell>
                  <TableCell>Starts in milk ducts and spreads to nearby tissue</TableCell>
                  <TableCell>Most common type</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Invasive Lobular Carcinoma (ILC)</TableCell>
                  <TableCell>Begins in milk-producing glands (lobules) and often spreads</TableCell>
                  <TableCell>Second most common; harder to detect on mammograms; may spread to unusual sites</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ductal Carcinoma in Situ (DCIS)</TableCell>
                  <TableCell>Cancer cells in milk ducts that haven't spread beyond</TableCell>
                  <TableCell>Non-invasive or pre-invasive</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Triple-Negative Breast Cancer (TNBC)</TableCell>
                  <TableCell>Aggressive invasive cancer lacking ER, PR, and HER2 receptors</TableCell>
                  <TableCell>Aggressive; spreads quickly</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Inflammatory Breast Cancer (IBC)</TableCell>
                  <TableCell>Rare, fast-growing cancer that looks like a rash</TableCell>
                  <TableCell>Aggressive; often diagnosed at a locally advanced stage</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="text-2xl font-serif font-medium text-gray-900 mt-8 mb-4">Stages of Breast Cancer</h2>

          <p>
            The progression of breast cancer is understood through staging and grading systems. Staging describes the
            extent of the cancer in the body, including the size of the tumor and whether it has spread to lymph nodes
            or distant sites. Stages range from 0 to IV, with higher numbers indicating more advanced disease.
          </p>

          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Stage</TableHead>
                  <TableHead className="w-1/2">Description</TableHead>
                  <TableHead className="w-1/4">Key Features</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">0</TableCell>
                  <TableCell>Non-invasive cancer; cancer cells are confined to the ducts or lobules.</TableCell>
                  <TableCell>Cancer has not spread outside the ducts or lobules.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">I</TableCell>
                  <TableCell>
                    Invasive cancer; a small tumor is present and may have spread to a tiny area in the sentinel lymph
                    node.
                  </TableCell>
                  <TableCell>
                    Tumor is 2 cm or smaller; may or may not have spread to 1-3 nearby lymph nodes. Divided into IA and
                    IB.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">II</TableCell>
                  <TableCell>
                    Invasive cancer; the tumor is larger than in Stage I and/or has spread to a few nearby lymph nodes.
                  </TableCell>
                  <TableCell>
                    Tumor is larger than 2 cm but not more than 5 cm, or cancer has spread to 1-3 axillary lymph nodes.
                    Divided into IIA and IIB.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">III</TableCell>
                  <TableCell>
                    Invasive cancer; the tumor is larger or growing into nearby tissues, or the cancer has spread to
                    many nearby lymph nodes.
                  </TableCell>
                  <TableCell>
                    Tumor is larger than 5 cm, or cancer has spread to 4-9 nearby lymph nodes, or has grown into the
                    chest wall or skin. Divided into IIIA, IIIB, and IIIC. Inflammatory breast cancer is often included.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">IV</TableCell>
                  <TableCell>
                    Invasive cancer that has spread (metastasized) beyond the breast and nearby lymph nodes to other
                    parts of the body, such as the bones, lungs, liver, or brain.
                  </TableCell>
                  <TableCell>Cancer has spread to distant organs.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="text-2xl font-serif font-medium text-gray-900 mt-8 mb-4">
            Plant-Based Diet and Breast Cancer
          </h2>

          <p>
            A plant-based vegan diet shows therapeutic potential in breast cancer management. Consuming a healthy
            plant-based diet, rich in vegetables, fruits, and whole grains, is associated with a lower risk of
            developing breast cancer, especially in postmenopausal women. Women with the highest intake of these foods
            have shown significantly lower odds of the disease.
          </p>

          <p>
            It is important to note that diet quality is crucial; unhealthy plant-based diets may even increase risk.
            Plant-based diets may also reduce the risk of recurrence and mortality in breast cancer survivors. Vegan
            diets, while promising, are still being studied to determine if they offer superior benefits compared to
            other plant-focused diets.
          </p>

          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Food Group</TableHead>
                  <TableHead className="w-1/2">Examples</TableHead>
                  <TableHead className="w-1/4">Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Vegetables</TableCell>
                  <TableCell>Broccoli, spinach, carrots, bell peppers, kale</TableCell>
                  <TableCell className="text-green-600 font-medium">Eat More</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fruits</TableCell>
                  <TableCell>Berries, apples, bananas, oranges, avocados</TableCell>
                  <TableCell className="text-green-600 font-medium">Eat More</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Whole Grains</TableCell>
                  <TableCell>Quinoa, brown rice, oats, whole-wheat bread, farro</TableCell>
                  <TableCell className="text-green-600 font-medium">Eat More</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Legumes</TableCell>
                  <TableCell>Lentils, chickpeas, black beans, kidney beans, edamame</TableCell>
                  <TableCell className="text-green-600 font-medium">Eat More</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nuts & Seeds</TableCell>
                  <TableCell>Almonds, walnuts, chia seeds, flaxseeds, sunflower seeds</TableCell>
                  <TableCell className="text-green-600 font-medium">Eat More</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Processed Meats</TableCell>
                  <TableCell>Bacon, sausage, deli meats</TableCell>
                  <TableCell className="text-red-600 font-medium">Limit</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Red Meat</TableCell>
                  <TableCell>Beef, lamb, pork</TableCell>
                  <TableCell className="text-red-600 font-medium">Limit</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dairy</TableCell>
                  <TableCell>Milk, cheese, yogurt (dairy-based)</TableCell>
                  <TableCell className="text-red-600 font-medium">Limit</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="text-2xl font-serif font-medium text-gray-900 mt-8 mb-4">
            Integrative Therapies for Breast Cancer
          </h2>

          <p>
            A holistic approach to breast cancer management involves integrating conventional medical treatments with
            complementary therapies, a field known as integrative oncology. This patient-centered approach aims to
            optimize health, quality of life, and clinical outcomes by addressing the mind, body, and spirit.
          </p>

          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Therapy</TableHead>
                  <TableHead className="w-3/4">Potential Benefits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Acupuncture</TableCell>
                  <TableCell>
                    Relieves nausea, controls hot flashes, reduces vomiting, reduces pain, helps decrease nausea, may
                    help with fatigue
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Massage Therapy</TableCell>
                  <TableCell>
                    Boosts immunity, eases anxiety, pain, and fatigue, relieves muscle tension and stiffness, relaxes
                    mind and body, improves circulation, reduces pain, improves scar tissue
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Yoga</TableCell>
                  <TableCell>
                    Relieves stress, anxiety, and pain, enhances quality of life, increases energy and vitality,
                    improves sleep, reduces fatigue
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Meditation</TableCell>
                  <TableCell>
                    Relieves stress, anxiety, and pain, enhances quality of life, reduces fatigue, helps with sleep,
                    promotes relaxation and well-being
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Art Therapy</TableCell>
                  <TableCell>Relieves stress, anxiety, and pain, helps process thoughts and emotions</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="text-2xl font-serif font-medium text-gray-900 mt-8 mb-4">Stress Management Techniques</h2>

          <p>
            Managing stress is vital for breast cancer patients and survivors. Various techniques can help reduce stress
            and improve quality of life during and after treatment.
          </p>

          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Technique</TableHead>
                  <TableHead className="w-1/4">Description</TableHead>
                  <TableHead className="w-1/2">Potential Benefits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Mindfulness-Based Stress Reduction (MBSR)</TableCell>
                  <TableCell>Paying attention to the present moment without judgment</TableCell>
                  <TableCell>
                    Reduces stress, anxiety, fear of recurrence, and fatigue; improves quality of life
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Meditation</TableCell>
                  <TableCell>Focusing the mind to achieve a state of calm and relaxation</TableCell>
                  <TableCell>
                    Reduces stress, anxiety, and pain; improves mood and well-being; enhances quality of life; helps
                    with sleep
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Yoga</TableCell>
                  <TableCell>Combines physical postures, breathing techniques, and meditation or relaxation</TableCell>
                  <TableCell>
                    Reduces stress and anxiety; improves mood, energy, and quality of life; may help with sleep and
                    fatigue
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Exercise</TableCell>
                  <TableCell>
                    Physical activity ranging from walking to more vigorous forms like running or swimming
                  </TableCell>
                  <TableCell>
                    Reduces stress and anxiety; improves mood and energy levels; helps manage fatigue and improve sleep;
                    may lower risk of recurrence
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="text-2xl font-serif font-medium text-gray-900 mt-8 mb-4">Conclusion</h2>

          <p>
            A comprehensive strategy for breast health involves understanding the complexities of the disease, embracing
            a holistic approach to management, and empowering individuals through informed lifestyle choices and
            connections to supportive resources. The integration of a plant-based vegan diet and various lifestyle
            interventions alongside conventional medical care holds significant promise for improving outcomes and
            enhancing the quality of life for those affected by breast cancer. Personalized approaches, guided by
            healthcare professionals and reputable information sources, are essential for navigating this journey and
            fostering a hopeful outlook.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-medium text-green-800 mb-3">Resources for Support</h3>
            <p className="text-green-700 mb-4">
              Connecting with breast cancer organizations and support networks provides invaluable resources, emotional
              support, and community. Here are some trusted organizations:
            </p>
            <ul className="list-disc pl-5 text-green-700 space-y-2">
              <li>American Cancer Society</li>
              <li>National Breast Cancer Foundation</li>
              <li>Breast Cancer Research Foundation</li>
              <li>Susan G. Komen</li>
            </ul>
          </div>
        </article>

        <Separator className="my-8" />

        {/* Author Info */}
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src="/ej-profile-photo.jpg"
              alt="Eric Johnson, Founder of NxHealth Solutions"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">Eric Johnson M.S.</p>
            <p className="text-sm text-gray-500">Founder & Nutrition Specialist</p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-xl font-serif font-medium text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/articles/power-up-with-plants" className="group">
              <div className="relative h-48 w-full mb-3 overflow-hidden rounded-lg">
                <Image
                  src="/colorful-fruits-vegetables.png"
                  alt="The Power of Plant-Based Eating"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                The Power of Plant-Based Eating
              </h4>
              <p className="text-sm text-gray-500">6 min read</p>
            </Link>
            <Link href="/resources/foods/dark-chocolate" className="group">
              <div className="relative h-48 w-full mb-3 overflow-hidden rounded-lg">
                <Image
                  src="/dark-chocolate-still-life.png"
                  alt="Dark Chocolate: A Healthy Indulgence"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                Dark Chocolate: A Healthy Indulgence
              </h4>
              <p className="text-sm text-gray-500">5 min read</p>
            </Link>
            <Link href="/resources/articles/understanding-caloric-needs" className="group">
              <div className="relative h-48 w-full mb-3 overflow-hidden rounded-lg">
                <Image
                  src="/balanced-diet-calculation.png"
                  alt="Understanding Your Caloric Needs"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                Decoding Your Fuel: Understanding Your Caloric Needs
              </h4>
              <p className="text-sm text-gray-500">7 min read</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
