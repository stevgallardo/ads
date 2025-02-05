"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "Calculadora de Renders",
    excerpt: "Calcula el precio ideal para vender tus renders de manera competitiva.",
    image: "/images/rendercalc2.png", // ruta de la imagen para la calculadora
    category: "Herramienta",
    date: "2 Febrero 2025",
    readTime: "Renders, 360, Recorridos",
    slug: "calculadora-renders",
    href: "/tools/calculadora",
  },
  {
    title: "Video Tutorial: Render Maqueta",
    excerpt: "Aprende paso a paso cómo hacer un render tipo maqueta para impresionar a tus clientes.",
    image: "/images/maqueta2.jpg", // ruta de la imagen para el video tutorial
    category: "Tutorial",
    date: "Proximamente",
    readTime: "Sketchup, Vray, Photoshop",
    slug: "video-render-maqueta",
    href: "/tools/video-tutorial",
  },
  {
    title: "Guía Rápida de Marketing",
    excerpt: "Descubre estrategias efectivas de marketing para potenciar tus renders.",
    image: "/images/ventas2.jpg", // ruta de la imagen para la guía de marketing
    category: "Guía",
    date: "Proximamente",
    readTime: "pdf",
    slug: "guia-marketing",
    href: "/tools/guia-marketing",
  },
];

export function BlogGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <Link key={post.slug} href={post.href}>
          <Card className="h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge>{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold">{post.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <span className="text-sm font-medium text-primary">Más →</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
