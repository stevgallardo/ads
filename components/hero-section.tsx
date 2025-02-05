import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/prueba.gif" // Ajusta la ruta a tu imagen
          alt="Hero Background"
          fill
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      {/* Contenedor del contenido */}
      <div className="container relative z-10 flex min-h-screen items-center px-6 md:px-16">
        <div className="max-w-2xl space-y-8 pt-20 p-6 rounded-lg">
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-white/80">Domina el Arte</h2>
            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Renderizado<br />Profesional
            </h1>
            <p className="text-2xl text-white">
              con Render<span className="font-bold">Pro</span>
            </p>
          </div>
          <p className="text-xl text-white/90">
            Transforma tus proyectos con renders fotorrealistas y herramientas avanzadas.
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/cursos">CURSOS EN VIVO</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
