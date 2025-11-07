"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import HeroTwoColumn from "@/components/heroTwoColumn/HeroTwoColumn";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";

import { galleryRaicesData } from "@/data/galleryRaices";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO PRINCIPAL - CAFÉ CON RAÍCES
      ====================================================================================== */}
      <Hero
        title="Café con Raíces"
        subtitle="Donde el aroma del café inspira historias"
        backgroundImage="/assets/images/raices/hero_cafeteria.jpg"
        buttonText=""
        buttonLink="/reservar"
        buttonIcon=""
        overlayColor="bg-black/80" // 🔸 opacidad ligera para legibilidad
        align="center"
      />

      {/* ======================================================================================
      ABOUT SECTION - FILOSOFÍA DEL CAFÉ
      ====================================================================================== */}
      <AboutSection
        title="El arte de servir con propósito"
        description={`En <span class='text-cafe-secondary font-semibold'>Café con Raíces</span> creemos que cada taza cuenta una historia. Somos un espacio donde el café se convierte en lenguaje, la conversación en arte y el tiempo en pausa.`}
        bgColor="bg-cafe-light"
        textColor="text-cafe-dark"
        titleColor="text-cafe-primary"
        titleFont="font-brand"
        descriptionFont="font-secondary"
        descriptionColor="text-cafe-dark/80"
        buttonText="Conoce nuestra esencia"
        buttonLink="/nosotros"
        buttonBg="bg-cafe-accent"
        buttonTextColor="text-cafe-dark"
        buttonHoverBg="hover:bg-cafe-secondary hover:text-cafe-light"
        align="center"
      />

      {/* ======================================================================================
      HERO TEXT BUTTON IMG #1 - AMBIENTE URBANO
      ====================================================================================== */}
      <HeroTextButtonImg
        sectionId="ambiente-cafe"
        title="Un refugio urbano con aroma a café"
        subtitle="Diseño elegante, ambiente cálido y experiencias sensoriales"
        bulletPoints={[
          "Café de especialidad preparado por baristas expertos.",
          "Ambiente moderno con iluminación cálida y música suave.",
          "Ideal para trabajar, inspirarte o compartir una buena charla.",
          "Eventos, degustaciones y arte local cada semana.",
        ]}
        buttonText="Ver menú completo"
        buttonLink="/cafe/menu"
        mediaSrc="/assets/images/raices/interior.jpg"
        mediaType="image"
        bg="bg-gradient-cafe-4 text-cafe-light"
        titleColor="text-cafe-accent"
        subtitleColor="text-cafe-light"
        textColor="text-cafe-light"
        bulletColor="text-cafe-light/90"
        buttonColor="bg-cafe-accent hover:bg-cafe-secondary text-cafe-dark"
        titleFont="font-brand"
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
      QUOTE #1
      ====================================================================================== */}
      <QuoteSection
        quote="El café es una excusa perfecta para detener el tiempo y disfrutar el presente."
        author="Café con Raíces"
        bgColor="bg-gradient-cafe-2"
        textColor="text-cafe-dark"
        accentColor="text-cafe-primary"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8 md:py-spacing-10"
        align="center"
        animation="fade-up"
      />

      {/* ======================================================================================
      HERO TEXT BUTTON IMG #2 - VIDEO EXPERIENCIAL
      ====================================================================================== */}
      <HeroTextButtonImg
        sectionId="experiencia-cafe"
        title="Desayunos que despiertan los sentidos"
        subtitle="Comienza tu día con el aroma del café y el sabor de lo artesanal"
        bulletPoints={[
          "Desayunos equilibrados preparados con ingredientes frescos y locales.",
          "Pan artesanal, frutas de temporada y café recién molido.",
          "Opciones para todos los gustos: tradicionales, ligeros y energéticos.",
          "Una experiencia matutina que combina calma, aroma y bienestar.",
        ]}
        buttonText="Explora nuestro menú"
        buttonLink="/cafe/menu"
        mediaSrc="/assets/videos/desayunos.mp4"
        mediaType="video"
        bg="bg-gradient-cafe-5 text-cafe-dark"
        titleColor="text-cafe-primary"
        subtitleColor="text-cafe-dark"
        textColor="text-cafe-dark"
        bulletColor="text-cafe-dark"
        buttonColor="bg-cafe-secondary hover:bg-cafe-secondary text-cafe-dark"
        titleFont="font-brand"
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
      GALERÍA PREVIEW
      ====================================================================================== */}
      <GalleryPreview
        title="Momentos con sabor a comunidad"
        description={`Capturamos <span class='text-cafe-accent font-semibold'>historias</span>, <span class='text-cafe-accent font-semibold'>aromas</span> y <span class='text-cafe-accent font-semibold'>emociones</span> que dan vida a nuestro café.`}
        items={galleryRaicesData}
        bgColor="bg-gradient-cafe-4"
        textColor="text-cafe-light"
        titleFont="font-brand"
        titleColor="text-cafe-accent"
        descriptionFont="font-secondary"
        descriptionColor="text-cafe-light/90"
        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        gap="gap-6"
        paddingY="py-spacing-8 md:py-spacing-10"
        animation="fade-up"
      />

      {/* ======================================================================================
      HERO TWO COLUMN
      ====================================================================================== */}
      <HeroTwoColumn
        backgroundImage="/assets/images/raices/bg_experiencia.jpg"
        mainTitle="El arte y la técnica del café"
        attentionText="Barismo y comunidad"
        leftHeading="Aprende y comparte"
        leftTitle="Cultura cafetera viva"
        leftDescription="En Café con Raíces promovemos la cultura cafetera con talleres, charlas y degustaciones que fortalecen nuestra conexión con el origen."
        leftButtonText="Ver menú"
        leftButtonLink="/cafe/menu"
        rightHeading="Pasión y técnica"
        rightTitle="Baristas expertos"
        rightDescription="Cada taza refleja la dedicación de quienes transforman el grano en experiencia. Conoce a nuestros baristas y su historia."
        rightButtonText="Conócenos"
        rightButtonLink="/nosotros"
        overlayColor="bg-black/60"
        textColor="text-light"
        titleColor="text-cafe-accent"
        buttonStyle="bg-cafe-accent hover:bg-cafe-secondary text-cafe-dark"
        contentPadding="px-6 py-16 md:px-20"
        dividerColor="border-cafe-accent/30"
      />

      {/* ======================================================================================
      QUOTE #2
      ====================================================================================== */}
      <QuoteSection
        quote="El café no solo se bebe, se siente, se comparte y se recuerda."
        author="Café con Raíces"
        bgColor="bg-gradient-cafe-3"
        textColor="text-cafe-dark"
        accentColor="text-cafe-dark"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8 md:py-spacing-10"
        align="center"
        animation="fade-up"
      />

      {/* ======================================================================================
      CALL TO ACTION
      ====================================================================================== */}
      <CallToAction
        title="Visítanos en Café con Raíces"
        subtitle="Descubre el lugar donde cada taza tiene una historia."
        buttonText="Visítanos"
        buttonLink="/contacto"
        bgImage="/assets/images/raices/cta_cafeteria.png"
        overlayColor="bg-black/40"
        bgColor="bg-cafe-dark"
        titleColor="text-cafe-light"
        subtitleColor="text-cafe-light"
        buttonBg="bg-cafe-accent"
        buttonTextColor="text-cafe-dark"
        buttonHoverBg="hover:bg-cafe-secondary hover:text-cafe-light"
        titleFont="font-brand"
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
