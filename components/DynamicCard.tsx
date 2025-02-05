"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface DynamicCardProps {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  buttonText: string;
  onButtonClick: () => void;
}

export function DynamicCard({
  title,
  description,
  beforeImage,
  afterImage,
  buttonText,
  onButtonClick,
}: DynamicCardProps) {
  const [showAfter, setShowAfter] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si el usuario está en móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Alternar imagen en móviles
  const handleToggle = () => {
    if (isMobile) {
      setShowAfter((prev) => !prev);
    }
  };

  // Opacidad de la imagen "Después"
  const afterOpacity = showAfter ? 1 : isHovered ? 1 : 0;

  return (
    <div className="flex flex-col md:flex-row bg-[rgba(0,5,12,0.9)] backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
      {/* Sección de imágenes */}
      <div
        className="relative w-full md:w-1/2 h-96 cursor-pointer"
        onClick={handleToggle} // ✅ Tap en móviles
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* Imagen "Antes" */}
        <Image
          src={beforeImage}
          alt="Antes"
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
        />
        {/* Imagen "Después" con efecto de fade */}
        <Image
          src={afterImage}
          alt="Después"
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
          style={{ opacity: afterOpacity }}
        />
      </div>

      {/* Sección textual y botón */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className="mb-6 text-gray-300">{description}</p>
        <button
          onClick={onButtonClick}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
