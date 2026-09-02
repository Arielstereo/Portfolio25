import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";
import LinkPreviewExample from "./LinkPreview";

const Timeline = () => {
  const TimelineData = [
    {
      date: "Diciembre 2025",
      title: "Diseño UI - Talento Tech (GCBA)",
      description: "Creación de diseños de la interfaz de usuario.",
      icon: <FaGraduationCap size={20} className="text-blue-500" />,
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
          href="https://emprend.dev/"
        />
      ),
    },
    {
      date: "2023-2024",
      title: "NoCountry - Emulación Bootcamp",
      description:
        "Con el rol de frontend utilicé tecnologías como React, Zustand, Tailwind, Git, entre otras. Metodología agil (SCRUM).",
      icon: <FaGraduationCap size={20} className="text-blue-500" />,
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
    },
  ];

  return (
    <div className="w-full mx-auto p-6 my-32 hidden md:block">
      <h1 className="text-3xl md:text-4xl font-bold mb-16 text-text-primary text-center tracking-tight">
        Timeline
      </h1>

      <div className="mx-32">
        <ul className="relative h-fit before:content-[''] before:absolute before:w-px before:h-full before:bg-border-subtle before:left-1/2 before:transform before:-translate-x-1/2 before:z-10">
          {TimelineData.map((milestone, index) => (
            <li
              key={index}
              className={`relative w-1/2  mb-4 ${
                index % 2 === 0 ? "text-right" : " left-1/2 text-left"
              }`}
            >
              <div
                id="icon"
                className={`absolute top-1/2 -translate-y-1/2  ${
                  index % 2 === 0
                    ? "translate-x-1/2 right-0"
                    : "-translate-x-1/2"
                }  bg-bg-raised border border-border-soft rounded-full p-2 z-10`}
              >
                {milestone.icon}
              </div>

              <div
                className={`relative surface-1 border border-border-subtle rounded-lg ${
                  index % 2 === 0 ? "-left-8" : "-right-8"
                }`}
              >
                <div className="py-3 px-4">
                  <div>
                    <div className="text-text-primary text-lg font-semibold">
                      {milestone.title}
                    </div>
                    <div className="text-accent text-sm">
                      {milestone.date}
                    </div>
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
