import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ name, image, github, description, skills }) => {
  return (
    <motion.div 
      className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-full max-w-[350px] mx-auto cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-52 sm:h-60 object-cover transition-all duration-300 group-hover:scale-110"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center text-white"
        >
          {/* Project Name */}
          <h3 className="text-lg font-bold mb-2 text-white">
            {name}
          </h3>
          
          {/* Project Description */}
          <p className="text-xs mb-3 text-gray-200 leading-relaxed">
            {description}
          </p>
          
          {/* Skills/Languages */}
          <p className="text-xs text-gray-300 mb-4 font-medium">
            {skills}
          </p>
          
          {/* GitHub Link */}
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-white text-gray-800 px-3 py-1.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsGithub className="text-sm" />
            View on GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;