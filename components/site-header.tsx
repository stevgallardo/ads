"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Detectar clic fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/archdesignlogo.png"
            alt="ArchDesign Studio"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navegación Escritorio - Sin Dropdowns */}
        <nav className="hidden md:flex items-center space-x-14">
          <Link
            href="/"
            className="group relative text-md font-medium transition-colors text-white hover:text-blue-400"
          >
            Inicio
          </Link>
          <Link
            href="/cursos"
            className="group relative text-md font-medium transition-colors text-white hover:text-blue-400"
          >
            Cursos
          </Link>
          <Link
            href="/tools"
            className="group relative text-md font-medium transition-colors text-white hover:text-blue-400"
          >
            Gratis
          </Link>
          <a
            href="https://wa.me/message/AUJ3TVUGXDLZH1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full bg-blue-500 hover:bg-blue-800 text-white font-semibold px-6 py-2 transition-colors">
              Comenzar
            </Button>
          </a>
        </nav>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-white">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menú móvil con cierre al hacer clic fuera */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div
            ref={menuRef} // ✅ Detectar clic fuera con useRef
            className="w-3/4 max-w-[320px] bg-black/90 p-9 transform transition-transform duration-300 translate-x-0 md:hidden rounded-l-xl"
          >
            {/* Header del menú con botón de cierre */}
            <div className="flex justify-between items-center mb-6">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <XIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Navegación móvil con sombra en el texto */}
            <nav className="flex flex-col space-y-3 overflow-y-auto">
              <Link
                href="/"
                className="text-white text-lg text-center font-medium border-b border-white/20 pb-3 px-3 py-3 bg-[rgba(1,11,24,0.97)] hover:bg-black rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textShadow: "1px 1px 1px rgb(2, 14, 31)" }}
              >
                Inicio
              </Link>
              <Link
                href="/cursos"
                className="text-white text-lg text-center font-medium border-b border-white/20 pb-3 px-3 py-3 bg-[rgba(1,11,24,0.97)] hover:bg-black rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textShadow: "1px 1px 1px rgb(2, 14, 31)" }}
              >
                Cursos
              </Link>
              <Link
                href="/tools"
                className="text-white text-lg text-center font-medium border-b border-white/20 pb-3 px-3 py-3 bg-[rgba(1,11,24,0.97)] hover:bg-black rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textShadow: "1px 1px 1px rgb(2, 14, 31)" }}
              >
                Gratis
              </Link>

              <a
                href="https://wa.me/message/AUJ3TVUGXDLZH1"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-white/20 bg-blue-500/95 hover:bg-blue-600 text-white font-semibold rounded-xl px-6 py-3 text-center text-lg mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comenzar
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
