import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 focus:outline-none"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-xl"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
