"use client"

import React, { useState } from "react";
import { DynamicCard } from "@/components/DynamicCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CardData {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  buttonText: string;
}

interface DynamicCardsProps {
  cards: CardData[];
  buyLink: string; // NUEVA propiedad para el enlace de "Comprar ahora"
}

export function DynamicCards({ cards, buyLink }: DynamicCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-[rgba(0,10,22,0.5)] backdrop-blur-lg rounded-xl p-4 rounded-lg max-w-5xl mx-auto">
      <DynamicCard
        title={cards[currentIndex].title}
        description={cards[currentIndex].description}
        beforeImage={cards[currentIndex].beforeImage}
        afterImage={cards[currentIndex].afterImage}
        buttonText={cards[currentIndex].buttonText}
        onButtonClick={() => window.open(buyLink, "_blank")}
      />
      {/* Flecha Izquierda */}
      <button
        onClick={prevCard}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      {/* Flecha Derecha */}
      <button
        onClick={nextCard}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
}
