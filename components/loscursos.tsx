"use client";

import { useState } from "react";
import Image from "next/image"; // ✅ Usamos Next.js Image
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "RenderStarter",
    description: "Perfecto para estudiantes. De cero a Profesional en 2 semanas.",
    image: "/images/sala.png",
    cta: "Ver Curso",
    href: "/cursos/render-starter",
  },
  {
    title: "RenderPro",
    description: "Perfecto para arquitectos y diseñadores. Crea renders Profesionales que venden.",
    image: "/images/hero1.png",
    cta: "Ver Curso",
    href: "/cursos/render-pro",
  },
  {
    title: "RenderAdvanced",
    description: "Ideal para emprendedores. Domina el mercado con herramientas innovadoras.",
    image: "/images/cocina2.png",
    cta: "Ver Curso",
    href: "/cursos/render-advanced",
  },
];

export function Loscursos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="container py-8">
      <div className="relative p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative h-[600px] overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(index)} // ✅ Hace que funcione en móviles también
            >
              {/* Imagen de fondo con Next.js Image ✅ */}
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 rounded-xl"
                priority
              />

              {/* Overlay con gradiente mejorado ✅ */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 rounded-xl transition-opacity duration-300" />

              {/* Contenido de la tarjeta */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-4xl font-bold text-white mb-2">
                  {card.title}
                </h3>

                {/* Mostrar contenido en móviles y al hacer hover ✅ */}
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
