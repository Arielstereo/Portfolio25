import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const ResponsiveFooter = () => {
  return (
    <footer className="surface-1 border-t border-border-subtle rounded-t-xl w-full p-3 md:p-4 relative">
      <div className="w-full flex items-center justify-center pt-[40px] flex-col gap-[20px] pb-24 md:pb-[120px]">
        <FaCode className="text-5xl text-sky-500" />

        <p className="text-[0.9rem] text-text-secondary text-center max-w-sm text-pretty">
          Construyo webs y aplicaciones a medida: desarrollo, integración con IA
          y automatizaciones para hacer crecer tu proyecto.
        </p>

        <div className="flex gap-3 mt-8">
          <a
            aria-label="WhatsApp"
            href="https://wa.me/5491126922128/?text=Hola%20Ariel,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 text-text-secondary rounded-full border border-border-soft hover:border-accent hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <BsWhatsapp />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/arielstereo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 text-text-secondary rounded-full border border-border-soft hover:border-accent hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <BsGithub />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/arielstereo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 text-text-secondary rounded-full border border-border-soft hover:border-accent hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-center">
        <p className="text-[0.85rem] text-text-muted">Ariel Martinez © 2026</p>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
