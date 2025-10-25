HeroImgText Component Documentation
Description
HeroImgText is a React component that displays a hero section with a background image, main text, and a list of secondary texts. The component uses Framer Motion to provide smooth animations for its elements. It offers three animation variants: Fade and Scale, Rotation, and Bounce.

Props
imageSrc (string): The source URL of the background image.
mainText (string): The main text to be displayed.
secondaryText (array of strings): A list of secondary texts to be displayed in a list format.
Usage
Example Usage
jsx
Copiar código
import React from "react";
import HeroImgText from "./HeroImgText";

const imageSrc = "/assets/images/logo.png";
const mainText = "Acerca de Nosotros";
const secondaryText = [
  "En ECUACLEANER INC estamos enfocados en dar lo mejor a nuestros clientes.",
  "Buscamos su satisfacción al proveer un excelente servicio de alta calidad.",
  "Damos capacitación a nuestros empleados para que puedan dar lo mejor de sí mismos.",
  "Creamos una buena armonía laboral."
];

export default function HomePage() {
  return (
    <HeroImgText 
      imageSrc={imageSrc} 
      mainText={mainText} 
      secondaryText={secondaryText} 
    />
  );
}
Variants
Fade and Scale
This variant fades in the elements and scales them from a smaller size.

jsx
Copiar código
import React from "react";
import { motion } from "framer-motion";

export default function HeroImgText({ imageSrc, mainText, secondaryText }) {
  return (
    <motion.div 
      className="hero bg-dark min-h-[75vh]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <motion.img 
          src={imageSrc} 
          className="max-w-sm rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-center lg:text-left lg:ml-6"
        >
          <h1 className="section-title text-primary">{mainText}</h1>
          <ul className="service-items  list-inside pl-5">
            {secondaryText.map((item, index) => (
              <li key={index} className="text-light leading-relaxed pb-spacing-1">{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
Rotation
This variant fades in the elements and rotates them slightly.

jsx
Copiar código
import React from "react";
import { motion } from "framer-motion";

export default function HeroImgText({ imageSrc, mainText, secondaryText }) {
  return (
    <motion.div 
      className="hero bg-dark min-h-[75vh]"
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <motion.img 
          src={imageSrc} 
          className="max-w-sm rounded-lg shadow-2xl"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div
          initial={{ opacity: 0, rotate: 10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-center lg:text-left lg:ml-6"
        >
          <h1 className="section-title text-primary">{mainText}</h1>
          <ul className="service-items  list-inside pl-5">
            {secondaryText.map((item, index) => (
              <li key={index} className="text-light leading-relaxed pb-spacing-1">{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
Bounce
This variant fades in the elements and applies a bounce effect.

jsx
Copiar código
import React from "react";
import { motion } from "framer-motion";

export default function HeroImgText({ imageSrc, mainText, secondaryText }) {
  return (
    <motion.div 
      className="hero bg-dark min-h-[75vh]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <motion.img 
          src={imageSrc} 
          className="max-w-sm rounded-lg shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
          className="text-center lg:text-left lg:ml-6"
        >
          <h1 className="section-title text-primary">{mainText}</h1>
          <ul className="service-items  list-inside pl-5">
            {secondaryText.map((item, index) => (
              <li key={index} className="text-light leading-relaxed pb-spacing-1">{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
Explicación de los Efectos
Fade and Scale:

Los elementos aparecen con un efecto de desvanecimiento y escalado desde un tamaño más pequeño.
Rotation:

Los elementos aparecen con un efecto de desvanecimiento y una ligera rotación.
Bounce:

Los elementos aparecen con un efecto de desvanecimiento y un rebote suave.
Cada variante utiliza las propiedades initial, animate y transition de Framer Motion para definir los estados de animación y la transición entre ellos. Puedes elegir la variante que mejor se adapte a tus necesidades o experimentar con diferentes combinaciones de propiedades para crear tus propios efectos.