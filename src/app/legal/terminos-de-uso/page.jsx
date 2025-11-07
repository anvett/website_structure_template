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
          Términos y Condiciones de Uso
        </h1>
        <p className="font-secondary text-size-3 leading-relaxed mb-6">
          Al acceder o utilizar el sitio web de <strong>Molino de Café & Café con Raíces</strong>,
          aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con ellos,
          te recomendamos no continuar con el uso de este sitio.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          1. Propiedad del sitio
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Todo el contenido, incluyendo textos, imágenes y diseños, es propiedad de Molino de Café & Café con Raíces
          y está protegido por las leyes de derechos de autor.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          2. Uso del contenido
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Está prohibido reproducir, distribuir o modificar cualquier contenido sin la autorización
          expresa por escrito de la empresa.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          3. Enlaces externos
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          Nuestro sitio puede contener enlaces a páginas de terceros. No somos responsables del contenido
          o las políticas de privacidad de dichos sitios.
        </p>

        <h2 className="text-size-5 font-primary font-semibold mt-8 mb-4 text-primary">
          4. Responsabilidad
        </h2>
        <p className="font-secondary text-size-3 mb-4">
          No nos hacemos responsables de daños directos o indirectos derivados del uso de la información
          contenida en este sitio o de interrupciones del servicio.
        </p>

        <p className="font-secondary text-size-3 mt-10 text-dark/70">
          Última actualización: Noviembre 2025
        </p>
      </motion.section>
    </main>
  );
}
