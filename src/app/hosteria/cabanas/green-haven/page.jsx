"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";

import { galleryGreenHavenData } from "@/data/cabanas";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO - CABAÑA GREEN HAVEN
      ====================================================================================== */}
      <Hero
        title="Cabaña Green Haven"
        subtitle="Un refugio natural entre árboles y montañas"
        description="Diseñada para los amantes del bosque y la tranquilidad, Green Haven combina materiales rústicos, calidez y armonía con el entorno."
        buttonText="Reserva esta cabaña"
        buttonLink="/reservar"
        backgroundImage="/assets/images/molino/cabanas/hero_green_haven.jpg"
        overlayColor="bg-molino-dark/90"
        titleColor="text-molino-light"
        subtitleColor="text-molino-accent"
        descriptionColor="text-molino-light/90"
        buttonBg="bg-molino-accent"
        buttonTextColor="text-molino-dark"
        alignment="center"
        textFont="font-primary"
        buttonStyle="rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        motionOptions={{
          initial: { opacity: 1, y: 80 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 },
        }}
      />

      {/* ======================================================================================
      ABOUT SECTION - DESCRIPCIÓN GENERAL
      ====================================================================================== */}
      <AboutSection
        title="Naturaleza, calidez y descanso"
        description={`En <span class='text-molino-secondary font-semibold'>Green Haven</span> cada espacio está pensado para conectar con el entorno. Madera, piedra y luz natural se combinan para crear una experiencia de <span class='text-molino-secondary font-semibold'>descanso pleno</span> entre árboles y brisa de montaña.`}
        bgColor="bg-molino-light"
        textColor="text-molino-dark"
        titleColor="text-molino-primary"
        titleFont="font-primary"
        descriptionFont="font-secondary"
        descriptionColor="text-molino-dark/80"
        buttonText="Ver más cabañas"
        buttonLink="/hosteria"
        buttonBg="bg-molino-accent"
        buttonTextColor="text-molino-dark"
        buttonHoverBg="hover:opacity-90"
        align="center"
      />

      {/* ======================================================================================
      HERO TEXT BUTTON IMG - EXPERIENCIA EN GREEN HAVEN
      ====================================================================================== */}
      <HeroTextButtonImg
        sectionId="experiencia-green-haven"
        title="Experiencia Green Haven"
        subtitle="Armonía y confort entre la naturaleza"
        bulletPoints={[
          "Arquitectura rústico-moderna integrada al paisaje.",
          "Balcón privado con vista al bosque.",
          "Interiores con madera, hierro y texturas naturales.",
          "Iluminación cálida que invita al descanso.",
          "Cocina y zona de lectura con vista panorámica.",
        ]}
        buttonText="Reserva tu experiencia"
        buttonLink="/hosteria/reservar"
        mediaSrc="/assets/images/molino/galeria/green-haven/green_description.jpg"
        mediaType="image"
        bg="bg-gradient-molino-4 text-molino-dark"
        titleColor="text-molino-light"
        subtitleColor="text-molino-dark"
        textColor="text-molino-light"
        bulletColor="text-molino-light/90"
        buttonColor="bg-molino-accent hover:bg-molino-secondary text-molino-dark"
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
        reverse={false}
      />

      {/* ======================================================================================
      CITA INTERMEDIA - RESPIRO ENTRE EXPERIENCIA Y GALERÍA
      ====================================================================================== */}
      <QuoteSection
        quote="El susurro del viento y el aroma del café acompañan cada amanecer en Green Haven."
        author="Molino de Café Cabañas Lodge"
        bgColor="bg-gradient-molino-3"
        textColor="text-molino-dark"
        accentColor="text-molino-dark"
        fontSize="text-size-4 md:text-size-6 italic"
        paddingY="py-spacing-6 md:py-spacing-8"
        align="center"
        animation="fade-up"
      />

      {/* ======================================================================================
      GALERÍA PREVIEW - IMÁGENES DE GREEN HAVEN
      ====================================================================================== */}
      <GalleryPreview
        title="Descubre Green Haven"
        description={`Explora cada espacio y detalle de esta cabaña rodeada de <span class='text-molino-dark font-semibold'>bosques, brisa y calma natural</span>.`}
        items={galleryGreenHavenData}
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
      CITA INSPIRACIONAL
      ====================================================================================== */}
      <QuoteSection
        quote="Aquí, el tiempo se mide por el sonido de las hojas movidas por el viento."
        author="Molino de Café Cabañas Lodge"
        bgColor="bg-gradient-molino-3"
        textColor="text-molino-dark"
        accentColor="text-molino-primary"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8 md:py-spacing-10"
        align="center"
        animation="fade-up"
      />

      {/* ======================================================================================
      CALL TO ACTION - RESERVA
      ====================================================================================== */}
      <CallToAction
        title="Reserva tu estadía en Green Haven"
        subtitle="Vive la armonía del bosque en un entorno acogedor."
        buttonText="Reservar ahora"
        buttonLink="/reservar"
        bgImage="/assets/images/molino/cabanas/cta_green_haven.jpg"
        overlayColor="bg-black/70"
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
