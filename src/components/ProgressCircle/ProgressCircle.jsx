"use client";

// ProgressCircle.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

import "./ProgressCircle.scss";

const ProgressCircle = () => {
  const [showCircle, setShowCircle] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;
      setShowCircle(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const circleRadius = 30;

  const circleAnimation = {
    translateY: [90, 0],
    opacity: [0, 1],
  };

  const hideCircleAnimation = {
    translateY: [0, 60],
    opacity: [1, 0],
  };

  return (
    <motion.div
      className="progress-circle"
      style={{
        right: "60px",
        bottom: "60px",
        cursor: "pointer",
      }}
      onClick={scrollToTop}
      animate={showCircle ? circleAnimation : hideCircleAnimation}
    >
      <svg
        width={circleRadius * 2}
        height={circleRadius * 2}
        viewBox={`0 0 ${circleRadius * 2} ${circleRadius * 2}`}
      >
        <circle
          cx={circleRadius}
          cy={circleRadius}
          r={circleRadius - 2}
          className="bg"
        />{" "}
        <motion.circle
          cx={circleRadius}
          cy={circleRadius}
          r={circleRadius - 2}
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <div className="up-arrow">
        <IoIosArrowForward />
      </div>
    </motion.div>
  );
};

export default ProgressCircle;
