import React, { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

function Navbar() {
  const { lang, darkMode, toggleLanguage, toggleDarkMode } =
    useContext(SiteContext);

  return (
    <nav className="w-full px-6 md:px-20 lg:px-[125px] py-8 dark:bg-dark overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">

        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center gap-2 text-xs md:text-sm font-bold tracking-widest text-[#777777] w-full">

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />

            <div className="w-12 h-6 bg-[#4731D3] rounded-full peer-checked:bg-[#3A3A3A]
              after:content-[''] after:absolute after:top-1 after:left-1
              after:bg-[#FFE86E] after:rounded-full after:h-4 after:w-4
              after:transition-all peer-checked:after:translate-x-6">
            </div>
          </label>

          <span className="dark:text-[#D9D9D9]">
            DARK MODE
          </span>

          <span className="mx-1">|</span>

          <button
            onClick={toggleLanguage}
            className="text-[#4731D3] dark:text-[#BAB2E7] font-bold"
          >
            {lang === "eng" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
          </button>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="w-14 h-14 rounded-full bg-[#EEEBFF] dark:bg-[#4731D3] flex items-center justify-center text-[#7B61FF] dark:text-[#8F88FF] text-2xl font-bold rotate-45 shrink-0">
            A
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-12 text-center">
            <a
              href="#skills"
              className="text-[#777777] dark:text-[#6B7280] font-medium text-base md:text-lg"
            >
              Yetenekler
            </a>

            <a
              href="#projects"
              className="text-[#777777] dark:text-[#6B7280] font-medium text-base md:text-lg"
            >
              Projeler
            </a>

            <button className="border-2 border-[#4731D3] text-[#4731D3] dark:bg-white dark:border-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold text-base md:text-lg whitespace-nowrap">
              Beni işe al
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;