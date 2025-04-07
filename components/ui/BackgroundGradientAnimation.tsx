"use client";

import React, { useEffect } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const BackgroundGradientAnimation: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      const angle = Math.floor(Math.random() * 360);
      document.body.style.setProperty("--gradient-color-1", color1);
      document.body.style.setProperty("--gradient-color-2", color2);
      document.body.style.setProperty("--gradient-angle", `${angle}deg`);
    }, 5000);

    // ✅ Cleanup: remove properties when component unmounts
    return () => {
      clearInterval(interval);
      document.body.style.removeProperty("--gradient-color-1");
      document.body.style.removeProperty("--gradient-color-2");
      document.body.style.removeProperty("--gradient-angle");
    };
  }, []);

  return null; // This component does not render anything
};

export default BackgroundGradientAnimation;
