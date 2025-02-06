"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import CalculatorRenders from "@/components/CalculatorRenders";
import Calculator360 from "@/components/Calculator360";
import CalculatorRecorridos from "@/components/CalculatorRecorridos";

// Configuración de la fuente Poppins
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function CalculatorTabs() {
  const [activeTab, setActiveTab] = useState("renders");

  return (
    <div className={`${poppins.className} calculator-tabs`}>
      {/* Contenedor general */}
      <div className="container">
        {/* Pestañas Flotantes con Más Espacio en Móvil */}
        <div className="tabs-wrapper">
          <div className="tabs">
            <button
              className={activeTab === "renders" ? "active" : ""}
              onClick={() => setActiveTab("renders")}
            >
              Calculadora de Renders
            </button>
            <button
              className={activeTab === "360" ? "active" : ""}
              onClick={() => setActiveTab("360")}
            >
              Calculadora de Vistas 360
            </button>
            <button
              className={activeTab === "recorridos" ? "active" : ""}
              onClick={() => setActiveTab("recorridos")}
            >
              Recorridos Virtuales
            </button>
          </div>
        </div>
      </div>

      {/* Espaciador ajustado para evitar que el contenido quede cubierto */}
      <div className="spacer"></div>

      {/* Contenido de la pestaña activa */}
      <div className="tab-content">
        {activeTab === "renders" && <CalculatorRenders />}
        {activeTab === "360" && <Calculator360 />}
        {activeTab === "recorridos" && <CalculatorRecorridos />}
      </div>

      <style jsx>{`
        /* Contenedor principal */
        .calculator-tabs {
          width: 100%;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 1rem;
        }

        /* Contenedor con padding para evitar que se vea muy pegado */
        .container {
          max-width: 100%;
          padding: 0 1rem;
        }

        /* Pestañas flotantes con más espacio arriba */
        .tabs-wrapper {
          position: sticky;
          top: 80px; /* Mantiene las pestañas detrás del header */
          z-index: 10;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          padding: 0.8rem 0;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center;
        }

        /* Diseño de las pestañas */
        .tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .tabs::-webkit-scrollbar {
          display: none;
        }

        .tabs button {
          flex: 1;
          padding: 1.2rem;
          border: none;
          background: transparent;
          color: #fff;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          min-width: 200px;
          text-align: center;
          border-radius: 8px;
        }

        .tabs button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .tabs button.active {
          background: rgb(44, 100, 146);
          font-weight: 600;
        }

        /* Ajustar el espaciado superior en móviles */
        .spacer {
          height: 4rem; /* Menos espacio en desktop */
        }

        /* Ajustes en pantallas pequeñas: Más espacio arriba y pestañas apiladas */
        @media (max-width: 768px) {
          .calculator-tabs {
            padding: 0.5rem;
            margin: 5rem auto; /* Más margen arriba */
          }

          /* Convertir las pestañas en una columna en móvil */
          .tabs {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }

          .tabs button {
            width: 100%;
            font-size: 1rem;
            padding: 1rem;
            min-width: auto;
          }

          /* Mayor espacio arriba para que no se vea pegado al header */
          .spacer {
            height: 8rem;
          }
        }

        /* Reducción del espacio entre pestañas y calculadora */
        .tab-content {
          margin-top: 1rem; /* Menos espacio entre pestañas y contenido */
        }
      `}</style>
    </div>
  );
}
