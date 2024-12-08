import React, { useState } from "react";
import Button from '../constant/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Solutions", href: "#solutions" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="bg-white text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg">
          <span className="text-customYellow">InnoHub </span>Solutions
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:transform-none transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block py-2 md:py-0 hover:text-customYellow"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button */}
        <Button  text={'Join'} />
      </div>
    </header>
  );
};

export default Header;
