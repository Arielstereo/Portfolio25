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
          ? "bg-white/20 dark:bg-slate-900/40 backdrop-blur-md border-b border-white/10 dark:border-slate-700 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* nav menus */}
      <ul className="items-center gap-5 text-[1rem] text-[#424242] md:flex hidden">
        <li className="hover:border-b-[#3B9DF8] border-b-2 border-transparent transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
            Inicio
          </a>
        </li>
        <li className="hover:border-b-[#3B9DF8] border-b-2 border-transparent transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
            Sobre mi
          </a>
        </li>
        <li className="hover:border-b-[#3B9DF8] border-b-2 border-transparent transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
            Proyectos
          </a>
        </li>
        <li className="hover:border-b-[#3B9DF8] border-b-2 border-transparent transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contacto
          </a>
        </li>
      </ul>

      {/* community links */}
      <div className="flex gap-32 justify-center items-center">
        <div className="flex gap-4">
          <TbBrandGithubFilled className="text-[1.6rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500" />
          <GrLinkedin className="text-[1.6rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500" />
          <BsWhatsapp className="text-[1.6rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500" />
        </div>
        <div>
          <CiMenuFries
            className="text-[1.6rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer md:hidden flex"
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
        } md:hidden bg-linear-to-b from-sky-700 to-blue-400 p-16 text-center absolute top-18 right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-5 text-xl text-white flex flex-col">
          <li className="hover:border-b-[#3B9DF8] border-b-2 border-transparent transition-all duration-500 cursor-pointer capitalize">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Inicio
            </a>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-2 border-transparent transition-all duration-500 cursor-pointer capitalize">
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              Sobre mi
            </a>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-2 border-transparent transition-all duration-500 cursor-pointer capitalize">
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              Proyectos
            </a>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-2 border-transparent transition-all duration-500 cursor-pointer capitalize">
            <a href="#contact" onClick={(e) => handleNavClick(e, "projects")}>
              Contacto
            </a>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
