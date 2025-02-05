"use client"

import React, { useState, useRef, useEffect } from "react";

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
  // Estado para controlar si se muestra la imagen "después" permanentemente
  const [showAfter, setShowAfter] = useState(false);
  // Estado para controlar si el usuario está haciendo hover sobre el área de la imagen
  const [isHovered, setIsHovered] = useState(false);

  // Al hacer clic, se alterna la visualización permanente
  const handleToggle = () => {
    setShowAfter((prev) => !prev);
  };

  // Calcula la opacidad final de la imagen "después"
  // Si se hizo click (showAfter true), se muestra al 100%.
  // Si no, y se está en hover, se muestra al 50% (previsualización).
  // En caso contrario, se oculta (0%).
  const afterOpacity = showAfter ? 1 : isHovered ? 0.8 : 0;

  return (
    <div className="flex flex-col md:flex-row bg-[rgba(0,5,12,0.9)] backdrop-blur-lg rounded-xl shadow-lg rounded-lg overflow-hidden">
      {/* Sección de imágenes "Antes" y "Después" en la misma posición */}
      <div
        className="relative w-full md:w-1/2 h-96 cursor-pointer"
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Imagen "Antes" */}
        <img
          src={beforeImage}
          alt="Antes"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {/* Imagen "Después" con efecto de fade */}
        <img
          src={afterImage}
          alt="Después"
          className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500"
          style={{ opacity: afterOpacity }}
        />
      </div>
      {/* Sección textual y botón */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className="mb-6 text-gray-300">{description}</p>
        <button
          onClick={onButtonClick}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-800 rounded-xl transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
