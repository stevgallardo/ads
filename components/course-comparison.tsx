"use client";

import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

const features = [
  { name: "Modelado en SketchUp", starter: true, pro: true, advanced: true },
  { name: "Renderizado con V-Ray", starter: true, pro: true, advanced: true },
  { name: "Post-producción Photoshop", starter: true, pro: true, advanced: true },
  { name: "Herramientas de IA", starter: false, pro: true, advanced: true },
  { name: "Página Web Portfolio", starter: false, pro: true, advanced: true },
  { name: "Marketing Digital", starter: false, pro: true, advanced: true },
  { name: "Recorridos Virtuales", starter: false, pro: false, advanced: true },
  { name: "Renders 360°", starter: false, pro: false, advanced: true },
  { name: "Marca personal", starter: false, pro: false, advanced: true },
];

export function CourseComparison() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="py-16">
      {/* Contenedor general */}
      <div className="container mx-auto px-4 md:px-9">
        {/* Galería de imágenes */}
        <div className="grid gap-6 sm:gap-10 md:grid-cols-3">
          {[
            { href: "/cursos/render-starter", image: "/images/ctarenderstarter.png", alt: "RenderStarter" },
            { href: "/cursos/render-pro", image: "/images/ctarenderpro.png", alt: "RenderPro" },
            { href: "/cursos/render-advanced", image: "/images/ctarenderadvanced.png", alt: "RenderAdvanced" },
          ].map((course, index) => (
            <Link key={index} href={course.href}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={course.image}
                  alt={course.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Botón para mostrar/ocultar la tabla comparativa */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowComparison((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus:outline-none"
          >
            Compara
            <ChevronDown className={`transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`} size={20} />
          </button>
        </div>

        {/* Tabla comparativa */}
        {showComparison && (
          <div className="mt-8">
            {/* Vista en Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <div className="min-w-[600px] rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px] text-lg">Característica</TableHead>
                      <TableHead className="text-center text-lg">Starter</TableHead>
                      <TableHead className="text-center text-lg">Pro</TableHead>
                      <TableHead className="text-center text-lg">Advanced</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {features.map((feature) => (
                      <TableRow key={feature.name}>
                        <TableCell className="font-medium text-lg">{feature.name}</TableCell>
                        {[feature.starter, feature.pro, feature.advanced].map((included, i) => (
                          <TableCell key={i} className="text-center text-lg">
                            {included ? <Check className="mx-auto h-5 w-5 text-blue-500" /> : <X className="mx-auto h-5 w-5 text-gray-300" />}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Vista en Móviles (Diseño Compacto) */}
            <div className="md:hidden mt-6">
              {features.map((feature) => (
                <div key={feature.name} className="border border-gray-700 rounded-lg p-4 mb-3">
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                  <div className="grid grid-cols-3 gap-2 mt-2 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium">Starter</span>
                      {feature.starter ? <Check className="h-5 w-5 text-blue-500" /> : <X className="h-5 w-5 text-gray-300" />}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium">Pro</span>
                      {feature.pro ? <Check className="h-5 w-5 text-blue-500" /> : <X className="h-5 w-5 text-gray-300" />}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium">Advanced</span>
                      {feature.advanced ? <Check className="h-5 w-5 text-blue-500" /> : <X className="h-5 w-5 text-gray-300" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
