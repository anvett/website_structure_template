"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CtaOptimized = ({ ctaText, buttonText, buttonLink }) => {
  return (
    <section className="relative py-spacing-8 bg-image-with-overlay text-light text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-image-with-overlay h-full w-full" />
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.h2
          className="section-title text-light pb-spacing-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {ctaText}
        </motion.h2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <Link
            href={buttonLink}
            className="main-button"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaOptimized;
