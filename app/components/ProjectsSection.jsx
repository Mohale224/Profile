import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  
  { 
      id: 1,
      title: "Project 1",
      description: "Agrivista Welcome Page",
      image: "image/projects/Screen1.png",
      tags: ["All","Web"],
      gitUrl: "/",
      previewUrl: "/",
  },
  {
      id: 2,
      title: "Project 2",
      description: "Agritel",
      image: "/image/projects/Agritel1.png",
      tags: ["All","Web"],
      gitUrl: "/",
      previewUrl: "/",
  },
  {
      id: 3,
      title: "Project 3",
      description: "Description 3",
      image: "/image/projects/Agritel2.png",
      tags: ["All","Web"],
      gitUrl: "/",
      previewUrl: "/",   
  },
  {
      id: 4,
      title: "Project 4",
      description: "Description 4",
      image: "image/projects/Agritel3.png",
      tags: ["All","Web"],
      gitUrl: "/",
      previewUrl: "/",   
  },
];


 const ProjectsSection = () => {
   return (
     <>
     <h2>My Projects </h2>
     <div>{projectsData.map((project) =>(
        <ProjectCard 
          key={project.id} 
          title={project.title}
           description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
            ))}
            </div>
         </>
     );
   };

export default ProjectsSection;