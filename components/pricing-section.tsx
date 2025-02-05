"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "RenderStarter",
    description: "Perfecto para estudiantes.",
    subheading: "De cero a Profesional en 2 semanas",
    sessions: "4 SESIONES ONLINE",
    price: 1800,
    originalPrice: 2000,
    discount: 10,
    features: [
      "Modelado rápido y eficiente en SketchUp",
      "Renderizado profesional con V-Ray y Chaos Cosmos",
      "Postproducción avanzada en Photoshop",
      "Acceso a programas, librerías y guías exclusivas",
    ],
    href: "/cursos/render-starter",
  },
  {
    name: "RenderPro",
    description: "Perfecto para arquitectos y diseñadores.",
    subheading: "Crea renders Profesionales que venden",
    sessions: "5 SESIONES ONLINE",
    price: 1900,
    originalPrice: 3800,
    discount: 50,
    popular: true,
    features: [
      "Incluye todo lo del paquete RenderStarter",
      "Herramientas avanzadas de inteligencia artificial",
      "Creación de página web para presentar tu portafolio",
      "Todo lo que necesitas para conseguir clientes desde cero.",
    ],
    href: "/cursos/render-pro",
  },
  {
    name: "RenderAdvanced",
    description: "Ideal para emprendedores.",
    subheading: "Domina el mercado con herramientas innovadoras",
    sessions: "7 SESIONES ONLINE",
    price: 4130,
    originalPrice: 5900,
    discount: 30,
    features: [
      "Incluye todo lo del paquete RenderPro",
      "Recorridos Virtuales con Vray 6 desde cero",
      "Renders 360° con vray desde cero",
      "Estrategias de marketing y creación de marca personal",
    ],
    href: "/cursos/render-advanced",
  },
];

export function PricingSection() {
  return (
    <section className="container py-28">
      <div className="bg-[rgba(0,10,22,0.42)] backdrop-blur-lg rounded-xl border border-white/20 p-10 md:p-12 lg:p-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">Cursos</h2>
          <p className="mt-4 text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            // Definir el enlace de "Comprar" según el plan
            const buyLink =
              plan.name === "RenderStarter"
                ? "https://mpago.li/21pHa26"
                : plan.name === "RenderPro"
                ? "https://mpago.li/2mUxq6B"
                : plan.name === "RenderAdvanced"
                ? "https://mpago.li/2CwMuUc"
                : plan.href; // fallback

            return (
              <Card
                key={plan.name}
                className={`relative flex flex-col overflow-hidden transition-transform duration-200 hover:scale-105 ${
                  plan.popular
                    ? "border-2 border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]"
                    : "hover:shadow-[0_0_15px_rgba(125,211,252,0.15)]"
                }`}
              >
                <div className="flex flex-1 flex-col p-8 bg-[rgba(0,10,22,0.42)] backdrop-blur-lg rounded-xl">
                  {plan.popular && (
                    <Badge className="absolute -right-11 top-6 rotate-45 bg-blue-500 px-10 py-1.5 text-primary-foreground">
                      MÁS POPULAR
                    </Badge>
                  )}
                  <div className="mb-8 text-center">
                    <h3 className="text-3xl">
                      {plan.name.startsWith("Render") && (
                        <>
                          Render
                          <span className="font-bold">
                            {plan.name.replace("Render", "")}
                          </span>
                        </>
                      )}
                    </h3>
                    <p className="mt-4 text-muted-foreground">{plan.description}</p>
                    <p className="text-sm">{plan.subheading}</p>
                  </div>
                  <div className="flex-1">
                    <p className="mb-7 font-medium">
                      CURSO EN VIVO | {plan.sessions}
                    </p>
                    <ul className="mb-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-5xl font-bold">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">MXN</span>
                    </div>
                    {plan.discount > 0 && (
                      <div className="mt-1 flex items-center justify-center gap-2">
                        <span className="text-sm line-through text-muted-foreground">
                          ${plan.originalPrice.toLocaleString()} MXN
                        </span>
                        <Badge variant="destructive">-{plan.discount}%</Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col mt-6 gap-4">
                    {/* Botón "COMPRAR" utiliza el enlace definido */}
                    <Button
                      asChild
                      className="mx-auto w-40 rounded-full bg-blue-500 hover:bg-blue-900 text-white font-semibold px-6 py-2 transition-colors"
                    >
                      <Link href={buyLink}>
                        <span className="flex items-center justify-center">
                          COMPRAR
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                    {/* Botón "VER CURSO" */}
                    <Button
                      asChild
                      className="mx-auto w-40 rounded-full bg-blue-500/10 text-white font-medium px-4 py-2 transition-colors hover:bg-black hover:text-white"
                    >
                      <Link href={plan.href}>VER CURSO</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
