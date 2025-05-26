import React from 'react';
import { Project } from '../../types';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onProjectClick,
}) => {
  const displayedProjects = Array.isArray(projects)
    ? [...projects].sort((a, b) => (a.fields.order ?? 0) - (b.fields.order ?? 0))
    : [];

  return (
    <div className="h-full shadow-[-8px_0_6px_0_rgba(0,0,0,0.3)] pt-16 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-3">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
            onClick={() => onProjectClick(project)}
          >
            {project.fields?.heroImage?.fields?.file?.url && (
              <img
                src={project.fields.heroImage.fields.file.url}
                alt={project.fields.title}
                className="w-full h-[300px] md:h-[50vh] xl:h-[400px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-white text-xl tracking-wide font-bold flex items-center gap-2">
                 {project.fields.pageName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
