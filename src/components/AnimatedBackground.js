import React, { useEffect } from "react";


const AnimatedBackground = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circles li');
    circles.forEach((circle, index) => {
      // Add specific animation classes for each circle
      const delay = index * 2;
      circle.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div className="area relative">
      <ul className="circles absolute top-0 left-0 w-full h-96 overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <li
            key={index}
            className={`absolute list-none bg-white bg-opacity-20 rounded-full animate-[animate_25s_linear_infinite]`}
            style={{
              left: `${[25, 10, 70, 40, 65, 75, 35, 50, 20, 85][index]}%`,
              width: `${[80, 20, 20, 60, 20, 110, 150, 25, 15, 150][index]}px`,
              height: `${[80, 20, 20, 60, 20, 110, 150, 25, 15, 150][index]}px`,
              animationDuration: `${[25, 12, 25, 18, 25, 11, 25, 45, 35, 11][index]}s`,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default AnimatedBackground;
