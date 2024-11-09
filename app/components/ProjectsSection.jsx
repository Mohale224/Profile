"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectsTag from './ProjectsTag';

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
      description: "Agritel Contracts Page",
      image: "/image/projects/Agritel1.png",
      tags: ["All","Web"],
      gitUrl: "/",
      previewUrl: "/",
  },
  {
      id: 3,
      title: "Project 3",
      description: "Animals Tracking Page",
      image: "/image/projects/Agritel2.png",
      tags: ["All","Web"],
      gitUrl: "/",
      previewUrl: "/",   
  },
  {
      id: 4,
      title: "Project 4",
      description: "Plants Tracking Page",
      image: "image/projects/Agritel3.png",
      tags: ["All","Web"],
      gitUrl: "/",
      previewUrl: "/",   
  },
];


 const ProjectsSection = () => {
  const [tag,setTag] = useState("All");

  const handleTagChange = (newtag) => {
    setTag(newtag);
  };

   return (
     <>
     <h2 className='text-4xl font-bold text-white text-center justify-center items-center gap-2  py-6'>My Projects </h2>
     <div className="text-white flex items-center flex-row">
      <ProjectsTag 
      onClick={handleTagChange}
       name="All"
        isSelected={tag === "All"}
       />
       <ProjectsTag 
      onClick={handleTagChange}
       name="Web"
        isSelected={tag === "Web"}
       />
       <ProjectsTag 
      onClick={handleTagChange}
       name="Mobile"
        isSelected={tag === "Mobile"}
       />
     </div>
     <div>
      
      {projectsData.map((project) =>(
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