"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CallToAction = ({
  // 🏷 Contenido
  title = "Reserva tu experiencia",
  subtitle = "Vive la magia del café, la naturaleza y la inspiración.",
  buttonText = "Reservar ahora",
  buttonLink = "/reservar",
  icon = "",

  // 🎨 Estilos generales
  bgImage = "", // Si está vacío, se usa color plano
  bgColor = "bg-accent", // Color plano alternativo
  overlayColor = "bg-black/50",
  paddingY = "py-spacing-8 md:py-spacing-10",
  align = "center",

  // 🧠 Tipografía y color
  titleColor = "text-light",
  subtitleColor = "text-light/90",
  titleFont = "font-primary",
  subtitleFont = "font-secondary",
  titleSize = "text-size-7 md:text-size-9 font-bold",
  subtitleSize = "text-size-3 md:text-size-4",
  maxWidth = "max-w-2xl",

  // 🔘 Botón
  buttonBg = "bg-secondary",
  buttonTextColor = "text-light",
  buttonHoverBg = "hover:bg-highlight",
  buttonFont = "font-secondary",
  buttonSize = "text-size-3",
  buttonRounded = "rounded-custom-20",
  buttonPadding = "px-8 py-3",
  buttonShadow = "shadow-md hover:shadow-lg",
  buttonGap = "gap-2",
  buttonIconSize = "text-size-3",

  // 🎞️ Animación
  motionOptions = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  },
}) => {
  // Alineación dinámica
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <section
      className={`relative w-full ${paddingY} flex flex-col justify-center overflow-hidden`}
    >
      {/* 🖼 Fondo: imagen o color plano */}
      {bgImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ) : (
        <div className={`absolute inset-0 ${bgColor}`}></div>
      )}

      {/* 🔳 Capa superpuesta */}
      <div className={`absolute inset-0 ${overlayColor}`}></div>

      {/* 🌟 Contenido */}
      <motion.div
        className={`relative z-10 flex flex-col gap-4 md:gap-6 ${alignClass} px-8 md:px-16`}
        {...motionOptions}
      >
        {/* 🧭 Título */}
        <h2
          className={`${titleFont} ${titleSize} ${titleColor} drop-shadow-md`}
        >
          {title}
        </h2>

        {/* 📝 Subtítulo */}
        {subtitle && (
          <p
            className={`${subtitleFont} ${subtitleSize} ${subtitleColor} ${maxWidth}`}
          >
            {subtitle}
          </p>
        )}

        {/* 🔘 Botón */}
        <Link
          href={buttonLink}
          className={`mt-4 ${buttonBg} ${buttonTextColor} ${buttonHoverBg} ${buttonFont} ${buttonSize} ${buttonRounded} ${buttonPadding} ${buttonShadow} transition duration-300 flex items-center justify-center ${buttonGap}`}
        >
          {icon && <span className={`${buttonIconSize}`}>{icon}</span>}
          {buttonText}
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;


