import { FeatureCard } from "@/components/feature-card"

export function FeatureSection() {
  return (
    <section className="container py-16">
      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          title="CURSOS"
          subtitle="Aprendizaje"
          href="/cursos"
          imageSrc="/placeholder.svg?height=400&width=600"
        />
        <FeatureCard
          title="RECURSOS"
          subtitle="Material"
          href="/recursos"
          imageSrc="/placeholder.svg?height=400&width=600"
        />
        <FeatureCard
          title="PODCAST"
          subtitle="Entretenimiento"
          href="/podcast"
          imageSrc="/placeholder.svg?height=400&width=600"
        />
      </div>
    </section>
  )
}

