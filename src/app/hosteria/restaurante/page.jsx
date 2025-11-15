"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";

import { galleryRestauranteData } from "@/data/restaurante";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO - RESTAURANTE MOLINO DE CAFÉ
      ====================================================================================== */}
      <Hero
        title="Restaurante del Molino"
        subtitle="Sabores auténticos nacidos de la tierra"
        description="Nuestra cocina combina tradición, sostenibilidad y creatividad. Platos elaborados con ingredientes frescos de nuestro huerto y productores locales."
        buttonText="Reserva una mesa"
        buttonLink="/reservar"
        backgroundImage="/assets/images/molino/restaurante/hero_restaurante.jpg"
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
      ABOUT SECTION - FILOSOFÍA GASTRONÓMICA
      ====================================================================================== */}
      <AboutSection
        title="Cocina de autor con esencia local"
        description={`En el <span class='text-molino-secondary font-semibold'>Restaurante del Molino</span> creemos que cada plato cuenta una historia. Nuestra propuesta se basa en el respeto por los ingredientes, el trabajo de los productores locales y la inspiración del entorno natural.`}
        bgColor="bg-molino-light"
        textColor="text-molino-dark"
        titleColor="text-molino-primary"
        titleFont="font-primary"
        descriptionFont="font-secondary"
        descriptionColor="text-molino-dark/80"
        buttonText="Ver menú completo"
        buttonLink="/hosteria/restaurante/menu"
        buttonBg="bg-molino-accent"
        buttonTextColor="text-molino-dark"
        buttonHoverBg="hover:opacity-90"
        align="center"
      />

      {/* ======================================================================================
      HERO TEXT BUTTON IMG - EXPERIENCIA GASTRONÓMICA
      ====================================================================================== */}
      <HeroTextButtonImg
        sectionId="experiencia-restaurante"
        title="Una experiencia gastronómica entre montañas"
        subtitle="Sabores, aromas y emociones"
        bulletPoints={[
          "Cocina de autor inspirada en la naturaleza.",
          "Ingredientes frescos de nuestro huerto orgánico.",
          "Pan artesanal y café de la casa.",
          "Ambiente cálido con vista panorámica.",
          "Fusión entre tradición y creatividad moderna.",
        ]}
        buttonText="Reserva tu mesa"
        buttonLink="/reservar"
        mediaSrc="/assets/images/molino/restaurante/restaurante_description_1.jpg"
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

      <HeroTextButtonImg
        sectionId="sabores-del-molino"
        title="Sabores que cuentan una historia"
        subtitle="Tradición, sostenibilidad y creatividad"
        bulletPoints={[
          "Recetas inspiradas en la cocina ecuatoriana contemporánea.",
          "Ingredientes seleccionados de nuestro huerto y productores locales.",
          "Pan artesanal, café de la casa y postres elaborados a diario.",
          "Cada plato es una experiencia que une aroma, textura y paisaje.",
        ]}
        buttonText="Ver carta del restaurante"
        buttonLink="/hosteria/restaurante/menu"
        mediaSrc="/assets/images/molino/restaurante/restaurante_sabores.jpg"
        mediaType="image"
        bg="bg-gradient-molino-5 text-molino-light"
        titleColor="text-molino-dark"
        subtitleColor="text-molino-secondary"
        textColor="text-molino-dark"
        bulletColor="text-molino-dark"
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
        reverse={true}
      />

      {/* ======================================================================================
      CITA INTERMEDIA - RESPIRO ENTRE EXPERIENCIA Y GALERÍA
      ====================================================================================== */}
      <QuoteSection
        quote="La verdadera experiencia gastronómica nace de la conexión entre la tierra, el fuego y el alma."
        author="Chef del Molino"
        bgColor="bg-gradient-molino-3"
        textColor="text-molino-dark"
        accentColor="text-molino-dark"
        fontSize="text-size-4 md:text-size-6 italic"
        paddingY="py-spacing-6 md:py-spacing-8"
        align="center"
        animation="fade-up"
      />

      {/* ======================================================================================
      GALERÍA PREVIEW - PLATOS Y ESPACIOS DEL RESTAURANTE
      ====================================================================================== */}
      <GalleryPreview
        title="Vive la experiencia del Molino"
        description={`Descubre cómo la cocina artesanal y la hospitalidad se unen para ofrecer momentos inolvidables.`}
        items={galleryRestauranteData}
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
        quote="Cocinar es transformar la naturaleza en emoción, y compartirla con quienes la disfrutan."
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
        title="Reserva tu mesa en el Restaurante del Molino"
        subtitle="Disfruta una experiencia culinaria auténtica entre montañas y café."
        buttonText="Reservar ahora"
        buttonLink="/reservar"
        bgImage="/assets/images/molino/restaurante/cta_restaurante.jpg"
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
