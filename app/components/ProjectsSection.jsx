"use client"; // Ensures client-side rendering
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsTag from "./ProjectsTag";
import { motion, useInView } from "framer-motion";

// Sample project data
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
      tags: ["All","Mobile"],
      gitUrl: "/",
      previewUrl: "/",   
  },
  {
      id: 5,
      title: "Project 5",
      description: "Our Blog",
      image: "/image/projects/Screen8.png",
      tags: ["All","Mobile"],
      gitUrl: "/",
      previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Agrivista Welcome Page",
    image: "/image/projects/Screen2.png",
    tags: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All"); // State for active tag
  const ref = useRef(null); // Ref for visibility tracking
  const isInView = useInView(ref, { once: true }); // Track if the section is in view

  // Filter projects based on the selected tag
  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  // Animation settings
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref} className="py-12 px-4 md:px-8 lg:px-16 text-white">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        My Projects
      </h2>
      
      {/* Project Tags */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Web", "Mobile"].map((category) => (
          <ProjectsTag
            key={category}
            onClick={() => setTag(category)}
            name={category}
            isSelected={tag === category}
          />
        ))}
      </div>
      
      {/* Project Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
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

export default ProjectsSection;
