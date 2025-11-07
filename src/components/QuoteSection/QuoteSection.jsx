"use client";

import { motion } from "framer-motion";

const QuoteSection = ({
  quote = "Donde el café no solo se bebe... se vive.",
  author = "Molino de Café & Café con Raíces",
  // 🎨 Estilos personalizables
  bgColor = "bg-light",
  textColor = "text-dark",
  accentColor = "text-secondary",
  fontSize = "text-size-5 md:text-size-7",
  paddingY = "py-spacing-8",
  align = "center",
  animation = "fade-up",
}) => {
  const alignClass =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  const variants = {
    "fade-up": { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    "fade-in": { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    "fade-down": { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
  };

  return (
    <section
      className={`relative w-full flex flex-col justify-center ${alignClass} ${bgColor} ${paddingY}`}
    >
      <motion.div
        className="w-full flex flex-col items-center justify-center px-6 md:px-16 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants[animation]}
      >
        <p
          className={`${fontSize} font-medium italic leading-snug max-w-4xl ${textColor}`}
        >
          “<span className={`${accentColor}`}>{quote}</span>”
        </p>
        {author && (
          <p
            className={`mt-4 text-size-2 md:text-size-3 font-semibold ${textColor}`}
          >
            — {author}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default QuoteSection;
