import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ id, children }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <motion.section
      id={id}
      style={{ y }}
      className="py-20 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white"
    >
      {children}
    </motion.section>
  );
};

export default ParallaxSection;
