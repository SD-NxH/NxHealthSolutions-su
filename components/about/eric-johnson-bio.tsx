"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { BookOpen, GraduationCap, Lightbulb, TrendingUp } from "lucide-react"

function BioSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">{title}</h2>
      {children}
    </motion.section>
  )
}

function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-base md:text-lg leading-relaxed text-muted-foreground space-y-5 text-pretty ${className}`}>
      {children}
    </div>
  )
}

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-brand bg-brand-lighter rounded-r-lg px-5 py-5 md:px-6">
      <div className="text-lg md:text-xl font-medium text-foreground leading-relaxed space-y-3">{children}</div>
    </blockquote>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 w-2 h-2 bg-brand rounded-full flex-shrink-0" aria-hidden="true" />
          <span className="text-base text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  )
}

const philosophyIdeas = [
  { icon: BookOpen, title: "Education", text: "creates awareness." },
  { icon: Lightbulb, title: "Awareness", text: "creates opportunity." },
  { icon: TrendingUp, title: "Consistent action", text: "creates change." },
]

const education = [
  {
    degree: "Doctorate in Holistic Nutrition, Emphasis in Nutritional Medicine",
    school: "Rockwell School of Holistic Medicine",
  },
  {
    degree: "Master of Science in Health Science & Nutrition",
    school: "University of Texas Rio Grande Valley",
  },
  {
    degree: "Bachelor of Science in Exercise Science",
    school: "Texas Wesleyan University",
  },
]

const additionalCredentials = [
  "Doctor of Holistic Nutrition",
  "Doctor of Holistic Medicine",
  "Health EC–12",
  "Physical Education EC–12",
  "American Council on Exercise (ACE) Certified Personal Trainer",
  "American Heart Association CPR & AED",
]

export function EricJohnsonBio() {
  return (
    <>
      <BioSection title="My Journey: From Movement to Medicine">
        <Prose>
          <p className="text-lg md:text-xl font-medium text-foreground">
            My name is Eric Johnson, and I believe better health should be within everyone’s reach.
          </p>
          <p>
            Born in Arkansas and raised largely in Texas, my journey into health began with a love for sports,
            especially basketball. What started as a passion for movement and physical performance eventually grew
            into something much greater: a desire to understand the human body and help people live healthier, more
            fulfilling lives.
          </p>
          <p>
            At 18, I began working as a personal trainer. I loved helping people become stronger, improve their
            fitness, and accomplish goals they once thought were impossible. But as I continued working with
            individuals, I began asking deeper questions.
          </p>
          <p>
            Why were so many people struggling with their health despite exercising? Why were fatigue, chronic
            illness, and poor nutrition becoming so common? And what could we do to help people improve their health
            before these challenges developed?
          </p>
          <p className="font-medium text-foreground">Those questions changed the direction of my life.</p>
          <p>
            I earned my Bachelor of Science in Exercise Science from Texas Wesleyan University, where a nutrition
            course opened my eyes to the powerful relationship between food and human health. That experience
            inspired me to pursue my Master of Science in Health Science and Nutrition at the University of Texas Rio
            Grande Valley.
          </p>
          <p>
            My curiosity continued to grow, leading me to complete my doctorate in holistic nutrition with an
            emphasis in Nutritional Medicine at the Rockwell School of Holistic Medicine.
          </p>
          <p>
            Through these experiences, I developed a greater appreciation for the relationship between nutrition,
            movement, the mind, our environment, and the body’s natural processes.
          </p>
          <p>
            Today, my work is centered on helping people understand these connections and recognize the influence
            their everyday choices can have on their quality of life.
          </p>
        </Prose>
        <PullQuote>
          <p>I don’t simply want people to follow health advice.</p>
          <p>I want people to understand their health well enough to make informed decisions for themselves.</p>
        </PullQuote>
      </BioSection>

      <BioSection title="Why I Created NxHealth Solutions">
        <Prose>
          <p>
            NxHealth Solutions began in my college apartment in 2018 with a simple idea: helping people improve their
            quality of life through better health.
          </p>
          <p>Over the years, that idea has grown into a mission.</p>
          <p>
            I’ve witnessed how chronic health conditions, limited access to nutritious food, and a lack of practical
            health education can affect individuals and entire families.
          </p>
          <p>
            I’ve also had the privilege of working with people who made meaningful changes to their health simply by
            gaining the knowledge, guidance, and confidence to begin.
          </p>
          <p>These experiences taught me something important.</p>
        </Prose>
        <PullQuote>
          <p>
            Health is not just about what happens in a doctor’s office or a gym. It is shaped by how we eat, how we
            move, how we rest, how we think, and the environments in which we live.
          </p>
        </PullQuote>
        <Prose>
          <p>NxHealth Solutions exists to help people understand these connections and turn knowledge into action.</p>
          <p>
            Through health education, nutrition guidance, lifestyle coaching, and community programs, my goal is to
            make better health more understandable, approachable, and sustainable.
          </p>
          <p>Because improving your health should not require completely changing who you are.</p>
          <p className="font-medium text-foreground">
            Sometimes, it begins with understanding what your body needs and making one better choice at a time.
          </p>
        </Prose>
      </BioSection>

      <BioSection title="My Philosophy: Food as Medicine">
        <Prose>
          <p>I believe food is one of the most powerful tools we have to support our health.</p>
          <p>
            Every day, the foods we consume provide our bodies with nutrients needed for energy, growth, repair, and
            normal biological function.
          </p>
          <p>
            Yet many people have become disconnected from what they eat, where their food comes from, and how their
            dietary habits influence their well-being.
          </p>
          <p>
            My approach emphasizes real, whole foods, plant-forward nutrition, movement, restorative sleep, emotional
            well-being, and sustainable lifestyle practices.
          </p>
          <p>
            I encourage people to eat more fruits, vegetables, beans, legumes, nuts, seeds, and other nourishing
            foods while becoming more mindful of heavily processed products.
          </p>
          <p>But I also recognize that health is personal.</p>
          <p>
            Our cultures, traditions, finances, environments, and experiences all influence how we live and eat.
          </p>
          <p>
            I don’t believe healthy living should be restrictive, joyless, or built around perfection. I believe it
            should give us more freedom to enjoy our lives.
          </p>
          <p>My philosophy is rooted in three important ideas:</p>
        </Prose>

        <ol className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {philosophyIdeas.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex sm:flex-col items-center sm:items-start gap-4 p-5 bg-brand-lighter rounded-xl">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand text-brand-foreground flex-shrink-0">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <p className="text-base text-foreground">
                <span className="font-semibold">{title}</span> {text}
              </p>
            </li>
          ))}
        </ol>

        <Prose className="mt-8">
          <p>
            I want people to understand not only what choices may support their health, but why those choices matter.
          </p>
          <p className="font-medium text-foreground">That understanding is where empowerment begins.</p>
        </Prose>
      </BioSection>

      <BioSection title="Beyond the Individual: Operation Free Food">
        <Prose>
          <p>My vision for better health extends far beyond individual coaching.</p>
          <p>
            I believe access to nutritious food should not be a privilege reserved for those who can afford it.
          </p>
          <p>
            That belief inspired Operation Free Food, a growing community-focused initiative centered on learning to
            grow food, reconnecting people with the land, and creating opportunities to share fresh produce.
          </p>
          <p>
            The mission begins with something simple: learning to grow enough food to nourish myself and my family.
          </p>
          <p>From there, I want to expand that knowledge and those resources to serve more people.</p>
          <p>
            I envision community spaces where individuals and families can grow, harvest, learn, contribute, and
            share food without financial barriers.
          </p>
          <p>
            Places where people not only receive nourishment but also gain the knowledge and skills to provide it for
            themselves and others.
          </p>
        </Prose>
        <PullQuote>
          <p>Because improving community health requires more than telling people to eat better.</p>
          <p>We must also help create environments where better choices are possible.</p>
        </PullQuote>
        <Prose>
          <p>
            My hope is that Operation Free Food becomes an idea that others can adopt, improve, and bring into their
            own communities.
          </p>
          <p className="font-medium text-foreground">The more people we can feed, the greater the impact we can make.</p>
        </Prose>
      </BioSection>

      <BioSection title="Why I Do This">
        <Prose>
          <p>
            Throughout my career, I’ve had the opportunity to work with children, students, athletes, adults, and
            older individuals from many different walks of life.
          </p>
          <p>
            Some wanted to become stronger. Others wanted more energy, greater confidence, better nutrition, or simply
            the ability to enjoy everyday activities again.
          </p>
          <p>
            What continues to inspire me is witnessing what happens when people begin to believe they can make
            meaningful changes in their lives.
          </p>
          <p>
            My mission is not to create dependence on another program, product, or professional.
          </p>
          <p>
            It is to empower people with knowledge and practical tools they can carry with them for the rest of their
            lives.
          </p>
          <p>
            Whether I’m coaching someone, teaching a class, investigating food ingredients, growing produce, or having
            a conversation about health, the purpose remains the same.
          </p>
          <p>To help people recognize that they have more influence over their health than they may realize.</p>
          <p>
            I believe healthier individuals can help build healthier families, healthier communities, and ultimately
            a healthier world.
          </p>
          <p className="font-medium text-foreground">And that is a mission I intend to spend my life pursuing.</p>
        </Prose>
      </BioSection>

      <BioSection title="Credentials & Background">
        <Prose>
          <p>
            My professional background brings together exercise science, health science, holistic nutrition,
            education, and hands-on experience helping people improve their well-being.
          </p>
          <p>
            Each stage of my journey has strengthened my understanding of health and shaped the way I approach
            education, prevention, and lifestyle change.
          </p>
        </Prose>

        <h3 className="mt-10 mb-4 text-xl font-semibold text-foreground">Education</h3>
        <ul className="space-y-3">
          {education.map(({ degree, school }) => (
            <li key={degree} className="flex items-start gap-4 p-4 md:p-5 bg-card border border-border rounded-xl">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-lighter text-brand flex-shrink-0">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground leading-snug">{degree}</p>
                <p className="text-sm md:text-base text-muted-foreground mt-1">{school}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 mb-4 text-xl font-semibold text-foreground">Professional Background</h3>
        <Prose>
          <p>
            My experience includes personal training, health and lifestyle coaching, fitness assessments, group
            exercise, nutrition education, clinical health & lifestyle advisory, clinical nutrition, and classroom
            instruction.
          </p>
          <p>
            As a health educator, I’ve worked with students to develop an understanding of physical wellness,
            nutrition, and healthy behaviors. As a coach, I’ve helped individuals build sustainable routines that
            support their personal goals.
          </p>
          <p>
            My work also extends into community education, preventive wellness, and health-focused initiatives
            designed to make practical information more accessible.
          </p>
        </Prose>

        <h3 className="mt-10 mb-4 text-xl font-semibold text-foreground">Additional Credentials</h3>
        <div className="bg-card border border-border rounded-xl p-5 md:p-8">
          <BulletList items={additionalCredentials} />
        </div>

        <Prose className="mt-8">
          <p>
            Beyond my formal education and professional experience, my background includes collegiate basketball,
            youth mentorship, community service, and food pantry volunteering.
          </p>
          <p>
            These experiences have reinforced my belief that health is about more than the individual. It is
            connected to our families, our communities, and the opportunities we create for one another.
          </p>
          <p className="font-medium text-foreground">
            Together, these experiences form the foundation of NxHealth Solutions and my lifelong commitment to
            helping people live healthier, more fulfilling lives.
          </p>
        </Prose>
      </BioSection>
    </>
  )
}
