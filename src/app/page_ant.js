"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import HeroGallery from "@/components/heroGallery/HeroGallery";
import HeroTextButtonImg from "@/components/heroTextButtonImg/heroTextButtonImg";
import HeroTwoColumn from "@/components/heroTwoColumn/HeroTwoColumn";
import AccordionContent from "@/components/accordionContent/AccordionContent";
import {
  UserIcon,
  MailIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  TagIcon,
  CreditCardIcon,
  QrcodeIcon,
  ClipboardListIcon,
} from "@heroicons/react/solid";
import CtaWithImage from "@/components/ctaWithImage/CtaWithImage";
import PricingCard from "@/components/pricingCard/PricingCard";
import CtaOptimized from "@/components/cta/CtaOptimized";
import ContactForm from "@/components/contactForm/ContactForm";
import TestimonialCard from "@/components/testimonialCard/TestimonialCard";

// Animaciones básicas
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const slideInRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const galleryData = [
  {
    imageSrc: "/assets/images/advantage1.png",
    imageTitle: "Conexiones al Instante",
    imageDescription:
      "Comparte tu información profesional al instante y conecta sin límites, transformando cada interacción en una oportunidad.",
  },
  {
    imageSrc: "/assets/images/advantage2.png",
    imageTitle: "Diseño Personalizable",
    imageDescription:
      "Destaca con una tarjeta digital que refleje tu identidad única. Actualiza tus datos en tiempo real y mejora tu imagen profesional.",
  },
  {
    imageSrc: "/assets/images/advantage3.png",
    imageTitle: "Actualización en Tiempo Real",
    imageDescription:
      "Mantén tu información siempre al día sin necesidad de reimprimir tarjetas, asegurando una comunicación siempre fresca y precisa.",
  },
  // Puedes agregar más elementos según necesites
];

//---------------------------------------------------------
//Hero con imagen y beneficios
//---------------------------------------------------------

const benefitsArray = [
  "Acceso instantáneo a tu información desde cualquier dispositivo",
  "Integración directa con tus redes sociales y plataformas profesionales",
  "Aumenta tu visibilidad y moderniza tu imagen con facilidad",
];

//---------------------------------------------------------
// Enlace de WhatsApp: reemplaza el número y mensaje según corresponda.
//---------------------------------------------------------
const whatsappLink =
  "https://wa.me/+593939154014?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20AnvetCard";

//---------------------------------------------------------
// Acordión de contenido de tarjetas NFC
//---------------------------------------------------------
const digitalCardEntries = [
  {
    title: "Perfil",
    subtitle: "Tu información personal",
    details: ["Foto de perfil", "Nombre y apellidos", "Título profesional", "Descripción personal"],
    icon: <UserIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "Contacto",
    subtitle: "Conecta conmigo",
    details: [
      "Correo electrónico y teléfono",
      "Ubicación con enlace a google maps",
      "Sitio Web",
      "Horarios de atención",
    ],
    icon: <MailIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "Educación y Experiencia",
    subtitle: "Tu trayectoria profesional",
    details: ["Historial académico", "Experiencia laboral relevante", "Certificaciones y premios"],
    icon: <AcademicCapIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "Productos y Servicios",
    subtitle: "Lo que ofrezco",
    details: [
      "Descripción de productos",
      "Casos de éxito y portafolio",
      "Testimonios de clientes",
      "Galería de productos",
      "Catálogo de servicios",
      "Slider de imágenes",
    ],
    icon: <ShoppingBagIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "Promociones",
    subtitle: "Ofertas especiales",
    details: ["Descuentos y promociones vigentes", "Eventos y novedades exclusivas"],
    icon: <TagIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "Información de Pago",
    subtitle: "Métodos y detalles",
    details: [
      "Informacion de pago para transferencias seguras",
      "Datos bancarios",
      "Puede incluir una o varias cuentas",
    ],
    icon: <CreditCardIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "QR y Multimedia",
    subtitle: "Acceso rápido y visual",
    details: ["Código QR para escanear", "Video de presentación", "Galería de imágenes"],
    icon: <QrcodeIcon className="w-16 h-16 text-primary" />,
  },
];

//---------------------------------------------------------
// Beneficios del llamador QR
//---------------------------------------------------------
const featuresArray = [
  "Incluye un código QR impreso en alta calidad.",
  "Ideal para escritorios, recepciones y negocios.",
  "Sin necesidad de reponer tarjetas de cartón.",
  "Fácil de escanear, lleva directo a tu tarjeta digital.",
  "Diseño personalizable con tu logo y colores.",
];

//---------------------------------------------------------
// Faq
//---------------------------------------------------------

const faqEntries = [
  {
    title: "¿Qué información incluye mi tarjeta digital?",
    subtitle: "Tu perfil profesional y datos clave",
    details: [
      "Foto de perfil y nombre completo",
      "Título profesional y especialización",
      "Descripción personal o biografía",
    ],
    icon: <UserIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "¿Cómo pueden contactarme desde mi tarjeta?",
    subtitle: "Opciones de conexión rápida",
    details: [
      "Correo electrónico y teléfono con un solo clic",
      "Ubicación con enlace a Google Maps",
      "Sitio web y redes sociales integradas",
      "Horarios de atención visibles",
    ],
    icon: <MailIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "¿Puedo incluir mi experiencia y estudios?",
    subtitle: "Muestra tu trayectoria profesional",
    details: [
      "Historial académico con certificaciones",
      "Experiencia laboral relevante",
      "Premios y logros destacados",
    ],
    icon: <AcademicCapIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "¿Puedo mostrar mis productos y servicios?",
    subtitle: "Promociona lo que ofreces",
    details: [
      "Descripción detallada de productos y servicios",
      "Casos de éxito y testimonios de clientes",
      "Galería de imágenes y videos",
      "Catálogo digital interactivo",
    ],
    icon: <ShoppingBagIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "¿Cómo funcionan las promociones?",
    subtitle: "Destaca ofertas especiales",
    details: [
      "Publica descuentos y promociones vigentes",
      "Muestra eventos y novedades exclusivas",
    ],
    icon: <TagIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "¿Cómo pueden pagarme mis clientes?",
    subtitle: "Información de pago segura",
    details: [
      "Métodos de pago disponibles (transferencias, PayPal, etc.)",
      "Datos bancarios protegidos y encriptados",
      "Opción de incluir múltiples cuentas de pago",
    ],
    icon: <CreditCardIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "¿Qué es el llamador QR y cómo funciona?",
    subtitle: "Acceso instantáneo a tu tarjeta digital",
    details: [
      "Código QR impreso en alta calidad",
      "Ideal para escritorios, recepciones y negocios",
      "Sin necesidad de reponer tarjetas de cartón",
      "Fácil de escanear y acceso inmediato a tu tarjeta digital",
    ],
    icon: <QrcodeIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "¿Qué beneficios tiene el llamador QR?",
    subtitle: "Razones para usarlo en tu negocio",
    details: [
      "Reduce el uso de tarjetas de papel",
      "Ofrece un acceso rápido y profesional a tu contacto",
      "Diseño personalizable con tu logo y colores",
      "Mayor durabilidad y sin necesidad de reposición constante",
    ],
    icon: <ClipboardListIcon className="w-16 h-16 text-primary" />,
  },
];

//---------------------------------------------------------
// Testimonials
//---------------------------------------------------------

const testimonials=[
  {
    name: "Lic. María Emilia Arias",
    feedback: "AnvetCard ha cambiado la forma en que comparto mi información. ¡Muy recomendable!",
    image: "/assets/images/testimonials/maemilia-arias.png",
    cardLink: "https://maemiliaarias.anvetcard.com"
  },
  {
    name: "Msc. Erika Veintimilla",
    feedback: "Excelente solución para profesionales. Ahora mis clientes pueden contactarme fácilmente.",
    image: "/assets/images/testimonials/erika-veintimilla.jpg",
    cardLink: "https://erickaveintimilla.anvetcard.com"
  },
  {
    name: "Wellinton LLanos",
    feedback: "AnvetCard ha cambiado la forma en que comparto mi información. ¡Muy recomendable!",
    image: "/assets/images/testimonials/wllanos.jpg",
    cardLink: "https://wllanos.ecuacleanerinc.com/"
  },
]
//---------------------------------------------------------


export default function Home() {
  return (
    <main>
      {/* Sección Hero title */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} id="inicio">
        <Hero />
      </motion.div>

      {/* Ventajas */}
      <motion.div
        id="ventajas"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4 bg-light"
      >
        <HeroGallery
          attentionText="¡BIENVENIDO A LA REVOLUCION DIGITAL!" //Texto de atención
          title="Explora AnvetCard" //Título
          description="Descubre cómo nuestras tarjetas digitales pueden transformar tu red de contactos." //Descripción
          galleryItems={galleryData} //Datos de la galería
        />
      </motion.div>

      {/* Beneficios 1 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        id="beneficios"
        className=" bg-gray-300"
      >
        <HeroTextButtonImg
          title="Eleva tu presencia profesional" //Título
          subtitle="Descubre las ventajas de una tarjeta que se adapta a tí" //Subtítulo
          bulletPoints={benefitsArray} //Lista de beneficios
          buttonText="Conoce más acerca de AnvetCard" //Texto del botón
          buttonLink="#contenido" // Enlace de WhatsApp
          mediaType="video" //Por defecto imagen, si se requiere video cambiar a "video"
          mediaSrc="/assets/videos/video_anvetcard_1.mp4" //Ruta del video
          bg="bg-gray-100"
        />
      </motion.div>

      {/* Beneficios 2 */}
      <motion.section
        id="caracteristicas"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className=" bg-image-with-overlay"
      >
        <HeroTwoColumn
          backgroundImage="/assets/images/hero_landing.jpg"
          mainTitle="Tu Tarjeta Digital a un Clic"
          attentionText="¡Transforma tu presencia profesional!"
          leftHeading="Conexión Instantánea"
          leftTitle="Comparte tu Información al Instante"
          leftDescription="Olvídate de las tarjetas tradicionales. Con nuestra solución digital, actualiza y comparte tus datos en tiempo real, facilitando conexiones profesionales y personales sin límites."
          leftButtonText="Descubre más"
          leftButtonLink="#llamador"
          rightHeading="Interfaz Intuitiva"
          rightTitle="Fácil de Usar, Personalizar y Actualizar"
          rightDescription="Diseñada pensando en la experiencia del usuario, nuestra tarjeta digital te permite gestionar y compartir tu información de forma sencilla y elegante, facilitando el networking."
          rightButtonText="Empieza hoy"
          rightButtonLink="#video2"
        />
      </motion.section>

      {/* Contenido que se puede incluir */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4 bg-light"
        id="contenido"
      >
        <h1 className="section-title text-primary py-spacing-2 px-spacing-1 text-center">
          Lo que puedes incluir en tu tarjeta
        </h1>
        <AccordionContent entries={digitalCardEntries} idPrefix="digitalcard" />
      </motion.div>

      {/* CTA NFC*/}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4 bg-light"
      >
        <CtaWithImage
          bg="bg-gray-100"
          text="Tu tarjeta digital incluye una tarjeta de presentación NFC. Comparte tu contacto con un solo toque."
          mediaSrc="/assets/images/cta_hero.png"
          mediaType="image"
          buttonText="Conoce más acerca de nuestros planes"
          buttonLink="#pricing"
        />
      </motion.div>

      {/* INFO ACRILICO*/}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} id="llamador">
        <HeroTextButtonImg
          bg="bg-light"
          title=" Comparte tu información en un solo escaneo" //Título
          subtitle="No más tarjetas perdidas. Con un simple QR, tus clientes y contactos acceden a tu tarjeta digital en segundos." //Subtítulo
          bulletPoints={featuresArray} //Lista de beneficios
          mediaSrc="/assets/images/llamador-qr.png" //Ruta del video
        />
      </motion.div>

      {/* VIDEO PROMOCION  */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} id="video2">
        <CtaWithImage
          bgImage="/assets/images/hero_landing.jpg"
          text="Comparte tu información con un solo toque y sin límites"
          titleColor="text-white"
          mediaSrc="/assets/videos/video_anvetcard_2.mp4"
          mediaType="video"
          buttonText="¡Adquiérela ahora!"
          buttonLink="#contacto"
        />
      </motion.div>

       {/* TESTIMONIOS  */}
       <motion.div initial="hidden" animate="visible" variants={fadeIn} id="testimonios">
        <TestimonialCard testimonials={testimonials} />
      </motion.div>

      {/* PRICING */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex flex-col gap-spacing-2 justify-center items-center bg-light py-spacing-4"
        id="pricing"
      >
        <div>
          <h1 className="section-title text-primary text-center">Pricing Card</h1>
          <h1 className="section-subtitle text-primary text-center pb-spacing-4">
            Elige el plan que mejor se adapte a tus necesidades
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-spacing-8">
          <PricingCard
            planName="Plan Standard"
            price="$65.00"
            period="No caducan"
            features={[
              "Tarjeta digital web",
              "Botones de contacto",
              "Enlace a redes sociales",
              "Galería de productos y/o servicios",
              "Fotografías, videos y testimonios",
              "Código QR",
              "Educación y Experiencia laboral",
              "Información de pago",
              "Tarjeta NFC",
              "Soporte 24/7",
            ]}
            buttonText="¡Suscríbete ahora!"
            buttonAction={() => alert("Plan seleccionado")}
            iconColor="text-dark"
          />
          <PricingCard
            planName="Plan Premium"
            price="Desde $85.00"
            period="No caducan"
            features={[
              "Todos los beneficios del plan Standard",
              "Llamador acrílico personalizado",
              "Mayor espacio para imágenes y videos",
              "20% de descuento en la creación de un sitio web",
              "Soporte 24/7",
              "Entrega sin costo adicional",
              "Actualizaciones ilimitadas",
              "Asesoría personalizada",
              "Tarjeta NFC",
            ]}
            buttonText="¡Suscríbete ahora!"
            buttonAction={() => alert("Plan seleccionado")}
            iconColor="text-dark"
          />
        </div>

        <div className="flex justify-center gap-4 ">
          <Image src="/assets/images/payment/pagos.jpg" alt="Facebook" width={1000} height={700} />
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className=" bg-gray-100 "
        id="contenido"
      >
        <div className="bg-gray-100 py-spacing-4">
          <h1 className="section-title text-primary   px-spacing-1 text-center">
            Preguntas Frecuentes
          </h1>
        </div>
        <div className="bg-gray-100 pb-spacing-8">
          <AccordionContent entries={faqEntries} idPrefix="digitalcard" />
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className=" bg-image-with-overlay"
      >
        <CtaOptimized
          ctaText="¿Listo para llevar tu presencia profesional al siguiente nivel?"
          buttonText="¡Contáctanos!"
          buttonLink="#contacto"
        />
      </motion.div>

      {/* CONTACT FORM */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className=" my-spacing-4 bg-light"
        id="contacto"
      >
        <ContactForm />
      </motion.div>
    </main>
  );
}
