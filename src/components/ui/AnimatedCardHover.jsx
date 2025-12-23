import React from "react";

// react icons
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import Image from "next/image";

const AnimatedHoverCard = () => {
  return (
    <div className="hidden md:block w-full sm:w-[80%] lg:w-[40%] relative group overflow-hidden rounded-2xl">
      <Image
        width={800}
        height={800}
        src="/nerd.jpg"
        alt="animated_cards"
        className="w-full h-96 object-cover"
      />

      {/*  texts  */}
      <div className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
        <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">
          Ariel Martinez
        </h3>
        <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
          Frontend Developer
        </p>

        {/*  socials icons  */}
        <div className="flex items-center gap-[20px] mt-[15px]">
          <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            <BiLogoVisualStudio className="text-2xl text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
          </div>
          <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
            <FaReact className="text-2xl text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
          </div>
          <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
            <SiAstro className="text-2xl text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHoverCard;
