import { useEffect, useState, useRef } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";

// react icons
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";

const NAV_ITEMS = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

const EASE = [0.23, 1, 0.32, 1];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE },
  },
};

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
      className={`flex items-center justify-between w-full px-4 sm:px-8 md:justify-center md:gap-32 md:px-16 py-4 md:py-8 fixed top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg-base/80 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      {/* nav menus */}
      <ul className="items-center gap-8 text-[0.95rem] text-text-secondary md:flex hidden">
        {NAV_ITEMS.map((item) => (
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
      <div className="flex w-full items-center justify-between md:w-auto md:justify-center md:gap-4">
        <div className="flex gap-1.5">
          <a
            aria-label="GitHub"
            href="https://github.com/arielstereo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 text-text-secondary hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <TbBrandGithubFilled className="text-[1.3rem]" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/arielstereo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 text-text-secondary hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GrLinkedin className="text-[1.3rem]" />
          </a>
          <a
            aria-label="WhatsApp"
            href="https://wa.me/5491126922128/?text=Hola%20Ariel,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 text-text-secondary hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <BsWhatsapp className="text-[1.3rem]" />
          </a>
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center w-11 h-11 text-text-primary hover:text-accent transition-colors duration-300 md:hidden active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <motion.span
            key={isMenuOpen ? "close" : "open"}
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {isMenuOpen ? (
              <ImCross className="text-[1.1rem]" />
            ) : (
              <CiMenuFries className="text-[1.3rem]" />
            )}
          </motion.span>
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="md:hidden absolute top-full right-0 left-0 mx-3 mt-2 bg-bg-overlay/95 backdrop-blur-md border border-border-subtle rounded-2xl shadow-lg overflow-hidden"
          >
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col p-3"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="relative block px-4 py-3 rounded-xl text-base font-medium text-text-primary hover:text-accent hover:bg-bg-raised transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ResponsiveNavbar;
