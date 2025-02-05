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
  {
    name: "Modelado en SketchUp",
    starter: true,
    pro: true,
    advanced: true,
  },
  {
    name: "Renderizado con V-Ray",
    starter: true,
    pro: true,
    advanced: true,
  },
  {
    name: "Post-producción Photoshop",
    starter: true,
    pro: true,
    advanced: true,
  },
  {
    name: "Herramientas de IA",
    starter: false,
    pro: true,
    advanced: true,
  },
  {
    name: "Página Web Portfolio",
    starter: false,
    pro: true,
    advanced: true,
  },
  {
    name: "Marketing Digital",
    starter: false,
    pro: true,
    advanced: true,
  },
  {
    name: "Recorridos Virtuales",
    starter: false,
    pro: false,
    advanced: true,
  },
  {
    name: "Renders 360°",
    starter: false,
    pro: false,
    advanced: true,
  },
  {
    name: "Marca personal",
    starter: false,
    pro: false,
    advanced: true,
  },
];

export function CourseComparison() {
  const [showComparison, setShowComparison] = useState(false);

  const toggleComparison = () => {
    setShowComparison((prev) => !prev);
  };

  return (
    <section className="py-16">
      {/* Contenedor general */}
      <div className="container mx-auto px-9">
        {/* Galería de imágenes */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* RenderStarter */}
          <Link href="/cursos/render-starter">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/ctarenderstarter.png"
                alt="RenderStarter"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-xl font-bold text-white"></span>
              </div>
            </div>
          </Link>
          {/* RenderPro */}
          <Link href="/cursos/render-pro">
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/ctarenderpro.png"
                alt="RenderPro"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-xl font-bold text-white"></span>
              </div>
            </div>
          </Link>
          {/* RenderAdvanced */}
          <Link href="/cursos/render-advanced">
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/ctarenderadvanced.png"
                alt="RenderAdvanced"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center rounded-xl justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-xl font-bold text-white"></span>
              </div>
            </div>
          </Link>
        </div>

        {/* Botón para mostrar/ocultar la tabla comparativa */}
        <div className="mt-8 text-center">
          <button
            onClick={toggleComparison}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus:outline-none"
          >
            Compara
            <ChevronDown
              className={`transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`}
              size={20}
            />
          </button>
        </div>

        {/* Tabla comparativa */}
        {showComparison && (
          <div className="mt-8 overflow-x-auto">
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
                      <TableCell className="text-center text-lg">
                        {feature.starter ? (
                          <Check className="mx-auto h-5 w-5 text-blue-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-gray-300" />
                        )}
                      </TableCell>
                      <TableCell className="text-center text-lg">
                        {feature.pro ? (
                          <Check className="mx-auto h-5 w-5 text-blue-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-gray-300" />
                        )}
                      </TableCell>
                      <TableCell className="text-center text-lg">
                        {feature.advanced ? (
                          <Check className="mx-auto h-5 w-5 text-blue-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-gray-300" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
