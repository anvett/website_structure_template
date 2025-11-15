"use client";

import AboutSection from "@/components/AboutSection/AboutSection";
import CallToAction from "@/components/CallToAction/CallToAction";
import Hero from "@/components/hero/Hero";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import HeroTwoColumn from "@/components/heroTwoColumn/HeroTwoColumn";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import React from "react";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      Hero Section
      ====================================================================================== */}
      <Hero
        title="Molino de Café & Café con Raíces "
        subtitle="Experiencias únicas en cada taza."
        backgroundImage="/assets/images/hero/hero.png"
        buttonText="Reserva tu experiencia"
        buttonLink="/reservar"
        buttonIcon=""
        leftColor="" // molino-primary
        rightColor="" // cafe-primary
        overlayOpacity={0.15}
        align="center"
      />
      {/* ======================================================================================
      About Section
      ====================================================================================== */}
      <AboutSection
        title="Sobre nosotros"
        description={`Molino de Café Cabañas Lodge y Café con Raíces comparten la misma esencia: la <span class='text-black font-semibold'>pasión por el café</span>, la <span class='text-black font-semibold'>naturaleza</span> y las <span class='text-black font-semibold'>experiencias auténticas</span> que conectan a las personas.  
  <br/><br/>Un proyecto pensado en unir dos mundos: la tranquilidad del campo y la energía de la ciudad. En Molino de Café te invitamos a desconectarte en nuestros espacios creados para ti, disfrutar de nuestras cabañas temáticas y saborear la cocina de autor que nace en nuestro huerto.  
  <br/><br/>En Café con Raíces, llevamos ese mismo espíritu a la ciudad, con un espacio industrial donde el aroma del café de especialidad se convierte en punto de encuentro, inspiración y creatividad.`}
        buttonText="Descubre más detalles"
        buttonLink="/nosotros"
        // 🎨 Colores base
        bgColor="bg-gradient-home-4"
        textColor="text-dark"
        // 🔠 Tipografías y tamaños
        titleFont="font-primary"
        titleColor="text-primary"
        titleSize="text-size-6 md:text-size-8"
        descriptionFont="font-secondary"
        descriptionColor="text-dark/80"
        descriptionSize="text-size-2 md:text-size-4"
        // 🔘 Botón
        buttonBg="bg-accent"
        buttonTextColor="text-dark"
        buttonHoverBg="hover:bg-highlight"
        buttonRounded="rounded-custom-20"
        buttonPx="px-8"
        buttonPy="py-3"
        buttonSize="text-size-1 sm:text-size-2"
        // 🧭 Alineación general
        align="center"
      />
      {/* ======================================================================================
HOSTERÍA INTRODUCTION
====================================================================================== */}
      <HeroTextButtonImg
        sectionId="hosteria-intro"
        title="Molino de Café — Cabañas Lodge"
        subtitle="Un refugio entre montañas donde la naturaleza y el café se encuentran."
        bulletPoints={[
          "Cabañas temáticas inspiradas en la naturaleza",
          "Gastronomía artesanal con ingredientes locales",
          "Rituales de café y momentos de conexión",
        ]}
        buttonText="Conocer Molino de Café"
        buttonLink="/hosteria"
        mediaSrc="/assets/videos/molino_intro.mp4"
        mediaType="video"
        bg="bg-accent text-dark"
        titleColor="text-primary"
        subtitleColor="text-dark/80"
        textColor="text-dark"
        bulletColor="text-dark"
        buttonColor="bg-secondary text-dark hover:bg-highlight"
        titleFont="font-primary"
        subtitleFont="font-secondary"
        textFont="font-secondary"
        bulletFont="font-secondary"
        buttonFont="font-secondary"
        titleSize="text-size-6 md:text-size-8 font-bold"
        subtitleSize="text-size-3 md:text-size-4"
        bulletSize="text-size-2 md:text-size-3"
        paddingY="py-spacing-6"
        contentAlign="text-left"
        buttonStyle="btn border-none rounded-custom-20 px-8 py-3  text-size-2 transition duration-300"
        imageFit="object-contain"
        imageRounded="rounded-custom-20"
        imageShadow="shadow-lg"
        motionDuration={0.8}
        motionEase="easeInOut"
        reverse={false}
      />

      {/* ======================================================================================
CAFÉ INTRODUCTION
====================================================================================== */}
      <HeroTextButtonImg
        sectionId="cafe-intro"
        title="Café con Raíces — Espacio de inspiración"
        subtitle="Donde el aroma del café de especialidad se encuentra con la creatividad y la buena conversación."
        bulletPoints={[
          "Ambiente urbano con diseño industrial cálido",
          "Café de especialidad preparado por baristas expertos",
          "Eventos, arte y experiencias con sabor a comunidad",
        ]}
        buttonText="Explora nuestra carta"
        buttonLink="/cafe/menu"
        mediaSrc="/assets/images/raices/intro.jpg"
        mediaType="image"
        bg="bg-gradient-home-4 text-light"
        titleColor="text-dark"
        subtitleColor="text-dark/70"
        textColor="text-light"
        bulletColor="text-black"
        buttonColor="bg-accent text-dark hover:bg-highlight"
        titleFont="font-brand"
        subtitleFont="font-secondary"
        textFont="font-secondary"
        bulletFont="font-secondary"
        buttonFont="font-secondary"
        titleSize="text-size-6 md:text-size-8 font-bold"
        subtitleSize="text-size-3 md:text-size-4"
        bulletSize="text-size-2 md:text-size-3"
        paddingY="py-spacing-6"
        contentAlign="text-left"
        buttonStyle="btn border-none rounded-custom-20 px-8 py-3  text-size-2 transition duration-300"
        imageFit="object-contain"
        imageRounded="rounded-custom-20"
        imageShadow="shadow-lg"
        motionDuration={0.8}
        motionEase="easeInOut"
        reverse={true}
      />

      {/* ======================================================================================
      CAPACITACIÓN INTRODUCTION
      ====================================================================================== */}

      <HeroTwoColumn
        backgroundImage="/assets/images/cursos/cursos_bg.jpg"
        mainTitle="Cursos de Barismo y Catación"
        attentionText="Aprende de expertos del café"
        leftHeading="Formación Profesional"
        leftTitle="Domina el arte del café"
        leftDescription="Programas diseñados para convertirte en un barista experto, con clases prácticas y certificación."
        leftButtonText="Ver programas"
        leftButtonLink="/cursos"
        rightHeading="Experiencias"
        rightTitle="Talleres inmersivos"
        rightDescription="Conoce todo el proceso del café desde la semilla hasta la taza."
        rightButtonText="Descubre más"
        rightButtonLink="/cursos#experiencias"
        overlayColor="bg-black/60"
        textColor="text-light"
        titleColor="text-accent"
        buttonStyle="bg-secondary hover:bg-highlight text-dark"
        contentPadding="px-6 py-16 md:px-20"
        dividerColor="border-accent/30"
      />

      {/* ======================================================================================
      QUOTE SECTION
      ====================================================================================== */}
      <QuoteSection
        quote="El café nos enseña que el tiempo y la paciencia revelan lo mejor de cada experiencia."
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
        // 🏷 Contenido
        title="Reserva tu experiencia"
        subtitle="Descubre Molino de Café & Café con Raíces."
        buttonText="Reserva ahora"
        buttonLink="/reservar"
        icon=""
        // 🎨 Fondo e imagen
        bgImage="/assets/images/hero/cta_index.jpg"
        overlayColor="bg-black/60"
        bgColor="bg-primary"
        paddingY="py-spacing-10 md:py-spacing-12"
        align="center"
        // 🔠 Tipografía y colores
        titleFont="font-primary"
        subtitleFont="font-secondary"
        titleSize="text-size-7 md:text-size-9 font-bold"
        subtitleSize="text-size-3 md:text-size-4"
        titleColor="text-light"
        subtitleColor="text-light/90"
        // 🔘 Botón
        buttonBg="bg-secondary"
        buttonTextColor="text-dark"
        buttonHoverBg="hover:bg-highlight hover:text-dark"
        buttonFont="font-secondary"
        buttonSize="text-size-3"
        buttonRounded="rounded-custom-20"
        buttonPadding="px-8 py-3"
        buttonShadow="shadow-md hover:shadow-lg"
        buttonGap="gap-2"
        buttonIconSize="text-size-3"
        // 🎞️ Animación
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
