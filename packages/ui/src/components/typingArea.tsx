"use client";

import React, { useState, useEffect, useRef } from "react";
import Keyboard from "./Keyboard";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/HeroHighlight";
import { DropdownMenuRadioGroupDemo } from "./TestConfig";
import {
  getEasyPhrase,
  getMediumPhrase,
  getHardPhrase,
} from "@repo/data/phrase";
import { Button } from "./ui/button";

const TypingTest = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [start, setStart] = useState(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [key, setKey] = useState("");
  const [difficulty, setDifficulty] = React.useState<string>("Easy");
  const [time, setTime] = React.useState<string>("1");
  const [text, setText] = useState<string>("");

  const typingAreaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (userInput.length === 1 && startTime === null) {
      setStartTime(Date.now());
    }

    const wordsTyped = userInput.trim().split(/\s+/).length;
    const elapsedMinutes = startTime ? (Date.now() - startTime) / 60000 : 0;

    if (elapsedMinutes > 0) {
      setWpm(Math.round(wordsTyped / elapsedMinutes));
    }

    const correctChars = text
      .split("")
      .filter((char, index) => userInput[index] === char).length;

    setAccuracy(
      userInput.length > 0
        ? parseFloat(((correctChars / userInput.length) * 100).toFixed(1))
        : 100
    );
  }, [userInput]);


  const getData = (difficulty: string, time: string): string => {
    let data = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    // if (difficulty === "Easy") {
    //   data = getEasyPhrase(time);
    // }
    // if (difficulty === "Medium") {
    //   data = getMediumPhrase(time);
    // }
    // if (difficulty === "Hard") {
    //   data = getHardPhrase(time);
    // }
    return data;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!start) return;

    setKey(e.key);

    if (e.key === " ") {
      e.preventDefault();
      setUserInput(userInput + " ");
      setCurrentIndex(currentIndex + 1);
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      return;
    }

    if (currentIndex >= text.length) {
      setComplete(true);
      setStart(false);
      return;
    }




    if (e.key.length > 1 && e.key !== "Backspace") return;
    if (e.key === "Backspace") {
      setUserInput(userInput.slice(0, -1));
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
      return;
    }

    setUserInput(userInput + e.key);
    setCurrentIndex(currentIndex + 1);
  };

  const startTest = () => {
    setText(getData(difficulty, time));

    setStart(true);
    setUserInput("");
    setCurrentIndex(0);
    setStartTime(null);
    setComplete(false);
    setWpm(0);
    setAccuracy(100);

    setTimeout(() => {
      typingAreaRef.current?.focus();
    }, 100);
  };

  return (

    <div className="flex flex-col  items-center justify-center">
      <div className="">
        {/* Start Button */}
        {!start && (
          <div className="flex justify-around items-center gap-6">
            <div>
              <button
                onClick={startTest}
                className="px-6 py-2  text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
              >
                Start Test
              </button>
            </div>


          </div>
        )}


        {/* Typing Area */}
        {start && (
          <div
            tabIndex={0}
            ref={typingAreaRef}
            onKeyDown={handleKeyPress}
            className="text-gray-700  mx-10 mt-10 text-justify  rounded-md outline-none focus:outline-none border-none
              tracking-widest
              shadow-sm p-3 text-lg font-mono leading-8"

          >
            {text.split("").map((char, index) => {
              const isTyped = index < currentIndex;
              const isCorrect = userInput[index] === char;
              const isCurrent = index === currentIndex;

              return (
                <motion.span
                  key={index}
                  initial={{
                    y: 0,
                    opacity: 1,

                    transformOrigin: "bottom",
                  }} // Start upright
                  animate={
                    isTyped
                      ? isCorrect
                        ? { y: 1, opacity: 1 }
                        : { y: -1, opacity: 1 }
                      : { z: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={` 
                      inline-flex
                      text-2xl
                  ${isTyped ? (isCorrect ? "text-green-600  " : "text-red-500") : "text-gray-600"}
                 
                  ${isCurrent ? "border-l-2 border-purple-600 " : ""}
                `}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}



            <div className="flex text-white  justify-center items-center w-full px-10">
              <Button variant={"secondary"} onClick={startTest} className="px-3 py-2 border my-3" >

                Restart
              </Button>
            </div>

            <div className="">
              <div  >
                <Keyboard keyValue={key} />
              </div>
            </div>
          </div>
        )}
        {complete && (
          <div className=" items-center justify-center p-6">
            <div className="flex justify-between text-sm text-gray-400 mt-3">
              <span >WPM: {wpm}</span>
              <span >Accuracy: {accuracy}%</span>
            </div>
            <div className="flex text-white  justify-center items-center w-full px-10">
              <Button variant={"secondary"} onClick={startTest} className="px-3 py-2 border my-3" >

                Restart
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingTest;
