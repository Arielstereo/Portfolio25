import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ResponsiveFooter = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 shadow-md rounded-xl w-full p-3 md:p-4 relative">
      <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
        <FaCode className="text-6xl text-gray-400" />

        <p className="text-[0.9rem] dark:text-[#abc2d3] text-center sm:text-start text-gray-600">
          Creación de websites, landing pages , aplicaciones web , integración
          con IA , automatizaciones.
        </p>

        <button className="py-3 px-6 rounded-full bg-[#3B9DF8] text-white">
          Contactame
        </button>

        <div className="flex gap-[15px] text-black mt-4">
          <a className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsWhatsapp />
          </a>

          <a className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsGithub />
          </a>
          <a className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center w-full">
        <p className="text-[0.9rem] text-gray-300">Ariel Martinez © 2025</p>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
