"use client";

import React, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BackgroundBeamsWithCollision } from "./ui/BackgroudBeams";
// ..

const sampleText =
  "High know eye. These hand small know place, a plan group, keep we think because run may long if plan, child he have, even find since follow however.";

const TypingTest = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [complete, setComplete] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [key, setKey] = useState("");

  useEffect(() => {
    // Start timer only on first keypress
    if (userInput.length === 1 && startTime === null) {
      setStartTime(Date.now());
    }

    // Calculate WPM
    const wordsTyped = userInput.trim().split(/\s+/).length;
    const elapsedMinutes = startTime ? (Date.now() - startTime) / 60000 : 0;

    if (elapsedMinutes > 0) {
      setWpm(Math.round(wordsTyped / elapsedMinutes));
    }

    // Calculate accuracy
    const correctChars = sampleText
      .split("")
      .filter((char, index) => userInput[index] === char).length;

    setAccuracy(
      userInput.length > 0
        ? parseFloat(((correctChars / userInput.length) * 100).toFixed(1))
        : 100
    );
  }, [userInput]); // Removed startTime from dependency array

  useEffect(() => {
    AOS.init();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    setKey(e.key);

    if (userInput.length === sampleText.length) {
      setComplete(true);
      return;
    }

    if (e.key.length > 1 && e.key !== "Backspace") return; // Ignore special keys
    if (e.key === "Backspace") {
      setUserInput(userInput.slice(0, -1));
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
      return;
    }

    setUserInput(userInput + e.key);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div
      className="flex flex-col border-none items-center justify-center   p-5"
      tabIndex={0}
      onKeyDown={handleKeyPress}
    >
      <BackgroundBeamsWithCollision>
        <div className="w-[90%] p-6 ">
          {/* Typing Area */}

          <div
            className="text-gray-700 text-justify  rounded-md  shadow-blue-400 shadow-sm p-3 text-lg font-mono leading-8"
            data-aos="zoom-in-down"
            data-aos-duration="200"
          >
            {sampleText.split("").map((char, index) => {
              const isTyped = index < currentIndex;
              const isCorrect = userInput[index] === char;
              const isCurrent = index === currentIndex; // Cursor position

              return (
                <span
                  key={index}
                  className={`
                  ${isTyped ? (isCorrect ? "text-purple-400" : "text-red-500 ") : "text-gray-600"}
                  ${isCurrent ? "border-l-2 border-purple-600 " : ""}
                `}
                >
                  {char}
                </span>
              );
            })}
            <div className="flex justify-between text-sm text-gray-400 mt-3">
              <span>WPM: {wpm}</span>
              <span>Accuracy: {accuracy}%</span>
            </div>
            {complete && <div>Completed</div>}
          </div>

          {/* Stats */}
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          <Keyboard keyValue={key} />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default TypingTest;
