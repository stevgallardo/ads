"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    image: "/images/hero1.png",
    type: "image",
    user: "@arch.design_studio_, con herramientas de RenderPro",
    video: "",
  },
  {
    image: "/images/oficina.png",
    type: "image",
    user: "@arch.design_studio_, con herramientas de RenderPro",
    video: "",
  },
  {
    image: "/images/cocina.png",
    type: "image",
    user: "@arch.design_studio_, con herramientas de RenderPro",
    video: "",
  },
  {
    image: "/images/maqueta.png",
    type: "image",
    user: "@arch.design_studio_, con herramientas de RenderPro",
    video: "",
  },
  {
    image: "/images/cocina2.png",
    type: "image",
    user: "@arch.design_studio_, con herramientas de RenderPro",
    video: "",
  },
  {
    image: "/images/sala.png",
    type: "image",
    user: "@arch.design_studio_, con herramientas de RenderPro",
    video: "",
  },
];

export function TestimonialCarousel() {
  return (
    <section className="container py-24">
      {/* Fondo del carrusel */}
      <div className="bg-[rgba(0,10,22,0.42)] backdrop-blur-lg rounded-xl border border-white/20 p-10 md:p-12 lg:p-16">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <Card className="overflow-hidden rounded-lg bg-black/40 border border-white/10 backdrop-blur-lg transition-all duration-150 hover:shadow-[0_0_30px_rgba(125,211,252,0.15)]">
                  {item.type === "image" ? (
                    <div className="relative w-full h-[420px] md:h-[540px] flex items-center justify-center group transition-transform duration-150">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`Testimonial ${index + 1}`}
                        width={960} // ✅ Tamaño adaptable
                        height={540}
                        className="w-full h-full object-cover rounded-lg transition-all duration-150 grayscale group-hover:grayscale-0"
                        priority
                      />
                      <div className="absolute inset-0 flex items-end justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        <div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white text-lg px-4 py-1 w-full text-center">
                          {item.user}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <video
                      className="h-[420px] md:h-[540px] w-full rounded-lg"
                      controls
                      poster="/placeholder.svg?height=400&width=600"
                    >
                      <source src={item.video} type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  )}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
