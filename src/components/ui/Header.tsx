"use client";

import { Button } from "@/components/ui/button";

export function PageHeader() {
  return (
    <header className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/pexels-solliefoto-298863.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          New Online Shop
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Explore our wide range products.
        </p>
      </div>
    </header>
  );
}
