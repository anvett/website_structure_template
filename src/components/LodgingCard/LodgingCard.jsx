"use client";

import React from "react";

export const LodgingCard = ({ children, ...props }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm" {...props}>
      <p className="text-gray-700">Componente LodgingCard</p>
      {children}
    </div>
  );
};
