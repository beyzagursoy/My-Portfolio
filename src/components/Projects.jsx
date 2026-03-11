import React from 'react';
import data from '../data/data';

function Projects() {
  const lang = 'eng'; 
  const { projectsData } = data[lang];

  return (
    <section id="projects" className="px-31.25 py-12">
      <h2 className="text-5xl font-bold text-[#1F2937] mb-10">
        {projectsData.projectsTitle}
      </h2>

      <div className="grid grid-cols-3 gap-30">
        {projectsData.projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            {/* Proje Görseli */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-50 object-cover mb-6 shadow-sm"
            />
            
            {/* Proje Başlığı */}
            <h3 className="text-3xl font-medium text-[#4338CA] mb-4">
              {project.title}
            </h3>
            
            {/* Açıklama */}
            <p className="text-[#6B7280] text-sm leading-relaxed mb-6 grow">
              {project.description}
            </p>
            
            {/* Tagler (Düğmeler/Rozetler) */}
            <div className="flex gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-4 py-1 border border-[#3730A3] text-[#3730A3] rounded-md text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Linkler */}
            <div className="flex justify-between items-center text-md font-medium">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#3730A3] text-base underline hover:text-indigo-900 transition-all"
              >
                Github
              </a>
              <a 
                href={project.viewSite} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#3730A3] text-base underline hover:text-indigo-900 transition-all"
              >
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;