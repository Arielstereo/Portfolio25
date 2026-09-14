import Image from "next/image";
import Link from "next/link";
import TechBadge from "./TechBadge";
import SectionHeader from "./SectionHeader";
import { FiArrowUpRight, FiLock } from "react-icons/fi";

const PROJECTS = [
  {
    title: "Emprendev",
    description:
      "Landing page - modo oscuro. Incluye chatbot de IA para soporte al cliente.",
    img: "/emprendev.png",
    tech: ["Astro", "Tailwind", "React"],
    url: "https://empren.dev",
  },
  {
    title: "Diablitas Bags",
    description:
      "Sitio web tipo e-commerce. Buscador de productos - botón de WhatsApp - SEO optimizado.",
    img: "/diablitas-page.jpeg",
    tech: ["Next", "Vercel", "Tailwind"],
    url: "https://diablitas.empren.dev/",
  },
  {
    title: "Mundial 2026",
    description:
      "Sitio web para pronósticos del Mundial 2026. Autenticación de usuarios y panel administrador.",
    img: "/mundial.png",
    tech: ["Next", "Tailwind", "Vercel"],
    url: "https://equo-mundial2026.empren.dev/",
  },
  {
    title: "Stock app",
    description:
      "Aplicación de control de stock. Panel para roles: operarios y administrativos. Reportes en Excel. ",
    img: "/stock-app.png",
    tech: ["Zustand", "MongoDB", "React"],
    isPrivate: true,
  },
  {
    title: "Checklist app",
    description:
      "Aplicación para crear checklists. Descarga en PDF. Mobile first.",
    img: "/check.png",
    tech: ["React", "MongoDB", "Node"],
    isPrivate: true,
  },
  {
    title: "Alertas app",
    description:
      "Aplicación para crear alertas. Envío de notificaciones por email usando Resend.",
    img: "/alertas.png",
    tech: ["Next", "MongoDB", "Tailwind"],
    isPrivate: true,
  },
];

const SECTIONS = [
  {
    id: "websites",
    label: "Sitios web",
    title: "Diseño y desarrollo",
    description:
      "Páginas que desarrollé para emprendimientos. Incluyen landing pages, portfolios y sitios de e-commerce.",
    items: PROJECTS.slice(0, 3),
  },
  {
    id: "apps",
    label: "Aplicaciones",
    title: "Productos digitales",
    description:
      "Aplicaciones web que desarrollé para la empresa Tredi Argentina. Entornos reales de trabajo. ",
    items: PROJECTS.slice(3),
  },
];

const ProjectCard = ({ item }) => {
  const isPrivate = !item.url;

  return (
    <article className="group surface-1 border border-border-subtle rounded-lg overflow-hidden transition-colors duration-300 hover:border-border-soft">
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-text-primary tracking-tight">
            {item.title}
          </h3>
          {isPrivate ? (
            <span className="inline-flex items-center gap-1 shrink-0 rounded-full border border-green-300 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-text-muted">
              <FiLock className="w-3 h-3" />
              Privado
            </span>
          ) : (
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${item.title}`}
              className="inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-border-subtle text-text-secondary hover:text-accent hover:border-accent/60 transition-colors duration-300"
            >
              <FiArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>
        <p className="mt-2 text-sm text-text-secondary line-clamp-2 text-pretty">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <TechBadge key={t} name={t}>
              {t}
            </TechBadge>
          ))}
        </div>
      </div>
    </article>
  );
};

const renderGroup = (section) => (
  <div key={section.id} className="flex flex-col gap-10">
    <SectionHeader
      label={section.label}
      title={section.title}
      description={section.description}
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {section.items.map((item) => (
        <ProjectCard key={item.title} item={item} />
      ))}
    </div>
  </div>
);

const ProjectsGrid = () => {
  const [sites, apps] = SECTIONS;

  return (
    <div className="flex flex-col gap-24">
      {renderGroup(sites)}
      {renderGroup(apps)}
    </div>
  );
};

export default ProjectsGrid;
