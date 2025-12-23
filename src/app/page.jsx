"use client";

import ResponsiveNavbar from "@/components/sections/Navbar";
import MarqueeIcons from "@/components/ui/MarqueeIcons";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ResponsiveFooter from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center relative">
      <ResponsiveNavbar />
      <Hero />
      <About />
      <Projects />
      <MarqueeIcons direction="left" duration="30s" />
      <Contact />
      <ResponsiveFooter />
    </div>
  );
}
