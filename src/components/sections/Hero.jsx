import AnimatedHoverCard from "../ui/AnimatedCardHover";
import Button from "../ui/Button";
import GradientText from "../ui/GradientText";
import SplitText from "../ui/SplitText";
import TechBadge from "../ui/TechBadge";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full mt-32 py-16 flex flex-col justify-center items-center"
    >
      <div className="flex gap-8 justify-center items-center">
        <div>
          <SplitText
            text="Hola🖐️, soy Ariel!"
            className="text-6xl font-bold text-center text-white mb-4"
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
            className="text-3xl font-medium text-center"
          >
            Frontend Developer
          </GradientText>
          <div className="grid grid-cols-3 md:grid-cols-5 px-4 justify-center items-center gap-2 my-4 w-full">
            <TechBadge name="React">React</TechBadge>
            <TechBadge name="Next">Next.js</TechBadge>
            <TechBadge name="Tailwind">Tailwind</TechBadge>
            <TechBadge name="Astro">Astro</TechBadge>
            <TechBadge name="Git">Git</TechBadge>
            <TechBadge name="Node">Node.js</TechBadge>
            <TechBadge name="MongoDB">MongoDB</TechBadge>
            <TechBadge name="Figma">Figma</TechBadge>
            <TechBadge name="Vercel">Vercel</TechBadge>
          </div>
          <div className="mt-12 flex justify-center">
            <Button />
          </div>
        </div>
        <AnimatedHoverCard />
      </div>
    </div>
  );
};

export default Hero;
