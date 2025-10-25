"use client";

import React from "react";
import Image from "next/image";

const HeroTwoColumn = ({
  // Imagen de fondo
  backgroundImage,

  // Título principal (centrado arriba)
  mainTitle,
  attentionText,

  // Columna Izquierda
  leftHeading,
  leftTitle,
  leftDescription,
  leftButtonText,
  leftButtonLink,

  // Columna Derecha
  rightHeading,
  rightTitle,
  rightDescription,
  rightButtonText,
  rightButtonLink,
}) => {
  return (
    <section className="relative w-full bg-transparent">
      {/* Contenido principal */}
      <div className="relative py-16 px-4">
        {/* Texto de atención */}
        <h5 className="text-center text-white section-h5">{attentionText}</h5>
        {/* Título principal centrado */}
        <h1 className="text-center section-title mb-spacing-3 sm:mb-spacing-7 text-white">
          {mainTitle}
        </h1>

        {/* Contenedor de columnas */}
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start justify-center">
          {/* Columna Izquierda */}
          <div className="w-full md:w-1/2 md:pr-8 md:border-r md:border-gray-300 mb-8 md:mb-0 px-spacing-1">
            <h2 className="section-h5 text-light mb-2">{leftHeading}</h2>
            <h3 className="section-subtitle text-white mb-4">{leftTitle}</h3>
            <p className="text-white mb-spacing-5 section-p">{leftDescription}</p>
            <div className="flex justify-center">
              <a href={leftButtonLink} className="main-button">
                {leftButtonText}
              </a>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="w-full md:w-1/2 md:pl-8 px-spacing-1">
            <h2 className="section-h5 text-light mb-2">{rightHeading}</h2>
            <h3 className="section-subtitle text-white mb-4">{rightTitle}</h3>
            <p className="text-white mb-spacing-5 section-p">{rightDescription}</p>
            <div className="flex justify-center">
              <a
                href={rightButtonLink}
                className="main-button"
              >
                {rightButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwoColumn;
