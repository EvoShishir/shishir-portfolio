import React, { useEffect, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedText = ({
  children,
  datasetValue,
  letterChangeInterval = 60,
  startDelay = 1200,
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

        spanRef.current.innerText = spanRef.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return spanRef.current.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= spanRef.current.dataset.value.length) {
          return;
        }
      }

      requestIdRef.current = requestAnimationFrame(updateText);
    };

    // Start the animation loop after the specified startDelay
    const timeoutId = setTimeout(() => {
      requestIdRef.current = requestAnimationFrame(updateText);
    }, startDelay);

    // Clean up the timeout and animation frame when the component unmounts
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [datasetValue, letterChangeInterval, startDelay]); // Re-run effect when datasetValue, letterChangeInterval, or startDelay changes

  return (
    <span ref={spanRef} data-value={datasetValue}>
      {children}
    </span>
  );
};

export default AnimatedText;
