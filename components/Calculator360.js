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
  const [costoBase, setCostoBase] = useState(1983.2);
  const [cantidadVistas, setCantidadVistas] = useState(1);
  const [modelado, setModelado] = useState("SI");
  const [materiales, setMateriales] = useState("SI");
  const [planos, setPlanos] = useState("SI");
  const [tipoVista, setTipoVista] = useState("");
  const [urgente, setUrgente] = useState("NO");
  const [calidad, setCalidad] = useState("2K"); // En este ejemplo, opción "2K" en lugar de FHD
  const [cliente, setCliente] = useState("PERSONAL");
  const [proyecto, setProyecto] = useState("PEQUEÑO");
  const [descuentoPaquete, setDescuentoPaquete] = useState("NO");
  // Nuevo estado para Integración Web
  const [integracionWeb, setIntegracionWeb] = useState("NO");
  // Estado para controlar la visibilidad de la ventana emergente (modal)
  const [showInfo, setShowInfo] = useState(false);

  const calculate = () => {
    const base = parseFloat(costoBase) || 0;
    const vistas = parseInt(cantidadVistas) || 1;

    // Cálculos de cada parte:
    const costMateriales =
      materiales === "SI" ? 0 : materiales === "NO" ? base * 0.3 : 0;
    const costPlanos =
      planos === "SI" ? 0 : planos === "NO" ? base * 0.5 : 0;

    let costVista = 0;
    if (tipoVista === "EXTERIOR") costVista = base * 0.7;
    else if (tipoVista === "INTERIOR") costVista = base * 0.8;

    const costUrgente = urgente === "SI" ? base * 0.5 : 0;

    let costCalidad = 0;
    if (calidad === "2K") costCalidad = 0;
    else if (calidad === "4K") costCalidad = base * 0.3;
    else if (calidad === "8K") costCalidad = base * 0.5;

    let costCliente = 0;
    if (cliente === "PERSONAL") costCliente = 0;
    else if (cliente === "NEGOCIO") costCliente = base * 0.2;
    else if (cliente === "CORPORATIVO") costCliente = base * 0.5;

    let costProyecto = 0;
    if (proyecto === "PEQUEÑO") costProyecto = 0;
    else if (proyecto === "MEDIANO") costProyecto = base * 0.2;
    else if (proyecto === "GRANDE") costProyecto = base * 0.6;

    // Subtotal base sin Integración Web:
    const subtotalBase =
      base +
      (modelado === "SI" ? costMateriales : costPlanos + costVista) +
      costUrgente +
      costCalidad +
      costCliente +
      costProyecto;

    // Nuevo cálculo de Integración Web: si se selecciona SI, se suma un 20% del subtotalBase.
    const integrationCost = integracionWeb === "SI" ? subtotalBase * 0.2 : 0;

    // Nuevo subtotal (que se usará para el descuento)
    const subtotal = subtotalBase + integrationCost;

    // Cálculo del descuento basado en el nuevo subtotal:
    let discount = 0;
    if (descuentoPaquete !== "NO") {
      if (vistas <= 2) discount = 0;
      else if (vistas <= 5) discount = subtotal * 0.1;
      else if (vistas <= 9) discount = subtotal * 0.15;
      else if (vistas <= 100) discount = subtotal * 0.2;
    }

    const priceSinDescuento = subtotal;
    const priceConDescuento = subtotal - discount;
    const totalSinDescuento = priceSinDescuento * vistas;
    const totalConDescuento = priceConDescuento * vistas;

    return {
      costMateriales,
      costPlanos,
      costVista,
      costUrgente,
      costCalidad,
      costCliente,
      costProyecto,
      subtotalBase, // subtotal sin integración
      integrationCost,
      subtotal, // subtotal con integración
      discount,
      priceSinDescuento,
      priceConDescuento,
      totalSinDescuento,
      totalConDescuento,
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

  // Estilo para el contenedor del título
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
    maxHeight: "80vh",
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
      {/* Título dentro de una caja */}
      <div style={titleBoxStyle}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>Calculadora de 360</h1>
      </div>
      {/* Contenedor que agrupa el formulario y el resumen */}
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

            {/* Cantidad de Vistas */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Cantidad de Vistas:</label>
                <input
                  type="number"
                  value={cantidadVistas}
                  onChange={(e) => setCantidadVistas(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>Vistas: {cantidadVistas}</span>
              </div>
            </div>

            {/* Se te proporcionó modelado */}
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

            {/* Si se proporcionó modelado, muestra el selector de materiales */}
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

            {/* Si NO se proporcionó modelado, muestra selectores de planos y tipo de vista */}
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
                    </select>
                  </div>
                  <div className="costDisplay" style={costDisplayStyle}>
                    <span>+ $ {results.costVista.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}

            {/* Campo: ¿Es urgente? */}
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

            {/* Campo: Calidad */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Calidad:</label>
                <select
                  value={calidad}
                  onChange={(e) => setCalidad(e.target.value)}
                  style={inputStyle}
                >
                  <option value="2K">2K</option>
                  <option value="4K">4K</option>
                  <option value="8K">8K</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>+ $ {results.costCalidad.toFixed(2)}</span>
              </div>
            </div>

            {/* Campo: Tipo de Cliente */}
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

            {/* Campo: Tipo de Proyecto */}
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

            {/* Campo: Integración Web */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>Integración Web:</label>
                <select
                  value={integracionWeb}
                  onChange={(e) => setIntegracionWeb(e.target.value)}
                  style={inputStyle}
                >
                  <option value="NO">NO</option>
                  <option value="SI">SI</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>
                  {integracionWeb === "SI"
                    ? "+ $ " + (results.subtotalBase * 0.2).toFixed(2)
                    : "+ $ 0.00"}
                </span>
              </div>
            </div>

            {/* Campo: Descuento por Paquete */}
            <div className="formRow" style={formRowStyle}>
              <div style={inputContainerStyle}>
                <label style={labelStyle}>¿Descuento por paquete?</label>
                <select
                  value={descuentoPaquete}
                  onChange={(e) => setDescuentoPaquete(e.target.value)}
                  style={inputStyle}
                >
                  <option value="NO">NO</option>
                  <option value="SI">SI</option>
                </select>
              </div>
              <div className="costDisplay" style={costDisplayStyle}>
                <span>- $ {results.discount.toFixed(2)}</span>
              </div>
            </div>
          </form>
        </div>
        {/* Contenedor del resumen */}
        <div className="summary-container" style={summaryStyle}>
          <h2 style={summaryHeadingStyle}>Resumen</h2>
          <p style={summaryTextStyle}>
            <span style={summaryLabelStyle}>Subtotal (con integración):</span>
            <strong style={summaryValueStyle}>$ {results.subtotal.toFixed(2)}</strong>
          </p>
          <p style={summaryTextStyle}>
            <span style={summaryLabelStyle}>Precio por render (con descuento):</span>
            <strong style={summaryValueStyle}>$ {results.priceConDescuento.toFixed(2)}</strong>
          </p>
          <p style={summaryTextStyle}>
            <span style={summaryLabelStyle}>Total final (con descuento):</span>
            <strong style={summaryTotalValueStyle}>$ {results.totalConDescuento.toFixed(2)}</strong>
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
              <strong>Costo Base:</strong> Es el precio mínimo establecido para la realización de un render. Representa el valor base del trabajo antes de aplicar cualquier ajuste adicional. 
            </p>
            <p>
              <strong>Cantidad de Vistas:</strong> Indica el número de imagenes 360 que se van a realizar en el proyecto.
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
              <strong>Calidad:</strong> La calidad final del render influye en el precio, ya que mayor resolución requiere más tiempo y recursos (2K, 4K, 8K).
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
            <p>
              <strong>Integración Web:</strong> Si se selecciona SI, se suma un 20% del subtotal base. Por el acomodo y ajustes necesarios para la integración en una página web.
            </p>
            <p>
              <strong>Descuento por Paquete:</strong> Se aplican descuentos según la cantidad de imagenes 360 solicitados en un solo paquete. Cuantas más vistas se encarguen, mayor será el descuento aplicado.
            </p>
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
        /* Hover para el botón de "Más Información" */
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
        /* Líneas divisorias entre elementos dentro del modal */
        .modal-content p {
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .modal-content p:last-child {
          border-bottom: none;
        }
        /* Modal más angosto en versión móvil */
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
