"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TestimonialSection = ({
  testimonials = [],
  title = "Lo que dicen nuestros clientes",
  subtitle = "",
  bgColor = "bg-gray-100",
  textColor = "text-dark",
  titleColor = "text-primary",
  titleFont = "font-primary",
  textFont = "font-secondary",
  cardBg = "bg-white",
  cardTextColor = "text-dark",
  cardBorder = "border border-gray-300",
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  paddingY = "py-spacing-8",
  gap = "gap-6",
}) => {
  return (
    <section className={`${paddingY} ${bgColor} ${textColor} text-center`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`${titleFont} text-size-6 md:text-size-8 mb-4 ${titleColor}`}>
          {title}
        </h2>
        {subtitle && (
          <p
            className={`${textFont} text-size-3 md:text-size-4 text-dark/70 max-w-3xl mx-auto mb-spacing-6`}
          >
            {subtitle}
          </p>
        )}
        <div className={`grid ${gridCols} ${gap}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-6 ${cardBg} ${cardTextColor} ${cardBorder} rounded-lg shadow-lg text-left`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
              <p className={`${textFont} text-dark/80 mb-4`}>
                {testimonial.feedback}
              </p>
              {testimonial.cardLink && (
                <a
                  href={testimonial.cardLink}
                  className="text-primary font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver tarjeta digital
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
