"use client";
import { useState } from "react";
import useTypewriter from "./hooks";

export default function OrdinoxHome() {
  const word = useTypewriter(["type", "animation"]);
  const [textColor, setTextColor] = useState("#f43f5e");

  const getRandomColor = () => {
    setTextColor(
      ["#f43f5e", "#22c55e", "#38bdf8"][Math.floor(Math.random() * 3)]
    );
  };

  return (
    <div className="text-6xl font-mono font-bold">
      This is custom hook
      <br /> for
      <span
        className={`ml-3 underline underline-offset-[14px] cursor-pointer`}
        onClick={getRandomColor}
        style={{ color: textColor }}
      >
        {word}
      </span>
    </div>
  );
}
