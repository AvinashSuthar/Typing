"use client";
import { useEffect, useState } from "react";
import "./Keyboard.css";
import { LinkPreview } from "./ui/Preview";

interface KeyProps {
  keyValue: string;
}

export default function Keyboard({ keyValue }: KeyProps) {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!keyValue) return;
    setPressedKey(null);
    setTimeout(() => setPressedKey(keyValue), 10); // Small delay to force re-render

    // Remove highlight after 300ms
    const timeout = setTimeout(() => setPressedKey(null), 300);
    return () => clearTimeout(timeout);
  }, [keyValue]);

  return (
    <div className="flex justify-center items-center h-[500px] my-16 ">
      <div className="keyboardcontainer">
        <div className="container">
          {/* First Row */}
          <div className="row">
            {[
              "~.`",
              "!.1",
              "@.2",
              "#.3",
              "$.4",
              "%.5",
              "^.6",
              "&.7",
              "*.8",
              "(.9",
              ").0",
              "_.-",
              "+.=",
              "Backspace",
            ].map((keyvalue) => (
              <div
                key={keyvalue}
                className={`key shadow-[0px_2px_1px_rgba(255,255,255,0.5)] ${pressedKey === keyvalue ? "blink" : ""}`}
              >
                {keyvalue.includes(".") ? (
                  keyvalue
                    .split(".")
                    .map((part, index) => <span key={index}>{part}</span>)
                ) : keyvalue === "Backspace" ? (
                  <i className="fa-solid fa-delete-left"></i>
                ) : (
                  <span>{keyvalue}</span>
                )}
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="row">
            {[
              "Tab",
              "Q",
              "W",
              "E",
              "R",
              "T",
              "Y",
              "U",
              "I",
              "O",
              "P",
              "{_[",
              "}_]",
              "|_\\",
            ].map((keyvalue) => (
              <div
                key={keyvalue}
                className={`key shadow-[0px_2px_1px_rgba(255,255,255,0.5)] ${pressedKey?.toUpperCase() === keyvalue ? "blink" : ""}`}
              >
                {keyvalue.includes("_") ? (
                  keyvalue
                    .split("_")
                    .map((part, index) => <span key={index}>{part}</span>)
                ) : (
                  <span>{keyvalue}</span>
                )}
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="row">
            {[
              "Caps Lock",
              "A",
              "S",
              "D",
              "F",
              "G",
              "H",
              "J",
              "K",
              "L",
              ":_;",
              `"_'`,
              "Enter",
            ].map((keyvalue) => (
              <div
                key={keyvalue}
                className={`key shadow-[0px_2px_1px_rgba(255,255,255,0.5)] ${pressedKey?.toUpperCase() === keyvalue ? "blink" : ""}`}
              >
                {keyvalue.includes("_") ? (
                  keyvalue
                    .split("_")
                    .map((part, index) => <span key={index}>{part}</span>)
                ) : (
                  <span>{keyvalue}</span>
                )}
              </div>
            ))}
          </div>

          {/* Fourth Row */}
          <div className="row">
            {[
              "Shift",
              "Z",
              "X",
              "C",
              "V",
              "B",
              "N",
              "M",
              "<_,",
              ">_.",
              "?_/",
              "Shift",
            ].map((keyvalue, index) => (
              <div
                key={index}
                className={`key shadow-[0px_2px_1px_rgba(255,255,255,0.5)] ${pressedKey?.toUpperCase() === keyvalue ? "blink" : ""}`}
              >
                {keyvalue.includes("_") ? (
                  keyvalue
                    .split("_")
                    .map((part, index) => <span key={index}>{part}</span>)
                ) : (
                  <span>{keyvalue}</span>
                )}
              </div>
            ))}
          </div>

          {/* Last Row */}
          <div className="row">
            {["Ctrl", "Alt", " ", "Ctrl", "Alt", "<", ">"].map(
              (keyvalue, index) => (
                <div
                  key={index}
                  className={`key shadow-[0px_2px_1px_rgba(255,255,255,0.5)] ${pressedKey === keyvalue ? "blink" : ""}`}
                >
                  <span>
                    {index === 2 ? (
                      <LinkPreview
                        url="https://avinashsuthar.in"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                      >
                        Avinash Suthar
                      </LinkPreview>
                    ) : (
                      keyvalue
                    )}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
