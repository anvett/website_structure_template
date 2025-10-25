// setup-structure.js
import fs from "fs";
import path from "path";

const pagesTemplate = (title) => 
`"use client";

import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">${title}</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Página en construcción. Aquí irá el contenido de "${title}".
      </p>
    </main>
  );
}
`;

const componentTemplate = (name) => 
`"use client";

import React from "react";

export const ${name} = ({ children, ...props }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm" {...props}>
      <p className="text-gray-700">Componente ${name}</p>
      {children}
    </div>
  );
};
`;

const structure = {
  public: {
    assets: {
      images: {
        molino: { cabañas: {}, restaurante: {}, experiencias: {} },
        raices: { menu: {}, eventos: {}, galeria: {} },
        hero: {},
      },
      icons: {},
    },
  },
  src: {
    app: {
      "layout.js": `"use client";\n\nexport const metadata = {\n  title: "Molino de Café & Café con Raíces",\n  description: "Experiencias únicas en cada taza",\n};\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang='es'>\n      <body>{children}</body>\n    </html>\n  );\n}`,
      "page.jsx": pagesTemplate("Inicio - Molino de Café & Café con Raíces"),
      hosteria: {
        "page.jsx": pagesTemplate("Hostería Molino de Café"),
        cabañas: {
          "page.jsx": pagesTemplate("Cabañas"),
          santorini: { "page.jsx": pagesTemplate("Cabaña Santorini") },
          "green-haven": { "page.jsx": pagesTemplate("Cabaña Green Haven") },
          "suite-green": { "page.jsx": pagesTemplate("Cabaña Suite Green") },
          "green-familiar": { "page.jsx": pagesTemplate("Cabaña Green Familiar") },
        },
        restaurante: { "page.jsx": pagesTemplate("Restaurante de la Hostería") },
        galeria: { "page.jsx": pagesTemplate("Galería de la Hostería") },
        experiencias: { "page.jsx": pagesTemplate("Experiencias en la Hostería") },
        contacto: { "page.jsx": pagesTemplate("Contacto Hostería") },
      },
      cafe: {
        "page.jsx": pagesTemplate("Café con Raíces"),
        menu: {
          "page.jsx": pagesTemplate("Menú del Café con Raíces"),
          "cafes-especiales": { "page.jsx": pagesTemplate("Cafés Especiales") },
          "bebidas-frias": { "page.jsx": pagesTemplate("Bebidas Frías") },
          postres: { "page.jsx": pagesTemplate("Postres del Café") },
          promociones: { "page.jsx": pagesTemplate("Promociones del Café") },
        },
        eventos: { "page.jsx": pagesTemplate("Eventos y Catas") },
        galeria: { "page.jsx": pagesTemplate("Galería del Café") },
        contacto: { "page.jsx": pagesTemplate("Contacto Café con Raíces") },
      },
      cursos: { "page.jsx": pagesTemplate("Cursos y Capacitaciones") },
      contacto: { "page.jsx": pagesTemplate("Contacto General") },
      "not-found.jsx": pagesTemplate("Página no encontrada"),
    },
    components: {
      Navbar: { "Navbar.jsx": componentTemplate("Navbar") },
      Footer: { "Footer.jsx": componentTemplate("Footer") },
      HeroSection: { "HeroSection.jsx": componentTemplate("HeroSection") },
      LodgingCard: { "LodgingCard.jsx": componentTemplate("LodgingCard") },
      MenuCard: { "MenuCard.jsx": componentTemplate("MenuCard") },
      Gallery: { "Gallery.jsx": componentTemplate("Gallery") },
      CTA: { "CTA.jsx": componentTemplate("CTA") },
      Testimonial: { "Testimonial.jsx": componentTemplate("Testimonial") },
    },
    data: {
      "cabañas.js": "// Datos de las cabañas",
      "cafeMenu.js": "// Datos del menú del café",
      "cursos.js": "// Datos de cursos",
      "galleryMolino.js": "// Galería de Molino de Café",
      "galleryRaices.js": "// Galería de Café con Raíces",
      "testimonials.js": "// Opiniones de clientes",
      "contact.js": "// Datos de contacto general",
      "homeButtons.js": "// Botones principales del home",
    },
    styles: { "globals.css": "/* Estilos globales Tailwind */" },
    utils: { "seoConfig.js": "// Configuración SEO global" },
  },
};

// 🧩 Función recursiva segura (no sobrescribe)
function createStructure(basePath, obj) {
  for (const key in obj) {
    const fullPath = path.join(basePath, key);

    if (typeof obj[key] === "object") {
      if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath);
      createStructure(fullPath, obj[key]);
    } else {
      if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });
      if (fs.existsSync(fullPath)) {
        console.log(`⚠️  Archivo existente, omitido: ${fullPath}`);
      } else {
        fs.writeFileSync(fullPath, obj[key]);
        console.log(`🆕  Archivo creado: ${fullPath}`);
      }
    }
  }
}

// 🚀 Ejecución
console.log("🛠️ Generando estructura del proyecto Molino de Café & Café con Raíces (modo seguro)...");
createStructure(process.cwd(), structure);
console.log("✅ Estructura generada correctamente sin sobrescribir archivos existentes.");
