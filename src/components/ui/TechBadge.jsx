import React from "react";
import ReactIcon from "../icons/React";
import NextIcon from "../icons/Next";
import TailwindIcon from "../icons/Tailwind";
import AstroIcon from "../icons/Astro";
import GitIcon from "../icons/Git";
import NodeIcon from "../icons/Node";
import MongoIcon from "../icons/Mongo";
import FigmaIcon from "../icons/Figma";
import VercelIcon from "../icons/Vercel";

const TECH_MAP = {
  react: {
    Icon: ReactIcon,
    classes:
      "bg-transparent text-white border border-sky-400 shadow-xl shadow-sky-400/20",
  },
  next: {
    Icon: NextIcon,
    classes:
      "bg-black text-white border border-white shadow-xl shadow-white/20",
  },
  tailwind: {
    Icon: TailwindIcon,
    classes:
      "bg-transparent border border-purple-500 text-white shadow-xl shadow-purple-500/20",
  },
  astro: {
    Icon: AstroIcon,
    classes:
      "bg-transparent border border-orange-500 text-white shadow-xl shadow-orange-500/20",
  },
  git: {
    Icon: GitIcon,
    classes:
      "bg-transparent border border-orange-500 text-white shadow-xl shadow-orange-500/20",
  },
  node: {
    Icon: NodeIcon,
    classes:
      "bg-transparent border border-green-500 text-white shadow-xl shadow-green-500/20",
  },
  mongodb: {
    Icon: MongoIcon,
    classes:
      "bg-transparent border border-green-500 text-white shadow-xl shadow-green-500/20",
  },
  mongo: {
    Icon: MongoIcon,
    classes:
      "bg-transparent border border-green-500 text-white shadow-xl shadow-green-500/20",
  },
  figma: {
    Icon: FigmaIcon,
    classes:
      "bg-transparent border border-pink-500 text-white shadow-xl shadow-pink-500/20",
  },
  vercel: {
    Icon: VercelIcon,
    classes:
      "bg-transparent text-white border border-neutral-300 shadow-xl shadow-neutral-200/20",
  },
};

export default function TechBadge({ children, name, className = "" }) {
  const key = (name ?? String(children ?? "")).toLowerCase();
  const meta = TECH_MAP[key] || {};
  const Icon = meta.Icon;
  const variant =
    meta.classes ??
    "bg-purple-100 text-slate-100 dark:bg-transparent border border-yellow-400 dark:text-purple-100";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap ${variant} ${className}`}
    >
      {Icon ? <Icon className="w-4 h-4 inline-block" /> : null}
      <span>{children}</span>
    </span>
  );
}
