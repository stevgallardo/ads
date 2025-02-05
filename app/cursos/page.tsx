"use client"

import { SiteHeader } from "@/components/site-header";
import { CourseHero } from "@/components/course-hero";
import { PricingSection } from "@/components/pricing-section";
import { CourseComparison } from "@/components/course-comparison";
import { Loscursos } from "@/components/loscursos";
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer";
// Importa tu componente de testimonios si lo tienes, por ejemplo:
// import { Testimonials } from "@/components/testimonials";

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Sección Hero */}
        <section className="relative h-[80vh] flex items-center justify-center">
          {/* Imagen de fondo con gradiente */}
          <div
            className="absolute inset-0 bg-[url('/images/oficina.png')] bg-cover bg-center"
            style={{ filter: "brightness(0.8)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
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
       
        <Loscursos />

        

        {/* Sección de Precios */}
        <PricingSection />
        {/* CTA final */}
        <section className="relative py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-4xl font-bold">¡No dejes pasar esta oportunidad!</h2>
            <p className="mb-8 text-xl">
              Transforma tu futuro hoy mismo.
            </p>
            <a
              href="https://wa.me/message/AUJ3TVUGXDLZH1"
              className="inline-block rounded-full bg-blue-500 px-8 py-4 text-2xl font-semibold transition hover:bg-blue-700"
            >
              Inscríbete Ahora
            </a>
          </div>
        </section>

          

        {/* Opcional: Sección de Testimonios */}
        {/*
        <section className="container mx-auto py-16">
          <Testimonials />
        </section>
        */}
        <FAQSection />
        {/* Sección Comparación de Cursos */}
        <CourseComparison />

        
      </main>
      <Footer />
    </>
  );
}
