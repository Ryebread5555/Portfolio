import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ id, className = "", children }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <motion.section
      id={id}
      style={{ y }}
      className={`w-full py-8 px-4 md:px-8`}
    >
      <div className={`max-w-7xl mx-auto ${className}`}>
        {children}
      </div>
    </motion.section>
  );
};

export default ParallaxSection;