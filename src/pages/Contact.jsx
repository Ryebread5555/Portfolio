import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'email') {
      const isValid = validateEmail(value);
      setErrorMessage(isValid ? '' : 'Your email is invalid');
    } else {
      setErrorMessage(value.trim() ? '' : `${name} is required.`);
    }

    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit form', formState);
    }
  }

  return (
    <section id="contact" className="py-10 px-4 max-w-3xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[20vh] mb-6">
        <motion.h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Me
        </motion.h1>
      </div>
      
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 w-full sm:w-full md:w-full lg:w-full">
        <div>
          <label htmlFor="name" className="block text-left font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="w-full sm:w-4/5 md:w-full px-4 py-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-left font-medium mb-2">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            className="w-full sm:w-4/5 md:w-full px-4 py-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-left font-medium mb-2">Message:</label>
          <textarea
            name="message"
            rows="7"
            defaultValue={message}
            onBlur={handleChange}
            className="w-full sm:w-4/5 md:w-full px-4 py-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-between items-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            Submit
          </button>
          
          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/your-linkedin-profile"
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
        </div>
      </form>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      </motion.div>
    </section>
  );
}

export default ContactForm;