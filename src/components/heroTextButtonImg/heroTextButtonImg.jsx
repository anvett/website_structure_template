
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
import { motion } from "framer-motion";

const HeroTextButtonImg = ({
  title,
  subtitle,
  bulletPoints = [],
  buttonText,
  buttonLink,
  mediaSrc,
  mediaType = "image", // "image" o "video"
  bg = "bg-gray-100", // Prop para personalizar el fondo
}) => {
  return (
    <section className={`py-spacing-6 ${bg} items-start justify-between gap-4`}>
      <div className="w-full px-spacing-2 lg:px-spacing-4 flex flex-col lg:flex-row items-center">
        {/* Columna Izquierda: Textos y Botón */}
        <motion.div
          className="w-full lg:w-1/2 mb-6 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Título */}
          <h1 className="section-h5 text-primary">{title}</h1>

          {/* Subtítulo */}
          <h2 className="section-title text-primary mb-spacing-3">{subtitle}</h2>

          {/* Lista con Viñetas */}
          <ul className="text-primary list-disc pl-6 mb-spacing-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-dark section-h5">
                {point}
              </li>
            ))}
          </ul>

          {/* Botón (opcional) */}
          {buttonText && buttonLink && (
            <div className="flex justify-center">
              <a href={buttonLink} className="main-button">
                {buttonText}
              </a>
            </div>
          )}
        </motion.div>

        {/* Columna Derecha: Media (Imagen o Video) */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative w-full lg:max-w-[800px] h-[300px] sm:h-[500px] lg:h-[600px]">
            {mediaType === "video" ? (
              <video
                controls
                className="w-full h-full object-contain rounded-lg shadow-lg"
              >
                <source src={mediaSrc} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            ) : (
              <Image
                src={mediaSrc}
                alt="Media"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTextButtonImg;
