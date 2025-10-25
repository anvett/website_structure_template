


// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const BenefitsCourseSlider = ({ title, subtitle, message, benefits = [] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(1);

//   useEffect(() => {
//     const updateItemsPerPage = () => {
//       setItemsPerPage(window.innerWidth >= 640 ? 2 : 1);
//     };

//     updateItemsPerPage();
//     window.addEventListener("resize", updateItemsPerPage);

//     return () => {
//       window.removeEventListener("resize", updateItemsPerPage);
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex + itemsPerPage) % benefits.length
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - itemsPerPage + benefits.length) % benefits.length
//     );
//   };

//   return (
//     <section className="py-spacing-6 bg-black">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Título y Subtítulo */}
//         <h1 className="font-bobby text-size-12 sm:text-size-22 text-accent mb-spacing-1 text-center">
//           {title}
//         </h1>
//         <h2 className="text-landsubtitle2 text-size-14 sm:text-size-23 font-bold mb-spacing-1 text-center">
//           {subtitle}
//         </h2>
//         <p className="text-light text-size-10 sm:text-size-14 text-center mb-spacing-6">
//           {message}
//         </p>

//         {/* Slider */}
//         <div className="relative w-full sm:w-4/5 mx-auto overflow-hidden">
//           <div
//             className="flex transition-transform duration-700"
//             style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
//           >
//             {benefits.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-full sm:w-1/2 flex-shrink-0 flex justify-center"
//               >
//                 <motion.div
//                   className="w-[90%] sm:w-[80%] max-w-lg border rounded-lg shadow-lg bg-accent flex flex-col items-center justify-between p-4"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   {/* Imagen */}
//                   <div className="w-full aspect-w-16 aspect-h-9 mb-4">
//                     <Image
//                       src={item.imageSrc || "/images/default-image.jpg"}
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-lg"
//                       alt="Benefit Image"
//                     />
//                   </div>

//                   {/* Descripción */}
//                   <div className="text-center">
//                     <p className="text-light font-semibold text-size-3 sm:text-size-4">
//                       {item.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Botones de navegación */}
//         <div className="flex justify-center gap-4 mt-6">
//           <button
//             onClick={handlePrev}
//             className="btn btn-circle bg-white text-black"
//           >
//             ❮
//           </button>
//           <button
//             onClick={handleNext}
//             className="btn btn-circle bg-white text-black"
//           >
//             ❯
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BenefitsCourseSlider;


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BenefitsCourseSlider = ({ title, subtitle, message, benefits = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (typeof window !== "undefined") {
        setItemsPerPage(window.innerWidth >= 640 ? 2 : 1);
      }
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % benefits.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + benefits.length) % benefits.length);
  };

  return (
    <section className="py-spacing-6 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-bobby text-size-12 sm:text-size-22 text-accent mb-spacing-1 text-center">
          {title}
        </h1>
        <h2 className="text-landsubtitle2 text-size-14 sm:text-size-23 font-bold mb-spacing-1 text-center">
          {subtitle}
        </h2>
        <p className="text-light text-size-10 sm:text-size-14 text-center mb-spacing-6">
          {message}
        </p>
        <div className="relative w-full sm:w-4/5 mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-400"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {benefits.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 flex-shrink-0 flex justify-center"
              >
                <motion.div
                  className="w-[90%] sm:w-[80%] max-w-lg border rounded-lg shadow-lg bg-accent flex flex-col items-center justify-center p-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full aspect-w-16 aspect-h-9 mb-4">
                    <Image
                      src={item.imageSrc || "/images/default-image.jpg"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      alt="Benefit Image"
                    />
                  </div>
                  <div className="flex justify-center items-start text-center">
                    <p className="text-light font-semibold text-size-3 sm:text-size-4">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="btn btn-circle bg-white text-black"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="btn btn-circle bg-white text-black"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCourseSlider;
