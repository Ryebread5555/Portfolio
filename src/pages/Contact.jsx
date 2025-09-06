import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactButtons from '../components/ContactButtons';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'email') {
      if (!value.trim()) {
        setErrorMessage('Email is required');
      } else {
        const isValid = validateEmail(value);
        setErrorMessage(isValid ? '' : 'Your email is invalid');
      }
    } else {
      setErrorMessage(value.trim() ? '' : `${name} is required`);
    }

    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!name.trim()) {
      setErrorMessage('Name is required');
      return;
    }
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Message is required');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Your email is invalid');
      return;
    }

    // If no errors, proceed with email
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:rypetty55@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form after sending
    setFormState({ name: '', email: '', message: '' });
    setErrorMessage('');
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
          <label htmlFor="name" className="block text-left font-medium mb-2 text-gray-700 dark:text-gray-300">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="w-full sm:w-4/5 md:w-full px-4 py-3 border-2 border-gray-500 dark:border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-left font-medium mb-2 text-gray-700 dark:text-gray-300">Email address:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full sm:w-4/5 md:w-full px-4 py-3 border-2 border-gray-500 dark:border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-left font-medium mb-2 text-gray-700 dark:text-gray-300">Message:</label>
          <textarea
            name="message"
            rows="7"
            value={message}
            onChange={handleChange}
            className="w-full sm:w-4/5 md:w-full px-4 py-3 border-2 border-gray-500 dark:border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
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
          
          <ContactButtons />
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