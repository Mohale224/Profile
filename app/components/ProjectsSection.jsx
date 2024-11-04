import React from 'react'
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
        image: "",
        link: "",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description 3",
        image: "",
        link: "",   
    },
    {
        id: 4,
        title: "Project 4",
        description: "Description 4",
        image: "",
        link: "",   
    },
    

]

const ProjectsSection = () => {
  return (
    <>
    <div>
      <h2>My Projects</h2>
      <div>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}</div>
    </div>
    </>
  )
}

export default ProjectsSection
