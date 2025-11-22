"use client";

import React from "react";
import { motion } from "framer-motion";

const FadeInAnimation = ({ index, duration, delay, yindex = 50, children }) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: yindex,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: "easeInOut",
        delay: index ? delay * (index + 1) : delay,
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
