// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { menuConfig } from "@/data/menuConfig";

// const cx = (...c) => c.filter(Boolean).join(" ");

// // 🎨 Variantes con fondo base y atenuado por scroll
// const VARIANT_STYLES = {
//   general: {
//     // Fondo
//     bgBase: "bg-dark/90",        // color inicial (sin scroll)
//     bgScrolled: "bg-dark/80", // atenuado al hacer scroll (ajústalo a gusto)
//     text: "text-light",

//     // Links generales
//     linkHover: "hover:text-secondary",
//     linkActive: "text-secondary",

//     // Link "Inicio"
//     homeColor: "text-secondary hover:text-secondary",
//     homeActive: "text-secondary",

//     // CTA
//     ctaBg: "bg-secondary text-dark hover:bg-highlight",

//     // Bordes/iconos
//     border: "border-light/10",
//   },
//   molino: {
//     bgBase: "bg-molino-dark",
//     bgScrolled: "bg-molino-dark/80",
//     text: "text-molino-light",

//     linkHover: "hover:text-molino-accent",
//     linkActive: "text-molino-accent",

//     homeColor: "text-molino-light hover:text-molino-accent",
//     homeActive: "text-molino-accent",

//     ctaBg: "bg-molino-secondary text-light hover:bg-molino-primary",
//     border: "border-molino-light/10",
//   },
//   cafe: {
//     bgBase: "bg-cafe-dark",
//     bgScrolled: "bg-cafe-dark/80",
//     text: "text-cafe-light",

//     linkHover: "hover:text-cafe-accent",
//     linkActive: "text-cafe-accent",

//     homeColor: "text-cafe-light hover:text-cafe-accent",
//     homeActive: "text-cafe-accent",

//     ctaBg: "bg-cafe-secondary text-light hover:bg-cafe-primary",
//     border: "border-cafe-light/10",
//   },
// };

// export default function Navbar({ variant }) {
//   const pathname = usePathname();
//   const [open, setOpen] = React.useState(false);
//   const [scrolled, setScrolled] = React.useState(false);

//   // Autodetección de variante por sección
//   const autoVariant =
//     pathname?.startsWith("/hosteria")
//       ? "molino"
//       : pathname?.startsWith("/cafe")
//       ? "cafe"
//       : "general";

//   const vKey = variant || autoVariant;
//   const styles = VARIANT_STYLES[vKey];

//   // Detecta scroll para atenuar fondo
//   React.useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const isActive = (p) => (p === "/" ? pathname === "/" : pathname?.startsWith(p));

//   // Menú centrado: quitamos "/" e "/reservar"
//   const centerMenu = menuConfig.filter((i) => i.path !== "/" && i.path !== "/reservar");

//   // ✅ Fondo único, sin otros bg-* que lo pisen
//   const bgClass = scrolled ? styles.bgScrolled : styles.bgBase;

//   return (
//     <header
//       className={cx(
//         "sticky top-0 z-50 bg-dark/90 backdrop-blur",
//         bgClass,             // ⬅ Fondo según scroll
//         styles.text,
//         scrolled ? "backdrop-blur-sm shadow-md/20" : ""
//       )}
//     >
//       <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
//         {/* IZQUIERDA */}
//         <div className="flex items-center">
//           {/* Mobile: CTA Reserva compacto */}
//           <div className="lg:hidden">
//             <Link
//               href="/reservar"
//               className={cx(
//                 "btn btn-xs sm:btn-sm rounded-xl border-0 font-semibold tracking-wide shadow-sm transition-all duration-300",
//                 "flex items-center justify-center", // centra el texto
//                 styles.ctaBg
//               )}
//             >
//               Reserva
//             </Link>
//           </div>

//           {/* Desktop: Inicio (color configurable) */}
//           <div className="hidden lg:block">
//             <Link
//               href="/"
//               className={cx(
//                 "font-secondary text-base sm:text-lg tracking-wide transition-colors duration-300",
//                 isActive("/") ? styles.homeActive : styles.homeColor // ⬅️ ahora sí cambia
//               )}
//             >
//               Inicio
//             </Link>
//           </div>
//         </div>

//         {/* CENTRO (desktop) */}
//         <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
//           {centerMenu.map((item) => {
//             const active = isActive(item.path);
//             return (
//               <li key={item.path}>
//                 <Link
//                   href={item.path}
//                   className={cx(
//                     "font-secondary text-base tracking-wide transition-colors duration-300",
//                     styles.linkHover,
//                     active ? styles.linkActive : ""
//                   )}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>

//         {/* DERECHA */}
//         <div className="flex items-center">
//           {/* Desktop CTA */}
//           <Link
//             href="/reservar"
//             className={cx(
//               "hidden lg:inline-flex items-center justify-center h-10 px-5 rounded-2xl border-0 font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md",
//               styles.ctaBg
//             )}
//           >
//             Reserva tu experiencia
//           </Link>

//           {/* Mobile: Hamburguesa */}
//           <button
//             onClick={() => setOpen((s) => !s)}
//             aria-label="Abrir menú"
//             className={cx(
//               "lg:hidden ml-2 flex items-center justify-center w-10 h-10 rounded-xl border transition-colors duration-300",
//               styles.border,
//               styles.linkHover
//             )}
//           >
//             <motion.svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               width="22"
//               height="22"
//               stroke="currentColor"
//               fill="none"
//               strokeWidth="1.8"
//               initial={false}
//               animate={open ? { rotate: 90 } : { rotate: 0 }}
//               transition={{ type: "spring", stiffness: 260, damping: 20 }}
//             >
//               {open ? (
//                 <motion.path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
//               ) : (
//                 <motion.path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
//               )}
//             </motion.svg>
//           </button>
//         </div>
//       </nav>

//       {/* MENÚ MOBILE */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             key="mobile-menu"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.25, ease: "easeInOut" }}
//             className={cx(
//               "lg:hidden overflow-hidden",
//               "backdrop-blur-md border-t",
//               styles.border,
//               // Fondo del menú móvil: usamos el scrolled para continuidad visual
//               scrolled ? styles.bgScrolled : styles.bgBase
//             )}
//           >
//             <ul className="px-4 py-3 space-y-2">
//               {menuConfig.map((item) => (
//                 <li key={item.path}>
//                   <Link
//                     href={item.path}
//                     onClick={() => setOpen(false)}
//                     className={cx(
//                       "block rounded-xl px-3 py-2 font-secondary text-base transition-colors duration-300",
//                       styles.linkHover,
//                       isActive(item.path) ? styles.linkActive : ""
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { menuConfig } from "@/data/menuConfig";

const cx = (...c) => c.filter(Boolean).join(" ");

const VARIANT_STYLES = {
  general: {
    bgBase: "bg-dark/90",
    bgScrolled: "bg-dark/80",
    text: "text-light",
    linkHover: "hover:text-secondary",
    linkActive: "text-secondary",
    homeColor: "text-secondary hover:text-secondary",
    homeActive: "text-secondary",
    ctaBg: "bg-secondary text-dark hover:bg-highlight",
    border: "border-light/10",
  },
  molino: {
    bgBase: "bg-molino-dark",
    bgScrolled: "bg-molino-dark/80",
    text: "text-molino-light",
    linkHover: "hover:text-molino-accent",
    linkActive: "text-molino-accent",
    homeColor: "text-molino-light hover:text-molino-accent",
    homeActive: "text-molino-accent",
    ctaBg: "bg-molino-secondary text-light hover:bg-molino-primary",
    border: "border-molino-light/10",
  },
  cafe: {
    bgBase: "bg-cafe-dark",
    bgScrolled: "bg-cafe-dark/80",
    text: "text-cafe-light",
    linkHover: "hover:text-cafe-accent",
    linkActive: "text-cafe-accent",
    homeColor: "text-cafe-light hover:text-cafe-accent",
    homeActive: "text-cafe-accent",
    ctaBg: "bg-cafe-secondary text-light hover:bg-cafe-primary",
    border: "border-cafe-light/10",
  },
};

export default function Navbar({ variant }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
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
  const bgClass = scrolled ? styles.bgScrolled : styles.bgBase;

  // Submenús
  const subMenus = {
    "/hosteria": [
      { name: "Santorini", path: "/hosteria/cabanas/santorini" },
      { name: "Green Haven", path: "/hosteria/cabanas/green-haven" },
      { name: "Suite Green", path: "/hosteria/cabanas/suite-green" },
      { name: "Green Familiar", path: "/hosteria/cabanas/green-familiar" },
      { name: "Restaurante", path: "/hosteria/restaurante" },
      { name: "Menú", path: "/hosteria/restaurante/menu" },
    ],
    "/cafe": [{ name: "Menú", path: "/cafe/menu" }],
  };

  return (
    <header
      className={cx(
        "sticky top-0 z-50 bg-dark/90 backdrop-blur",
        bgClass,
        styles.text,
        scrolled ? "backdrop-blur-sm shadow-md/20" : ""
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* IZQUIERDA */}
        <div className="flex items-center">
          {/* Mobile CTA */}
          <div className="lg:hidden">
            <Link
              href="/reservar"
              className={cx(
                "btn btn-xs sm:btn-sm rounded-xl border-0 font-semibold tracking-wide shadow-sm transition-all duration-300",
                "flex items-center justify-center",
                styles.ctaBg
              )}
            >
              Reserva
            </Link>
          </div>

          {/* Desktop Inicio */}
          <div className="hidden lg:block">
            <Link
              href="/"
              className={cx(
                "font-secondary text-base sm:text-lg tracking-wide transition-colors duration-300",
                isActive("/") ? styles.homeActive : styles.homeColor
              )}
            >
              Inicio
            </Link>
          </div>
        </div>

        {/* CENTRO (Desktop con dropdowns funcionales y clicables) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
          {centerMenu.map((item) => {
            const active = isActive(item.path);
            const hasSubMenu = subMenus[item.path];
            const isDropdownOpen = openDropdown === item.path;

            return (
              <li
                key={item.path}
                className="relative"
                onMouseEnter={() => !open && setOpenDropdown(item.path)}
                onMouseLeave={() => !open && setOpenDropdown(null)}
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={item.path}
                    className={cx(
                      "font-secondary text-base tracking-wide transition-colors duration-300",
                      styles.linkHover,
                      active ? styles.linkActive : ""
                    )}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
                  </Link>

                  {hasSubMenu && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown((prev) =>
                          prev === item.path ? null : item.path
                        );
                      }}
                      className="focus:outline-none"
                    >
                      <motion.span
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block text-xs"
                      >
                        ▼
                      </motion.span>
                    </button>
                  )}
                </div>

                {/* Submenú desplegable */}
                <AnimatePresence>
                  {hasSubMenu && isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className={cx(
                        "absolute left-0 mt-2 w-56 rounded-xl shadow-lg overflow-hidden",
                        styles.bgBase,
                        styles.text,
                        "backdrop-blur-md border",
                        styles.border
                      )}
                    >
                      {subMenus[item.path].map((sub) => (
                        <li key={sub.path}>
                          <Link
                            href={sub.path}
                            className={cx(
                              "block px-4 py-2 text-sm font-secondary transition-colors duration-200",
                              styles.linkHover,
                              isActive(sub.path) ? styles.linkActive : ""
                            )}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* DERECHA */}
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

          {/* Mobile menú */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Abrir menú"
            className={cx(
              "lg:hidden ml-2 flex items-center justify-center w-10 h-10 rounded-xl border transition-colors duration-300",
              styles.border,
              styles.linkHover
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
              animate={open ? { rotate: 90 } : { rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {open ? (
                <motion.path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <motion.path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </motion.svg>
          </button>
        </div>
      </nav>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={cx(
              "lg:hidden overflow-hidden",
              "backdrop-blur-md border-t",
              styles.border,
              scrolled ? styles.bgScrolled : styles.bgBase
            )}
          >
            <ul className="px-4 py-3 space-y-2">
              {menuConfig.map((item) => {
                const hasSubMenu = subMenus[item.path];
                return (
                  <li key={item.path}>
                    <div className="flex flex-col">
                      <Link
                        href={item.path}
                        onClick={() => {
                          if (!hasSubMenu) setOpen(false);
                        }}
                        className={cx(
                          "block rounded-xl px-3 py-2 font-secondary text-base transition-colors duration-300",
                          styles.linkHover,
                          isActive(item.path) ? styles.linkActive : ""
                        )}
                      >
                        {item.name}
                      </Link>

                      {/* Submenús Mobile */}
                      {hasSubMenu && (
                        <ul className="pl-5 space-y-1">
                          {subMenus[item.path].map((sub) => (
                            <li key={sub.path}>
                              <Link
                                href={sub.path}
                                onClick={() => setOpen(false)}
                                className={cx(
                                  "block px-3 py-1 text-sm font-secondary transition-colors duration-300",
                                  styles.linkHover,
                                  isActive(sub.path) ? styles.linkActive : ""
                                )}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
