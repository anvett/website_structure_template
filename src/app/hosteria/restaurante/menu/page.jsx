"use client";

import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import CallToAction from "@/components/CallToAction/CallToAction";
import GalleryWithModal from "@/components/GalleryWithModal/GalleryWithModal";

import { menuItems } from "@/data/restaurante";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      HERO - MENÚ DEL MOLINO
      ====================================================================================== */}
      <Hero
        title="Menú del Molino"
        subtitle="Sabores auténticos de la montaña"
        description="Nuestra carta celebra los productos locales, el café artesanal y la creatividad de nuestra cocina. Cada plato es una invitación a disfrutar del presente, con el alma y los sentidos."
        buttonText="Reserva tu mesa"
        buttonLink="/reservar"
        backgroundImage="/assets/images/molino/restaurante/hero_menu.png"
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
      ABOUT SECTION - INTRODUCCIÓN AL MENÚ
      ====================================================================================== */}
      <AboutSection
        title="Cocina artesanal con alma local"
        description={`Cada plato del <span class='text-molino-secondary font-semibold'>Restaurante del Molino</span> nace de la inspiración en la naturaleza, el respeto por la tierra y el amor por los sabores auténticos. Utilizamos <span class='text-molino-secondary font-semibold'>ingredientes frescos de nuestro huerto</span> y de productores locales, fusionando tradición y creatividad en cada preparación.`}
        bgColor="bg-molino-light"
        textColor="text-molino-dark"
        titleColor="text-molino-primary"
        titleFont="font-primary"
        descriptionFont="font-secondary"
        descriptionColor="text-molino-dark/80"
        buttonText="Descubre nuestra historia"
        buttonLink="/nosotros"
        buttonBg="bg-molino-accent"
        buttonTextColor="text-molino-dark"
        buttonHoverBg="hover:opacity-90"
        align="center"
      />

      {/* ======================================================================================
      GALLERY WITH MODAL - MENÚ VISUAL
      ====================================================================================== */}
      <section className="bg-gradient-molino-4">
        <GalleryWithModal
          items={menuItems}
          whatsappNumber="593993473226"
          titleOptions={{
            text: "Nuestra carta",
            color: "text-molino-accent",
            size: "text-size-6 sm:text-size-8",
            subtitle:
              "Cada sección del menú refleja la esencia del Restaurante del Molino",
            subtitleColor: "text-molino-light",
            subtitleSize: "text-size-3 sm:text-size-4",
            description:
              "Haz clic en cada imagen para visualizar los detalles del menú físico.",
            descriptionColor: "text-molino-light/80",
            descriptionSize: "text-size-2 sm:text-size-3",
          }}
          galleryOptions={{
            bgColor: "bg-transparent",
            itemBg: "bg-molino-light/10",
            titleColor: "text-molino-light",
            titleSize: "text-size-2 sm:text-3",
          }}
          modalOptions={{
            bgColor: "bg-gradient-molino-3",
            titleColor: "text-molino-primary",
            titleSize: "text-size-5 sm:text-size-6",
            descriptionColor: "text-molino-dark",
            descriptionSize: "text-size-2 sm:text-size-3",
            highlightColor: "text-molino-primary",
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
            text: "Reservar mesa por WhatsApp",
            type: "btn",
            size: "text-base sm:text-lg",
            bgColor: "bg-molino-primary",
            textColor: "text-molino-light",
            borderColor: "border-none",
            hoverColor: "hover:bg-molino-secondary hover:text-light",
          }}
        />
      </section>

      {/* ======================================================================================
      CITA FINAL
      ====================================================================================== */}
      <QuoteSection
        quote="En cada plato hay un pedazo de nuestra historia, un susurro del café y una caricia de montaña."
        author="Restaurante del Molino"
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
        bgImage="/assets/images/molino/restaurante/cta_menu.jpg"
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
