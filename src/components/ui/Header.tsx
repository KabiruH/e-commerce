"use client";

export function PageHeader() {
  return (
    <header className="relative w-full h-[270px] bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/pexels-solliefoto-298863.jpg')" }}>
 
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-5 flex flex-col items-center justify-center h-full text-center text-white">
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
