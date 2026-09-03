import SectionHeader from "../ui/SectionHeader";
import ProjectsGrid from "../ui/ProjectsGrid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto my-32 px-4"
    >
      <SectionHeader label="Proyectos" title="Cosas que he construido" />
      <ProjectsGrid />
    </section>
  );
};

export default Projects;
