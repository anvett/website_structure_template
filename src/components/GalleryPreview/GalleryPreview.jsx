"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/**
 * GalleryPreview – versión avanzada con título y modal
 * -----------------------------------------------------
 * ✅ Props:
 * - title, description, items[]
 * - bgColor, textColor, titleColor, descriptionColor
 * - titleFont, descriptionFont, titleSize, descriptionSize
 * - gridCols, gap, paddingY
 * - animation, motionOptions
 */

const GalleryPreview = ({
  // ─── Contenido ─────────────────────────────────────────────────────────────
  title = "Galería",
  description = "",
  items = [],
  // ─── Colores y fuentes ─────────────────────────────────────────────────────
  bgColor = "bg-light",
  textColor = "text-dark",
  titleColor = "text-primary",
  descriptionColor = "text-dark/80",
  titleFont = "font-primary",
  descriptionFont = "font-secondary",
  titleSize = "text-size-6 md:text-size-8",
  descriptionSize = "text-size-2 md:text-size-4",
  // ─── Layout ────────────────────────────────────────────────────────────────
  gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  gap = "gap-6",
  paddingY = "py-spacing-8 md:py-spacing-10",
  // ─── Animaciones ───────────────────────────────────────────────────────────
  animation = "fade-up",
  motionOptions = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  },
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={`${bgColor} ${textColor} ${paddingY}`}>
      <div className="max-w-7xl mx-auto px-spacing-2 sm:px-spacing-4 lg:px-spacing-6 text-center">
        {/* 🔠 Título */}
        {title && (
          <motion.h2
            className={`${titleFont} ${titleSize} font-bold ${titleColor} mb-spacing-3`}
            {...motionOptions}
          >
            {title}
          </motion.h2>
        )}

        {/* 🪶 Descripción */}
        {description && (
          <motion.p
            className={`${descriptionFont} ${descriptionSize} ${descriptionColor} leading-relaxed max-w-3xl mx-auto mb-spacing-5`}
            dangerouslySetInnerHTML={{ __html: description }}
            {...motionOptions}
          />
        )}

        {/* 🖼️ Grid de imágenes */}
        <motion.div
          className={`grid ${gridCols} ${gap} justify-items-center`}
          {...motionOptions}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-custom-20 shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image}
                alt={item.alt || `Imagen ${index + 1}`}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* 🔖 Overlay con título */}
              {item.title && (
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-light py-2 px-4 text-sm sm:text-base font-secondary tracking-wide backdrop-blur-sm">
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🪟 Modal de imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-custom-20"
                sizes="100vw"
              />
              {/* ❌ Botón de cierre */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-light bg-black/40 hover:bg-black/70 p-2 rounded-full text-xl transition"
                aria-label="Cerrar imagen"
              >
                ✕
              </button>

              {/* 🏷️ Título dentro del modal */}
              {selectedImage.title && (
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-light text-center text-size-2 sm:text-size-3 font-secondary bg-black/50 px-4 py-2 rounded-custom-20">
                  {selectedImage.title}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
