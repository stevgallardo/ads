"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const featuredProducts = [
  {
    name: "Pack de Texturas Premium",
    image: "/placeholder.svg?height=400&width=600",
    price: 499,
  },
  {
    name: "Modelos 3D Arquitectónicos",
    image: "/placeholder.svg?height=400&width=600",
    price: 799,
  },
  {
    name: "Plugin V-Ray Optimizador",
    image: "/placeholder.svg?height=400&width=600",
    price: 299,
  },
  {
    name: "Pack de Materiales PBR",
    image: "/placeholder.svg?height=400&width=600",
    price: 599,
  },
  {
    name: "Escenas Pre-configuradas",
    image: "/placeholder.svg?height=400&width=600",
    price: 899,
  },
]

export function ProductScroller() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold">Productos Destacados</h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="w-[300px] shrink-0">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="mt-1 font-bold">${product.price} MXN</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}

