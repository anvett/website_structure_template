

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { menuConfig } from "@/data/menuConfig";
import contactData from "@/data/contact";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

const VARIANT_STYLES = {
  general: { bg: "bg-gradient-home-5", text: "text-light", link: "hover:text-secondary" },
  molino: { bg: "bg-molino-dark", text: "text-molino-light", link: "hover:text-molino-accent" },
  cafe: { bg: "bg-cafe-dark", text: "text-cafe-light", link: "hover:text-cafe-accent" },
};

export default function Footer({
  variant,
  logoMolino = "/assets/images/logo_molino.png",
  logoCafe = "/assets/images/logo_cafe.png",
  iconPhone = "/assets/icons/call.png",
  iconWhatsApp = "/assets/icons/whatsapp.png",
  iconFacebook = "/assets/icons/facebook.png",
  iconInstagram = "/assets/icons/nstagram.png",
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

  // Datos
  const phoneMolino = "+593993473226";
  const whatsappMolino = "+593993473226";
  const phoneCafe = "+593988803070";
  const whatsappCafe = "+593988803070";
  const addressMolino = "Molino de Café — Guayllabamba, Ecuador";
  const addressCafe = "Café con Raíces — Quito, Ecuador";

  const social = contactData?.social || [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
  ];

  // Menú “Explora”
  const explore = menuConfig.filter((m) => m.path !== "/reservar");

  // Enlaces adicionales
  const molinoLinks = [
    { name: "Santorini", path: "/hosteria/cabanas/santorini" },
    { name: "Green Haven", path: "/hosteria/cabanas/green-haven" },
    { name: "Suite Green", path: "/hosteria/cabanas/suite-green" },
    { name: "Green Familiar", path: "/hosteria/cabanas/green-familiar" },
    { name: "Restaurante", path: "/hosteria/restaurante" },
    { name: "Menú del restaurante", path: "/hosteria/restaurante/menu" },
  ];

  const cafeLinks = [{ name: "Menú de la cafetería", path: "/cafe/menu" }];

  const legalLinks = [
    { name: "Política de Privacidad", path: "/legal/politica-de-privacidad" },
    { name: "Términos de Uso", path: "/legal/terminos-de-uso" },
    { name: "Política de Cookies", path: "/legal/politica-de-cookies" },
  ];

  return (
    <footer className={cx(styles.bg, styles.text, "border-t border-white/10")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* ==================== SECCIÓN PRINCIPAL ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Logos */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              {logoMolino && (
                <Image
                  src={logoMolino}
                  alt="Molino de Café"
                  width={56}
                  height={56}
                  className="rounded-xl object-contain"
                />
              )}
              <span className="text-2xl font-brand">&amp;</span>
              {logoCafe && (
                <Image
                  src={logoCafe}
                  alt="Café con Raíces"
                  width={56}
                  height={56}
                  className="rounded-xl object-contain"
                />
              )}
            </div>
            <p className="mt-4 max-w-sm font-secondary/90 text-sm opacity-90 leading-relaxed">
              Experiencias únicas entre naturaleza, sabor y hospitalidad. Molino de Café Cabañas
              Lodge &amp; Café con Raíces.
            </p>
          </div>

          {/* Explora */}
          <div className="md:col-span-2">
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

          {/* Molino */}
          <div className="md:col-span-2">
            <h4 className="font-brand text-lg mb-3">Experiencias Molino</h4>
            <ul className="space-y-2">
              {molinoLinks.map((item) => (
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

          {/* Café */}
          <div className="md:col-span-2">
            <h4 className="font-brand text-lg mb-3">Café con Raíces</h4>
            <ul className="space-y-2">
              {cafeLinks.map((item) => (
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

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="font-brand text-lg mb-3">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
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
        </div>

        {/* ==================== SUB-FOOTER DE CONTACTO ==================== */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Molino */}
          <div>
            <h4 className="font-brand text-lg mb-3">Molino de Café</h4>
            <div className="space-y-2 text-sm font-secondary">
              <div className="flex items-center gap-2">
                <Image src={iconPhone} alt="Teléfono" width={16} height={16} />
                <Link href={`tel:${phoneMolino}`} className={cx(styles.link)}>
                  {phoneMolino}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Image src={iconWhatsApp} alt="WhatsApp" width={16} height={16} />
                <Link
                  href={`https://wa.me/${whatsappMolino.replace(/\s|\+/g, "")}`}
                  target="_blank"
                  className={cx(styles.link)}
                >
                  WhatsApp
                </Link>
              </div>
              <p className="opacity-80">{addressMolino}</p>
            </div>
          </div>

          {/* Café */}
          <div>
            <h4 className="font-brand text-lg mb-3">Café con Raíces</h4>
            <div className="space-y-2 text-sm font-secondary">
              <div className="flex items-center gap-2">
                <Image src={iconPhone} alt="Teléfono" width={16} height={16} />
                <Link href={`tel:${phoneCafe}`} className={cx(styles.link)}>
                  {phoneCafe}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Image src={iconWhatsApp} alt="WhatsApp" width={16} height={16} />
                <Link
                  href={`https://wa.me/${whatsappCafe.replace(/\s|\+/g, "")}`}
                  target="_blank"
                  className={cx(styles.link)}
                >
                  WhatsApp
                </Link>
              </div>
              <p className="opacity-80">{addressCafe}</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-brand text-lg mb-3">Síguenos</h4>
            <div className="flex items-center gap-4">
              <Link href={social[0]?.href || "#"} target="_blank">
                <Image src={iconFacebook} alt="Facebook" width={28} height={28} />
              </Link>
              <Link href={social[1]?.href || "#"} target="_blank">
                <Image src={iconInstagram} alt="Instagram" width={28} height={28} />
              </Link>
            </div>
          </div>
        </div>

        {/* ==================== COPYRIGHT ==================== */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="font-secondary text-xs opacity-80">
            © {year} Anvetcorp S.A.S. Todos los derechos reservados.
          </p>

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
