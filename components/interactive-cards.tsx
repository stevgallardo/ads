"use client";

import { useState } from "react";
//import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Cursos en Vivo",
    description: "Conéctate con expertos y aprende técnicas avanzadas en clases interactivas.",
    image: "/images/hero.png", // Asegúrate de usar una imagen representativa
    cta: "Ver Cursos",
    href: "/cursos",
  },
  {
    title: "Renders Profesionales",
    description: "Impulsa tus proyectos con renders fotorrealistas de alta calidad.",
    image: "/images/oficina.png", // Asegúrate de usar una imagen representativa
    cta: "Comprar Renders",
    href:"https://wa.me/message/AUJ3TVUGXDLZH1",
  },
  {
    title: "Recursos Gratis",
    description: "Accede a herramientas y recursos premium sin costo alguno.",
    image: "/images/cocina.png", // Asegúrate de usar una imagen representativa
    cta: "Explorar Gratis",
    href: "/tools",
  },
];

export function InteractiveCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="container py-4">
      <div className="relative p-1 bg-[rgba(0,10,22,0.42)] backdrop-blur-lg rounded-xl border border-white/20 p-10 md:p-12 lg:p-16">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative h-[400px] overflow-hidden rounded-xl transition-shadow duration-50 ${
                hoveredIndex === index
                  ? "shadow-[0_0_15px_3px_rgba(5,44,73,0.81)]"
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
              <div className="absolute inset-0 bg-black/60" />
              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
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
