"use client";

import React, { useEffect, useRef } from "react";
import "./Banner.scss";

const Banner = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeContent = marqueeRef.current;

    const originalText = marqueeContent.innerHTML;
    const cloneText = originalText;
    marqueeContent.innerHTML = cloneText.repeat(10);
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-content" ref={marqueeRef}>
        <span>javascript</span>
        <span>*</span>
        <span>react.js</span>
        <span>*</span>
        <span>node.js</span>
        <span>*</span>
        <span>express.js</span>
        <span>*</span>
        <span>mongodb</span>
        <span>*</span>
        <span>python</span>
        <span>*</span>
        <span>django rest framework</span>
        <span>*</span>
      </div>
    </div>
  );
};

export default Banner;
