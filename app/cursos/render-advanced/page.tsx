"use client"

import { SiteHeader } from "@/components/site-header";
import { CourseHero } from "@/components/course-hero";
import { CourseContent } from "@/components/course-content";
import { CourseCTA } from "@/components/course-cta";
import { Footer } from "@/components/footer";
import { DynamicCards } from "@/components/DynamicCards";

export default function RenderAdvancedPage() {
  const courseData = {
    title: "RenderAdvanced",
    description:
      "Ideal para emprendedores. Domina el mercado con herramientas innovadoras.",
    price: 4130,
    originalPrice: 5900,
    discount: 30,
    sessions: "7 SESIONES ONLINE",
    nextDate: "21 FEB 2025",
    // Propiedades para cambiar la imagen del hero y el enlace del video desde la página:
    heroImage: "/images/cocina2.png", // Ajusta la ruta según corresponda
    // NUEVA propiedad para cambiar la imagen del contenedor de CourseContent
    contentImage: "/images/pcrenderadvanced.png",
    videoLink: "https://www.youtube.com/embed", // Cambia el VIDEO_ID y parámetros según convenga
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
        title: "Sesión 4: Postproducción y Portafolio Web",
        lessons: [
          "Interfaz y configuración de espacio de trabajo en Photoshop",
          "Creación de capas y grupos para edición eficiente",
          "Ambientación y escalas humanas en renders",
          "Uso de Camera Raw, corrección de color y texturas de desgaste",
          "Creación de una Página Web Profesional para tu portafolio",
          "Dominio, hosting y optimización SEO para arquitectos",
        ],
      },
      {
        title: "Sesión 5: IA, Marketing y Ventas",
        lessons: [
          "Uso de herramientas de IA para mejorar renders",
          "Automatización de procesos y optimización con IA",
          "Estrategias de marketing digital para arquitectos",
          "Cómo conseguir clientes con redes sociales y portafolio",
          "Creación de propuestas de trabajo y captación de clientes",
        ],
      },
      {
        title: "Sesión 6: Recorridos Virtuales",
        lessons: [
          "Configuracion inicial",
          "Animación",
          "Iluminación dinámica",
          "Renderizado de escenas",
          "Edición de recorridos",
        ],
      },
      {
        title: "Sesión 7: Renders 360° y Marca personal",
        lessons: [
          "Conceptos de fotografía 360°",
          "Configuración de cámaras",
          "Post-producción 360°",
          "Publicación y visualización",
          "Incrustración en paginas web",
          "Masterclass de marca personal con expertos",
          "Pricing estratégico",
        ],
      },
    ],
    features: [
      "Incluye todo lo del paquete RenderPro",
      "Creacion de Recorridos Virtuales",
      "Renders 360° desde cero",
      "Estrategias de marketing y creación de marca personal",
    ],
  };

  const dynamicCardsData = [
    {
      title: "8. Vende tus renders",
      description:
        "Aprende estrategias para vender tus renders y monetizar tu talento. Descubre técnicas de marketing digital y ventas efectivas.",
      beforeImage: "/images/venta1.png",
      afterImage: "/images/venta2.png",
      buttonText: "Comprar",
    },
    {
      title: "9. Vende tus renders",
      description:
        "Aprende estrategias para vender tus renders y monetizar tu talento. Descubre técnicas de marketing digital y ventas efectivas.",
      beforeImage: "/images/venta1.png",
      afterImage: "/images/venta2.png",
      buttonText: "Comprar",
    },
    {
      title: "10. Vende tus renders",
      description:
        "Aprende estrategias para vender tus renders y monetizar tu talento. Descubre técnicas de marketing digital y ventas efectivas.",
      beforeImage: "/images/venta1.png",
      afterImage: "/images/venta2.png",
      buttonText: "Comprar",
    },
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
      {
        title: "5. Ponle magia con IA",
        description:
          "Potencia tus renders con inteligencia artificial. Aprende a mejorar tus imágenes usando técnicas de enhancement con IA para resultados asombrosos.",
        beforeImage: "/images/ia2.png",
        afterImage: "/images/ia1.png",
        buttonText: "Comprar",
      },
      {
        title: "6. Crea tu página web",
        description:
          "Muestra tu portafolio de renders en una página web profesional. Descubre cómo diseñar y optimizar tu sitio para atraer a más clientes.",
        beforeImage: "/images/web1.png",
        afterImage: "/images/web2.png",
        buttonText: "Comprar",
      },
      {
        title: "7. Vende tus renders",
        description:
          "Aprende estrategias para vender tus renders y monetizar tu talento. Descubre técnicas de marketing digital y ventas efectivas.",
        beforeImage: "/images/venta1.png",
        afterImage: "/images/venta2.png",
        buttonText: "Comprar",
      },
  ];

  // Enlace de comprar para esta página:
  const buyLink = "https://mpago.li/2CwMuUc";

  return (
    <>
      <SiteHeader />
      <main>
        <CourseHero
          title={courseData.title}
          description={courseData.description}
          sessions={courseData.sessions}
          nextDate={courseData.nextDate}
          heroImage={courseData.heroImage}    // Se pasa la imagen del Hero desde courseData
          videoLink={courseData.videoLink}      // Se pasa el enlace del video desde courseData
        />
        <CourseCTA
          price={courseData.price}
          originalPrice={courseData.originalPrice}
          discount={courseData.discount}
          includes={courseData.features}
          videoLink={courseData.videoLink}      // Enlace del video
          buyLink={buyLink}                     // Enlace de "Comprar ahora" para esta página
        />
        <CourseContent
          modules={courseData.modules}
          contentImage={courseData.contentImage || "/images/pcrenderpro.png"}  // Pasa la imagen del contenido; se define en courseData o se usa default
          features={courseData.features}
        />

        {/* Sección de DynamicCards (slider) */}
        <section className="container mx-auto py-16">
          <DynamicCards cards={dynamicCardsData} buyLink={buyLink} />
        </section>
      </main>
      <Footer />
    </>
  );
}
