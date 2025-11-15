

import "./globals.css";
import { Poppins, Lato, Cinzel, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

// 🔠 Cargamos las fuentes desde Google Fonts (para control tipográfico)
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"] });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Molino de Café & Café con Raíces | Experiencias únicas en cada taza",
  description:
    "Molino de Café Cabañas Lodge y Café con Raíces comparten una misma esencia: el amor por el café, la naturaleza y las experiencias auténticas.",
  keywords: [
    "molino de café",
    "cabañas lodge",
    "café con raíces",
    "turismo rural",
    "cafetería artesanal",
    "cabañas en Ecuador",
    "experiencia de café",
    "barismo",
  ],
  authors: [{ name: "Molino de Café & Café con Raíces" }],
  creator: "Anvetcorp",
  publisher: "Molino de Café & Café con Raíces",
  metadataBase: new URL("https://www.raicesdelmolino.com"), // dominio final
  openGraph: {
    title: "Molino de Café & Café con Raíces",
    description:
      "Unimos la tranquilidad del campo con la energía de la ciudad. Vive experiencias únicas entre naturaleza y café de especialidad.",
    url: "https://www.raicesdelmolino.com",
    siteName: "Molino de Café & Café con Raíces",
    images: [
      {
        url: "/assets/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Molino de Café & Café con Raíces",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molino de Café & Café con Raíces",
    description:
      "Cabañas lodge y cafetería artesanal: dos mundos unidos por el aroma del café y la naturaleza.",
    creator: "@molinoyraices",
    images: ["/assets/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
};

export const viewport = {
  themeColor: "#000000", // o el color que desees
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        {/* 🔍 Etiquetas adicionales para SEO y accesibilidad */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Molino de Café & Café con Raíces" />
        <meta name="theme-color" content="#2F241B" />
      </Head>
      <body
        className={`${lato.className} bg-light text-dark antialiased selection:bg-accent selection:text-dark`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
