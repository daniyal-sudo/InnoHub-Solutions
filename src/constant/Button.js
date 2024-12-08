


import React from "react";

const Button = ({text}) => {
  return (
    <button className=" w-[150px] hidden md:block bg-black text-white px-4 py-2 rounded hover:bg-customYellow transition-colors duration-300 ease-in-out">
    {text}
  </button>
  );
};

export default Button;
