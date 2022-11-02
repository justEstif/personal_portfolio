"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Typewriter({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Engineer",
      "Mathematician",
      "Mountain Biker",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h1>
      <span>{text}</span>
      <Cursor cursorColor="red" />
    </h1>
  );
}

export default Typewriter;
