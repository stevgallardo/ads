"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Module {
  title: string
  lessons: string[]
}

interface CourseContentProps {
  modules: Module[]
  contentImage: string  // NUEVA propiedad para la imagen del contenedor
}

export function CourseContent({ modules, contentImage }: CourseContentProps) {
  const [openModule, setOpenModule] = useState<string>("0")

  return (
    <section className="container py-16">
      {/* Contenedor con ancho máximo fijo y centrado */}
      <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
        {/* Columna izquierda: Contenido del curso */}
        <div>
          <h2 className="mb-6 text-4xl font-bold">Contenido del curso</h2>
          <Accordion type="single" value={openModule} onValueChange={setOpenModule}>
            {modules.map((module, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger className="text-left text-xl">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-4 space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-center gap-2 text-lg">
                        <ChevronDown className="h-5 w-5" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Columna derecha: Contenedor de imagen fijo y más grande */}
        <div className="lg:sticky lg:top-16 flex items-center justify-center">
          <div className="w-full max-w-lg h-[600px] flex items-center justify-center">
            <img
              src={contentImage} // Se utiliza la propiedad contentImage
              alt="Descripción de la imagen"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
