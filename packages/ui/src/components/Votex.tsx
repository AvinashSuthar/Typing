import React from "react";
import { Vortex } from "./ui/Vortex";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { MagicButton } from "../button";
import { ColourfulText } from "./ui/colorfulText";

const Votex = () => {
  return (
    <Vortex
      backgroundColor="black "
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <h2 className="text-white text-6xl md:text-6xl font-bold text-center">
        {/* <TextGenerateEffect className="text-6xl" words="" /> */}
        <ColourfulText text="Unleash Your Typing Speed" />
      </h2>
      <div className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        <TextGenerateEffect
          words=" Type Fast, Type Smart, and Dominate the Keyboard!"
          className="text-base"
        />
       
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <div>
          <a href="#typing-practice" title="link">
            <MagicButton child="Get Started" />
          </a>
        </div>
      </div>
    </Vortex>
  );
};

export default Votex;
