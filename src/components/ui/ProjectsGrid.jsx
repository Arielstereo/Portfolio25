import Image from "next/image";
import Link from "next/link";
import TechBadge from "./TechBadge";
import { FiArrowUpRight } from "react-icons/fi";

const DEFAULT_ITEMS = [
  {
    title: "Emprendev",
    description:
      "Desarrollo de sitios web profesionales para emprendedores y pequeñas empresas. Incluye chatbot de IA para soporte al cliente.",
    img: "/emprendev.png",
    tech: ["Astro", "Tailwind", "React"],
    url: "https://empren.dev",
  },
  {
    title: "Donar",
    description:
      "Plataforma de donación de sangre. Registro de donantes y pacientes con notificaciones por correo.",
    img: "/donar.jpeg",
    tech: ["Next", "Tailwind", "MongoDB"],
    url: "https://donar-three.vercel.app/",
  },
  {
    title: "MP Clon",
    description:
      "Clon de Mercado Pago. Stack MERN con autenticación y transacciones entre usuarios.",
    img: "/mp.jpeg",
    tech: ["React", "MongoDB", "Node"],
    url: "https://mp-client-arielstereo.vercel.app/",
  },
  {
    title: "Tesla Shop",
    description:
      "E-commerce estilo Tesla. Carrito de compras, autenticación y modo oscuro.",
    img: "/tesla_dark.jpeg",
    tech: ["Next", "Zustand", "Tailwind"],
    url: "https://tesla-shop-arielstereo.vercel.app/",
  },
  {
    title: "Dashboard",
    description:
      "Panel de administración con Shadcn/ui. Autenticación de usuarios y modo oscuro.",
    img: "/dash.jpeg",
    tech: ["Next", "MongoDB", "Tailwind"],
    url: "https://dashboard-ariel-martinezs-projects.vercel.app/",
  },
  {
    title: "Portfolio 2024",
    description:
      "Portfolio personal con animaciones Framer Motion, multilenguaje y deploy en Vercel.",
    img: "/portfolio24.png",
    tech: ["Next", "Framer Motion", "Vercel"],
    url: "https://portfolio.empren.dev/es",
  },
];

const ProjectCard = ({ item }) => {
  return (
    <article className="group surface-1 border border-border-subtle rounded-2xl overflow-hidden transition-colors duration-300 hover:border-border-soft">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-text-primary tracking-tight">
            {item.title}
          </h3>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar ${item.title}`}
            className="inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-border-subtle text-text-secondary hover:text-accent hover:border-accent/60 transition-colors duration-300"
          >
            <FiArrowUpRight className="w-4 h-4" />
          </Link>
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

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {DEFAULT_ITEMS.map((item) => (
        <ProjectCard key={item.title} item={item} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
