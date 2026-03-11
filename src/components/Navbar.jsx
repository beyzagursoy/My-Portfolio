import React, { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';

function Navbar() {
  const { lang, darkMode, toggleLanguage, toggleDarkMode } = useContext(SiteContext);

  return (
    <nav className="flex flex-col px-31.25 py-8 gap-6 w-full mx-auto dark:bg-dark">
      <div className="flex justify-end items-center gap-3 text-[12px] font-bold tracking-widest text-[#777777]">
        <div className="flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer" />
            <div className="w-12 h-6 bg-[#4731D3] rounded-full peer peer-checked:bg-[#3A3A3A] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-[#FFE86E] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6"></div>
          </label>
          <span className="ml-1 text-sm dark:text-[#D9D9D9]">DARK MODE</span>
        </div>
        <span className="text-[#777777] mx-1 text-sm">|</span>
        <button onClick={toggleLanguage} className="hover:opacity-80 text-sm font-bold">
          <span className="text-[#4731D3] dark:text-[#BAB2E7]">
            {lang === 'eng' ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
          </span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-14 h-14 rounded-full bg-[#EEEBFF] dark:bg-[#4731D3] flex items-center justify-center text-[#7B61FF] dark:text-[#8F88FF] text-2xl font-bold rotate-45">A</div>
        <div className="flex items-center gap-12">
          <a href="#skills" className="text-[#777777] dark:text-[#6B7280] font-medium text-lg hover:text-[#4731D3]">{lang === 'eng' ? 'Skills' : 'Yetenekler'}</a>
          <a href="#projects" className="text-[#777777] dark:text-[#6B7280] font-medium text-lg hover:text-[#4731D3]">{lang === 'eng' ? 'Projects' : 'Projeler'}</a>
          <button className="border-2 border-[#4731D3] text-[#4731D3] dark:bg-white dark:border-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#4731D3] hover:text-white transition-all">
            {lang === 'eng' ? 'Hire me' : 'Beni işe al'}
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;