import React from "react";
import { motion } from "framer-motion";

const FadeInAnimation = ({ index, children }) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        delay: index ? 0.03 * (index + 1) : 0.03,
      },
    }),
  };
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index !== undefined ? index : undefined}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
