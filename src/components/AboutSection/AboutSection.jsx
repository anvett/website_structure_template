// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const AboutSection = ({
//   title = "Sobre nosotros",
//   description = `Molino de Café Cabañas Lodge y Café con Raíces comparten la misma esencia: el <span class='text-secondary font-bold'>pasión por el café</span>, la <span class='text-secondary font-semibold'>naturaleza</span> y las <span class='text-secondary font-semibold'>experiencias auténticas</span> que conectan a las personas.`,
//   buttonText = "Descubre más detalles",
//   buttonLink = "/nosotros",
//   bgColor = "bg-light",
//   textColor = "text-dark",
// }) => {
//   return (
//     <section
//       className={`${bgColor} ${textColor} py-spacing-5  md:py-spacing-9 px-spacing-2 sm:px-spacing-4 lg:px-spacing-6`}
//     >
//       <div className="max-w-5xl mx-auto text-center">
//         {/* 🔠 Título */}
//         <motion.h2
//           className="font-primary text-size-6 md:text-size-8 font-bold mb-6"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           {title}
//         </motion.h2>

//         {/* 🪶 Descripción con palabras resaltadas */}
//         <motion.p
//           className="font-secondary text-size-2 md:text-size-4 text-dark/80 leading-relaxed mb-spacing-3"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           dangerouslySetInnerHTML={{ __html: description }}
//         />

//         {/* 🔘 Botón */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.1 }}
//         >
//           <Link href={buttonLink}>
//             <button className="btn bg-secondary text-light border-none hover:bg-highlight rounded-custom-20 px-8 py-3 font-semibold text-size-1 sm:text-size-2 transition duration-300">
//               {buttonText}
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * AboutSection – versión extendida y totalmente reutilizable
 *
 * ✅ Props clave:
 * - Layout: bgColor, textColor, paddingY, paddingX, containerMax, align, sectionClasses
 * - Título: title, titleColor, titleFont, titleSize, titleWeight, titleMargin
 * - Descripción (HTML): description, descriptionColor, descriptionFont, descriptionSize, descriptionLeading, descriptionMargin
 * - Botón: enableButton, buttonText, buttonLink, buttonAriaLabel,
 *          buttonBg, buttonTextColor, buttonHoverBg, buttonRounded,
 *          buttonPx, buttonPy, buttonSize, buttonShadow, buttonClasses
 * - Motion: motionTitle, motionDesc, motionButton (framer-motion props)
 */

const AboutSection = ({
  // ─── Contenido ───────────────────────────────────────────────────────────────
  title = "Sobre nosotros",
  description = `Molino de Café Cabañas Lodge y Café con Raíces comparten la misma esencia: la <span class='text-secondary font-bold'>pasión por el café</span>, la <span class='text-secondary font-semibold'>naturaleza</span> y las <span class='text-secondary font-semibold'>experiencias auténticas</span> que conectan a las personas.`,
  // ─── Layout ─────────────────────────────────────────────────────────────────
  bgColor = "bg-light",
  textColor = "text-dark",
  paddingY = "py-spacing-5 md:py-spacing-9",
  paddingX = "px-spacing-2 sm:px-spacing-4 lg:px-spacing-6",
  containerMax = "max-w-5xl",
  align = "center", // "left" | "center" | "right"
  sectionClasses = "",
  // ─── Estilos de título ──────────────────────────────────────────────────────
  titleColor = "",
  titleFont = "font-primary",
  titleSize = "text-size-6 md:text-size-8",
  titleWeight = "font-bold",
  titleMargin = "mb-6",
  // ─── Estilos de descripción ─────────────────────────────────────────────────
  descriptionColor = "text-dark/80",
  descriptionFont = "font-secondary",
  descriptionSize = "text-size-2 md:text-size-4",
  descriptionLeading = "leading-relaxed",
  descriptionMargin = "mb-spacing-3",
  // ─── Botón ─────────────────────────────────────────────────────────────────
  enableButton = true,
  buttonText = "Descubre más detalles",
  buttonLink = "/nosotros",
  buttonAriaLabel = "Ir a la página de nosotros",
  buttonBg = "bg-secondary",
  buttonTextColor = "text-light",
  buttonHoverBg = "hover:bg-highlight",
  buttonRounded = "rounded-custom-20",
  buttonPx = "px-8",
  buttonPy = "py-3",
  buttonSize = "text-size-1 sm:text-size-2",
  buttonShadow = "", // ejemplo: "shadow-md"
  buttonClasses = "btn border-none transition duration-300",
  // ─── Animaciones (framer-motion) ────────────────────────────────────────────
  motionTitle = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  },
  motionDesc = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1 },
  },
  motionButton = {
    initial: { opacity: 0, scale: 0.96 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.9 },
  },
}) => {
  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <section className={`${bgColor} ${textColor} ${paddingY} ${paddingX} ${sectionClasses}`}>
      <div className={`${containerMax} mx-auto ${alignClass}`}>
        {/* 🔠 Título */}
        <motion.h2
          className={`${titleFont} ${titleSize} ${titleWeight} ${titleMargin} ${titleColor}`}
          {...motionTitle}
        >
          {title}
        </motion.h2>

        {/* 🪶 Descripción con HTML permitido */}
        <motion.p
          className={`${descriptionFont} ${descriptionSize} ${descriptionColor} ${descriptionLeading} ${descriptionMargin}`}
          {...motionDesc}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* 🔘 Botón */}
        {enableButton && (
          <motion.div {...motionButton}>
            <Link href={buttonLink} aria-label={buttonAriaLabel}>
              <button
                className={[
                  buttonClasses,
                  buttonBg,
                  buttonTextColor,
                  buttonHoverBg,
                  buttonRounded,
                  buttonPx,
                  buttonPy,
                  buttonSize,
                  buttonShadow,
                ].join(" ")}
              >
                {buttonText}
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
