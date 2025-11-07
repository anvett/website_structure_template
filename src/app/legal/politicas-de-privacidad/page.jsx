"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center justify-center py-spacing-8 px-6 bg-gradient-home-1 text-dark">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        <h1 className="text-size-8 font-primary font-bold mb-6 text-primary">
          Política de Privacidad
        </h1>
        <p className="font-secondary text-size-3 leading-relaxed mb-6">
          En <strong>Molino de Café & Café con Raíces</strong> valoramos y respetamos tu privacidad.
          Esta política explica cómo recopilamos, utilizamos y protegemos la información personal
          que nos proporcionas al interactuar con nuestros servicios, ya sea en nuestras instalaciones
          o a través de nuestro sitio web.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          1. Información que recopilamos
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Podemos recopilar datos personales como nombre, correo electrónico, número de teléfono,
          preferencias de reserva y comentarios, únicamente para mejorar tu experiencia.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          2. Uso de la información
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Utilizamos la información recopilada para gestionar tus reservas, responder consultas,
          ofrecer promociones relevantes y mejorar nuestros servicios.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          3. Protección de datos
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Implementamos medidas técnicas y organizativas adecuadas para proteger tu información
          contra accesos no autorizados, alteraciones o divulgaciones indebidas.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          4. Derechos del usuario
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Puedes solicitar en cualquier momento la corrección o eliminación de tus datos personales
          escribiéndonos a <a href="mailto:info@molinoyraices.com" className="text-primary underline">
          info@molinoyraices.com</a>.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          5. Cambios a esta política
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Nos reservamos el derecho de modificar esta política en cualquier momento. 
          Los cambios serán publicados en esta misma página.
        </p>

        <p className="font-secondary text-size-3 mt-10 text-dark/70">
          Última actualización: Noviembre 2025
        </p>
      </motion.section>
    </main>
  );
}
