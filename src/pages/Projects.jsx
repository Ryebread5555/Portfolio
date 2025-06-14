import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/Project";
import projects from "../projects.json";
import ParallaxSection from "../components/ParallaxSection";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <ParallaxSection id="projects">
      <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
  {projects.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ))}
</motion.div>
    </ParallaxSection>
  );
};

export default Projects;
