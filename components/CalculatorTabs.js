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
      {/* Se agrega padding superior para separar del header */}
      <div style={{ paddingTop: "2rem" }}>
        {/* Pestañas */}
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

      {/* Contenido de la pestaña activa */}
      <div className="tab-content">
        {activeTab === "renders" && <CalculatorRenders />}
        {activeTab === "360" && <Calculator360 />}
        {activeTab === "recorridos" && <CalculatorRecorridos />}
      </div>

      <style jsx>{`
        .calculator-tabs {
          width: 100%;
          max-width: 1200px;
          margin: 3rem auto;
        }
        /* Diseño de las pestañas */
        .tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          background: #1a1a1a;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .tabs button {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          background: transparent;
          color: #fff;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .tabs button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }
        .tabs button.active {
          background:rgb(44,100,146);
          font-weight: 600;
        }
        .tab-content {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
