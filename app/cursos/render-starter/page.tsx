"use client"

import { SiteHeader } from "@/components/site-header";
import { CourseHero } from "@/components/course-hero";
import { CourseContent } from "@/components/course-content";
import { CourseCTA } from "@/components/course-cta";
import { Footer } from "@/components/footer";
import { DynamicCards } from "@/components/DynamicCards";

export default function RenderProPage() {
  const courseData = {
    title: "RenderStarter",
    description:
      "Perfecto para estudiantes. De cero a Profesional en 2 semanas.",
    price: 1800,
    originalPrice: 2000,
    discount: 10,
    sessions: "4 SESIONES ONLINE",
    nextDate: "21 FEB 2025",
    videoLink: "https://www.youtube.com/embed",
    // NUEVA propiedad para cambiar la imagen del contenedor de CourseContent
    contentImage: "/images/pcrenderstarter.png",
    modules: [
      {
        title: "Sesión 1: Introducción a SketchUp",
        lessons: [
          "Interfaz de SketchUp y configuración inicial",
          "Importación de archivos DWG y modelado 3D",
          "Optimización del modelo y uso de plugins",
          "Mobiliario y ambientación con Chaos Cosmos",
        ],
      },
      {
        title: "Sesión 2: Edición de Materiales en V-Ray",
        lessons: [
          "Interfaz de V-Ray y flujo de trabajo",
          "Configuraciones avanzadas de materiales",
          "Creación de materiales PBR realistas",
          "Exportación e importación de materiales PBR",
        ],
      },
      {
        title: "Sesión 3: Iluminación y Configuración de Render",
        lessons: [
          "Uso de Vray Light Gen y tipos de iluminación",
          "Configuración de Render de prueba y ajustes finales",
          "Renderizado de escenas exteriores e interiores",
          "Uso de Light Mix, Sunlight y ambientación realista",
        ],
      },
      {
        title: "Sesión 4: Postproducción en Photoshop",
        lessons: [
          "Interfaz y configuración de espacio de trabajo en Photoshop",
          "Creación de capas y grupos para edición eficiente",
          "Ambientación y escalas humanas en renders",
          "Uso de Camera Raw, corrección de color y texturas de desgaste",
        ],
      },
    ],
    features: [
      "Clases 100% en vivo con acceso de por vida.",
      "Soporte y atención a dudas en todo momento.",
      "Acceso a librerías descargables y recursos exclusivos.",
      "Guía de descarga de programas esenciales.",
      "Certificado de finalización del curso.",
    ],
  };

  const dynamicCardsData = [
    {
      title: "1. Crea un modelo desde 0",
      description:
        "Completa tu proyecto modelando desde el plano hasta el 3D con SketchUp. Aprende a crear modelos precisos y detallados que impresionarán a tus clientes.",
      beforeImage: "/images/sketchup2.png",
      afterImage: "/images/sketchup1.png",
      buttonText: "Comprar",
    },
    {
      title: "2. Ponle materiales a tu modelo",
      description:
        "Convierte tus modelos en escenas realistas aplicando materiales avanzados con V-Ray. Descubre técnicas para lograr texturas y acabados sorprendentes.",
      beforeImage: "/images/materiales1.png",
      afterImage: "/images/materiales2.png",
      buttonText: "Comprar",
    },
    {
      title: "3. Ilumina tu escena",
      description:
        "Domina la iluminación en tus renders y crea ambientes cautivadores. Aprende a usar la luz para resaltar cada detalle de tu escena.",
      beforeImage: "/images/iluminacion1.png",
      afterImage: "/images/iluminacion2.png",
      buttonText: "Comprar",
    },
    {
      title: "4. Edita la imagen",
      description:
        "Da el toque final a tus imágenes con postproducción en Photoshop. Optimiza y retoca tus renders para lograr presentaciones profesionales.",
      beforeImage: "/images/post1.png",
      afterImage: "/images/post2.png",
      buttonText: "Comprar",
    },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <CourseHero
          title={courseData.title}
          description={courseData.description}
          sessions={courseData.sessions}
          nextDate={courseData.nextDate}
          heroImage="/images/cocina.png"  // Cambia aquí la imagen del Hero según la página
          videoLink={courseData.videoLink}    // Pasa el enlace del video
        />
        <CourseCTA
          price={courseData.price}
          originalPrice={courseData.originalPrice}
          discount={courseData.discount}
          includes={courseData.features}
          videoLink={courseData.videoLink}  // Enlace del video
          buyLink="https://mpago.li/2mUxq6B"  // Enlace de "Comprar ahora" para esta página
        />
        <CourseContent
          modules={courseData.modules}
          contentImage={courseData.contentImage || "/images/pcrenderpro.png"}  // Pasa la imagen del contenido; se define en courseData o se usa default
        />

        {/* Sección de DynamicCards (slider) */}
        <section className="container mx-auto py-16">
          <DynamicCards cards={dynamicCardsData} buyLink="https://mpago.li/2mUxq6B" />
        </section>
      </main>
      <Footer />
    </>
  );
}
