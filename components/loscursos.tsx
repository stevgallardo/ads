"use client";

import { useState } from "react";
//import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "RenderStarter",
    description: "Perfecto para estudiantes. De cero a Profesional en 2 semanas.",
    image: "/images/sala.png", // Asegúrate de usar una imagen representativa
    cta: "Ver Curso",
    href: "/cursos/render-starter",
  },
  {
    title: "RenderPro",
    description: "Perfecto para arquitectos y diseñadores. Crea renders Profesionales que venden.",
    image: "/images/hero1.png", // Asegúrate de usar una imagen representativa
    cta: "Ver Curso",
    href:"/cursos/render-pro",
  },
  {
    title: "RenderAdvanced",
    description: "Ideal para emprendedores. Domina el mercado con herramientas innovadoras.",
    image: "/images/cocina2.png", // Asegúrate de usar una imagen representativa
    cta: "Ver Curso",
    href: "/cursos/render-advanced",
  },
];

export function Loscursos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="container py-4">
      <div className="relative p-9">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative h-[600px] overflow-hidden rounded-xl transition-shadow duration-50 ${
                hoveredIndex === index
                  ? "shadow-[0_0_15px_3px_rgba(5,44,73,0.95)]"
                  : "shadow-none"
              }`}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-50"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 absolute inset-0 bg-gradient-to-b from-background/0 to-background rounded-xl" />
              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-4xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                {hoveredIndex === index && (
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
