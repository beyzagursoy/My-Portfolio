import React from 'react';
import data from '../data/data';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Hero() {
  const lang = 'eng';
  const hero = data[lang].heroSection;

  return (
    <section className="flex justify-between items-center px-31.25 py-16 gap-10">

      <div className="flex-1 flex flex-col items-start">

        <div className="flex items-center gap-4 mb-8">
          <div className="w-24 h-0.5 bg-[#3730A3]"></div>
          <span className="text-[#3730A3] font-medium text-xl tracking-wider">
            {hero.name}
          </span>
        </div>

        <h1 className="text-7xl font-bold leading-18 text-[#1F2937] mb-8">
          {hero.title}
        </h1>

        <p className="text-[#6B7280] text-lg leading-relaxed max-w-125 mb-10">
          {hero.description}
        </p>

        <div className="flex gap-4">
          <button className="bg-[#3730A3] text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-[#3730A3] transition-all">
            {hero.hireBtn}
          </button>

          <button className="flex items-center gap-2 border border-[#3730A3] text-[#3730A3] px-6 py-3 rounded-md font-medium text-lg hover:bg-indigo-50 transition-all">
            <FaGithub className="text-xl" />
            {hero.github}
          </button>

          <button className="flex items-center gap-2 border border-[#3730A3] text-[#3730A3] px-6 py-3 rounded-md font-medium text-lg hover:bg-indigo-50 transition-all">
            <FaLinkedinIn className="text-xl" />
            {hero.linkedin}
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full bg-[#3730A3] rounded-2xl -z-10 opacity-10"></div>
        <img
          src={hero.profileImage}
          alt="Almila Su Profile"
          className="w-112.5 h-87.5 object-cover rounded-2xl shadow-2xl"
        />
      </div>

    </section>
  );
}

export default Hero;