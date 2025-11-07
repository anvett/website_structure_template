"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LodgingCard = ({
  title = "",
  subtitle = "",
  items = [],
  titleColor = "text-molino-primary",
  subtitleColor = "text-molino-secondary",
  backgroundColor = "bg-secondary",
  cardBg = "bg-molino-light",
  cardTextColor = "text-dark",
  buttonBg = "bg-molino-accent",
  buttonTextColor = "text-molino-dark",
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  motionOptions = {},
}) => {
  return (
    <section className={`relative w-full ${backgroundColor} py-16`}>
      {/* ✅ Fondo aplicado correctamente a toda la sección */}
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          className={`text-size-6 md:text-size-8 font-primary font-semibold ${titleColor}`}
          {...motionOptions}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            className={`mt-2 text-size-3 md:text-size-5 ${subtitleColor}`}
            {...motionOptions}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Grid de cabañas */}
        <div className={`mt-10 grid gap-8 ${gridCols}`}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`${cardBg} rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col`}
              {...motionOptions}
            >
              {/* Imagen */}
              <div className="relative w-full aspect-[3/4] bg-molino-dark/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col flex-1 p-6 justify-between">
                <div>
                  <h3
                    className={`text-2xl font-semibold mb-2 ${cardTextColor} font-primary`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${cardTextColor} font-secondary`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Botón */}
                <div className="mt-4">
                  <Link
                    href={item.link}
                    className={`inline-block ${buttonBg} ${buttonTextColor} px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition duration-300`}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LodgingCard;
