"use client";

import React, { useState, useEffect, useRef } from "react";
import Keyboard from "./Keyboard";
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight } from "./ui/HeroHighlight";
import { DropdownMenuRadioGroupDemo } from "./TestConfig";
import {
  getEasyPhrase,
  getMediumPhrase,
  getHardPhrase,
} from "@repo/data/phrase";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Play,
  RotateCcw,
  Target,
  Clock,
  Zap,
  TrendingUp,
  CheckCircle,
  XCircle
} from "lucide-react";

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
  const [showResults, setShowResults] = useState(false);

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
    let data = ""
    if (difficulty === "Easy") {
      data = getEasyPhrase(time);
    }
    if (difficulty === "Medium") {
      data = getMediumPhrase(time);
    }
    if (difficulty === "Hard") {
      data = getHardPhrase(time);
    }
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
      setShowResults(true);
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
    setShowResults(false);
    setWpm(0);
    setAccuracy(100);

    setTimeout(() => {
      typingAreaRef.current?.focus();
    }, 100);
  };

  const resetTest = () => {
    setStart(false);
    setComplete(false);
    setShowResults(false);
    setUserInput("");
    setCurrentIndex(0);
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setText("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      {/* Configuration Panel */}
      {!start && !showResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mb-8"
        >
          <Card className="bg-black/30 border backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-center">Configure Your Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span className="text-white/80">Difficulty:</span>
                  <DropdownMenuRadioGroupDemo
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    time={time}
                    setTime={setTime}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-white/80">Time:</span>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-black/30 border border-white/20 rounded px-3 py-1 text-white"
                    aria-label="Select test duration"
                  >
                    <option value="1">1 minute</option>
                    <option value="2">2 minutes</option>
                    <option value="5">5 minutes</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Start Button */}
      {!start && !showResults && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Button
            onClick={startTest}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Start Test
          </Button>
        </motion.div>
      )}

      {/* Live Stats */}
      {start && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mb-6"
        >
          <div className="flex justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-lg font-semibold">{wpm} WPM</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold">{accuracy}%</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-semibold">{currentIndex}/{text.length}</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Typing Area */}
      <AnimatePresence>
        {start && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <div
                  tabIndex={0}
                  ref={typingAreaRef}
                  onKeyDown={handleKeyPress}
                  className="text-gray-300 text-justify outline-none focus:outline-none border-none tracking-widest shadow-sm p-6 text-lg font-mono leading-8 min-h-[200px] bg-black/30 rounded-lg"
                >
                  {text.split("").map((char, index) => {
                    const isTyped = index < currentIndex;
                    const isCorrect = userInput[index] === char;
                    const isCurrent = index === currentIndex;

                    return (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: isCurrent ? 1.1 : 1,
                          color: isTyped
                            ? (isCorrect ? "#10b981" : "#ef4444")
                            : "#6b7280"
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                          scale: { duration: 0.1 }
                        }}
                        className={`inline-flex text-2xl font-medium ${isCurrent ? "border-l-2 border-purple-500 bg-purple-500/10 px-1" : ""
                          }`}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    );
                  })}
                </div>

                <div className="flex justify-center mt-1">
                  <Button
                    variant="outline"
                    onClick={resetTest}
                    className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Restart
                  </Button>
                </div>
                {start && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-2 "
                  >
                    <Keyboard keyValue={key} />
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">{wpm}</div>
                    <div className="text-white/70">Words Per Minute</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">{accuracy}%</div>
                    <div className="text-white/70">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{text.length}</div>
                    <div className="text-white/70">Characters</div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button
                    onClick={startTest}
                    className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Try Again
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetTest}
                    className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    New Test
                  </Button>
                </div>
              </CardContent>
            </Card>
            
          </motion.div>
          
        )}
      </AnimatePresence>

      {/* Keyboard */}
     
    </div>
  );
};

export default TypingTest;
