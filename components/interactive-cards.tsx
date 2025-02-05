"use client";

import { useState } from "react";
import Image from "next/image"; // ✅ Usar Next.js Image
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Cursos en Vivo",
    description:
      "Conéctate con expertos y aprende técnicas avanzadas en clases interactivas.",
    image: "/images/hero.png",
    cta: "Ver Cursos",
    href: "/cursos",
  },
  {
    title: "Renders Profesionales",
    description: "Impulsa tus proyectos con renders fotorrealistas de alta calidad.",
    image: "/images/oficina.png",
    cta: "Comprar Renders",
    href: "https://wa.me/message/AUJ3TVUGXDLZH1",
  },
  {
    title: "Recursos Gratis",
    description: "Accede a herramientas y recursos premium sin costo alguno.",
    image: "/images/cocina.png",
    cta: "Explorar Gratis",
    href: "/tools",
  },
];

export function InteractiveCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="container py-8">
      <div className="relative p-6 bg-[rgba(0,10,22,0.42)] backdrop-blur-lg rounded-xl border border-white/20 md:p-12 lg:p-16">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative h-[400px] rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(index)} // ✅ Hace que en móviles también funcione
            >
              {/* Imagen de fondo con tamaño responsivo ✅ */}
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill" // ✅ Ajusta la imagen al tamaño del contenedor
                  objectFit="cover" // ✅ Evita que la imagen se distorsione
                  className="rounded-xl"
                  priority
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-300" />

              {/* Contenido de la tarjeta */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>

                {/* Mostrar la descripción y botón en móviles y al hacer hover */}
                {(hoveredIndex === index || typeof window !== "undefined" && window.innerWidth < 768) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-white/90">{card.description}</p>
                    <Button asChild>
                      <Link href={card.href}>{card.cta}</Link>
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
