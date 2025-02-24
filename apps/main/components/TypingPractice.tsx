"use client";
import React, { useState, useEffect } from "react";

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes perfect.",
  "Typing is an essential skill.",
  "Never stop learning new things.",
];

const TypingPractice = () => {
  const [sentence, setSentence] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    loadNewSentence();
  }, []);

  const loadNewSentence = () => {
    const randomSentence =
      sentences[Math.floor(Math.random() * sentences.length)];
    setSentence(randomSentence);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
  };

  const handleInputChange = (e: any) => {
    //@ts-ignore
    if (!startTime) setStartTime(Date.now()); // Start time on first keypress

    const value = e.target.value;
    setUserInput(value);

    if (value === sentence) {
      //@ts-ignore

      const elapsedTime = (Date.now() - startTime) / 1000 / 60; // Time in minutes
      setWpm(Math.round(sentence.split(" ").length / elapsedTime));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-96  p-5">
      <h1 className="text-2xl font-bold  mb-4">Typing Practice</h1>

      {/* Sentence Display */}
      <div className="text-lg font-mono  p-4 rounded-lg shadow-md w-full max-w-xl">
        {sentence.split("").map((char, index) => {
          let color = "text-gray-400"; // Default color for remaining text
          if (index < userInput.length) {
            color =
              userInput[index] === char ? "text-green-500" : "text-red-500";
          }
          return (
            <span key={index} className={`${color} transition-all`}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Input Box */}
      <input
        type="text"
        className="mt-4 p-3 border-2  rounded-lg w-full max-w-xl focus:outline-none focus:border-purple-700"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Start typing here..."
        autoFocus
      />

      {/* WPM and Restart Button */}
      <div className="mt-4 flex items-center gap-4">
        <p className="text-lg font-semibold text-blue-600">WPM: {wpm}</p>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          onClick={loadNewSentence}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default TypingPractice;
