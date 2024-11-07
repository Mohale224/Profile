import React from 'react';
import ProjectCard from './ProjectCard'

const projectsData = [
    { 
        id: 1,
        title: "Project 1",
        description: "Description 1",
        image: "workspace.jpg",
        link: "https://github.com",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description 2",
        image: "Agritel1.png",
        link: "",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description 3",
        image: "Agritel2.png",
        link: "",   
    },
    {
        id: 4,
        title: "Project 4",
        description: "Description 4",
        image: "Agritel3.png",
        link: "",   
    },
    

]

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((Projects) => (
        <ProjectCard key={Projects.id}
         title={Projects.title}
          description={Projects.description}
           imgUrl={Projects.image}
           tags={Projects.tags} />
      ))}</div>
    </div>
    </>
  )
}

export default ProjectsSection
