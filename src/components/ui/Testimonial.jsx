import Image from "next/image";
import React from "react";

// react icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="w-fit md:w-2/3 surface-1 border border-border-subtle rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8 px-8 md:px-10 mt-32 py-14">
      <Image
        src="/nerd.jpg"
        width={300}
        height={300}
        alt="Ariel Martinez"
        className="w-32 md:w-40 h-32 md:h-40 object-cover rounded-full ring-1 ring-white/10"
      />

      <div className="w-full md:w-[65%] relative">
        <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
          <FaQuoteRight className=" absolute top-[-550%] md:top-[-150%] left-[0%] text-3xl text-accent/70" />
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-text-primary">
              Ariel Martinez
            </h2>
            <span className="inline-flex items-center rounded-full border border-border-soft px-2.5 py-0.5 text-xs text-text-secondary">
              Web Developer
            </span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-text-primary mt-4 tracking-tight">
          Sobre mí
        </h2>
        <p className="text-justify text-text-secondary text-[0.95rem] my-3 leading-relaxed text-pretty">
          Soy un desarrollador web apasionado por construir productos digitales
          completos: sitios, aplicaciones y automatizaciones que resuelven
          problemas reales. Trabajo con React, Next.js y Tailwind para crear
          interfaces rápidas y accesibles, e integro herramientas de IA y
          flujos de automatización para aportar valor real a cada proyecto.
          Busco nuevas oportunidades en IT para seguir creciendo y aportar mis
          habilidades a un equipo dinámico.
        </p>
        <FaQuoteLeft className="absolute bottom-[-10%] right-[0%] text-3xl text-accent/70" />
      </div>
    </div>
  );
};

export default Testimonial;
