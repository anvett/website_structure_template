"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";
import GalleryWithModal from "@/components/GalleryWithModal/GalleryWithModal";

import { menuCafeItems } from "@/data/cafeMenu";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO - MENÚ CAFÉ CON RAÍCES
      ====================================================================================== */}
      <Hero
        title="Café con Raíces"
        subtitle="Donde el aroma del café inspira historias"
        backgroundImage="/assets/images/raices/hero_menu_cafeteria.jpg"
        buttonText=""
        buttonLink="/reservar"
        buttonIcon=""
        leftColor="" // ❌ sin degradado dual
        rightColor="" // ❌ sin degradado dual
        overlayOpacity={0.15} // 🔸 leve sombra para resaltar texto sin opacar la imagen
        align="center"
      />

      {/* ======================================================================================
      ABOUT SECTION - INTRODUCCIÓN AL MENÚ
      ====================================================================================== */}
      <AboutSection
        title="Café, arte y comunidad"
        description={`Cada creación de <span class='text-cafe-accent font-semibold'>Café con Raíces</span> nace del respeto por el grano, el trabajo de nuestros baristas y el amor por la experiencia sensorial. Combinamos <span class='text-cafe-accent font-semibold'>sabores locales</span> con técnicas de barismo artesanal para ofrecerte momentos memorables.`}
        bgColor="bg-cafe-light"
        textColor="text-cafe-dark"
        titleColor="text-cafe-primary"
        titleFont="font-brand"
        descriptionFont="font-secondary"
        descriptionColor="text-cafe-dark/80"
        buttonText="Conoce nuestra historia"
        buttonLink="/nosotros"
        buttonBg="bg-cafe-accent"
        buttonTextColor="text-cafe-dark"
        buttonHoverBg="hover:bg-cafe-secondary hover:text-cafe-light"
        align="center"
      />

      {/* ======================================================================================
      GALLERY WITH MODAL - MENÚ VISUAL
      ====================================================================================== */}
      <section className="bg-gradient-cafe-4">
        <GalleryWithModal
          items={menuCafeItems}
          whatsappNumber="593988803070"
          titleOptions={{
            text: "Nuestra carta",
            color: "text-cafe-accent",
            size: "text-size-6 sm:text-size-8",
            subtitle:
              "Cada categoría refleja la esencia de Café con Raíces: artesanal, cálida y auténtica.",
            subtitleColor: "text-cafe-light",
            subtitleSize: "text-size-3 sm:text-size-4",
            description:
              "Toca cada imagen para descubrir las experiencias de sabor que te esperan.",
            descriptionColor: "text-cafe-light/80",
            descriptionSize: "text-size-2 sm:text-size-3",
          }}
          galleryOptions={{
            bgColor: "bg-transparent",
            itemBg: "bg-cafe-light/10",
            titleColor: "text-cafe-light",
            titleSize: "text-size-2 sm:text-size-3",
          }}
          modalOptions={{
            bgColor: "bg-gradient-cafe-5",
            titleColor: "text-cafe-secondary",
            titleSize: "text-size-5 sm:text-size-6",
            descriptionColor: "text-cafe-dark",
            descriptionSize: "text-size-2 sm:text-size-3",
            highlightColor: "text-cafe-highlight",
            highlightSize: "text-size-3 sm:text-size-4",
            aspectRatio: "16:9",
          }}
          interImageOptions={{
            width: 500,
            height: 350,
            rounded: "rounded-custom-20",
            className: "shadow-lg my-4",
          }}
          buttonOptions={{
            text: "Reservar o pedir por WhatsApp",
            type: "btn",
            size: "text-base sm:text-lg",
            bgColor: "bg-cafe-dark/80",
            textColor: "text-cafe-light",
            borderColor: "border-none",
            hoverColor: "hover:bg-cafe-secondary hover:text-cafe-light",
          }}
        />
      </section>

      {/* ======================================================================================
      CITA FINAL
      ====================================================================================== */}
      <QuoteSection
        quote="Cada taza y cada bocado cuentan una historia: la del aroma, la tierra y el alma del café."
        author="Café con Raíces"
        bgColor="bg-gradient-cafe-3"
        textColor="text-cafe-dark/80"
        accentColor="text-cafe-dark"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8 md:py-spacing-10"
        align="center"
        animation="fade-up"
      />

      {/* ======================================================================================
      CALL TO ACTION - VISÍTANOS
      ====================================================================================== */}
      <CallToAction
        title="Visítanos en Café con Raíces"
        subtitle="Descubre el arte del café y los sabores que inspiran comunidad."
        buttonText="Explora más experiencias"
        buttonLink="/hosteria/restaurante/"
        bgImage="/assets/images/raices/cta_menu_cafeteria.png"
        overlayColor="bg-black/50"
        bgColor="bg-cafe-dark"
        titleColor="text-cafe-accent"
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
