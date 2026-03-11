import React, { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import data from "../data/data";

function Projects() {
  const { lang } = useContext(SiteContext);
  const { projectsData } = data[lang];

  return (
    <section id="projects" className="px-6 md:px-20 lg:px-[125px] py-12 dark:bg-dark">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
          {projectsData.projectsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">

          {projectsData.projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-white dark:bg-dark p-4 rounded-xl">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-6 shadow-sm rounded-lg"
              />

              <h3 className="text-2xl font-medium text-[#4731D3] dark:text-[#BAB2E7] mb-4">
                {project.title}
              </h3>

              <p className="text-[#6B7280] dark:text-white text-sm leading-relaxed mb-6 grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3] dark:text-[#8F88FF] rounded-md text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.github}
                  className="text-[#3730A3] dark:text-[#BAB2E7] underline"
                >
                  Github
                </a>
                <a
                  href={project.viewSite}
                  className="text-[#3730A3] dark:text-[#BAB2E7] underline"
                >
                  View Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;