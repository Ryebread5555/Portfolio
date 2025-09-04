import React from 'react';
import { motion } from 'framer-motion';
import { BsFillFileEarmarkWordFill } from 'react-icons/bs';
import resumePDF from '../assets/RyanPetty-web-resume.pdf';
import Icons from '../components/Icons';

function Resume() {
  return (
    <section id="resume" className="py-10 px-4">
      <div className="flex flex-col items-center justify-center min-h-[20vh] mb-6">
        <motion.h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Resume
        </motion.h1>
      </div>
      
      {/* Resume Download Button */}
      <div className="max-w-6xl mx-auto mb-8 text-center -mt-4">
        <a
          href={resumePDF}
          download
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <BsFillFileEarmarkWordFill className="mr-2" size={20} />
          Download Resume
        </a>
      </div>

      <Icons />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      </motion.div>
    </section>
  );
}

export default Resume;