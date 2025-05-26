import React from 'react';
import { Project } from '../../types';
import LayoutA from '../projects-layouts/LayoutA';
import LayoutB from '../projects-layouts/LayoutB';
import LayoutC from '../projects-layouts/LayoutC';
import LayoutD from '../projects-layouts/LayoutD';
import LayoutE from '../projects-layouts/LayoutE';
import LayoutF from '../projects-layouts/LayoutF';
import LayoutG from '../projects-layouts/LayoutG';
import LayoutH from '../projects-layouts/LayoutH';
import LayoutI from '../projects-layouts/LayoutI';
import LayoutJ from '../projects-layouts/LayoutJ';


interface ProjectDetailProps {
  project: Project;
  currentImageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
  onBackClick: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBackClick,
}) => {

  return (
<>
    {project?.fields?.layoutStyle === 'layoutA' && (
      <LayoutA project={project} onBackClick={onBackClick} />
    )}
    {project?.fields?.layoutStyle === 'layoutB' && (
      <LayoutB project={project} onBackClick={onBackClick} />
    )}
    {project?.fields?.layoutStyle === 'layoutC' && (
      <LayoutC project={project} onBackClick={onBackClick} />
    )}
    {project?.fields?.layoutStyle === 'layoutD' && (
      <LayoutD project={project} onBackClick={onBackClick} />
    )}
    {project?.fields?.layoutStyle === 'layoutE' && (
      <LayoutE project={project} onBackClick={onBackClick} />
    )}
     {project?.fields?.layoutStyle === 'layoutF' && (
      <LayoutF project={project} onBackClick={onBackClick} />
    )}
    {project?.fields?.layoutStyle === 'layoutG' && (
      <LayoutG project={project} onBackClick={onBackClick} />
    )}
      {project?.fields?.layoutStyle === 'layoutH' && (
      <LayoutH project={project} onBackClick={onBackClick} />
    )}
      {project?.fields?.layoutStyle === 'layoutI' && (
      <LayoutI project={project} onBackClick={onBackClick} />
    )}
      {project?.fields?.layoutStyle === 'layoutJ' && (
      <LayoutJ project={project} onBackClick={onBackClick} />
    )}
  </>


    
  );

};

// interface ProjectInfoProps {
//   project: Project;
// }

// const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {

//   return (
//     <div className="px-4 md:px-0 pb-8">
//       <p className="text-gray-600 mb-8 whitespace-pre-line">{project.description}</p>

//       <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
//         <div>
//           <span className="text-gray-500">Location</span>
//           <p className="font-medium">{project.location}</p>
//         </div>
//         <div>
//           <span className="text-gray-500">Size</span>
//           <p className="font-medium">{project.size}</p>
//         </div>
//         <div>
//           <span className="text-gray-500">Year</span>
//           <p className="font-medium">{project.year}</p>
//         </div>
//         <div>
//           <span className="text-gray-500">Status</span>
//           <p className="font-medium">{project.status}</p>
//         </div>
//         <div>
//           <span className="text-gray-500">Scope</span>
//           <p className="font-medium">{project.scope}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
