import React from 'react';
import { motion } from 'framer-motion';
import { BsFillFileEarmarkWordFill } from 'react-icons/bs';
import resumePDF from '../assets/RyanPetty-web-resume.pdf';

function Resume() {
  return (
    <section id="resume" className="py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {/* Front-end */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Front-end Proficiencies</h2>
          <ul className="space-y-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        {/* Back-end */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Back-end Proficiencies</h2>
          <ul className="space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL (mysql2)</li>
            <li>MongoDB, Mongoose</li>
            <li>RESTful APIs</li>
            <li>Handlebars.js</li>
          </ul>
        </div>

        {/* Education + Resume Download */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <p className="mb-2">
            <span className="font-bold">Northwestern University</span><br />
            Full Stack Web Development Bootcamp
          </p>
          <p className="mb-4">
            <span className="font-bold">Harper College</span><br />
            Associate in Arts, E-Marketing
          </p>

          <a
            href={resumePDF}
            download
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <BsFillFileEarmarkWordFill className="mr-2" size={20} />
            Download Resume
          </a>
        </div>
      </div>

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2>About Me</h2>
</motion.div>

    </section>
  );
}

export default Resume;