"use client";

import React from "react";

export const CTA = ({ children, ...props }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm" {...props}>
      <p className="text-gray-700">Componente CTA</p>
      {children}
    </div>
  );
};
