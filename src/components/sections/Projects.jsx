import SectionHeader from "../ui/SectionHeader";
import ProjectsGrid from "../ui/ProjectsGrid";
import MarqueeIcons from "../ui/MarqueeIcons";

const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto my-20 md:my-32 px-4">
      <SectionHeader label="Proyectos" title="Proyectos realizados" />
      <MarqueeIcons direction="left" duration="30s" />
      <ProjectsGrid />
    </section>
  );
};

export default Projects;
