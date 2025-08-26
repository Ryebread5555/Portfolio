import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profilePic from '../assets/Profile-pic.jpg';
import ParallaxSection from '../components/ParallaxSection';

const About = () => {
  // Add proper responsive state with resize listener
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Function to check if screen is desktop size
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Set initial value
    checkIsDesktop();

    // Add resize listener
    window.addEventListener('resize', checkIsDesktop);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  return (
    <ParallaxSection id="about" className="">
      <section 
        className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-16 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen"
        style={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          alignItems: isDesktop ? 'center' : 'center',
          justifyContent: 'space-between',
          gap: isDesktop ? '64px' : '24px',
          minHeight: '100vh',
          padding: '16px',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        
        {/* PROFILE IMAGE - left side on desktop, top on mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50, scale: 0.9 },
            visible: { opacity: 1, x: 0, scale: 1 },
          }}
          className="flex justify-center lg:justify-start flex-shrink-0 order-1 lg:order-1 lg:w-auto lg:flex-shrink-0"
          style={{ 
            flexShrink: 0,
            order: 1,
            display: 'flex',
            justifyContent: isDesktop ? 'flex-start' : 'center',
            backgroundColor: 'lightgreen',
            padding: '8px',
            border: '3px solid green',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <img
            alt="Profile"
            src={profilePic}
            className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 rounded-2xl shadow-2xl object-cover border-4 border-red-500"
            style={{
              width: '320px',
              height: '533px',
              minWidth: '320px',
              minHeight: '533px',
              maxWidth: '320px',
              maxHeight: '533px'
            }}
          />
        </motion.div>
        
        {/* TEXT CONTENT - right side on desktop, bottom on mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 100,
              scale: 0.95
            },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1
            },
          }}
          className="flex-1 order-2 lg:order-2 lg:flex-1 lg:flex-grow w-full lg:w-auto"
          style={{ 
            flex: '0 0 auto',
            order: 2,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'lightyellow',
            padding: '4px',
            border: '3px solid orange',
            justifyContent: isDesktop ? 'center' : 'flex-start',
            alignItems: isDesktop ? 'center' : 'stretch',
            transition: 'all 0.3s ease-in-out',
            width: 'fit-content',
            height: 'fit-content'
          }}
        >
          {/* Text Box Container */}
          <div 
            className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100 mx-auto lg:mx-0"
            style={{
              width: isDesktop ? '320px' : '280px',
              height: isDesktop ? '320px' : '280px',
              minWidth: isDesktop ? '320px' : '280px',
              minHeight: isDesktop ? '320px' : '280px',
              maxWidth: isDesktop ? '320px' : '280px',
              maxHeight: isDesktop ? '320px' : '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center lg:text-center">
              <span className="text-gray-800">Ryan Petty</span>
            </h1>
            
            <div className="space-y-2 mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center lg:text-center">
                Full-Stack Developer
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center lg:text-center leading-tight">
                Passionate about delivering excellent user experiences through clean, efficient code and innovative solutions.
              </p>
            </div>

            <div className="flex flex-col gap-3 justify-center lg:justify-center">
              <a
                href="#contact"
                className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 hover:border-gold hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md text-center transform text-sm w-32 mx-auto lg:mx-auto"
              >
                Message
              </a>
              <a
                href="mailto:your-email@example.com"
                className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold/90 hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md text-center transform text-sm w-32 mx-auto lg:mx-auto"
              >
                Email
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </ParallaxSection>
  );
};

export default About;