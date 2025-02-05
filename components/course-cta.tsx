"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { Check } from "lucide-react"

interface CourseCTAProps {
  price: number
  originalPrice: number
  discount: number
  includes?: string[]
  videoLink: string
  buyLink: string   // NUEVA propiedad para el enlace de "Comprar ahora"
}

export function CourseCTA({ price, originalPrice, discount, includes, videoLink, buyLink }: CourseCTAProps) {
  const [videoVisible, setVideoVisible] = useState(false)

  return (
    <section className="container py-16 relative">
      {/* Fila superior con las dos tarjetas */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Tarjeta "¿Qué incluye?" a la izquierda */}
        {includes && includes.length > 0 && (
          <Card className="flex-1 bg-[rgba(0,10,22,0.9)] backdrop-blur-lg rounded-xl border border-white/20 p-4 md:p-6 lg:p-8">
            <CardHeader>
              <h3 className="text-2xl font-bold">¿Qué incluye?</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Tarjeta de precio a la derecha */}
        <Card className="bg-[rgba(0,10,22,0.9)] backdrop-blur-lg rounded-xl border border-white/20">
          <CardHeader>
            <div className="text-center">
              <div className="flex items-baseline justify-center text-5xl font-bold">
                ${price.toLocaleString()}
                <span className="text-sm font-normal text-muted-foreground"> MXN</span>
              </div>
              {discount > 0 && (
                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className="text-sm line-through text-muted-foreground">
                    ${originalPrice.toLocaleString()} MXN
                  </span>
                  <Badge variant="destructive">-{discount}%</Badge>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Precio especial por tiempo limitado
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button asChild size="lg" className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-800 rounded-xl transition">
              <Link href={buyLink}>COMPRAR AHORA</Link>
            </Button>
            <Button
              onClick={() => setVideoVisible(true)}
              size="lg"
              className="w-full rounded-xl"
            >
              VER VIDEO
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              30 días de garantía de devolución de dinero
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Modal de video (pop-up a la derecha) */}
      {videoVisible && (
        <div
          className="fixed top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-black to-transparent flex items-center justify-center z-50"
          onClick={() => setVideoVisible(false)}
        >
          <div
            className="relative w-[360px] h-[640px] bg-black rounded-3xl shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full object-cover"
              src={videoLink}
              title="Video del curso"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition"
              onClick={() => setVideoVisible(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
