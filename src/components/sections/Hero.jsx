import Button from "../ui/Button";
import TechBadge from "../ui/TechBadge";
import { FiSend } from "react-icons/fi";
import StrokeText from "../ui/StrokeText";
import SplitFlapText from "../ui/SplitFlapText";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full mt-16 md:mt-40 py-10 flex flex-col justify-center items-center px-4"
    >
      <div className="flex gap-8 justify-center items-center">
        <div className="flex flex-col items-center w-full max-w-2xl">
          <span className="label text-accent/80 mb-5">
            <span className="inline-block w-8 h-px bg-accent/80 align-middle mr-2" />
            Portfolio 2026
            <span className="inline-block w-8 h-px bg-accent/80 align-middle ml-2" />
          </span>
          <StrokeText
            text="Ariel Martinez"
            strokeColor="#3b9df8"
            fillColor="#F8FAFC"
            strokeWidth={1.4}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="fade"
            fontSize={96}
            fontSizeMobile={64}
            fontWeight={800}
            letterSpacing={-4}
            reverse={false}
          />
          <SplitFlapText
            words={["DESARROLLADOR WEB", "FRONTEND DEVELOPER"]}
            flipDuration={0.12}
            stagger={0.06}
            cycleDelay={2400}
            charset="alphanumeric"
            flipsPerChar={8}
            tileColor="#111827"
            textColor="#f8fafc"
            tileRadius={8}
            gap={6}
            fontSize={48}
            fontSizeMobile={25}
            loop={false}
            padTo={8}
          />
          <p className="mt-5 max-w-xl text-center text-text-secondary text-base md:text-lg text-pretty">
            Construyo experiencias web modernas, rápidas y escalables. <br />
            Manejo tecnologías Frontend, Backend y herramientas de IA desde el
            diseño hasta el deploy.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 justify-center items-center gap-2.5 my-8 w-full max-w-2xl px-2 md:px-0">
            <TechBadge name="React">React</TechBadge>
            <TechBadge name="Next">Next.js</TechBadge>
            <TechBadge name="Tailwind">Tailwind</TechBadge>
            <TechBadge name="Astro">Astro</TechBadge>
            <TechBadge name="MongoDB">MongoDB</TechBadge>
            <TechBadge name="Git">Git</TechBadge>
            <TechBadge name="Node">Node.js</TechBadge>
            <TechBadge name="Figma">Figma</TechBadge>
            <TechBadge name="Vercel">Vercel</TechBadge>
            <div className="hidden sm:contents">
              <TechBadge name="MySql">MySql</TechBadge>
            </div>
          </div>
          <div className="mt-2 md:mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button />
            <a href="#contact" className="btn-action group">
              <FiSend
                className="w-4 h-4 text-accent transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              <span>Contactame</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
