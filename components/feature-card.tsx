import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  subtitle: string
  href: string
  imageSrc: string
}

export function FeatureCard({ title, subtitle, href, imageSrc }: FeatureCardProps) {
  return (
    <Link href={href}>
      <Card className="group relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider opacity-80">
            {subtitle}
          </h3>
          <p className="text-2xl font-bold">{title}</p>
          <span className="mt-4 inline-flex items-center text-sm font-medium">
            Ir
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

