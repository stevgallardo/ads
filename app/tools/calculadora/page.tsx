// pages/calculator.js
import Head from "next/head";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import CalculatorTabs from "@/components/CalculatorTabs";

export default function CalculatorPage() {
  return (
    <>
      <Head>
        <title>Calculadora</title>
        <meta name="description" content="Calculadoras de Renders, Vistas 360 y Recorridos Virtuales" />
      </Head>
      <SiteHeader />
      <main>
        <CalculatorTabs />
      </main>
      <Footer />
    </>
  );
}
