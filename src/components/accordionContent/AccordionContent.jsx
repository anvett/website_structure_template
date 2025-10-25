

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionContent = ({ entries, idPrefix }) => {
  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
    }),
  };

  const slideDown = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const zoomOnHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="w-full flex flex-col items-center mx-auto">
      {entries.map((entry, index) => {
        const uniqueId = `${idPrefix}-${index}-${crypto.randomUUID()}`; // Prefijo único para IDs
        return (
          <motion.div
            key={index}
            className="w-full max-w-6xl p-2 px-spacing-1"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="collapse collapse-arrow border border-base-300 rounded-md bg-gray-100  "
              variants={zoomOnHover}
            >
              <input type="checkbox" className="peer" id={uniqueId} hidden />

              {/* Contenedor para ícono y título */}
              <label
                htmlFor={uniqueId}
                className="collapse-title flex items-center gap-2 cursor-pointer whitespace-normal text-primary font-semibold "
              >
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24">
                  {entry.icon}
                </div>
                <div className="text-left">
                  <strong className="block title-image text-primary">
                    {entry.title}
                  </strong>
                  <span className="text-black section-h5 font-secondary">
                    {entry.subtitle}
                  </span>
                </div>
              </label>

              <AnimatePresence>
                <motion.div
                  className="collapse-content peer-checked:block hidden bg-gray-100 text-primary section-p font-secondary"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={slideDown}
                >
                  <ul className="list-disc pl-5">
                    {entry.details.map((detail, detailIndex) => (
                      <li className="py-1 sm:py-2" key={detailIndex}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AccordionContent;
