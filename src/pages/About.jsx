import { motion } from 'framer-motion';
import profilePic from '../assets/Profile-pic.jpg';
import ParallaxSection from '../components/ParallaxSection';

const About = ({}) => {
  return (
    <ParallaxSection id="about" className="scroll-mt-20 ...">
      <section className="lg:flex md:justify-between md:items-center lg:h-full gap-16 py-5">
        {/* IMAGE - Right side on desktop, top on mobile */}
        <div className="md:order-2 flex justify-center lg:justify-end basis-4/6 z-10 mt-16 md:mt-32 mb-10 md:mb-24">
          <div>
            <img
              alt="Profile"
              src={`${profilePic}`}
              className="
                w-64
                hover:filter 
                hover:brightness-105
                transition 
                duration-500 
                rounded-full
                border-4 
                border-gold 
                shadow-lg
                max-w-[400px] 
                md:max-w-[600px]
              "
            />
          </div>
        </div>

        {/* ABOUT TEXT - Left side on desktop */}
        <div className="lg:justify-end basis-4/6 z-10 mt-16 mb-10 md:mt-32 md:mb-24 md:h-84">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="text-4xl font-bold mb-6 text-gold text-center lg:text-left">
              Ryan Petty
            </h1>
            <p className="mt-10 mb-7 text-3xl text-center lg:text-start">
              I’m a passionate full-stack web developer skilled in creating responsive,
              user-friendly websites and applications. I love solving complex problems
              and bringing ideas to life through clean, efficient code. With experience in
              both front-end and back-end development, I’m always eager to learn new
              technologies and take on exciting challenges.
            </p>
          </motion.div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default About;
