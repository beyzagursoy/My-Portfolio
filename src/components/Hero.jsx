import React, { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import data from "../data/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  const { lang } = useContext(SiteContext);
  const hero = data[lang].heroSection;
  const contactData = data[lang].contactData;

  return (
    <section className="w-full px-6 md:px-20 lg:px-[125px] py-12 md:py-20 dark:bg-dark overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        <div className="flex-1 flex flex-col items-start">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 md:w-24 h-0.5 bg-[#4731D3] dark:bg-[#BAB2E7]"></div>

            <span className="text-[#4731D3] dark:text-[#BAB2E7] font-medium text-lg md:text-xl">
              {hero.name}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#1F2937] dark:text-[#AEBCCF] mb-6">
            <span className="block">{hero.title.split(" ").slice(0, 2).join(" ")}</span>
            <span className="block whitespace-nowrap">
              {hero.title.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p className="text-[#6B7280] dark:text-white text-base md:text-lg leading-relaxed mb-8 max-w-[550px]">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-3 w-full">
            <a
              href={`mailto:${contactData.email}`}
              className="bg-[#4731D3] dark:bg-white text-white dark:text-black px-8 py-3 rounded-md font-medium text-lg flex-1 md:flex-none whitespace-nowrap text-center transition-all hover:opacity-90"
            >
              {hero.hireBtn}
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#4731D3] text-[#4731D3] dark:bg-[#383838] dark:border-[#383838] dark:text-[#E1E1FF] px-6 py-3 rounded-md font-medium text-lg flex-1 md:flex-none transition-all hover:bg-indigo-50 dark:hover:bg-[#444]"
            >
              <FaGithub className="text-xl" /> Github
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#4731D3] text-[#4731D3] dark:bg-[#383838] dark:border-[#383838] dark:text-[#E1E1FF] px-6 py-3 rounded-md font-medium text-lg flex-1 md:flex-none transition-all hover:bg-indigo-50 dark:hover:bg-[#444]"
            >
              <FaLinkedinIn className="text-xl" /> Linkedin
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">

          <div className="relative w-full max-w-[400px] lg:max-w-[450px]">

            <div className="absolute -top-3 -left-3 w-full h-full bg-[#4731D3] rounded-2xl -z-10 opacity-10"></div>

            <img
              src={hero.profileImage}
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;