"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="flex relative justify-center items-center"
    >
      <div className="absolute mt-52 rounded-full border animate-ping border-stone-300/10 h-[200px] w-[200px]" />
      <div className="absolute mt-52 rounded-full border border-stone-300/5 h-[300px] w-[300px]" />
      <div className="absolute mt-52 rounded-full border border-stone-300/5 h-[500px] w-[500px]" />
      <div className="absolute mt-52 rounded-full border animate-pulse border-yellow-200/20 h-[650px] w-[650px]" />
      <div className="absolute mt-52 rounded-full border border-stone-50/5 h-[800px] w-[800px]" />
    </motion.div>
  );
}

export default BackgroundCircles;
