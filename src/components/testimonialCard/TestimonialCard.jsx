"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TestimonialCard = ({ testimonials }) => {
  return (
    <section className="py-spacing-8 bg-gray-100 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-primary mb-6">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg border border-gray-300 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
              <a
                href={testimonial.cardLink}
                className="text-primary font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver tarjeta digital
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;

// ✅ Uso Completo del Componente
/*
<Testimonials
  testimonials={[
    {
      name: "Juan Pérez",
      feedback: "AnvetCard ha cambiado la forma en que comparto mi información. ¡Muy recomendable!",
      image: "/assets/images/testimonials/juan.jpg",
      cardLink: "https://anvetcard.com/juan-perez"
    },
    {
      name: "María Gómez",
      feedback: "Excelente solución para profesionales. Ahora mis clientes pueden contactarme fácilmente.",
      image: "/assets/images/testimonials/maria.jpg",
      cardLink: "https://anvetcard.com/maria-gomez"
    }
  ]}
/>
*/
