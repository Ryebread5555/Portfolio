import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ name, image, github, description, skills }) => {
  const handleIconClick = () => window.open(github, "_blank");

  return (
    <motion.div
      className="bg-white shadow-md rounded-xl p-4 w-full h-full flex flex-col justify-between transform transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>
      
      <div className="w-full h-40 overflow-hidden rounded-md mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xs text-gray-500">{skills}</span>
        <BsGithub
          className="text-2xl cursor-pointer"
          onClick={handleIconClick}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
