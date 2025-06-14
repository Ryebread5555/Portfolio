import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/Project";
import ParallaxSection from "../components/ParallaxSection";

const projects = [
      {
        "id": 1,
        "name": "Workday Scheduler",
        "image": "https://raw.githubusercontent.com/Ryebread5555/work-day-scheduler/main/assets/images/module-5-mock-up.gif",
        "github": "https://github.com/Ryebread5555/work-day-scheduler",
        "description": "A 9-5 workday scheduler!",
        "skills": "HTML | CSS | JavaScript | JQuery | Bootstrap"
      },
      {
        "id": 2,
        "name": "Note Taker",
        "image": "https://raw.githubusercontent.com/Ryebread5555/Note-Taker/main/image/note-taker-screenshot.jpg",
        "github": "https://github.com/Ryebread5555/Note-Taker",
        "description": "A note-taking application for quick ideas and todos.",
        "skills": "JavaScript | Node.js | Express.js | Bootstrap"
      },
      {
        "id": 3,
        "name": "Weather Dashboard",
        "image": "https://raw.githubusercontent.com/Ryebread5555/mod6-server-side-weather-api/main/assets/images/weather-dashboard-mockup.gif",
        "github": "https://github.com/Ryebread5555/mod6-server-side-weather-api",
        "description": "Get the 5-day weather forecast using the OpenWeather API.",
        "skills": "HTML | JavaScript | OpenWeather API | Bootstrap"
      },
      {
        "id": 4,
        "name": "Lean On Me Project",
        "image": "https://raw.githubusercontent.com/MunaZekia/Lean-On-Me/main/assets/Leanonme.png",
        "github": "https://github.com/MunaZekia/Lean-On-Me",
        "description": "Group project to find local volunteer opportunities.",
        "skills": "JavaScript | Node.js | Handlebars | MySQL | Express.js | Sequelize"
      },
      {
        "id": 5,
        "name": "Social Network API",
        "image": "https://raw.githubusercontent.com/Ryebread5555/social-network-api/main/assets/social-network-api.gif",
        "github": "https://github.com/Ryebread5555/social-network-api",
        "description": "Back-end for a social network app with users and thoughts.",
        "skills": "JavaScript | Node.js | Express.js | Mongoose"
      },
      {
        "id": 6,
        "name": "Tech Blog",
        "image": "https://raw.githubusercontent.com/Ryebread5555/Tech-Blog/main/assets/tech-blog-screenshot.png",
        "github": "https://github.com/Ryebread5555/Tech-Blog",
        "description": "A full-stack blog platform using the MVC structure.",
        "skills": "JavaScript | Node.js | Express.js | Handlebars.js | Sequelize"
      },
      {
        "id": 7,
        "name": "Pet Services Project",
        "image": "https://raw.githubusercontent.com/dltorrise/Pet-Services/main/client/src/assets/pet-services-screenshot.png",
        "github": "https://github.com/dltorrise/Pet-Services",
        "description": "Full-stack React app connecting users with pet services.",
        "skills": "React | Apollo | Node.js | Express.js | MongoDB"
      },
      {
        "id": 8,
        "name": "Book Search Engine",
        "image": "https://raw.githubusercontent.com/Ryebread5555/Book-Search-Engine/main/assets/book-search-image.png",
        "github": "https://github.com/Ryebread5555/Book-Search-Engine",
        "description": "MERN stack app for searching books via the Google Books API.",
        "skills": "React | Apollo | Node.js | Express.js | MongoDB"
      }
    ];

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