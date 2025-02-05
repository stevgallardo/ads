import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer: "No, el curso comienza desde cero, perfecto para principiantes.",
  },
  {
    question: "¿Cómo se imparte el curso?",
    answer:
      "Es 100% online y en vivo, para que aprendas en tiempo real desde cualquier lugar.",
  },
  {
    question: "¿Qué hago si tengo dudas?",
    answer:
      "Contamos con soporte vía WhatsApp para ayudarte en cada paso del curso.",
  },
  {
    question: "¿Puedo usar una Mac?",
    answer:
      "El curso está optimizado para Windows; aunque puedes usar Mac, recomendamos Windows para una mejor experiencia.",
  },
  {
    question: "¿Qué garantía tengo?",
    answer:
      "Si no quedas satisfecho en los primeros 30 días, te devolvemos tu dinero sin preguntas.",
  },
];

export function FAQSection() {
  return (
    <section className="py-14 bg-[rgba(0,10,22,0.42)] backdrop-blur-lg rounded-xl border border-white/20 p-8">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Título centrado verticalmente */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-medium text-white leading-tight">
              Preguntas <br />
              <span className="font-bold">Frecuentes</span>
            </h2>
          </div>

          {/* Acordeón de preguntas */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white/20 py-4"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 text-base text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
