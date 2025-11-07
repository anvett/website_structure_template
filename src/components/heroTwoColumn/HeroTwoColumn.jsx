"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroTwoColumn = ({
  // 🖼 Imagen de fondo (obligatoria)
  backgroundImage = "/assets/images/hero/hero.jpg",

  // 🏷 Título principal
  mainTitle,
  attentionText = "",

  // 🌿 Columna izquierda
  leftHeading = "",
  leftTitle = "",
  leftDescription = "",
  leftButtonText = "",
  leftButtonLink = "/",
  leftContent,

  // ☕ Columna derecha
  rightHeading = "",
  rightTitle = "",
  rightDescription = "",
  rightButtonText = "",
  rightButtonLink = "/",
  rightContent,

  // 🎨 Estilos personalizables
  textColor = "text-light",
  titleColor = "text-contrast",
  buttonStyle = "bg-secondary hover:bg-highlight text-light",
  overlayColor = "bg-black/40",
  sectionHeight = "min-h-screen",
  contentPadding = "px-6 py-12 md:px-16 lg:px-24",
  dividerColor = "border-light/40",

  // ✨ Animación
  motionVariant = "fade-up",
}) => {
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <section
      className={`relative w-full ${sectionHeight} flex flex-col items-center justify-center overflow-hidden`}
    >
      {/* 🖼 Fondo responsive */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* 🔳 Capa de oscurecimiento */}
      <div className={`absolute inset-0 ${overlayColor}`} />

      {/* 🏷 Título principal centrado arriba */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-12 mt-10 md:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants[motionVariant]}
      >
        <h1
          className={`text-4xl md:text-6xl font-extrabold drop-shadow-lg ${titleColor}`}
        >
          {mainTitle}
        </h1>
        {attentionText && (
          <p
            className={`mt-4 text-lg md:text-xl font-medium tracking-wide ${textColor}`}
          >
            {attentionText}
          </p>
        )}
      </motion.div>

      {/* 🌗 Contenedor de columnas */}
      <div
        className={`relative z-10 w-full flex flex-col gap-spacing-5  lg:flex-row items-center justify-center mt-10 lg:mt-16 ${contentPadding}`}
      >
        {/* 🔹 Columna izquierda */}
<motion.div
  className="w-full lg:w-1/2 flex flex-col items-center text-center justify-center px-6 md:px-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  variants={variants[motionVariant]}
>
  {leftContent ? (
    leftContent
  ) : (
    <>
      {leftHeading && (
        <p className={`uppercase tracking-wide mb-3 ${textColor}`}>
          {leftHeading}
        </p>
      )}
      {leftTitle && (
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
          {leftTitle}
        </h2>
      )}
      {leftDescription && (
        <p className={`mb-6 text-lg md:text-xl ${textColor}`}>
          {leftDescription}
        </p>
      )}
      {leftButtonText && (
        <Link
          href={leftButtonLink}
          className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${buttonStyle}`}
        >
          {leftButtonText}
        </Link>
      )}
    </>
  )}
</motion.div>


        {/* 🔸 Línea divisoria central */}
        <div
          className={`hidden lg:block h-96 border-l ${dividerColor} mx-10`}
        ></div>

        {/* 🔸 Columna derecha */}
<motion.div
  className="w-full lg:w-1/2 flex flex-col items-center text-center justify-center px-6 md:px-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  variants={variants[motionVariant]}
>
  {/* ✅ Si se pasa un componente personalizado (ej: ContactHeroCard), se renderiza aquí */}
  {rightContent ? (
    rightContent
  ) : (
    <>
      {rightHeading && (
        <p className={`uppercase tracking-wide mb-3 ${textColor}`}>
          {rightHeading}
        </p>
      )}
      {rightTitle && (
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}
        >
          {rightTitle}
        </h2>
      )}
      {rightDescription && (
        <p className={`mb-6 text-lg md:text-xl ${textColor}`}>
          {rightDescription}
        </p>
      )}
      {rightButtonText && (
        <Link
          href={rightButtonLink}
          className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${buttonStyle}`}
        >
          {rightButtonText}
        </Link>
      )}
    </>
  )}
</motion.div>

      </div>
    </section>
  );
};

export default HeroTwoColumn;

// =======================================
// USO DEL <COMPONENTE>
// =======================================

{/* <HeroTwoColumn
  backgroundImage="/assets/images/cursos/cursos_bg.jpg"
  mainTitle="Cursos de Barismo y Catación"
  attentionText="Aprende de expertos del café"
  leftHeading="Formación Profesional"
  leftTitle="Domina el arte del café"
  leftDescription="Programas diseñados para convertirte en un barista experto, con clases prácticas y certificación."
  leftButtonText="Ver programas"
  leftButtonLink="/cursos"
  rightHeading="Experiencias"
  rightTitle="Talleres inmersivos"
  rightDescription="Conoce todo el proceso del café desde la semilla hasta la taza."
  rightButtonText="Descubre más"
  rightButtonLink="/cursos#experiencias"
  overlayColor="bg-black/60"
  textColor="text-light"
  titleColor="text-accent"
  buttonStyle="bg-secondary hover:bg-highlight text-light"
  contentPadding="px-6 py-16 md:px-20"
  dividerColor="border-accent/30"
/>; */}
