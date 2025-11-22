"use client";

import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedText = ({
  children,
  datasetValue,
  letterChangeInterval = 100,
  startDelay = 1200,
  hoverEffect = false,
}) => {
  const spanRef = useRef(null);
  const requestIdRef = useRef(null);

  useEffect(() => {
    let startTime;

    const updateText = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const deltaTime = timestamp - startTime;

      if (deltaTime >= startDelay) {
        let iterations = Math.floor(
          (deltaTime - startDelay) / letterChangeInterval
        );

        const originalContent = spanRef.current.dataset.originalValue;
        const updatedContent = originalContent
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return originalContent[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        spanRef.current.innerHTML = updatedContent;
        spanRef.current.dataset.value = updatedContent;

        if (iterations >= originalContent.length) {
          return;
        }
      }

      requestIdRef.current = requestAnimationFrame(updateText);
    };

    const startAnimation = () => {
      // Reset animation state
      startTime = null;

      // Start the animation loop after the specified startDelay
      const timeoutId = setTimeout(() => {
        requestIdRef.current = requestAnimationFrame(updateText);
      }, startDelay);

      // Clean up the timeout and animation frame when the component unmounts
      return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(requestIdRef.current);
      };
    };

    if (hoverEffect) {
      // Add event listener for hover effect on the parent button
      const buttonOrAnchor =
        spanRef.current.closest("button") || spanRef.current.closest("a");
      if (buttonOrAnchor) {
        buttonOrAnchor.addEventListener("mouseenter", startAnimation);

        // Clean up the event listener when the component unmounts
        return () => {
          buttonOrAnchor.removeEventListener("mouseenter", startAnimation);
        };
      }
    } else {
      // If not using hover effect, start animation immediately
      return startAnimation();
    }
  }, [letterChangeInterval, startDelay, hoverEffect]);

  useEffect(() => {
    // Set the initial content and original value
    spanRef.current.innerHTML = datasetValue;
    spanRef.current.dataset.value = datasetValue;
    spanRef.current.dataset.originalValue = datasetValue;
  }, [datasetValue]);

  return <span ref={spanRef}>{children}</span>;
};

export default AnimatedText;
