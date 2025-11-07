"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = ({
  title = "Molino de Café & Café con Raíces: Experiencias únicas en cada taza.",
  subtitle = "Unimos la tranquilidad del campo con la energía de la ciudad.",
  backgroundImage = "/assets/images/hero/hero.jpg",
  buttonText = "Reserva tu experiencia",
  buttonLink = "/reservar",
  buttonIcon = "",
  leftColor = "", // molino-primary
  rightColor = "", // cafe-primary
  overlayOpacity = 0.45,
  align = "center",
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ======================================================================================
      MOBILE - hasta 1300px
      ====================================================================================== */}
      <div className="block xl:hidden relative w-full">
        {/* 🖼 Imagen ajustable sin recorte */}
        <Image
          src={backgroundImage}
          alt="Molino de Café & Café con Raíces"
          priority
          sizes="100vw"
          width={1920}
          height={1080}
          className="w-full h-auto block"
        />

        {/* 🌗 Overlay visible también en móviles */}
        <div
          className="absolute inset-0"
          style={{
            background:
              leftColor && rightColor
                ? `linear-gradient(135deg, ${leftColor} 45%, ${rightColor} 55%)`
                : `rgba(0, 0, 0, ${overlayOpacity})`,
          }}
        />

        {/* 🪶 Texto centrado sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pb-spacing-3 pt-spacing-6 sm:pt-spacing-9 md:pt-spacing-12">
          <motion.h1
            className="text-light font-primary text-size-4 sm:text-size-5 md:text-size-8 font-bold leading-tight drop-shadow-md max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.h2
            className="text-light font-secondary text-size-2 sm:text-size-4 md:text-size-5 mt-4 max-w-2xl drop-shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {subtitle}
          </motion.h2>

          {buttonText && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Link
                href={buttonLink}
                className="btn bg-accent text-dark border-none rounded-custom-20 px-8 py-3 font-semibold  text-size-1 sm:text-size-3 transition duration-300 hover:bg-highlight hover:text-light"
              >
                {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
                {buttonText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* ======================================================================================
      DESKTOP - desde 1300px
      ====================================================================================== */}
      <div className="hidden xl:flex relative min-h-screen w-full items-center justify-center overflow-hidden">
        {/* 🖼 Imagen de fondo optimizada */}
        <Image
          src={backgroundImage}
          alt="Molino de Café & Café con Raíces"
          fill
          priority
          quality={100}
          className="object-cover object-center w-full h-full"
          sizes="100vw"
          style={{
            imageRendering: "auto", // evita suavizado excesivo
            transform: "translateZ(0)", // mejora rendimiento en GPU
          }}
        />

        {/* 🌗 Overlay o degradado */}
        <div
          className="absolute inset-0"
          style={{
            background:
              leftColor && rightColor
                ? `linear-gradient(135deg, ${leftColor} 45%, ${rightColor} 55%)`
                : `rgba(0, 0, 0, ${overlayOpacity})`,
          }}
        />

        {/* 🪶 Contenido */}
        <div
          className={`relative z-10 flex flex-col items-${align} text-${align} px-1 md:px-spacing-6 pt-spacing-8 sm:pt-spacing-12 lg:pt-spacing-16`}
        >
          <motion.h1
            className="text-light font-primary text-size-7 lg:text-size-9 font-bold max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.h2
            className="text-light font-secondary text-size-4 lg:text-size-5 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {subtitle}
          </motion.h2>

          {buttonText && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Link
                href={buttonLink}
                className="btn bg-secondary text-dark border-none rounded-custom-20 px-8 py-3  text-size-2 transition duration-300 hover:bg-highlight hover:text-light"
              >
                {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
                {buttonText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

// ============================
// USO DEL <COMPONENTE>
// ============================

//      <Hero
//       title="Molino de Café & Café con Raíces "
//         subtitle="Experiencias únicas en cada taza."
//         backgroundImage="/assets/images/hero/hero.png"
//         buttonText="Reserva tu experiencia"
//         buttonLink="/reservar"
//         buttonIcon="☕"
//         leftColor="rgba(74, 92, 69, 0.8)"  // molino-primary
//         rightColor="rgba(59, 42, 34, 0.8)" // cafe-primary
//         overlayOpacity={0.25}
//         align="center"
//       />
