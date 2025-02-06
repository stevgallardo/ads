import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "ArchDesign Studio - Plataforma de Arquitectura",
  description: "Domina el Arte del Renderizado Profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.className} relative bg-black text-white`}>
        {/* Animated Background */}
        <div className="bg-animated"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* SpeedInsights para optimización de rendimiento */}
          <SpeedInsights />
          <Analytics/>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

