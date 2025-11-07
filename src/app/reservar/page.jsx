"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CallToAction from "@/components/CallToAction/CallToAction";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO SECTION
      ====================================================================================== */}
      <Hero
        title="Reserva tu experiencia"
        subtitle="Elige entre Molino de Café o Café con Raíces y completa tu reservación."
        backgroundImage="/assets/images/hero/hero_reserva.jpg"
        buttonText=""
        buttonLink="/"
        buttonIcon=""
        leftColor="" // molino-primary
        rightColor="" // cafe-primary
        overlayOpacity={0.45}
        align="center"
      />

      {/* ======================================================================================
      RESERVA CARDS SECTION
      ====================================================================================== */}
      <section className="bg-gradient-home-4 py-spacing-8 flex flex-col items-center justify-center px-6 md:px-spacing-6 lg:px-spacing-10">
        <motion.h2
          className="text-primary font-primary text-size-7 md:text-size-9 font-bold text-center mb-spacing-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Elige tu destino
        </motion.h2>

        <motion.p
          className="text-dark/80 font-secondary text-size-3 md:text-size-4 text-center max-w-3xl mb-spacing-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Vive la magia del café y la hospitalidad. Selecciona el lugar donde
          deseas vivir tu experiencia y completa tu pago de forma rápida y
          segura.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-spacing-4 w-full max-w-6xl">
          {/* 🏡 Molino de Café */}
          <motion.div
            className="bg-white rounded-custom-20 shadow-lg overflow-hidden flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/images/hero/about_molino.jpg"
              alt="Molino de Café Cabañas Lodge"
              width={600}
              height={400}
              className="w-full  h-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-size-5 font-primary text-primary mb-3">
                Molino de Café – Cabañas Lodge
              </h3>
              <p className="text-dark/80 font-secondary text-size-2 mb-6">
                Un refugio entre montañas donde la tranquilidad y el aroma del
                café crean momentos únicos. Reserva tu estadía y disfruta una
                experiencia natural y acogedora.
              </p>
              <div className="mt-auto">
                <Link
                  href="https://checkout.kushkipagos.com/XXXX-molino" // 🔗 reemplaza con tu enlace real
                  target="_blank"
                  className="btn bg-secondary text-dark border-none rounded-custom-20 px-8 py-3  text-size-2 transition duration-300 hover:bg-highlight hover:text-light"
                >
                  Reservar en Molino
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ☕ Café con Raíces */}
          <motion.div
            className="bg-white rounded-custom-20 shadow-lg overflow-hidden flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/assets/images/raices/cafeteria_reserva.jpg"
              alt="Café con Raíces"
              width={600}
              height={400}
              className="w-full  h-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-size-5 font-brand text-primary mb-3">
                Café con Raíces – Cafetería
              </h3>
              <p className="text-dark/80 font-secondary text-size-2 mb-6">
                Vive la energía de la ciudad con el sabor del café de
                especialidad. Ideal para reservas de brunch, catas o eventos
                privados con el sello único de Café con Raíces.
              </p>
              <div className="mt-auto">
                <Link
                  href="https://checkout.kushkipagos.com/XXXX-cafe" // 🔗 reemplaza con tu enlace real
                  target="_blank"
                  className="btn bg-secondary text-dark border-none rounded-custom-20 px-8 py-3  text-size-2 transition duration-300 hover:bg-highlight hover:text-light"
                >
                  Reservar en Café
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ======================================================================================
      CALL TO ACTION - VISÍTANOS
      ====================================================================================== */}
      <CallToAction
        // 🏷 Contenido
        title="¿Tienes dudas sobre tu reserva?"
        subtitle="Nuestro equipo está listo para ayudarte con disponibilidad, tarifas y experiencias personalizadas."
        buttonText="Contáctanos"
        buttonLink="/contacto"
        icon=""
        // 🎨 Fondo e imagen
        bgImage="/assets/images/hero/cta_reservas.jpg"
        overlayColor="bg-black/60"
        bgColor="bg-primary"
        paddingY="py-spacing-10 md:py-spacing-12"
        align="center"
        // 🔠 Tipografía y colores
        titleFont="font-primary"
        subtitleFont="font-secondary"
        titleSize="text-size-7 md:text-size-9 font-bold"
        subtitleSize="text-size-3 md:text-size-4"
        titleColor="text-light"
        subtitleColor="text-light/90"
        // 🔘 Botón
        buttonBg="bg-secondary"
        buttonTextColor="text-dark"
        buttonHoverBg="hover:bg-highlight hover:text-dark"
        buttonFont="font-secondary"
        buttonSize="text-size-3"
        buttonRounded="rounded-custom-20"
        buttonPadding="px-8 py-3"
        buttonShadow="shadow-md hover:shadow-lg"
        buttonGap="gap-2"
        buttonIconSize="text-size-3"
        // 🎞️ Animación
        motionOptions={{
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      />
    </main>
  );
}
