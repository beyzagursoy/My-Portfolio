import React from 'react';
import data from '../data/data';

function Skills() {
  const lang = 'eng'; 
  const skillsData = data[lang].skillsData;

  return (
    <section className="px-31.25 py-12">
      <h2 className="text-5xl font-bold text-[#1F2937] mb-10">
        {skillsData.skillsTitle}
      </h2>
      
      <div className="flex justify-between gap-12">
        {skillsData.skills.map((skill, index) => (
          <div key={index} className="flex-1">
            <h3 className="text-3xl font-medium text-[#4338CA] mb-4">
              {skill.title}
            </h3>
            <p className="text-[#6B7280] text-xs leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      
      <hr className="mt-16 border-t border-[#BAB2E7]" />
    </section>
  );
}

export default Skills;