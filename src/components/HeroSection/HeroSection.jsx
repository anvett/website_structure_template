"use client";

import React from "react";

export const HeroSection = ({ children, ...props }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm" {...props}>
      <p className="text-gray-700">Componente HeroSection</p>
      {children}
    </div>
  );
};
