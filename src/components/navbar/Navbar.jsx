"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { menuConfig } from "@/data/menuConfig";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// 🎨 Paletas dinámicas (según tu tailwind.config.js)
const VARIANT_STYLES = {
  general: {
    bg: "bg-transparent",
    text: "text-light",
    hover: "hover:text-secondary",
    active: "text-secondary",
    ctaBg: "bg-secondary text-dark hover:bg-highlight",
    border: "border-light/10",
  },
  molino: {
    bg: "bg-transparent",
    text: "text-molino-light",
    hover: "hover:text-molino-accent",
    active: "text-molino-accent",
    ctaBg: "bg-molino-secondary text-light hover:bg-molino-primary",
    border: "border-molino-light/10",
  },
  cafe: {
    bg: "bg-transparent",
    text: "text-cafe-light",
    hover: "hover:text-cafe-accent",
    active: "text-cafe-accent",
    ctaBg: "bg-cafe-secondary text-light hover:bg-cafe-primary",
    border: "border-cafe-light/10",
  },
};

export default function Navbar({ variant }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const autoVariant =
    pathname?.startsWith("/hosteria")
      ? "molino"
      : pathname?.startsWith("/cafe")
      ? "cafe"
      : "general";

  const vKey = variant || autoVariant;
  const styles = VARIANT_STYLES[vKey];

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (p) => (p === "/" ? pathname === "/" : pathname?.startsWith(p));
  const centerMenu = menuConfig.filter((i) => i.path !== "/" && i.path !== "/reservar");

  return (
    <header
      className={cx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out",
        styles.bg,
        styles.text,
        scrolled ? "bg-dark/20 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* --- IZQUIERDA --- */}
        <div className="flex items-center">
          {/* Mobile: botón Reserva */}
          <div className="lg:hidden">
            <Link
              href="/reservar"
              className={cx(
                "btn btn-xs sm:btn-sm rounded-xl border-0 font-semibold tracking-wide shadow-sm transition-all duration-300 flex items-center justify-center",
                styles.ctaBg
              )}
            >
              Reserva
            </Link>
          </div>

          {/* Desktop: Inicio */}
          <div className="hidden lg:block">
            <Link
              href="/"
              className={cx(
                "font-secondary text-base sm:text-lg tracking-wide transition-colors duration-300",
                styles.hover,
                isActive("/") ? styles.active : ""
              )}
            >
              Inicio
            </Link>
          </div>
        </div>

        {/* --- CENTRO (menú principal) --- */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {centerMenu.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={cx(
                    "font-secondary text-base tracking-wide transition-colors duration-300",
                    styles.hover,
                    active ? styles.active : ""
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* --- DERECHA --- */}
        <div className="flex items-center">
          {/* Desktop CTA */}
          <Link
            href="/reservar"
            className={cx(
              "hidden lg:inline-flex items-center justify-center h-10 px-5 rounded-2xl border-0 font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md",
              styles.ctaBg
            )}
          >
            Reserva tu experiencia
          </Link>

          {/* Mobile: hamburguesa */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Abrir menú"
            className={cx(
              "lg:hidden ml-2 flex items-center justify-center w-10 h-10 rounded-xl border transition-colors duration-300",
              styles.border,
              styles.hover
            )}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              stroke="currentColor"
              fill="none"
              strokeWidth="1.8"
              initial={false}
              animate={open ? { rotate: 90 } : { rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {open ? (
                <motion.path
                  d="M6 6L18 18M6 18L18 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <motion.path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </motion.svg>
          </button>
        </div>
      </nav>

      {/* --- MENÚ MOBILE --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={cx(
              "lg:hidden overflow-hidden backdrop-blur-md border-t border-white/10",
              "bg-dark/70 text-light"
            )}
          >
            <ul className="px-4 py-3 space-y-2">
              {menuConfig.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={cx(
                      "block rounded-xl px-3 py-2 font-secondary text-base transition-colors duration-300",
                      styles.hover,
                      isActive(item.path) ? styles.active : ""
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
