"use client";

import HeroTwoColumn from "@/components/heroTwoColumn/HeroTwoColumn";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import ContactHeroCard from "@/components/ContactHeroCard/ContactHeroCard";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      {/* ======================================================================================
      QUOTE SECTION
      ====================================================================================== */}
      <QuoteSection
        quote="El café nos conecta, la naturaleza nos inspira. Contáctanos y haz parte de nuestra experiencia."
        author="Molino de Café & Café con Raíces"
        bgColor="bg-gradient-home-2"
        textColor="text-dark"
        accentColor="text-primary"
        fontSize="text-size-5 md:text-size-7"
        paddingY="py-spacing-8"
        align="center"
      />

      {/* ======================================================================================
      CONTACTO DOBLE: HOSTERÍA Y CAFETERÍA
      ====================================================================================== */}
      <HeroTwoColumn
        backgroundImage="/assets/images/hero/contact_hero.jpg"
        overlayColor="bg-black/60"
        textColor="text-light"
        titleColor="text-accent"
        contentPadding="px-6 py-16 md:px-20"
        dividerColor="border-accent/30"
        leftContent={
          <ContactHeroCard
            title="Molino de Café Cabañas Lodge"
            subtitle="Hospédate entre naturaleza, confort y aroma de café."
            phone="+593993473226"
            email="reservas@raicesdelmolino.com"
            whatsapp="+593993473226"
            address="Molino de Café Cabañas Lodge, Santa Rosa de Cusubamba - Ecuador"
            googleMapsUrl="https://www.google.com/maps/place/Molino+de+Caf%C3%A9+Caba%C3%B1as+Lodge/@-0.0428732,-78.2852568,17z/data=!3m1!4b1!4m9!3m8!1s0x91d5f54515fa5461:0xc9298d4b19ff00!5m2!4m1!1i2!8m2!3d-0.0428732!4d-78.2852568!16s%2Fg%2F11vhs0vrkh?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
            cardBg="bg-light/90 backdrop-blur-md"
            cardText="text-dark"
            iconColor="text-secondary"
            accentColor="text-primary"
            buttonStyle="bg-secondary hover:bg-highlight text-dark px-6 py-3 rounded-custom-20  shadow-md hover:shadow-lg transition duration-300"
          />
        }
        rightContent={
          <ContactHeroCard
            title="Café con Raíces"
            subtitle="Tu punto de encuentro con el café de especialidad."
            phone="+593988803070"
            email="contacto@raicesdelmolino.com"
            whatsapp="+593988803070"
            address="Av. La Coruña y San Ignacio, Quito - Ecuador"
            googleMapsUrl="https://www.google.com/maps/place/0%C2%B012'06.2%22S+78%C2%B028'59.9%22W/@-0.201732,-78.4858882,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.201732!4d-78.4833133?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
            cardBg="bg-light/90 backdrop-blur-md"
            cardText="text-dark"
            iconColor="text-secondary"
            accentColor="text-primary"
            buttonStyle="bg-secondary hover:bg-highlight text-dark px-6 py-3 rounded-custom-20  shadow-md hover:shadow-lg transition duration-300"
          />
        }
      />

      <section className="relative w-full h-[24rem] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/images/hero/cta_visit.jpg"
          alt="Molino de Café & Café con Raíces"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-home-4" />
        <div className="relative z-10 text-center text-light px-6">
          <h2 className="font-primary text-size-6 md:text-size-8 font-bold mb-4">
            Visítanos y vive la experiencia
          </h2>
          <p className="font-secondary text-size-3 md:text-size-4 mb-6">
            Te esperamos en Molino de Café & Café con Raíces para disfrutar
            momentos que despiertan los sentidos.
          </p>
          <Link
            href="/reservar"
            className="bg-accent hover:bg-highlight text-dark px-8 py-3 rounded-custom-20 font-semibold transition duration-300"
          >
            Reserva ahora
          </Link>
        </div>
      </section>
    </main>
  );
}
