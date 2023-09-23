import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import data_projects from "./data/data__projects";
import { motion } from "framer-motion";

const Projects = props => {
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");

  const handleSort = (name, current) => {
    const newArray = data_projects.filter(project =>
      project.category.includes(name)
    );
    setProjects(newArray);
    setActive(current);
  };

  const project__variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.6 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="container projects"
      variants={project__variant}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="projects__navbar mb-3">
        <div
          onClick={() => {
            setProjects(data_projects);
            setActive("All");
          }}
          className={active === "All" ? "green" : ""}>
          All
        </div>
        <div
          onClick={() => handleSort("vanilla", "Vanilla")}
          className={active === "Vanilla" ? "green" : ""}>
          Vanilla Js
        </div>
        <div
          onClick={() => handleSort("reactjs", "React")}
          className={active === "React" ? "green" : ""}>
          React
        </div>
        <div
          onClick={() => handleSort("nextjs", "Next")}
          className={active === "Next" ? "green" : ""}>
          Next
        </div>
        <div
          onClick={() => handleSort("nodejs", "Node")}
          className={active === "Node" ? "green" : ""}>
          Node
        </div>
        <div
          onClick={() => handleSort("golang", "Golang")}
          className={active === "Golang" ? "green" : ""}>
          Golang
        </div>
      </div>
      <div className="row">
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
