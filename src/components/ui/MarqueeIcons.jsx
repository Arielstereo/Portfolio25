import ReactIcon from "../icons/React";
import Nextjs from "../icons/Next";
import TailwindCSS from "../icons/Tailwind";
import Node from "../icons/Node";
import Git from "../icons/Git";
import Mongo from "../icons/Mongo";
import Figma from "../icons/Figma";
import Astro from "../icons/Astro";
import Vercel from "../icons/Vercel";

const icons = [
  { Component: ReactIcon, label: "React" },
  { Component: Nextjs, label: "Next.js" },
  { Component: TailwindCSS, label: "Tailwind" },
  { Component: Node, label: "Node" },
  { Component: Git, label: "Git" },
  { Component: Mongo, label: "MongoDB" },
  { Component: Figma, label: "Figma" },
  { Component: Astro, label: "Astro" },
  { Component: Vercel, label: "Vercel" },
];

const MarqueeIcons = ({ direction = "left", duration = "20s" }) => {
  const duplicated = [...icons, ...icons, ...icons];
  const dirClass =
    direction === "right" ? "marquee-icons--right" : "marquee-icons--left";

  return (
    <div
      className={`marquee-icons ${dirClass} w-full py-6 my-8`}
      style={{ ["--marquee-duration"]: duration }}
    >
      <div className="marquee-icons-track flex items-center gap-6">
        {duplicated.map((item, i) => {
          const Icon = item.Component;
          return (
            <div
              key={i}
              className="marquee-icon-wrapper flex items-center justify-center w-12 h-12 rounded-full bg-white/5 dark:bg-white/2 p-2"
            >
              <Icon className="w-7 h-7 text-white" aria-hidden />
              <span className="sr-only">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeIcons;
