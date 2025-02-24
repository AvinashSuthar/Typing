import React from "react";
import { Vortex } from "./ui/Vortex.js";

const Votex = () => {
  return (
    <Vortex
      backgroundColor="black "
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <h2 className="text-white text-6xl md:text-6xl font-bold text-center">
        Unleash Your Typing Speed
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Type Fast, Type Smart, and Dominate the Keyboard!
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <div className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          <a href="#typing-practice">Get Started</a>
        </div>
      </div>
    </Vortex>
  );
};

export default Votex;
