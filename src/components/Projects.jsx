import React, { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import data from '../data/data';

function Projects() {
  const { lang } = useContext(SiteContext);
  const { projectsData } = data[lang];

  return (
    <section id="projects" className="px-31.25 py-12 dark:bg-dark">
      <h2 className="text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-10">{projectsData.projectsTitle}</h2>
      <div className="grid grid-cols-3 gap-30">
        {projectsData.projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-50 object-cover mb-6 shadow-sm rounded-lg" />
            <h3 className="text-3xl font-medium text-[#4731D3] dark:text-[#BAB2E7] mb-4">{project.title}</h3>
            <p className="text-[#6B7280] dark:text-white text-sm leading-relaxed mb-6 grow">{project.description}</p>
            <div className="flex gap-2 mb-6 flex-wrap">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1 border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3] dark:text-[#8F88FF] rounded-md text-sm font-medium">{tag}</span>
              ))}
            </div>
            <div className="flex justify-between items-center font-medium">
              <a href={project.github} className="text-[#3730A3] dark:text-[#BAB2E7] underline text-base">Github</a>
              <a href={project.viewSite} className="text-[#3730A3] dark:text-[#BAB2E7] underline text-base">View Site</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;