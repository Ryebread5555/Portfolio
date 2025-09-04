import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profilePic from '../assets/Profile-pic.jpg';
import ParallaxSection from '../components/ParallaxSection';
import { useThemeContext } from '../hooks/useThemeContext';

const About = () => {
  // Add proper responsive state with resize listener
  const [isDesktop, setIsDesktop] = useState(false);
  const { darkMode } = useThemeContext();

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
          justifyContent: isDesktop ? 'space-between' : 'flex-start',
          gap: isDesktop ? '64px' : '24px',
          minHeight: '100vh',
          padding: '16px',
          paddingTop: isDesktop ? '16px' : '90px', // Reduced from 100px to 90px
          transition: 'all 0.3s ease-in-out'
        }}
      >
        
        {/* PROFILE IMAGE - left side on desktop, top on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-start flex-shrink-0 order-1 lg:order-1 lg:w-auto lg:flex-shrink-0"
          style={{ 
            flexShrink: 0,
            order: 1,
            display: 'flex',
            justifyContent: isDesktop ? 'flex-start' : 'center',
            marginTop: isDesktop ? '0' : '15px',
            marginBottom: isDesktop ? '0' : '20px',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <img
            alt="Profile"
            src={profilePic}
            className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 rounded-2xl shadow-2xl object-cover"
            style={{
              width: isDesktop ? '400px' : '320px',
              height: '533px',
              minWidth: isDesktop ? '400px' : '320px',
              minHeight: '533px',
              maxWidth: isDesktop ? '400px' : '320px',
              maxHeight: '533px'
            }}
          />
        </motion.div>
        
        {/* TEXT CONTENT - right side on desktop, bottom on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 order-2 lg:order-2 lg:flex-1 lg:flex-grow w-full lg:w-auto"
          style={{ 
            flex: '0 0 auto',
            order: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isDesktop ? 'center' : 'flex-start',
            alignItems: isDesktop ? 'center' : 'stretch',
            transition: 'all 0.3s ease-in-out',
            width: 'fit-content',
            height: 'fit-content',
            marginTop: isDesktop ? '0' : '5px' 
          }}
        >
          {/* Text Box Container */}
          <div 
            className={`rounded-2xl p-4 sm:p-6 lg:p-8 mx-auto lg:mx-0 transition-colors duration-300`}
            style={{
              width: isDesktop ? 'auto' : '100%',
              minWidth: isDesktop ? '500px' : '100%',
              maxWidth: isDesktop ? '800px' : '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-center lg:text-center transition-colors duration-300">
              <span className={darkMode ? 'text-white' : 'text-gray-800'}>Ryan Petty</span>
            </h1>
            
            <div className="space-y-3 mb-6 sm:mb-8">
              <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-center leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Full-Stack Developer with a strong foundation in customer service and banking operations. Leveraging my background in financial services to build user-centric applications that prioritize exceptional user experiences and business value.
              </p>
            </div>

            <div className="flex flex-row gap-4 justify-center lg:justify-center">
              <a
                href="#contact"
                className={`font-semibold px-8 py-4 rounded-xl border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-center transform text-base w-36 ${
                  darkMode 
                    ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:shadow-gray-900/50' 
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-gray-900/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Message
              </a>
              <a
                href="mailto:ryanpetty.dev@gmail.com"
                className={`font-semibold px-8 py-4 rounded-xl border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-center transform text-base w-36 ${
                  darkMode 
                    ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700 hover:border-blue-400 hover:shadow-blue-900/50' 
                    : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700 hover:border-blue-400 hover:shadow-blue-900/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Me
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </ParallaxSection>
  );
};

export default About;