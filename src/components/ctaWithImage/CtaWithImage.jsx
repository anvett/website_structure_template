import React from "react";
import Image from "next/image";

export default function CtaWithImage({
  text,
  mediaSrc,
  mediaType = "image", // "image" o "video"
  buttonLink,
  buttonText,
  bg = "bg-gray-100", // Color de fondo opcional
  bgImage = "", // Imagen de fondo opcional
  titleColor = "text-primary", // Color del título opcional
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-lg pb-spacing-5 ${bg}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Texto del CTA */}
      <h2 className={`text-size-8 w-4/5 sm:w-3/4 sm:text-size-14 md:text-size-14 font-extrabold ${titleColor} mt-spacing-4 mb-spacing-7`}>
        {text}
      </h2>

      {/* Contenedor Multimedia (Imagen o Video) */}
      <div className="relative w-full sm:w-3/4 lg:w-1/2 max-w-[600px] flex justify-center">
        {mediaType === "video" ? (
          <video
            controls
            className="w-full max-w-[500px] h-auto rounded-lg shadow-md"
          >
            <source src={mediaSrc} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        ) : (
          <div className="relative w-full max-w-[500px] h-auto">
            <Image
              src={mediaSrc}
              alt="CTA Media"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              layout="intrinsic"
            />
          </div>
        )}
      </div>

      {/* Botón (opcional) */}
      {buttonText && buttonLink && (
        <a href={buttonLink} className="main-button mt-spacing-5">
          {buttonText}
        </a>
      )}
    </div>
  );
}
