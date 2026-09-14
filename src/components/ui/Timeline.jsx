import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";
import LinkPreviewExample from "./LinkPreview";
import SectionHeader from "./SectionHeader";

const Timeline = () => {
  const TimelineData = [
    {
      date: "Diciembre 2025",
      title: "Diseño UI - Talento Tech (GCBA)",
      description: "Creación de diseños de la interfaz de usuario.",
      icon: <FaGraduationCap size={20} className="text-blue-500" />,
      link: (
        <LinkPreviewExample
          title="Certificación Talento Tech"
          description="Creación de diseños de la interfaz de usuario."
          img="/talento-tech.png"
          href="https://drive.google.com/file/d/1b-XsKZwj9KBfbP7Pl58qxtPose2e-8EK/view?usp=sharing"
        />
      ),
    },
    {
      date: "Febrero 2024",
      title: "Emprendev",
      description: "Proyecto freelance desarrollo de sitios web.",
      icon: <FaBriefcase size={20} className="text-green-500" />,
      link: (
        <LinkPreviewExample
          title="Emprendev"
          description="Desarrollo de sitios web profesionales para emprendedores y pequeñas empresas."
          img="/logo_png.png"
          href="https://empren.dev/"
        />
      ),
    },
    {
      date: "2023-2024",
      title: "NoCountry - Emulación Bootcamp",
      description:
        "Con el rol de frontend utilicé tecnologías como React, Zustand, Tailwind, Git, entre otras. Metodología agil (SCRUM).",
      icon: <FaGraduationCap size={20} className="text-blue-500" />,
      link: (
        <LinkPreviewExample
          title="NoCountry"
          description="Emulación de bootcamp de desarrollo frontend."
          img="/certificadoNC.jpg"
          href="https://drive.google.com/file/d/1nAj2h9M4vrPlAyZPP56Br-mGgZ0imrn6/view?usp=sharing"
        />
      ),
    },
    {
      date: "Enero 2022",
      title: "Equo - Trainee Frontend Developer",
      description:
        "Pasantía de 3 meses como desarrollador Frontend. Actualización del website de la empresa junto con otros desarrolladores. Metodología agil (SCRUM).",
      icon: <FaBriefcase size={20} className="text-green-500" />,
      link: (
        <LinkPreviewExample
          title="Equo"
          description="Empresa de desarrollo de software"
          img="/equo.png"
          href="https://equo.dev/"
        />
      ),
    },
    {
      date: "Marzo 2021",
      title: "Diplomatura Full Stack Developer - UTN",
      description: "Formación completa en desarrollo web Full Stack.",
      icon: <FaGraduationCap size={20} className="text-blue-500" />,
      link: (
        <LinkPreviewExample
          title="Diplomatura Full Stack Developer"
          description="Formación completa en desarrollo web Full Stack."
          img="/utn.jpeg"
          href="https://drive.google.com/file/d/1JzCLDMCLU5NNKONPgTcIwS248PNJYNy6/view?usp=sharing"
        />
      ),
    },
  ];

  return (
    <div className="w-full mx-auto p-4 sm:p-6 mt-20 md:mt-32">
      <SectionHeader label="Trayectoria" title="Educación y experiencia" />

      <div className="mx-2 sm:mx-8 md:mx-16 lg:mx-32 mt-12">
        <ul className="relative before:content-[''] before:absolute before:top-2 before:bottom-2 before:w-px before:bg-border-subtle before:left-[19px] md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:-translate-x-1/2 md:before:z-10">
          {TimelineData.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <li
                key={index}
                className={`relative pl-12 mb-8 last:mb-0 md:mb-0 md:w-1/2 md:pl-0 ${
                  isEven
                    ? "md:pr-12 md:text-right"
                    : "md:left-1/2 md:pl-12 md:text-left"
                }`}
              >
                <div
                  className={`absolute top-1.5 left-[19px] -translate-x-1/2 bg-bg-raised border border-border-soft rounded-full p-2 z-10 md:top-1/2 md:-translate-y-1/2 ${
                    isEven
                      ? "md:left-auto md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  }`}
                >
                  {milestone.icon}
                </div>

                <div
                  className={`relative surface-1 border border-border-subtle rounded-lg`}
                >
                  <div className="py-3 px-4 md:px-5">
                    <div>
                      <div className="text-text-primary text-base md:text-lg font-semibold">
                        {milestone.title}
                      </div>
                      <div className="text-accent text-sm">{milestone.date}</div>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">
                      {milestone.description}
                    </p>
                    <div className="mt-1 text-sm text-text-secondary">
                      {milestone.link}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;