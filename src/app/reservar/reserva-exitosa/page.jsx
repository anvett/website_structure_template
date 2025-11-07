"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO SECTION
      ====================================================================================== */}
      <Hero
        title="¡Tu reserva fue confirmada!"
        subtitle="Gracias por elegir Molino de Café & Café con Raíces."
        backgroundImage="/assets/images/hero/hero.png"
        buttonText="Volver al inicio"
        buttonLink="/"
        buttonIcon=""
        leftColor="" // molino-primary
        rightColor="" // cafe-primary
        overlayOpacity={0.25}
        align="center"
      />

      {/* ======================================================================================
      MENSAJE DE CONFIRMACIÓN
      ====================================================================================== */}
      <section className="bg-light py-spacing-8 flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-primary font-primary text-size-7 md:text-size-9 font-bold mb-spacing-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Gracias por tu confianza!
        </motion.h2>

        <motion.p
          className="text-dark/80 font-secondary text-size-3 md:text-size-4 max-w-3xl mb-spacing-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tu pago se ha procesado correctamente a través de Kushki.  
          En breve recibirás la confirmación de tu reserva al correo registrado.  
          Te esperamos para vivir una experiencia inolvidable con el aroma del café y la magia de la naturaleza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Link
            href="/contacto"
            className="btn bg-secondary text-dark border-none rounded-custom-20 px-8 py-3 font-semibold text-size-3 transition duration-300 hover:bg-highlight hover:text-light"
          >
            Contactar al equipo
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
