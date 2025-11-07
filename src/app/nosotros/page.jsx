"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import HeroTwoColumn from "@/components/heroTwoColumn/HeroTwoColumn";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO SECTION
      ====================================================================================== */}
      <Hero
        title="Sobre nosotros"
        subtitle="Dos mundos unidos por el aroma del café."
        backgroundImage="/assets/images/hero/hero.png"
        buttonText="Reserva tu experiencia"
        buttonLink="/reservar"
        buttonIcon=""
        leftColor="" // molino-primary
        rightColor="" // cafe-primary
        overlayOpacity={0.25}
        align="center"
      />

      {/* ======================================================================================
      ABOUT SECTION
      ====================================================================================== */}
      <AboutSection
        title="Nuestra historia"
        description={`Molino de Café & Café con Raíces nacen como un mismo sueño con dos expresiones distintas: el deseo de compartir el amor por el café y las experiencias que lo rodean.<br/><br/>
  En las montañas, <span class='font-semibold text-primary'>Molino de Café Cabañas Lodge</span> invita a reconectar con la naturaleza. Aquí, el tiempo fluye al ritmo del viento entre los árboles, las cabañas temáticas ofrecen descanso y cada plato cuenta una historia hecha con ingredientes del huerto.<br/><br/>
  En la ciudad, <span class='font-semibold text-primary'>Café con Raíces</span> conserva ese espíritu, transformando el aroma del café de especialidad en inspiración, creatividad y comunidad. Es un punto de encuentro donde las conversaciones, la música y el arte se mezclan con cada taza.`}
        buttonText="Contáctanos"
        buttonLink="/contacto"
        // 🎨 Estilo
        bgColor="bg-light"
        textColor="text-dark"
        titleFont="font-primary"
        titleColor="text-primary"
        titleSize="text-size-7 md:text-size-9 font-bold"
        descriptionFont="font-secondary"
        descriptionColor="text-dark/80"
        descriptionSize="text-size-3 md:text-size-4"
        buttonBg="bg-secondary"
        buttonTextColor="text-dark"
        buttonHoverBg="hover:bg-highlight"
        buttonRounded="rounded-custom-20"
        buttonPx="px-8"
        buttonPy="py-3"
        buttonSize="text-size-2"
        align="center"
      />

      {/* ======================================================================================
      DUAL SECTION
      ====================================================================================== */}
      <HeroTwoColumn
        backgroundImage="/assets/images/hero/about_molino.jpg"
        mainTitle="Dos espacios, una misma pasión"
        attentionText="Molino de Café & Café con Raíces"
        leftHeading="Molino de Café – Cabañas Lodge"
        leftTitle="Naturaleza, descanso y gastronomía artesanal"
        leftDescription="Un refugio entre montañas, donde el tiempo se detiene y el aroma del café se mezcla con el sonido de la naturaleza. Cabañas temáticas, cocina de autor y experiencias que despiertan los sentidos."
        leftButtonText="Conocer Molino"
        leftButtonLink="/hosteria"
        rightHeading="Café con Raíces – Cafetería artesanal"
        rightTitle="Energía urbana y creatividad con sabor a café"
        rightDescription="Un espacio urbano inspirado en la pasión por el café de especialidad. Aquí, la ciudad se convierte en punto de encuentro para disfrutar, crear y compartir momentos con identidad."
        rightButtonText="Conocer Café con Raíces"
        rightButtonLink="/cafe"
        overlayColor="bg-black/30"
        textColor="text-light"
        titleColor="text-accent"
        buttonStyle="bg-secondary hover:bg-highlight text-light"
        contentPadding="px-6 py-16 md:px-20"
        dividerColor="border-accent/30"
      />

      {/* ======================================================================================
      QUOTE SECTION
      ====================================================================================== */}
      <QuoteSection
        quote="Cada taza, cada plato y cada detalle reflejan nuestra filosofía: crear momentos auténticos, sostenibles y memorables."
        author="Molino de Café & Café con Raíces"
        bgColor="bg-gradient-home-2"
        textColor="text-dark"
        accentColor="text-primary"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8"
        align="center"
        animation="fade-up"
      />

      {/* ======================================================================================
      CALL TO ACTION
      ====================================================================================== */}
      <CallToAction
        title="Reserva tu experiencia"
        subtitle="Descubre la magia de Molino de Café & Café con Raíces."
        buttonText="Reserva ahora"
        buttonLink="/reservar"
        bgImage="/assets/images/hero/cta_index.jpg"
        overlayColor="bg-black/60"
        bgColor="bg-primary"
        paddingY="py-spacing-10 md:py-spacing-12"
        align="center"
        titleFont="font-primary"
        subtitleFont="font-secondary"
        titleSize="text-size-7 md:text-size-9 font-bold"
        subtitleSize="text-size-3 md:text-size-4"
        titleColor="text-light"
        subtitleColor="text-light/90"
        buttonBg="bg-secondary"
        buttonTextColor="text-dark"
        buttonHoverBg="hover:bg-highlight hover:text-dark"
        buttonFont="font-secondary"
        buttonSize="text-size-3"
        buttonRounded="rounded-custom-20"
        buttonPadding="px-8 py-3"
        buttonShadow="shadow-md hover:shadow-lg"
        motionOptions={{
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      />
    </main>
  );
}
