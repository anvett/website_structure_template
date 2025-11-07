// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const HeroTextButtonImg = ({
//   title,
//   subtitle,
//   bulletPoints = [],
//   buttonText,
//   buttonLink,
//   mediaSrc,
//   mediaType = "image", // "image" o "video"
// }) => {
//   return (
//     <section className="py-spacing-6 bg-gray-100 items-start justify-between gap-4">
//       <div className="w-full px-spacing-2 lg:px-spacing-4 flex flex-col lg:flex-row items-center">
//         {/* Columna Izquierda: Textos y Botón */}
//         <motion.div
//           className="w-full lg:w-1/2 mb-6 lg:mb-0"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           {/* Título */}
//           <h1 className="section-h5 text-primary">{title}</h1>

//           {/* Subtítulo */}
//           <h2 className="section-title text-primary mb-spacing-3">{subtitle}</h2>

//           {/* Lista con Viñetas */}
//           <ul className="text-primary list-disc pl-6 mb-spacing-4">
//             {bulletPoints.map((point, index) => (
//               <li key={index} className="text-dark section-h5">
//                 {point}
//               </li>
//             ))}
//           </ul>

//           {/* Botón */}
//           <div className="flex justify-center">
//             <a href={buttonLink} className="main-button">
//               {buttonText}
//             </a>
//           </div>
//         </motion.div>

//         {/* Columna Derecha: Media (Imagen o Video) */}
//         <motion.div
//           className="w-full lg:w-1/2 flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           <div className="relative w-full lg:max-w-[800px] h-[300px] sm:h-[500px] lg:h-[600px]">
//             {mediaType === "video" ? (
//               <video
//                 controls
//                 className="w-full h-full object-contain rounded-lg shadow-lg"
//               >
//                 <source src={mediaSrc} type="video/mp4" />
//                 Tu navegador no soporta la reproducción de video.
//               </video>
//             ) : (
//               <Image
//                 src={mediaSrc}
//                 alt="Media"
//                 layout="fill"
//                 objectFit="contain"
//                 className="rounded-lg shadow-lg"
//               />
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroTextButtonImg;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroTextButtonImg = ({
  // 🧱 Contenido
  title,
  subtitle,
  bulletPoints = [],
  buttonText,
  buttonLink,
  mediaSrc,
  mediaType = "image",

  // 🎨 Colores y fondo
  bg = "bg-accent text-dark",
  titleColor = "text-primary",
  subtitleColor = "text-dark/80",
  textColor = "text-dark",
  bulletColor = "text-dark",
  buttonColor = "bg-secondary text-light hover:bg-highlight",

  // 🔠 Tipografía
  titleFont = "font-primary",
  subtitleFont = "font-secondary",
  textFont = "font-secondary",
  bulletFont = "font-secondary",
  buttonFont = "font-secondary",

  // 📏 Tamaños
  titleSize = "text-size-6 md:text-size-8 font-bold",
  subtitleSize = "text-size-3 md:text-size-4",
  bulletSize = "text-size-3",
  paddingY = "py-spacing-6",
  gapY = "gap-spacing-4",

  // 🧭 Layout
  contentAlign = "text-left",
  reverse = false,
  imageFit = "object-contain",
  imageRounded = "rounded-lg",
  imageShadow = "shadow-lg",
  contentWidth = "w-[85%] lg:w-1/2",
  imageWidth = "w-[85%] lg:w-1/2",
  containerSpacing = "px-spacing-2 lg:px-spacing-4",

  // 🎞️ Animación
  motionDuration = 0.8,
  motionEase = "easeInOut",

  // 🔘 Botón
  buttonStyle = "btn border-none rounded-custom-20 px-8 py-3 font-semibold text-size-3 transition duration-300",

  // 🧩 Control de video o imagen
  mediaAspect = "16/9", // 🔄 Control de relación de aspecto (16/9, 9/16, 4/3, auto)

  // 🧩 Otros
  sectionId,
}) => {
  return (
    <section
      id={sectionId}
      className={`${paddingY} ${bg} flex flex-col items-start justify-between ${gapY}`}
    >
      <div
        className={`w-full ${containerSpacing} gap-spacing-5 flex flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } items-center`}
      >
        {/* Texto */}
        <motion.div
          className={`${contentWidth} mb-6 lg:mb-0 ${contentAlign}`}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionDuration, ease: motionEase }}
        >
          {title && (
            <h2 className={`${titleColor} ${titleSize} ${titleFont} mb-3`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <h3
              className={`${subtitleColor} ${subtitleSize} ${subtitleFont} mb-spacing-3`}
            >
              {subtitle}
            </h3>
          )}
          {bulletPoints.length > 0 && (
            <ul className={`list-disc pl-6 mb-spacing-4 ${textFont}`}>
              {bulletPoints.map((point, index) => (
                <li key={index} className={`${bulletColor} ${bulletFont} ${bulletSize}`}>
                  {point}
                </li>
              ))}
            </ul>
          )}
          {buttonText && buttonLink && (
            <div className="flex justify-center lg:justify-start">
              <Link
                href={buttonLink}
                className={`${buttonStyle} ${buttonColor} ${buttonFont}`}
              >
                {buttonText}
              </Link>
            </div>
          )}
        </motion.div>

        {/* Imagen / Video */}
        <motion.div
          className={`${imageWidth} flex justify-center`}
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionDuration, ease: motionEase }}
        >
          <div className={`relative w-full lg:max-w-[800px] h-[300px] sm:h-[500px] lg:h-[600px]`}>
            {mediaType === "video" ? (
              <video
                controls
                className={`w-full h-full ${imageFit} ${imageRounded} ${imageShadow}`}
              >
                <source src={mediaSrc} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            ) : (
              <Image
                src={mediaSrc}
                alt="Media"
                fill
                sizes="100vw"
                className={`${imageFit} ${imageRounded} ${imageShadow}`}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTextButtonImg;





// =============================
// uso del componente
// =============================

{/* 
  <HeroTextButtonImg
  title="Café con Raíces — Espacio de inspiración"
  subtitle="Donde el aroma del café de especialidad se encuentra con la creatividad y la buena conversación."
  bulletPoints={[
    "Ambiente urbano con diseño industrial cálido",
    "Café de especialidad preparado por baristas expertos",
    "Eventos, arte y experiencias con sabor a comunidad",
  ]}
  buttonText="Explora nuestra carta"
  buttonLink="/cafe/menu"
  mediaSrc="/assets/images/raices/menu/raices_intro.jpg"
  mediaType="image"
  bg="bg-dark text-light"
  titleColor="text-light"
  subtitleColor="text-light/80"
  textColor="text-light"
  bulletColor="text-light"
  titleSize="text-size-6 md:text-size-8 font-bold"
  subtitleSize="text-size-3 md:text-size-4"
  paddingY="py-spacing-6"
  contentAlign="text-left"
  buttonStyle="btn bg-secondary text-dark border-none hover:bg-highlight rounded-custom-20 px-8 py-3 font-semibold text-size-3 transition duration-300"
  imageFit="object-contain"
  reverse={true}
/>
  
  */}
