"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";

import { galleryGreenFamiliarData } from "@/data/cabanas";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO - CABAÑA GREEN FAMILIAR
      ====================================================================================== */}
      <Hero
        title="Cabaña Green Familiar"
        subtitle="Espacio, comodidad y naturaleza para compartir"
        description="Diseñada para familias y grupos que buscan un entorno cálido, amplio y lleno de energía natural."
        buttonText="Reserva esta cabaña"
        buttonLink="/reservar"
        backgroundImage="/assets/images/molino/cabanas/hero_green_familiar.jpg"
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
        title="Amplitud y calidez familiar"
        description={`La <span class='text-molino-secondary font-semibold'>Cabaña Green Familiar</span> ofrece el equilibrio perfecto entre confort, naturaleza y diseño. Ideal para compartir momentos especiales con <span class='text-molino-secondary font-semibold'>familia o amigos</span>.`}
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
      HERO TEXT BUTTON IMG - EXPERIENCIA EN GREEN FAMILIAR
      ====================================================================================== */}
      <HeroTextButtonImg
        sectionId="experiencia-green-familiar"
        title="Experiencia Green Familiar"
        subtitle="Diseñada para compartir y disfrutar"
        bulletPoints={[
          "Espacios amplios con dormitorios múltiples.",
          "Terraza privada con zona de fogata.",
          "Cocina equipada para disfrutar en grupo.",
          "Decoración rústica con toques modernos.",
          "Ambiente ideal para disfrutar en familia.",
        ]}
        buttonText="Reserva tu experiencia"
        buttonLink="/hosteria/reservar"
        mediaSrc="/assets/images/molino/galeria/green-familiar/green_familiar_description.jpg"
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
        quote="Compartir el amanecer con quienes amas es el verdadero lujo de Green Familiar."
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
      GALERÍA PREVIEW - IMÁGENES DE GREEN FAMILIAR
      ====================================================================================== */}
      <GalleryPreview
        title="Explora Green Familiar"
        description={`Cada detalle de esta cabaña está diseñado para <span class='text-molino-dark font-semibold'>vivir momentos en familia</span>, rodeados de naturaleza y confort.`}
        items={galleryGreenFamiliarData}
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
        quote="Aquí, cada momento se convierte en un recuerdo familiar inolvidable."
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
        title="Reserva tu estadía en Green Familiar"
        subtitle="Vive una experiencia única junto a quienes más quieres."
        buttonText="Reservar ahora"
        buttonLink="/reservar"
        bgImage="/assets/images/molino/cabanas/cta_green_familiar.jpg"
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
