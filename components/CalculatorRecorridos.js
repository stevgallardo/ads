"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

// Configuración de la fuente Poppins
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Calculator() {
  // Estados iniciales
  const [costoBase, setCostoBase] = useState(1154.5);
  const [cantidadVistas, setCantidadVistas] = useState(1);
  const [modelado, setModelado] = useState("SI");
  const [materiales, setMateriales] = useState("SI");
  const [planos, setPlanos] = useState("SI");
  const [tipoVista, setTipoVista] = useState("");
  const [urgente, setUrgente] = useState("NO");
  const [calidad, setCalidad] = useState("FHD");
  const [cliente, setCliente] = useState("PERSONAL");
  const [proyecto, setProyecto] = useState("PEQUEÑO");
  // Nuevos estados para Recorridos:
  const [tiempo, setTiempo] = useState("0-3"); // Opciones: "0-3", "4-8", "9-12"
  const [edicion, setEdicion] = useState("NO");  // Opciones: "NO", "SI"

  // Estado para controlar la visibilidad de la ventana emergente (modal)
  const [showInfo, setShowInfo] = useState(false);

  const calculate = () => {
    const base = parseFloat(costoBase) || 0;
    const vistas = parseInt(cantidadVistas) || 1;

    // Cálculos de cada elemento
    const costMateriales =
      materiales === "SI" ? 0 : materiales === "NO" ? base * 0.2 : 0;
    const costPlanos =
      planos === "SI" ? 0 : planos === "NO" ? base * 1 : 0;

    let costVista = 0;
    if (tipoVista === "EXTERIOR") costVista = base * 0.5;
    else if (tipoVista === "INTERIOR") costVista = base * 0.7;
    else if (tipoVista === "VISTA AEREA") costVista = base * 0.8;

    const costUrgente = urgente === "SI" ? base * 0.5 : 0;

    let costCalidad = 0;
    if (calidad === "FHD") costCalidad = 0;
    else if (calidad === "4K") costCalidad = base * 0.1;

    let costCliente = 0;
    if (cliente === "PERSONAL") costCliente = 0;
    else if (cliente === "NEGOCIO") costCliente = base * 0.2;
    else if (cliente === "CORPORATIVO") costCliente = base * 0.5;

    let costProyecto = 0;
    if (proyecto === "PEQUEÑO") costProyecto = 0;
    else if (proyecto === "MEDIANO") costProyecto = base * 0.2;
    else if (proyecto === "GRANDE") costProyecto = base * 0.6;

    // Subtotal base sin extras
    const subtotalBase =
      base +
      (modelado === "SI" ? costMateriales : costPlanos + costVista) +
      costUrgente +
      costCalidad +
      costCliente +
      costProyecto;

    // Costo adicional por TIEMPO según la opción seleccionada:
    let tiempoFactor = 0;
    if (tiempo === "4-8") tiempoFactor = 0.3;
    else if (tiempo === "9-12") tiempoFactor = 0.5;
    // "0-3" tiene factor 0
    const tiempoCost = subtotalBase * tiempoFactor;

    // Multiplicador para EDICIÓN: si es "SI", se multiplica por 1.2; de lo contrario, 1.0
    const editingMultiplier = edicion === "SI" ? 1.2 : 1.0;

    // Nuevo subtotal: se suma el costo por TIEMPO al subtotal base y luego se aplica el multiplicador de EDICIÓN
    const subtotal = (subtotalBase + tiempoCost) * editingMultiplier;

    // Total final: se multiplica por la cantidad de videos
    const totalFinal = subtotal * vistas;

    return {
      costMateriales,
      costPlanos,
      costVista,
      costUrgente,
      costCalidad,
      costCliente,
      costProyecto,
      subtotalBase,
      tiempoCost,
      editingMultiplier,
      subtotal,
      totalFinal,
    };
  };

  const results = calculate();

  // Estilos generales
  const containerStyle = {
    padding: "2rem",
    paddingTop: "3rem", // espacio adicional para evitar interferencia con el header
    background: "linear-gradient(135deg, #2c3e50, #000000)",
    color: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
    fontFamily: "inherit",
  };

  const formRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
    padding: "0.75rem",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
  };

  const inputContainerStyle = { flex: "1" };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "300",
    fontSize: "1rem",
    color: "#ddd",
  };

  const costDisplayStyle = {
    marginLeft: "1rem",
    minWidth: "100px",
    textAlign: "right",
    fontSize: "1rem",
    color: "#ccc",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    outline: "none",
    transition: "box-shadow 0.3s ease",
  };

  const summaryStyle = {
    padding: "1.5rem",
    background: "rgba(0, 0, 0, 0.8)",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
    height: "fit-content",
  };

  const summaryHeadingStyle = {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "2rem",
    fontWeight: "700",
  };

  const summaryTextStyle = {
    margin: "0.5rem 0",
  };

  const summaryLabelStyle = {
    fontWeight: 300,
    display: "block",
    fontSize: "1.2rem",
  };

  const summaryValueStyle = {
    display: "block",
    fontSize: "1.5rem",
    fontWeight: 700,
  };

  const summaryTotalValueStyle = {
    display: "block",
    fontSize: "2rem",
    fontWeight: 700,
  };

  const titleBoxStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "2rem",
  };

  // Estilos para el botón "Más Información" y la ventana emergente (modal)
  const buttonStyle = {
    display: "block",
    margin: "1rem auto",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backdropFilter: "blur(4px)",
  };

  const modalContentStyle = {
    backgroundColor: "#fff",
    color: "#333",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    position: "relative",
    maxHeight: "80vh", // Limita la altura y permite scroll
    overflowY: "auto",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  return (
    <div className={`${poppins.className} calculator-container`} style={containerStyle}>
      {/* Título */}
      <div style={titleBoxStyle}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>Calculadora de Recorridos</h1>
      </div>
      {/* Contenedor principal */}
      <div className="content-wrapper">
        <div className="form-container">
          <form>
            {/* Costo Base */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Costo Base:</label>
                <input
                  type="number"
                  value={costoBase}
                  onChange={(e) => setCostoBase(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>Base: $ {parseFloat(costoBase).toFixed(2)}</span>
              </div>
            </div>
            {/* Cantidad de Videos */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Cantidad de Videos:</label>
                <input
                  type="number"
                  value={cantidadVistas}
                  onChange={(e) => setCantidadVistas(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>Videos: {cantidadVistas}</span>
              </div>
            </div>
            {/* Modelado */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>¿Se te proporcionó modelado?</label>
                <select
                  value={modelado}
                  onChange={(e) => setModelado(e.target.value)}
                  style={inputStyle}
                >
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                </select>
              </div>
            </div>
            {/* Materiales (si modelado es SI) */}
            {modelado === "SI" && (
              <div className="formRow" style={formRowStyle}>
                <div style={inputContainerStyle}>
                  <label style={labelStyle}>¿Te proporcionaron materiales?</label>
                  <select
                    value={materiales}
                    onChange={(e) => setMateriales(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
                </div>
                <div className="costDisplay" style={costDisplayStyle}>
                  <span>+ $ {results.costMateriales.toFixed(2)}</span>
                </div>
              </div>
            )}
            {/* Planos y Tipo de Vista (si modelado es NO) */}
            {modelado === "NO" && (
              <>
                <div className="formRow" style={formRowStyle}>
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>¿Te proporcionaron planos?</label>
                    <select
                      value={planos}
                      onChange={(e) => setPlanos(e.target.value)}
                      style={inputStyle}
                    >
                      <option value="SI">SI</option>
                      <option value="NO">NO</option>
                    </select>
                  </div>
                  <div className="costDisplay" style={costDisplayStyle}>
                    <span>+ $ {results.costPlanos.toFixed(2)}</span>
                  </div>
                </div>
                <div className="formRow" style={formRowStyle}>
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Tipo de Vista:</label>
                    <select
                      value={tipoVista}
                      onChange={(e) => setTipoVista(e.target.value)}
                      style={inputStyle}
                    >
                      <option value="">SELECCIONA</option>
                      <option value="EXTERIOR">EXTERIOR</option>
                      <option value="INTERIOR">INTERIOR</option>
                      <option value="VISTA AEREA">VISTA AEREA</option>
                    </select>
                  </div>
                  <div className="costDisplay" style={costDisplayStyle}>
                    <span>+ $ {results.costVista.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
            {/* Urgencia */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>¿Es urgente?</label>
                <select
                  value={urgente}
                  onChange={(e) => setUrgente(e.target.value)}
                  style={inputStyle}
                >
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>+ $ {results.costUrgente.toFixed(2)}</span>
              </div>
            </div>
            {/* Calidad */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Calidad:</label>
                <select
                  value={calidad}
                  onChange={(e) => setCalidad(e.target.value)}
                  style={inputStyle}
                >
                  <option value="FHD">FHD</option>
                  <option value="4K">4K</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>+ $ {results.costCalidad.toFixed(2)}</span>
              </div>
            </div>
            {/* Tipo de Cliente */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Tipo de Cliente:</label>
                <select
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  style={inputStyle}
                >
                  <option value="PERSONAL">PERSONAL</option>
                  <option value="NEGOCIO">NEGOCIO</option>
                  <option value="CORPORATIVO">CORPORATIVO</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>+ $ {results.costCliente.toFixed(2)}</span>
              </div>
            </div>
            {/* Tipo de Proyecto */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Tipo de Proyecto:</label>
                <select
                  value={proyecto}
                  onChange={(e) => setProyecto(e.target.value)}
                  style={inputStyle}
                >
                  <option value="PEQUEÑO">PEQUEÑO</option>
                  <option value="MEDIANO">MEDIANO</option>
                  <option value="GRANDE">GRANDE</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>+ $ {results.costProyecto.toFixed(2)}</span>
              </div>
            </div>
            {/* Tiempo */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Tiempo (segundos):</label>
                <select
                  value={tiempo}
                  onChange={(e) => setTiempo(e.target.value)}
                  style={inputStyle}
                >
                  <option value="0-3">0-3</option>
                  <option value="4-8">4-8</option>
                  <option value="9-12">9-12</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>
                  {tiempo === "0-3"
                    ? "+ $ 0.00"
                    : tiempo === "4-8"
                    ? "+ $ " + (results.subtotalBase * 0.3).toFixed(2)
                    : "+ $ " + (results.subtotalBase * 0.5).toFixed(2)}
                </span>
              </div>
            </div>
            {/* Edición */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Edición:</label>
                <select
                  value={edicion}
                  onChange={(e) => setEdicion(e.target.value)}
                  style={inputStyle}
                >
                  <option value="NO">NO</option>
                  <option value="SI">SI</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>{edicion === "SI" ? "x 1.20" : "x 1.00"}</span>
              </div>
            </div>
          </form>
        </div>
        {/* Resumen */}
        <div className="summary-container" style={summaryStyle}>
          <h2 style={summaryHeadingStyle}>Resumen</h2>
          <p style={summaryTextStyle}>
            <span style={summaryLabelStyle}>Subtotal Base:</span>
            <strong style={summaryValueStyle}>$ {results.subtotalBase.toFixed(2)}</strong>
          </p>
          <p style={summaryTextStyle}>
            <span style={summaryLabelStyle}>Incremento por duración:</span>
            <strong style={summaryValueStyle}>
              {tiempo === "0-3"
                ? "$ 0.00"
                : tiempo === "4-8"
                ? "$ " + (results.subtotalBase * 0.3).toFixed(2)
                : "$ " + (results.subtotalBase * 0.5).toFixed(2)}
            </strong>
          </p>
          <p style={summaryTextStyle}>
            <span style={summaryLabelStyle}>Multiplicador Edición:</span>
            <strong style={summaryValueStyle}>x {edicion === "SI" ? "1.20" : "1.00"}</strong>
          </p>
          <p style={summaryTextStyle}>
            <span style={summaryLabelStyle}>Total Final:</span>
            <strong style={summaryTotalValueStyle}>$ {results.totalFinal.toFixed(2)}</strong>
          </p>
        </div>
      </div>

      {/* Botón "Más Información" con efecto hover */}
      <button
        className="info-button"
        onClick={() => setShowInfo(true)}
        style={buttonStyle}
      >
        Más Información
      </button>

      {/* Ventana emergente (modal) con información de los cálculos */}
      {showInfo && (
        <div
          className="modal-overlay"
          style={modalOverlayStyle}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowInfo(false);
          }}
        >
          <div className="modal-content" style={modalContentStyle}>
            <button
              className="close-button"
              onClick={() => setShowInfo(false)}
              style={closeButtonStyle}
            >
              &times;
            </button>
            <h2>Información de los Cálculos</h2>
            <p>
  <strong>Costo Base:</strong> Es el precio mínimo establecido para la realización de un clip. Representa el valor base del trabajo antes de aplicar cualquier ajuste adicional.
</p>

<p>
  <strong>Cantidad de Videos:</strong> Indica el número de clips que se van a realizar en el proyecto.
</p>

<p>
  <strong>Modelado:</strong> Determina si el cliente proporciona un modelo 3D o si es necesario crearlo desde cero. Si no se proporciona, implica un mayor trabajo y, por lo tanto, un costo adicional.
</p>

<p>
  <strong>Materiales:</strong> Si el modelo 3D ya incluye materiales, no se requiere trabajo adicional. En caso contrario, se añade un costo por la configuración y aplicación de materiales realistas.
</p>

<p>
  <strong>Planos:</strong> Si no se proporciona un modelo 3D, es posible que el cliente cuente con planos. Si tampoco hay planos disponibles, se cobrará un costo adicional por el diseño desde cero.
</p>

<p>
  <strong>Tipo de Vista:</strong> Define el tipo de imagen que se va a generar, ya que cada vista requiere un nivel de detalle diferente:
  <ul>
    <li><strong>Exterior:</strong> Fachadas y vistas exteriores.</li>
    <li><strong>Interior:</strong> Espacios dentro de una edificación.</li>
    <li><strong>Vista Aérea:</strong> Perspectivas en altura o tipo dron.</li>
  </ul>
</p>

<p>
  <strong>Urgente:</strong> Si el render se necesita con prioridad, se aplica un costo adicional por entrega rápida. La urgencia se evalúa según la complejidad del proyecto y los tiempos de entrega.
</p>

<p>
  <strong>Calidad:</strong> La calidad final del render influye en el precio, ya que mayor resolución requiere más tiempo y recursos:
  <ul>
    <li><strong>FHD (1920x1080):</strong> Ideal para redes sociales y presentaciones digitales.</li>
    <li><strong>4K (3840x2160):</strong> Recomendado para presentaciones de alta calidad.</li>
  </ul>
</p>

<p>
  <strong>Tipo de Cliente:</strong> El costo varía según el tipo de cliente y el propósito del render:
  <ul>
    <li><strong>Personal:</strong> Para estudiantes, familiares o personas sin fines comerciales.</li>
    <li><strong>Negocio:</strong> Para emprendedores, arquitectos o diseñadores independientes.</li>
    <li><strong>Corporativo:</strong> Para inmobiliarias, constructoras y desarrolladoras.</li>
  </ul>
</p>

<p>
  <strong>Tipo de Proyecto:</strong> Se ajusta el costo según el tamaño y complejidad del proyecto:
  <ul>
    <li><strong>Pequeño:</strong> Casas o departamentos individuales.</li>
    <li><strong>Mediano:</strong> Edificios o conjuntos habitacionales.</li>
    <li><strong>Grande:</strong> Desarrollos urbanos o urbanizaciones completas.</li>
  </ul>
</p>
            <p><strong>Tiempo (segundos):</strong> Incremento porcentual basado en la duración de los clips.</p>
            <p><strong>Edición:</strong> Multiplicador que se aplica si se requiere edición.</p>
          </div>
        </div>
      )}

      {/* Estilos con media queries para responsividad y mejoras visuales */}
      <style jsx>{`
        .calculator-container {
          width: 90%;
          max-width: 1200px;
          margin: 2rem auto;
        }
        .content-wrapper {
          display: flex;
          gap: 2rem;
        }
        .form-container {
          flex: 1;
        }
        .summary-container {
          width: 300px;
          position: sticky;
          top: 65vh;
          transform: translateY(-50%);
          align-self: flex-start;
        }
        /* Hover para el botón "Más Información" */
        .info-button:hover {
          background-color: rgb(10,37,56) !important;
        }
        /* Estilos para la X de cierre */
        .close-button {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .close-button:hover {
          color: #e74c3c;
        }
        /* Líneas divisorias entre párrafos en el modal */
        .modal-content p {
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .modal-content p:last-child {
          border-bottom: none;
        }
        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
          }
          .summary-container {
            width: 100%;
            position: relative;
            top: auto;
            transform: none;
            margin-top: 2rem;
          }
          .modal-content {
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}
