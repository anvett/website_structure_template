"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";

import { gallerySantoriniData } from "@/data/cabanas";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO - CABAÑA SANTORINI
      ====================================================================================== */}
      <Hero
        title="Cabaña Santorini"
        subtitle="Inspirada en la calma y pureza del mar Egeo"
        description="Santorini irradia serenidad y luz. Sus tonos blancos y azules evocan la brisa mediterránea, creando un espacio ideal para el descanso y la conexión con la naturaleza."
        buttonText="Reserva esta cabaña"
        buttonLink="/reservar"
        backgroundImage="/assets/images/molino/cabanas/hero_santorini.jpg"
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
        title="Un refugio mediterráneo en las montañas"
        description={`Inspirada en las <span class='text-molino-secondary font-semibold'>islas del mar Egeo</span>, Santorini ofrece un ambiente luminoso, romántico y profundamente relajante. Cada detalle —desde las texturas naturales hasta la decoración artesanal— está pensado para <span class='text-molino-secondary font-semibold'>detener el tiempo</span> y reconectar con la calma.`}
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
      HERO TEXT BUTTON IMG - EXPERIENCIA EN SANTORINI
      ====================================================================================== */}
      <HeroTextButtonImg
        sectionId="experiencia-santorini"
        title="Experiencia Santorini"
        subtitle="Diseño, calma y autenticidad"
        bulletPoints={[
          "Arquitectura inspirada en el mar Egeo.",
          "Tonos blancos, texturas naturales y detalles artesanales.",
          "Ambiente íntimo y luminoso, ideal para parejas.",
          "Terraza privada con vista a las montañas.",
          "Decoración minimalista con alma mediterránea.",
        ]}
        buttonText="Reserva tu experiencia"
        buttonLink="/hosteria/reservar"
        mediaSrc="/assets/images/molino/galeria/santorini/santorini_description.jpg"
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
        quote="Cada rincón de Santorini fue pensado para detener el tiempo y dejarte respirar."
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
      GALERÍA PREVIEW - IMÁGENES DE SANTORINI
      ====================================================================================== */}
      <GalleryPreview
        title="Vive la experiencia Santorini"
        description={`Explora los detalles de esta cabaña única: desde su <span class='text-molino-dark font-semibold'>arquitectura mediterránea</span> hasta la tranquilidad de su entorno natural.`}
        items={gallerySantoriniData}
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
        quote="Entre tonos azules y blancos, el tiempo se detiene y solo queda el sonido del viento y el café recién hecho."
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
        title="Reserva tu estadía en Santorini"
        subtitle="Vive la serenidad del Mediterráneo sin salir de las montañas."
        buttonText="Reservar ahora"
        buttonLink="/reservar"
        bgImage="/assets/images/molino/cabanas/cta_santorini.jpg"
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
