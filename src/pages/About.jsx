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
            marginTop: isDesktop ? '0' : '15px', // Reduced from 20px to 15px
            marginBottom: isDesktop ? '0' : '20px', // Reduced from 30px to 20px
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
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
           variants={{
             hidden: { 
               opacity: 0, 
               x: 150,
               scale: 0.98,
               rotateY: 8,
             },
             visible: { 
               opacity: 1, 
               x: 0,
               scale: 1,
               rotateY: 0,
             },
           }}
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
            marginTop: isDesktop ? '0' : '5px' // Reduced from 10px to 5px
          }}
        >
                     {/* Text Box Container */}
           <motion.div 
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
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
           >
                         <motion.h1 
               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center lg:text-center transition-colors duration-300"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
             >
              <span className={darkMode ? 'text-white' : 'text-gray-800'}>Ryan Petty</span>
            </motion.h1>
            
                         <motion.div 
               className="space-y-2 mb-4 sm:mb-6"
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
             >
               <motion.p 
                 className={`text-lg sm:text-xl md:text-2xl font-semibold text-center lg:text-center transition-colors duration-300 ${
                   darkMode ? 'text-white' : 'text-gray-800'
                 }`}
                 initial={{ opacity: 0, y: 12 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
               >
                 Full-Stack Developer
               </motion.p>
                              <motion.p 
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-center leading-tight transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
                >
                  Passionate about delivering excellent user experiences through clean, efficient code and innovative solutions.
                </motion.p>
             </motion.div>

                         <motion.div 
  className="flex flex-row gap-4 justify-center lg:justify-center"
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.0 }}
>
  <motion.a
    href="#contact"
    className={`font-semibold px-8 py-4 rounded-xl border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-center transform text-base w-36 ${
      darkMode 
        ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:shadow-gray-900/50' 
        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-gray-900/20'
    }`}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Message
  </motion.a>
  <motion.a
    href="mailto:ryanpetty.dev@gmail.com"
    className={`font-semibold px-8 py-4 rounded-xl border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-center transform text-base w-36 ${
      darkMode 
        ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700 hover:border-blue-400 hover:shadow-blue-900/50' 
        : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700 hover:border-blue-400 hover:shadow-blue-900/30'
    }`}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 2.4 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Email Me
  </motion.a>
</motion.div>
          </motion.div>
        </motion.div>
      </section>
    </ParallaxSection>
  );
};

export default About;