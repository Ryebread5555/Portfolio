import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const ContactButtons = () => {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.linkedin.com/in/ryan-petty-23991b199/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-sm"
      >
        <BsLinkedin className="text-lg" />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
      
      <a
        href="https://github.com/Ryebread5555"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 shadow-sm"
      >
        <BsGithub className="text-lg" />
        <span className="hidden sm:inline">GitHub</span>
      </a>
    </div>
  );
};

export default ContactButtons;