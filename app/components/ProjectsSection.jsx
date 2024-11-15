"use client"; // This tells Next.js that the component should run on the client side.
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard'; // Importing the ProjectCard component to display individual projects
import ProjectsTag from './ProjectsTag'; // Importing the ProjectsTag component to handle project filtering by tags
import { animate, motion, useInView } from "framer-motion";

// Sample project data with project details and tags
const projectsData = [
  { 
      id: 1,
      title: "Project 1",
      description: "Agrivista Welcome Page",
      image: "/image/projects/Agrivista.png",
      tags: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
  },
  {
      id: 2,
      title: "Project 2",
      description: "Agritel Contracts Page",
      image: "/image/projects/Agritel1.png",
      tags: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
  },
  {
      id: 3,
      title: "Project 3",
      description: "Animals Tracking Page",
      image: "/image/projects/Agritel2.png",
      tags: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",   
  },
  {
      id: 4,
      title: "Project 4",
      description: "Plants Tracking Page",
      image: "/image/projects/Agritel3.png",
      tags: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",   
  },
  {
      id: 5,
      title: "Project 5",
      description: "Our Blog",
      image: "/image/projects/Screen8.png",
      tags: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Agrivista Welcome Page",
    image: "/image/projects/Screen2.png",
    tags: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  // State to store the selected tag for filtering
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInview = useInView(ref, {once: true});

  // Function to handle tag change when a user selects a new tag
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filter projects based on the selected tag (fixing the syntax here)
  const filteredProjects = projectsData.filter((project) => 
    project.tags.includes(tag) // Correct the arrow function here
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }, 
  };

  return (
    <section ref={ref}>
      {/* Section title */}
      <h2 className='text-4xl font-bold text-white text-center justify-center items-center gap-2 py-6'>My Projects </h2>
      
      {/* Project tags for filtering */}
      <div className="text-white flex items-center justify-center flex-row">
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
      
      {/* Display filtered projects */}
      <ul className='grid  md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
          <motion.li 
            key={project.id} 
            variants={cardVariants} 
            initial="initial" 
            animate={isInview ? "animate" : "initial"}
          >
            <ProjectCard 
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tags}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection; // Exporting the ProjectsSection component for use in other parts of the app
