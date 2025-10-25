


// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function HeroImgText({ imageSrc, mainText, features }) {
//   return (
//     <motion.div
//       className="hero bg-gradient-to-br from-[#371457] to-[#FFFFFF] min-h-[75vh] flex items-center"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       <div className="hero-content flex flex-col lg:flex-row justify-between items-center w-100  lg:items-center px-4 lg:px-0">
       

//         {/* Texto descriptivo */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
//           className="text-left lg:text-left lg:ml-6 pt-spacing-2 "
//         >
//           <h1 className="section-title text-light pb-spacing-3 pl-spacing-3">{mainText}</h1>
//           <ul className="list-inside list-disc  pl-spacing-3 section-p">
//             {features.map((item, index) => (
//               <li key={index} className="text-light leading-relaxed pb-spacing-1">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//          {/* Imagen del llamador con QR */}
//          <div className="flex items-center justify-center lg:justify-center w-full lg:w-auto">
//           <motion.img
//             src={imageSrc}
//             alt="Llamador con QR"
//             className="max-w-xs sm:max-w-sm lg:max-w-sm rounded-lg shadow-2xl mb-3 lg:mb-0"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImgText({ imageSrc, mainText, features }) {
  return (
    <motion.div
      className="hero bg-gradient-to-br from-[#371457] to-[#FFFFFF] min-h-[75vh] flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="hero-content flex flex-col lg:flex-row justify-between items-center w-full lg:w-100 px-4 lg:px-0">
        
        {/* Texto descriptivo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-left lg:text-left lg:ml-6 pt-spacing-2"
        >
          <h1 className="section-title text-light pb-spacing-3 pl-spacing-3">{mainText}</h1>
          <ul className="list-inside list-disc pl-spacing-3 section-p">
            {features.map((item, index) => (
              <li key={index} className="text-light leading-relaxed pb-spacing-1">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Imagen del llamador con QR */}
        <div className="flex flex-col items-center justify-center w-full lg:w-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src={imageSrc}
              alt="Llamador con QR"
              width={300} // Ajusta según el tamaño deseado
              height={300}
              className="rounded-lg shadow-2xl mb-3 lg:mb-0"
            />
          </motion.div>
        </div>
        
      </div>
    </motion.div>
  );
}
