"use client";

import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/hero/Hero";
import LodgingCard from "@/components/LodgingCard/LodgingCard";
import React from "react";

import { cabanasData } from "@/data/cabanas";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import { galleryMolinoData } from "@/data/galleryMolino";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import { testimonialsMolinoData } from "@/data/testimonialsMolino";
import CallToAction from "@/components/CallToAction/CallToAction";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      Hero Section - Molino de Café
      ====================================================================================== */}
      <Hero
        title="Molino de Café — Cabañas Lodge"
        subtitle="Descanso, naturaleza y experiencias auténticas"
        backgroundImage="/assets/images/molino/hero_molino.jpg"
        buttonText="Reserva tu experiencia"
        buttonLink="/reservar"
        buttonIcon=""
        leftColor="" // sin degradado adicional
        rightColor="" // sin degradado adicional
        overlayOpacity={0.15} // opacidad suave para resaltar textos sin opacar la imagen
        align="center"
      />
      {/* ======================================================================================
About Section - Molino de Café
====================================================================================== */}
      <AboutSection
        title="Un refugio entre montañas"
        description={`En <span class='text-molino-secondary font-semibold'>Molino de Café Cabañas Lodge</span> te invitamos a desconectarte y reconectar con lo esencial. Cada cabaña combina <span class='text-molino-secondary font-semibold'>materiales naturales</span>, confort y detalles artesanales.`}
        bgColor="bg-molino-light"
        textColor="text-molino-dark"
        // Título
        titleColor="text-molino-primary"
        titleFont="font-primary"
        titleSize="text-size-6 md:text-size-8"
        // Descripción
        descriptionColor="text-molino-dark/80"
        descriptionFont="font-secondary"
        // Botón
        buttonText="Contáctanos"
        buttonLink="/contacto"
        buttonBg="bg-molino-accent"
        buttonTextColor="text-molino-dark"
        buttonHoverBg="hover:opacity-90"
        // Alineación
        align="center"
      />
      {/* ======================================================================================
Cabañas destacadas - Molino de Café
====================================================================================== */}
      <LodgingCard
        title="Nuestras Cabañas"
        subtitle="Espacios únicos, diseñados para cada experiencia."
        items={cabanasData} // array importado desde /data/cabanas.js
        titleColor="text-molino-light"
        subtitleColor="text-molino-light"
        backgroundColor="bg-gradient-molino-4"
        buttonBg="bg-molino-accent"
        buttonTextColor="text-molino-dark"
        cardBg="bg-molino-light"
        cardTextColor="text-dark"
        gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        motionOptions={{
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 1 },
        }}
      />
      {/* ======================================================================================
Cita intermedia - Molino de Café
====================================================================================== */}
      <QuoteSection
        quote="Entre montañas y café, descubrimos que la verdadera paz nace en los pequeños momentos."
        author="Molino de Café & Café con Raíces"
        bgColor="bg-molino-light"
        textColor="text-dark"
        accentColor="text-molino-primary"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8"
        align="center"
        animation="fade-up"
      />
      {/* ======================================================================================
Galería - Molino de Café
====================================================================================== */}

      <GalleryPreview
        title="Vive la experiencia Molino de Café"
        description={`Explora nuestras instalaciones y descubre cómo el <span class='text-molino-secondary font-semibold'>Molino de Café</span> combina el confort, la naturaleza y la pasión por el café.`}
        items={galleryMolinoData}
        bgColor="bg-gradient-molino-4"
        textColor="text-molino-light"
        titleFont="font-primary"
        titleColor="text-molino-accent"
        descriptionFont="font-secondary"
        descriptionColor="text-molino-light/90"
        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        gap="gap-6"
        paddingY="py-spacing-8 md:py-spacing-10"
        animation="fade-up"
      />

      {/* ======================================================================================
RESTAURANTE MOLINO DE CAFÉ
====================================================================================== */}

      <HeroTextButtonImg
        sectionId="restaurante-molino"
        title="Restaurante del Molino"
        subtitle="Sabores auténticos nacidos de la tierra"
        bulletPoints={[
          "Cocina de autor inspirada en el entorno natural.",
          "Ingredientes frescos de nuestro huerto y productores locales.",
          "Platos que fusionan tradición, sostenibilidad y creatividad.",
          "Una experiencia gastronómica entre montañas y café.",
        ]}
        buttonText="Conoce el restaurante"
        buttonLink="/hosteria/restaurante"
        mediaSrc="/assets/videos/restaurante_molino.mp4"
        mediaType="video"
        bg="bg-gradient-molino-3 text-molino-dark"
        titleColor="text-molino-dark"
        subtitleColor="text-molino-dark"
        textColor="text-molino-dark"
        bulletColor="text-molino-dark"
        buttonColor="bg-molino-primary hover:bg-molino-secondary text-light"
        titleFont="font-primary"
        subtitleFont="font-secondary"
        textFont="font-secondary"
        bulletFont="font-secondary"
        buttonFont="font-secondary"
        titleSize="text-size-8 md:text-size-10 font-bold"
        subtitleSize="text-size-5 md:text-size-6"
        bulletSize="text-size-3 md:text-size-4"
        paddingY="py-spacing-8 md:py-spacing-10"
        contentAlign="text-left"
        buttonStyle="btn border-none rounded-custom-20 px-8 py-3  text-size-2 transition duration-300"
        imageFit="object-cover"
        imageRounded="rounded-custom-20"
        imageShadow="shadow-xl"
        motionDuration={1}
        motionEase="easeInOut"
        reverse={true}
      />

      {/* ======================================================================================
CITA INSPIRACIONAL - Molino de Café
====================================================================================== */}
      <QuoteSection
        quote="Cada rincón del Molino está pensado para detener el tiempo, respirar profundo y disfrutar del momento presente."
        author="Molino de Café Cabañas Lodge"
        bgColor="bg-molino-dark"
        textColor="text-molino-light"
        accentColor="text-molino-accent"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8 md:py-spacing-10"
        align="center"
        animation="fade-up"
      />

      {/* ======================================================================================
TESTIMONIOS - Molino de Café
====================================================================================== */}
      <TestimonialSection
        title="Lo que dicen nuestros visitantes"
        subtitle="Experiencias reales de quienes descubrieron en Molino de Café un refugio entre montañas y el aroma del café."
        testimonials={testimonialsMolinoData}
        bgColor="bg-gradient-molino-3"
        textColor="text-molino-dark"
        titleColor="text-molino-primary"
        titleFont="font-primary"
        textFont="font-secondary"
        cardBg="bg-molino-accent"
        cardTextColor="text-molino-dark"
        cardBorder="border border-molino-secondary/30"
        gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        paddingY="py-spacing-8 md:py-spacing-10"
        gap="gap-8"
        animation="fade-up"
      />

      {/* ======================================================================================
CALL TO ACTION - Molino de Café
====================================================================================== */}

      <CallToAction
        title="Reserva tu experiencia en Molino de Café"
        subtitle="Despierta con el aroma del café, la brisa de la montaña y la calma de la naturaleza."
        buttonText="Reserva ahora"
        buttonLink="/reservar"
        bgImage="/assets/images/molino/cta_molino.jpg"
        overlayColor="bg-black/80"
        bgColor="bg-molino-dark"
        titleColor="text-molino-accent"
        subtitleColor="text-light"
        buttonBg="bg-molino-accent"
        buttonTextColor="text-molino-dark"
        buttonHoverBg="hover:bg-molino-secondary hover:text-light"
        titleFont="font-primary"
        subtitleFont="font-secondary"
        alignment="center"
        paddingY="py-spacing-10 md:py-spacing-12"
        motionOptions={{
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
        }}
      />
    </main>
  );
}
