import {
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const ResponsiveFooter = () => {
  return (
    <footer className="surface-1 border-t border-border-subtle rounded-t-xl w-full p-3 md:p-4 relative">
      <div className="w-full flex items-center justify-center pt-[40px] flex-col gap-[20px] pb-[120px]">
        <FaCode className="text-5xl text-text-muted" />

        <p className="text-[0.9rem] text-text-secondary text-center max-w-sm text-pretty">
          Creación de websites, landing pages, aplicaciones web, integración
          con IA, automatizaciones.
        </p>

        <a href="#contact" className="btn-action">
          Contactame
        </a>

        <div className="flex gap-3 mt-2">
          <a
            aria-label="WhatsApp"
            className="inline-flex items-center justify-center w-10 h-10 text-text-secondary rounded-full border border-border-soft hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <BsWhatsapp />
          </a>
          <a
            aria-label="GitHub"
            className="inline-flex items-center justify-center w-10 h-10 text-text-secondary rounded-full border border-border-soft hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <BsGithub />
          </a>
          <a
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center w-10 h-10 text-text-secondary rounded-full border border-border-soft hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-center">
        <p className="text-[0.85rem] text-text-muted">
          Ariel Martinez © 2026
        </p>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
