import Image from "next/image";
import React from "react";

// react icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import TechBadge from "./TechBadge";

const Testimonial = () => {
  return (
    <div className="mx-auto w-full md:w-3/4 surface-1 border border-border-subtle rounded-2xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-6 md:px-10 py-10 md:py-12">
      <Image
        src="/avatar2.png"
        width={300}
        height={300}
        alt="Ariel Martinez"
        className="w-28 md:w-40 h-28 md:h-40 shrink-0 object-cover rounded-full ring-1 ring-white/10"
      />

      <div className="relative w-full md:w-[70%]">
        <FaQuoteRight
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 text-2xl md:text-3xl text-accent"
        />
        <div className="relative pr-8 flex flex-wrap justify-center md:justify-between items-center gap-x-3 gap-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-text-primary">
              Ariel Martinez
            </h2>
            <TechBadge name="react">Desarrollador Web</TechBadge>
          </div>
        </div>
        <p className="relative text-left text-text-secondary text-[0.95rem] mt-5 mb-8 leading-relaxed text-pretty">
          Desarrollador enfocado en la creación de interfaces rápidas y
          funcionales, complementado con nociones de servidor y un flujo de
          trabajo potenciado por inteligencia artificial.
          <br /> Frontend Principal: React, Next.js, Astro, Tailwind CSS <br />
          Backend & Datos: Node.js, consumo y desarrollo de APIs REST, MongoDB,
          MySQL <br /> Herramientas de IA & CLI: Claude, Copilot, OpenCode, Warp
          Terminal <br /> Deploy & Control: Git, Vercel <br />
          Diseño: Figma. <br /> Busco sumar mis habilidades y mi mentalidad de
          aprendizaje continuo a un equipo en el sector IT.
        </p>
        <FaQuoteLeft
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 text-2xl md:text-3xl text-accent"
        />
      </div>
    </div>
  );
};

export default Testimonial;
