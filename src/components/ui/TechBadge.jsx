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
import MySQLIcon from "../icons/MySql";

const ICON_MAP = {
  react: ReactIcon,
  next: NextIcon,
  tailwind: TailwindIcon,
  astro: AstroIcon,
  git: GitIcon,
  node: NodeIcon,
  mongodb: MongoIcon,
  mongo: MongoIcon,
  figma: FigmaIcon,
  vercel: VercelIcon,
  mysql: MySQLIcon,
};

export default function TechBadge({ children, name, className = "" }) {
  const key = (name ?? String(children ?? "")).toLowerCase();
  const Icon = ICON_MAP[key];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-text-secondary border border-border-soft bg-bg-raised transition-colors duration-300 hover:text-text-primary hover:border-accent/60 ${className}`}
    >
      {Icon ? (
        <Icon className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
    </span>
  );
}
