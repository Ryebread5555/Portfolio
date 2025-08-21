import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ name, image, github, description, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 w-full max-w-[350px] mx-auto">
  <img
  src={image}
  alt={name}
  className="w-full h-52 sm:h-60 object-cover"
   />
  <div className="p-4">
    <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
    <p className="text-sm mb-3">{description}</p>
    <p className="text-xs text-gray-500 dark:text-gray-400">{skills}</p>
    <div className="mt-4 flex justify-center">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        View on GitHub
      </a>
    </div>
  </div>
</div>
  );
};

export default ProjectCard;