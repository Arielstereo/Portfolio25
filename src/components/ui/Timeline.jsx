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
      <h1 className="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">
        Timeline
      </h1>

      <div className="mx-32">
        <ul className="relative h-fit before:content-[''] before:absolute before:w-1 before:h-full before:bg-gray-200 dark:before:bg-slate-800 before:left-1/2 before:transform before:-translate-x-1/2 before:rounded-md before:z-10">
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
                }  bg-gray-200 dark:bg-slate-800 rounded-full p-2 z-10 animate-pulse`}
              >
                {milestone.icon}
              </div>

              <div
                className={`relative border rounded-md dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900 shadow-gray-50 border-gray-200/60 shadow-md ${
                  index % 2 === 0 ? "-left-8" : "-right-8"
                }`}
              >
                <div className="py-3 px-4">
                  <div>
                    <div className="text-[#424242] dark:text-[#abc2d3] text-lg font-semibold">
                      {milestone.title}
                    </div>
                    <div className="text-primary text-sm text-sky-300">
                      {milestone.date}
                    </div>
                  </div>
                  <p className="mt-1 text-sm dark:text-slate-400 text-gray-600">
                    {milestone.description}
                  </p>
                  <div className="mt-1 text-sm dark:text-slate-400 text-gray-600">
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
