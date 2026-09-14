import SectionHeader from "../ui/SectionHeader";
import Testimonial from "../ui/Testimonial";
import Timeline from "../ui/Timeline";

const About = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-center my-20 md:my-32 px-4"
      id="about"
    >
      <SectionHeader
        label="Sobre mí"
        title="Más que código: productos que resuelven problemas"
      />
      <Testimonial />
      <Timeline />
    </section>
  );
};

export default About;
