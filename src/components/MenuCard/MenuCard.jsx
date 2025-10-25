"use client";

import React from "react";

export const MenuCard = ({ children, ...props }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm" {...props}>
      <p className="text-gray-700">Componente MenuCard</p>
      {children}
    </div>
  );
};
