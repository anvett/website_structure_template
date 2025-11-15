"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";

import { gallerySuiteGreenData } from "@/data/cabanas";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      <Hero
        title="Cabaña Suite Green"
        subtitle="Estilo contemporáneo con alma natural"
        description="Suite Green combina la modernidad con la esencia artesanal. Un espacio amplio, privado y lleno de detalles únicos."
        buttonText="Reserva esta cabaña"
        buttonLink="/reservar"
        backgroundImage="/assets/images/molino/cabanas/hero_suite_green.jpg"
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

      <AboutSection
        title="Diseño, privacidad y confort"
        description={`En <span class='text-molino-secondary font-semibold'>Suite Green</span> cada rincón refleja elegancia natural. Espacios abiertos, luz suave y materiales nobles se combinan para ofrecer una experiencia <span class='text-molino-secondary font-semibold'>moderna y acogedora</span>.`}
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

      <HeroTextButtonImg
        sectionId="experiencia-suite-green"
        title="Experiencia Suite Green"
        subtitle="Modernidad y calidez en un solo lugar"
        bulletPoints={[
          "Estilo industrial con ladrillo, hierro y madera.",
          "Decoración sobria en tonos tierra y cobre.",
          "Tv flat screen",
          "Baño privado.",
          "Vista al lago.",
          "Ambiente contemporáneo con alma artesanal.",
          "Incluye desayuno personalizado, cóctel de bienvenida y fogata por la noche."
        ]}
        buttonText="Reserva tu experiencia"
        buttonLink="/reservar"
        mediaSrc="/assets/images/molino/galeria/suite-green/suite_description.jpg"
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
        bulletSize="text-size-2 md:text-size-3"
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

      <QuoteSection
        quote="Suite Green invita al descanso con el encanto de lo simple y lo natural."
        author="Molino de Café Cabañas Lodge"
        bgColor="bg-gradient-molino-3"
        textColor="text-molino-dark"
        accentColor="text-molino-dark"
        fontSize="text-size-4 md:text-size-6 italic"
        paddingY="py-spacing-6 md:py-spacing-8"
        align="center"
        animation="fade-up"
      />

      <GalleryPreview
        title="Descubre Suite Green"
        description={`Un espacio que combina <span class='text-molino-dark font-semibold'>modernidad, comodidad y diseño artesanal</span> para una experiencia inolvidable.`}
        items={gallerySuiteGreenData}
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

      <QuoteSection
        quote="La elegancia no está en lo que se muestra, sino en lo que se siente."
        author="Molino de Café Cabañas Lodge"
        bgColor="bg-gradient-molino-3"
        textColor="text-molino-dark"
        accentColor="text-molino-primary"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8 md:py-spacing-10"
        align="center"
        animation="fade-up"
      />

      <CallToAction
        title="Reserva tu estadía en Suite Green"
        subtitle="Un espacio moderno para desconectarte con estilo."
        buttonText="Reservar ahora"
        buttonLink="/reservar"
        bgImage="/assets/images/molino/cabanas/cta_suite_green.jpg"
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
