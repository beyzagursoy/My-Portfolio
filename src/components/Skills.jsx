import React, { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import data from "../data/data";

function Skills() {
  const { lang } = useContext(SiteContext);
  const skillsData = data[lang].skillsData;

  return (
    <section id="skills" className="px-6 md:px-20 lg:px-[125px] py-12 md:py-20 dark:bg-dark">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-5xl md:text-6xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {skillsData.skillsTitle}
        </h2>

        <div className="flex flex-col md:flex-row gap-10">

          {skillsData.skills.map((skill, index) => (
            <div key={index} className="flex-1">

              <h3 className="text-3xl font-medium text-[#4731D3] dark:text-[#BAB2E7] mb-4">
                {skill.title}
              </h3>

              <p className="text-[#6B7280] dark:text-white text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <hr className="mt-16 border-t border-[#BAB2E7] dark:border-[#3A3A3A]" />
      </div>
    </section>
  );
}

export default Skills;