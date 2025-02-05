"use client"

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface CourseHeroProps {
  title: string;
  description: string;
  sessions: string;
  nextDate: string;
  heroImage: string;  // NUEVA propiedad para la imagen de fondo
  videoLink: string;  // NUEVA propiedad para el enlace del video
}

export function CourseHero({ title, description, sessions, nextDate, heroImage, videoLink }: CourseHeroProps) {
  const [videoVisible, setVideoVisible] = useState(false);

  // Función para cerrar el modal al hacer clic fuera del contenedor del video.
  const handleModalClick = () => {
    setVideoVisible(false);
  };

  return (
    <section className="relative py-24 w-full">
      {/* Contenedor de imagen de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aquí se usa la propiedad heroImage para el fondo */}
        <div
          className="absolute inset-0 rounded-xl transition-opacity duration-300"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        {/* Gradiente superpuesto */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background rounded-xl" />
      </div>

      {/* Contenido principal centrado */}
      <div className="relative z-10 w-full pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">{title}</h1>
          <p className="mb-8 text-xl text-white">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Badge 
              variant="secondary" 
              className="text-lg bg-[rgba(5,24,46,0.9)] text-white px-3 py-1 rounded"
            >
              {sessions}
            </Badge>
            <Badge 
              variant="secondary" 
              className="text-lg bg-[rgba(5,24,46,0.9)] text-white px-3 py-1 rounded"
            >
              PRÓXIMA FECHA: {nextDate}
            </Badge>
          </div>
          {/* Botón "VER VIDEO" con icono de reproducción */}
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              variant="default"
              className="flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-800 text-white rounded-xl shadow-md transition"
              onClick={() => setVideoVisible(true)}
            >
              <Play className="h-5 w-5" />
              VER VIDEO
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de video */}
      {videoVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClick}
        >
          <div
            className="relative w-[360px] h-[640px] bg-black rounded-3xl shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Se usa la propiedad videoLink para el src del iframe */}
            <iframe
              className="w-full h-full object-cover"
              src={videoLink}
              title="Video del curso"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition"
              onClick={() => setVideoVisible(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
