import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function PricingCard({ planName, price, period, features, buttonText, buttonAction, iconColor }) {
  return (
    <div className="flex justify-center">
        
        {/* Card */}
      <div className="card bg-gray-100 shadow-xl border border-gray-300 w-full max-w-sm">
        <div className="card-body text-center">
          {/* Título del Plan */}
          <h2 className="title-image text-dark">{planName}</h2>
          <div className="divider"></div>

          {/* Precio */}
          <p className="text-3xl font-extrabold text-primary">
            {price} <span className="text-lg font-normal">/ {period}</span>
          </p>
          <div className="divider before:bg-gray-300 after:bg-gray-300"></div>

          {/* Lista de Características */}
          <ul className="text-dark space-y-2 text-left list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircleIcon className={`w-5 h-5 ${iconColor}`} /> {feature}
              </li>
            ))}
          </ul>
          <div className="divider before:bg-gray-300 after:bg-gray-300"></div>

          {/* Botón */}
          {buttonText && (
            <a href="#contacto" className="main-button">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
