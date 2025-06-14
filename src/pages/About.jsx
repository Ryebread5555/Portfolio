import { motion } from 'framer-motion';
import profilePic from '../assets/Profile-pic.jpg'; 
import ParallaxSection from '../components/ParallaxSection';

const About = () => {
  return (
    <ParallaxSection id="about">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Left Side - About Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gold">About Me</h1>
          <p className="text-gray-300 text-base leading-relaxed">
            I’m a passionate full-stack web developer skilled in creating responsive,
            user-friendly websites and applications. I love solving complex problems
            and bringing ideas to life through clean, efficient code. With experience in
            both front-end and back-end development, I’m always eager to learn new
            technologies and take on exciting challenges.
          </p>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-gold shadow-lg"
          />
        </div>
      </motion.div>
    </ParallaxSection>
  );
};

export default About;