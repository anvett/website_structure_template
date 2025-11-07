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
          Política de Cookies
        </h1>
        <p className="font-secondary text-size-3 leading-relaxed mb-6">
          Este sitio utiliza cookies para mejorar tu experiencia de navegación, analizar el tráfico
          y personalizar el contenido. Al continuar utilizando nuestro sitio web, aceptas el uso de cookies
          de acuerdo con esta política.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          ¿Qué son las cookies?
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo para recordar
          tus preferencias o actividades anteriores en nuestro sitio web.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          Tipos de cookies que utilizamos
        </h2>
        <ul className="list-disc ml-6 font-secondary text-size-3 space-y-2">
          <li><strong>Cookies esenciales:</strong> necesarias para el correcto funcionamiento del sitio.</li>
          <li><strong>Cookies analíticas:</strong> nos ayudan a comprender cómo los usuarios interactúan con el sitio.</li>
          <li><strong>Cookies de personalización:</strong> guardan tus preferencias y configuraciones.</li>
        </ul>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          Gestión de cookies
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Puedes configurar tu navegador para rechazar cookies o eliminarlas. Sin embargo, algunas
          funciones del sitio podrían no funcionar correctamente.
        </p>

        <p className="font-secondary text-size-3 mt-10 text-dark/70">
          Última actualización: Noviembre 2025
        </p>
      </motion.section>
    </main>
  );
}
