import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative text-white group">
      {/* Contenedor de la imagen de fondo:
          Reemplaza '/images/your-background.jpg' con la ruta de tu imagen.
          El uso de 'group' en el footer y 'group-hover:opacity-20' permite que al pasar el cursor sobre todo el footer, 
          se revele la imagen (a un 20% de opacidad, ajusta según necesites).
      */}
      <div className="absolute inset-0 bg-[url('/images/archdesignlogo.png')]  bg-contain bg-center opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />

      <div className="container relative py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/archdesignlogo.png"
              alt="ArchDesign Studio Logo"
              width={200}
              height={80}
              className="mb-4"
            />
            <p className="text-sm text-gray-400 text-center">
              {/* Mensaje */}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-200">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/cursos"
                  className="text-gray-400 hover:text-primary"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda"
                  className="text-gray-400 hover:text-primary"
                >
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-primary">
                  Gratis
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-200">Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://glow-month-8c7.notion.site/17f25c34b25b8032a4ffe5ea5aabcc44?pvs=105"
                  className="text-gray-400 hover:text-primary"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-gray-400 hover:text-primary"
                >
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="mb-6 text-lg font-semibold text-gray-200">Contacto</h4>
            <div className="flex space-x-6 mb-4">
              <Link
                href="https://www.instagram.com/arch.design_studio_/"
                className="text-gray-400 hover:text-primary flex items-center space-x-2"
              >
                <Instagram className="h-8 w-8" />
                <span className="text-sm">Instagram</span>
              </Link>
              <Link
                href="https://wa.me/message/AUJ3TVUGXDLZH1"
                className="text-gray-400 hover:text-primary flex items-center space-x-2"
              >
                <Phone className="h-8 w-8" />
                <span className="text-sm">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>2025 ArchDesign Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
