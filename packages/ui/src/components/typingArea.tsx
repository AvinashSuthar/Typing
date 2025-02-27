"use client";

import React, { useState, useEffect, useRef } from "react";
import Keyboard from "./Keyboard";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackgroundBeamsWithCollision } from "./ui/BackgroudBeams";
import { motion } from "framer-motion";
const typingSound = new Audio("/sounds/key.mp3");

const sampleText =
  "High know eye. These hand small know place, a plan group, keep we think because run may long if plan, child he have, even find since follow however.";

const TypingTest = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [start, setStart] = useState(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [key, setKey] = useState("");

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

    const correctChars = sampleText
      .split("")
      .filter((char, index) => userInput[index] === char).length;

    setAccuracy(
      userInput.length > 0
        ? parseFloat(((correctChars / userInput.length) * 100).toFixed(1))
        : 100
    );
  }, [userInput]);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!start) return; // Only allow typing after starting the test
    typingSound.playbackRate = 1.5; // 1.5x speed

    typingSound.play();
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

    if (userInput.length === sampleText.length) {
      setComplete(true);
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
    setStart(true);
    setUserInput("");
    setCurrentIndex(0);
    setStartTime(null);
    setComplete(false);
    setWpm(0);
    setAccuracy(100);

    setTimeout(() => {
      typingAreaRef.current?.focus(); // Give slight delay to ensure focus
    }, 100);
  };

  return (
    <div className="flex flex-col outline-none focus:outline-none border-none items-center justify-center p-5">
      <BackgroundBeamsWithCollision>
        <div className="w-[90%] p-6">
          {/* Start Button */}
          {!start && (
            <button
              onClick={startTest}
              className="px-6 py-2 mb-4 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            >
              Start Test
            </button>
          )}

          {/* Typing Area */}
          {start && (
            <div
              tabIndex={0}
              ref={typingAreaRef}
              onKeyDown={handleKeyPress}
              className="text-gray-700 mt-48 text-justify rounded-md shadow-blue-400
              tracking-widest
              shadow-sm p-3 text-lg font-mono leading-8"
              data-aos="zoom-in-down"
              data-aos-duration="200"
            >
              {sampleText.split("").map((char, index) => {
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
              <div className="flex justify-between text-sm text-gray-400 mt-3">
                <span>WPM: {wpm}</span>
                <span>Accuracy: {accuracy}%</span>
              </div>
              {complete && <div>Completed</div>}
            </div>
          )}
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          <Keyboard keyValue={key} />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default TypingTest;
