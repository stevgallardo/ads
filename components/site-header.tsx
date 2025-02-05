"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu as MenuIcon,
  X as XIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface DropdownMenuProps {
  triggerText: string;
  triggerHref: string;
  children: React.ReactNode;
}

function DropdownMenu({ triggerText, triggerHref, children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Al hacer clic en el texto se navega a la página */}
      <Link
        href={triggerHref}
        className="group relative text-md font-medium transition-colors text-white hover:text-blue-400"
      >
        {triggerText}
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-400 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
      </Link>
      {/* Botón para alternar el dropdown con vectores */}
      <button onClick={() => setOpen((prev) => !prev)} className="ml-1 text-white">
        {open ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {open && (
        <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-4 w-[90vw] md:w-[600px] bg-[rgba(0,10,22,0.9)] backdrop-blur-lg rounded-xl border border-white/20 p-4 md:p-6 lg:p-8 z-80">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileMenuAccordion({
  title,
  sublinks,
}: {
  title: string;
  sublinks: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-white text-lg font-medium"
      >
        <span>{title}</span>
        {open ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {open && (
        <div className="mt-2 pl-4 flex flex-col space-y-2">
          {sublinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white text-lg">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/archdesignlogo.png"
            alt="ArchDesign Studio"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex items-center space-x-14">
          <Link
            href="/"
            className="group relative text-md font-medium transition-colors text-white hover:text-blue-400"
          >
            Inicio
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-400 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
          </Link>

          <DropdownMenu triggerText="Cursos" triggerHref="/cursos">
            <div className="flex gap-4 items-start">
              {/* Columna izquierda: links */}
              <div className="w-1/2 flex flex-col items-start space-y-3">
                <Link
                  href="/cursos/render-starter"
                  className="text-md font-medium transition-colors duration-300 text-white hover:text-blue-400"
                >
                  Render - Starter
                </Link>
                <Link
                  href="/cursos/render-pro"
                  className="text-md font-medium transition-colors duration-300 text-white hover:text-blue-400"
                >
                  Render - Pro
                </Link>
                <Link
                  href="/cursos/render-advanced"
                  className="text-md font-medium transition-colors duration-300 text-white hover:text-blue-400"
                >
                  Render - Advanced
                </Link>
                <Link
                  href="/cursos"
                  className="text-md font-medium transition-colors duration-300 text-white hover:text-blue-400"
                >
                  Ver todos
                </Link>
              </div>
              {/* Divisor */}
              <div className="w-px bg-white/20"></div>
              {/* Columna derecha: imágenes */}
              <div className="w-1/2 grid grid-cols-1 gap-5">
                <Link href="/cursos/render-starter">
                  <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src="/images/ctarenderstarter.png"
                      alt="Curso Render Starter"
                      width={200}
                      height={65}
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </Link>
                <Link href="/cursos/render-pro">
                  <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src="/images/ctarenderpro.png"
                      alt="Curso Render Pro"
                      width={200}
                      height={65}
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </Link>
                <Link href="/cursos/render-advanced">
                  <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src="/images/ctarenderadvanced.png"
                      alt="Curso Render Advanced"
                      width={200}
                      height={65}
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </DropdownMenu>

          <DropdownMenu triggerText="Gratis" triggerHref="/tools">
            <div className="flex gap-4 items-start">
              <div className="w-1/2 flex flex-col items-start space-y-3">
                <Link
                  href="/tools/calculadora"
                  className="text-md font-medium transition-colors duration-300 text-white hover:text-blue-400"
                >
                  Gratis - Calculadora Render
                </Link>
                <Link
                  href="/tools/calculadora"
                  className="text-md font-medium transition-colors duration-300 text-white hover:text-blue-400"
                >
                  Gratis - Render Maqueta
                </Link>
                <Link
                  href="/tools"
                  className="text-md font-medium transition-colors duration-300 text-white hover:text-blue-400"
                >
                  Gratis - Guía Marketing
                </Link>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="w-1/2 grid grid-cols-1 gap-5">
                <Link href="/tools/calculadora">
                  <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src="/images/rendercalc.png"
                      alt="Render Calc"
                      width={200}
                      height={65}
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </Link>
                <Link href="/tools/calculadora">
                  <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src="/images/ventas.jpg"
                      alt="Ventas"
                      width={200}
                      height={65}
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </Link>
                <Link href="/tools/calculadora">
                  <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src="/images/maqueta.jpg"
                      alt="Maqueta"
                      width={200}
                      height={65}
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </DropdownMenu>

          {/* Botón "Comenzar" (versión escritorio) */}
          <a
            href="https://wa.me/message/AUJ3TVUGXDLZH1" // Reemplaza con tu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 transition-colors">
              Comenzar
            </Button>
          </a>
        </nav>

        {/* Botón de menú móvil (visible en pantallas pequeñas) */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-white">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Overlay móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black p-6 flex flex-col">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/images/archdesignlogo.png"
                alt="ArchDesign Studio"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          {/* Elementos del menú móvil con separadores */}
          <div className="mt-6 flex flex-col divide-y divide-gray-700">
            <div className="py-2">
              <Link
                href="/"
                className="text-white text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
            </div>
            <div className="py-2">
              <MobileMenuAccordion
                title="Cursos"
                sublinks={[
                  { label: "Render - Starter", href: "/cursos/render-starter" },
                  { label: "Render - Pro", href: "/cursos/render-pro" },
                  { label: "Render - Advanced", href: "/cursos/render-advanced" },
                  { label: "Ver todos", href: "/cursos" },
                ]}
              />
            </div>
            <div className="py-2">
              <MobileMenuAccordion
                title="Gratis"
                sublinks={[
                  { label: "Gratis - Calculadora Render", href: "/tools/calculadora" },
                  { label: "Gratis - Render Maqueta", href: "/tools/calculadora" },
                  { label: "Gratis - Guía Marketing", href: "/tools" },
                ]}
              />
            </div>
            <div className="py-2">
              <a
                href="https://wa.me/message/AUJ3TVUGXDLZH1" // Reemplaza con tu número de WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-6 py-3 text-center text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comenzar
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
