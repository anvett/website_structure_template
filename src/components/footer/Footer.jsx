// import React from "react";
// import Image from "next/image";
// import Link from "next/link";



// export default function Footer() {
//   return (
//     <>
//       {/* Footer con enlaces del Navbar */}
//       <footer className="bg-navbar py-spacing-4 text-base-content">
//         <div>
//           <ul className="section-p flex justify-center gap-4 mb-4 text-light">
//             <li>
//               <Link href="#inicio" className="hover:text-secondary">
//                 Inicio
//               </Link>
//             </li>
//             <li>
//               <Link href="#ventajas" className="hover:text-secondary">
//                 Ventajas
//               </Link>
//             </li>
//             <li>
//               <Link href="#contenido" className="hover:text-secondary">
//                 Contenido
//               </Link>
//             </li>
//             <li>
//               <Link href="#pricing" className="hover:text-secondary">
//                 Pricing
//               </Link>
//             </li>
//             <li>
//               <Link href="#contacto" className="hover:text-secondary">
//                 Contacto
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Redes sociales */}
//         <div className="flex justify-center gap-4 mt-4">
//           <a href="https://www.facebook.com/anvetcorp/?locale=es_LA" target="_blank" rel="noopener noreferrer">
//             <Image src="/assets/icons/facebook.png" alt="Facebook" width={24} height={24} />
//           </a>
//           <a href="https://www.tiktok.com/@anvetcorpsas" target="_blank" rel="noopener noreferrer">
//             <Image src="/assets/icons/tiktok.png" alt="Twitter" width={24} height={24} />
//           </a>
//           <a href="https://www.instagram.com/anvetcorp/" target="_blank" rel="noopener noreferrer">
//             <Image src="/assets/icons/instagram.png" alt="Instagram" width={24} height={24} />
//           </a>
          
//         </div>
       
//       </footer>

//       {/* Footer actual */}
//       <footer className="text-center p-spacing-1 bg-gradient-primary text-sm text-base-content">
//         <p className="section-h5 text-primary">&copy; 2025 Anvetcorp SAS. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { menuConfig } from "@/data/menuConfig";
import contactData from "@/data/contact"; // ⚠️ Asegúrate de export default o ajusta si usas export named

// Pequeña utilidad
function cx(...c) {
  return c.filter(Boolean).join(" ");
}

const VARIANT_STYLES = {
  general: { bg: "bg-dark", text: "text-light", link: "hover:text-secondary" },
  molino: { bg: "bg-molino-dark", text: "text-molino-light", link: "hover:text-molino-accent" },
  cafe: { bg: "bg-cafe-dark", text: "text-cafe-light", link: "hover:text-cafe-accent" },
};

export default function Footer({
  variant,
  logoMolino = "/assets/images/logo-molino.png", // ✅ ajusta al path real
  logoCafe = "/assets/images/logo-cafe.png", // ✅ ajusta al path real
}) {
  const pathname = usePathname();

  const autoVariant =
    pathname?.startsWith("/hosteria")
      ? "molino"
      : pathname?.startsWith("/cafe")
      ? "cafe"
      : "general";

  const vKey = variant || autoVariant;
  const styles = VARIANT_STYLES[vKey];

  const year = new Date().getFullYear();

  // Datos de contacto seguros (fallbacks en caso de que contact.js aún no esté)
  const phone = contactData?.phone || "+593 000 000 000";
  const email = contactData?.email || "info@molinoyraices.com";
  const address = contactData?.address || "Ecuador";
  const social = contactData?.social || [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
  ];

  // Menú “Explora” → excluimos Reservar para no duplicar CTA
  const explore = menuConfig.filter((m) => m.path !== "/reservar");

  return (
    <footer className={cx(styles.bg, styles.text, "mt-24 border-t border-white/10")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Top: logos y columnas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Logos */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              {logoMolino ? (
                <Image
                  src={logoMolino}
                  alt="Molino de Café"
                  width={56}
                  height={56}
                  className="rounded-xl object-contain"
                />
              ) : (
                <span className="font-brand text-xl">Molino de Café</span>
              )}
              <span className="text-2xl font-brand">&amp;</span>
              {logoCafe ? (
                <Image
                  src={logoCafe}
                  alt="Café con Raíces"
                  width={56}
                  height={56}
                  className="rounded-xl object-contain"
                />
              ) : (
                <span className="font-brand text-xl">Café con Raíces</span>
              )}
            </div>
            <p className="mt-4 max-w-sm font-secondary/90 text-sm opacity-90 leading-relaxed">
              Experiencias únicas entre naturaleza, sabor y hospitalidad. Molino de Café Cabañas
              Lodge &amp; Café con Raíces.
            </p>
          </div>

          {/* Explora */}
          <div className="md:col-span-3">
            <h4 className="font-brand text-lg mb-3">Explora</h4>
            <ul className="space-y-2">
              {explore.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={cx(
                      "font-secondary text-sm transition-colors duration-300",
                      styles.link
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contáctanos */}
          <div className="md:col-span-3">
            <h4 className="font-brand text-lg mb-3">Contáctanos</h4>
            <ul className="space-y-2 font-secondary text-sm">
              <li>
                <Link href={`tel:${phone}`} className={cx("transition-colors", styles.link)}>
                  {phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${email}`} className={cx("transition-colors", styles.link)}>
                  {email}
                </Link>
              </li>
              <li className="opacity-90">{address}</li>
            </ul>
          </div>

          {/* Síguenos */}
          <div className="md:col-span-2">
            <h4 className="font-brand text-lg mb-3">Síguenos</h4>
            <ul className="space-y-2">
              {social.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    target="_blank"
                    className={cx("font-secondary text-sm transition-colors", styles.link)}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="font-secondary text-xs opacity-80">
            © {year} Molino de Café &amp; Café con Raíces. Todos los derechos reservados.
          </p>

          {/* CTA Reservar + pequeño efecto */}
          <Link
            href="/reservar"
            className={cx(
              "btn btn-sm rounded-2xl border-0 font-semibold tracking-wide shadow-sm hover:shadow-md",
              vKey === "molino"
                ? "bg-molino-secondary hover:bg-molino-primary text-light"
                : vKey === "cafe"
                ? "bg-cafe-secondary hover:bg-cafe-primary text-light"
                : "bg-secondary hover:bg-highlight text-dark"
            )}
          >
            Reserva tu experiencia
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
