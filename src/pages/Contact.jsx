import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      // You can add API or email service logic here
      console.log('Submit form', formState);
    }
  }

  return (
    <section id="contact" className="py-10 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-left font-medium">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-left font-medium">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-left font-medium">Message:</label>
          <textarea
            name="message"
            rows="7"
            defaultValue={message}
            onBlur={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>

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

export default ContactForm;