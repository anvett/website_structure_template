import React from "react";

const Hero = () => {
  return (
    <div  >
      <div
        className="hero min-h-screen bg-dark"
        style={{
          backgroundImage: "url('/assets/images/hero_landing.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay w-100% bg-dark bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2x1 mx-auto px-spacing-3 py-8 sm:px-spacing-5 lg:px-spacing-3">
            <h1 className="mb-4 font-extrabold text-light text-size-6 sm:text-size-8 lg:text-size-12 font-primary pt-spacing-2 sm:pt-spacing-1">
              La nueva era de las tarjetas de presentación.
            </h1>
            <h2 className="mb-4 font-semibold text-light text-size-4 sm:text-size-5 lg:text-size-6 font-primary py-spacing-2 sm:pt-spacing-1">
            Presenta tu información de manera dinámica y eficaz. Con AnvetCard, conecta con oportunidades ilimitadas.
            </h2>
          
            <button className="main-button">
              <a href="#beneficios">Descubre AnvetCard</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
