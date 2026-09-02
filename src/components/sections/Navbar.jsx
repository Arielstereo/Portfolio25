import { useEffect, useState, useRef } from "react";
import { animate } from "framer-motion";

// react icons
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";
import { TbBrandGithubFilled } from "react-icons/tb";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navRef = useRef(null);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = navRef.current?.offsetHeight || 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;

    animate(window.scrollY, top, {
      type: "spring",
      stiffness: 260,
      damping: 18,
      mass: 1,
      restDelta: 1,
      onUpdate: (v) => window.scrollTo(0, v),
    });

    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`flex items-center justify-center gap-32 w-full px-16 py-8 fixed top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg-base/80 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      {/* nav menus */}
      <ul className="items-center gap-8 text-[0.95rem] text-text-secondary md:flex hidden">
        {[
          { id: "home", label: "Inicio" },
          { id: "about", label: "Sobre mí" },
          { id: "projects", label: "Proyectos" },
          { id: "contact", label: "Contacto" },
        ].map((item) => (
          <li
            key={item.id}
            className="relative group cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300 capitalize"
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="relative"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* community links */}
      <div className="flex gap-32 justify-center items-center">
        <div className="flex gap-3">
          <TbBrandGithubFilled className="text-[1.4rem] text-text-secondary cursor-pointer hover:text-accent transition-colors duration-300" />
          <GrLinkedin className="text-[1.4rem] text-text-secondary cursor-pointer hover:text-accent transition-colors duration-300" />
          <BsWhatsapp className="text-[1.4rem] text-text-secondary cursor-pointer hover:text-accent transition-colors duration-300" />
        </div>
        <div className="flex items-center gap-4">
          <CiMenuFries
            className="text-[1.4rem] text-text-secondary cursor-pointer md:hidden flex"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          isMenuOpen
            ? "translate-y-0 opacity-100 z-20"
            : "translate-y-100 opacity-0 z-[-1]"
        } md:hidden bg-bg-overlay border-b border-border-subtle p-10 text-center absolute top-18 right-0 w-full rounded-b-md transition-all duration-300`}
      >
        <ul className="items-center gap-6 text-xl text-text-primary flex flex-col">
          <li className="cursor-pointer capitalize">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Inicio
            </a>
          </li>
          <li className="cursor-pointer capitalize">
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              Sobre mi
            </a>
          </li>
          <li className="cursor-pointer capitalize">
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              Proyectos
            </a>
          </li>
          <li className="cursor-pointer capitalize">
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contacto
            </a>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
