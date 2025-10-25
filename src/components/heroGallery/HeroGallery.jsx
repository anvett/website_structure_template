import React from "react";
import Image from "next/image";

const HeroGallery = ({ attentionText, title, description, galleryItems }) => {
  return (
    <div className="w-4/5 mx-auto bg-light">
      {/* Sección de Texto del Hero */}
      <div className="mb-8">
        <h5 className="text-left text-primary text-size-1 sm:text-size-2 lg:text-size-3 font-primary py-1 sm:pt-1">
          {attentionText}
        </h5>
        <h1 className="text-left font-extrabold text-size-6 sm:text-size-8 lg:text-size-12 font-primary pt-spacing-1 sm:pt-1 text-primary">
          {title}
        </h1>
        <p className="text-left section-h5 text-gray-500">
          {description}
        </p>
      </div>

      {/* Galería de Imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-light p-4 rounded">
            <Image
              src={item.imageSrc}
              alt={item.imageTitle}
              width={300}
              height={300}
              className="w-80 h-auto object-cover rounded mb-2"
            />
            <h3 className="text-left title-image text-primary">
              {item.imageTitle}
            </h3>
            <p className="text-left section-h5 text-gray-500">
              {item.imageDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroGallery;
