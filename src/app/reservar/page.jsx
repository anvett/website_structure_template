// src/app/reservar/page.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function ReservarPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-light to-dark text-light px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Reserva tu experiencia
      </h1>
      <p className="max-w-xl text-lg mb-10 opacity-90">
        Pronto podrás realizar tus reservas y pagos en línea de manera rápida y segura
        a través de nuestra pasarela de pagos.
      </p>
      <Link
        href="/"
        className="bg-accent text-dark px-6 py-3 rounded-full font-medium hover:bg-light hover:text-dark transition"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
