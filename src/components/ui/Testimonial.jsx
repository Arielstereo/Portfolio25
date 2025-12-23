import Image from "next/image";
import React from "react";

// react icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="w-fit md:w-2/3 border border-[#3B9DF8] shadow-2xl shadow-blue-500/20 rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 px-6 mt-48 py-16">
      <Image
        src="/avatar_blue.jpeg"
        width={300}
        height={300}
        alt="demo/image"
        className="w-32 md:w-45 h-32 md:h-45 object-cover rounded-full"
      />

      <div className="w-full md:w-[65%] relative">
        <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
          <FaQuoteRight className=" absolute top-[-550%] md:top-[-150%] left-[0%] text-[2rem] text-[#3B9DF8]" />
          <div className="flex items-center gap-2">
            <h2 className="text-[1rem] dark:text-[#abc2d3] font-[500]">
              Ariel Martinez -
            </h2>
            <p className="text-[0.9rem] dark:text-[#abc2d3] text-[#9c9c9c]">
              Frontend Developer
            </p>
          </div>
        </div>
        <h2 className="text-[1.5rem] dark:text-[#abc2d3] font-[500] capitalize mt-3">
          Sobre mí
        </h2>
        <p className="text-justify dark:text-[#abc2d3] text-[0.9rem] my-3 text-[#424242]">
          Soy un desarrollador frontend apasionado por crear experiencias web
          atractivas y funcionales. Con experiencia en React, Next.js y
          Tailwind, me esfuerzo por escribir código limpio y eficiente. Estoy en
          búsqueda de un empleo en IT para seguir creciendo profesionalmente y
          contribuir con mis habilidades al éxito de un equipo dinámico.
        </p>
        <FaQuoteLeft className="absolute bottom-[-10%] right-[0%] text-[2rem] text-[#3B9DF8]" />
      </div>
    </div>
  );
};

export default Testimonial;
