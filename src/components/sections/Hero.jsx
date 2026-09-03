import AnimatedHoverCard from "../ui/AnimatedCardHover";
import Button from "../ui/Button";
import GradientText from "../ui/GradientText";
import SplitText from "../ui/SplitText";
import TechBadge from "../ui/TechBadge";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full mt-20 md:mt-40 py-10 md:py-16 flex flex-col justify-center items-center px-4"
    >
      <div className="flex gap-8 justify-center items-center">
        <div className="flex flex-col items-center">
          <span className="label text-text-muted mb-5">
            <span className="inline-block w-8 h-px bg-border-soft align-middle mr-2" />
            Portfolio 2026
            <span className="inline-block w-8 h-px bg-border-soft align-middle ml-2" />
          </span>
          <SplitText
            text="Ariel Martinez"
            className="display font-bold text-center text-text-primary mb-4"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="heading-2 font-semibold text-center mt-2"
          >
            Web Developer
          </GradientText>
          <p className="mt-5 max-w-xl text-center text-text-secondary text-base md:text-lg text-pretty">
            Construyo experiencias web modernas, rápidas y escalables — sitios,
            aplicaciones, integraciones con IA y automatizaciones desde el
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
          <div className="mt-2 md:mt-6 flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
