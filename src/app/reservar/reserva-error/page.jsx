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
        title="Ocurrió un problema con tu pago"
        subtitle="Tu reserva no pudo completarse. No te preocupes, puedes intentarlo nuevamente."
        backgroundImage="/assets/images/hero/hero.png"
        buttonText="Intentar de nuevo"
        buttonLink="/reservar"
        buttonIcon=""
        leftColor=""
        rightColor=""
        overlayOpacity={0.25}
        align="center"
      />

      {/* ======================================================================================
      MENSAJE DE ERROR
      ====================================================================================== */}
      <section className="bg-light py-spacing-8 flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-highlight font-primary text-size-7 md:text-size-9 font-bold mb-spacing-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          No se completó la reserva
        </motion.h2>

        <motion.p
          className="text-dark/80 font-secondary text-size-3 md:text-size-4 max-w-3xl mb-spacing-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          El proceso de pago fue cancelado o interrumpido.  
          Si el cargo se realizó, no te preocupes: nuestro equipo revisará tu caso y te contactará a la brevedad.  
          También puedes comunicarte directamente con nosotros para verificar tu reserva.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/reservar"
            className="btn bg-secondary text-dark border-none rounded-custom-20 px-8 py-3 font-semibold text-size-3 transition duration-300 hover:bg-highlight hover:text-light"
          >
            Reintentar pago
          </Link>
          <Link
            href="/contacto"
            className="btn bg-accent text-dark border-none rounded-custom-20 px-8 py-3 font-semibold text-size-3 transition duration-300 hover:bg-highlight hover:text-light"
          >
            Contactar soporte
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
