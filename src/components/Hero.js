import React from "react";
import { heroImg } from "../constant/Images";

const Hero = () => {
  return (
    <section
      id="home"
      className=" parallax-fade bg-cover bg-center h-screen flex items-center justify-center  "
      style={{
        backgroundImage: `url(${heroImg})`, // Replace with your image URL
      }}
    >
      <div className="w-full h-full grid grid-cols-12">
        {/* Empty 6 columns */}
        {/* <div className="col-span-6"></div> */}

        {/* Content in the remaining 6 columns */}
        <div className="col-span-12 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Transform Your Ideas into Reality with InnoHub
            </h1>
            <p className="mt-4 text-lg">
              Your Partner in Innovation and Growth
            </p>
            <button className="w-[150px] mt-6 bg-black px-6 py-3 rounded text-white hover:bg-customYellow">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
