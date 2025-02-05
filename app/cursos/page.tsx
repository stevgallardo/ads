"use client";

import { SiteHeader } from "@/components/site-header";
import { PricingSection } from "@/components/pricing-section";
import { CourseComparison } from "@/components/course-comparison";
import { Loscursos } from "@/components/loscursos";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import Image from "next/image"; // ✅ Usamos Next.js Image para el Hero

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Sección Hero */}
        <section className="relative h-[80vh] flex items-center justify-center">
          {/* Imagen de fondo con Next.js Image ✅ */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/oficina.png"
              alt="Oficina de diseño"
              layout="fill"
              objectFit="cover"
              priority
              className="brightness-[0.8]"
            />
          </div>
          {/* Gradiente overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black -z-10" />
          
          {/* Contenido */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="mb-4 text-5xl font-bold sm:text-6xl">
              Renders que Venden.
            </h1>
            <p className="mx-auto max-w-2xl text-xl">
              De 0 a Pro, transforma tu visión y potencia tu carrera.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/message/AUJ3TVUGXDLZH1"
                className="inline-block rounded-full bg-blue-500 px-8 py-3 text-xl font-semibold text-white transition hover:bg-blue-900"
              >
                Inscríbete Ahora
              </a>
            </div>
          </div>
        </section>
       
        {/* Cursos */}
        <Loscursos />

        {/* Sección de Precios */}
        <div className="py-20"> {/* 🔥 MÁS ESPACIO ENTRE SECCIONES */}
          <PricingSection />
        </div>

        {/* Sección CTA - MÁS ESPACIO 🔥 */}
        <section className="relative py-28 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-4xl font-bold">
              ¡No dejes pasar esta oportunidad!
            </h2>
            <p className="mb-10 text-xl">
              Transforma tu futuro hoy mismo con nuestros cursos.
            </p>
            <a
              href="https://wa.me/message/AUJ3TVUGXDLZH1"
              className="inline-block rounded-full bg-blue-500 px-10 py-5 text-2xl font-semibold transition hover:bg-blue-700"
            >
              Inscríbete Ahora
            </a>
          </div>
        </section>

        {/* Sección de Preguntas Frecuentes - MÁS ESPACIO 🔥 */}
        <div className="py-24">
          <FAQSection />
        </div>

        {/* Sección Comparación de Cursos - MÁS ESPACIO y tabla scrolleable en móviles 🔥 */}
        <section className="py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-4xl font-bold text-center text-white">
              Comparación de Cursos
            </h2>
            <div className="overflow-x-auto">
              <CourseComparison />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
