"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col justify-center items-center mx-auto min-h-screen text-center md:text-left xl;flex-row xl:px-10 xl:space-y-0 max-w-[2000px]"
    >
      <h3 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px]">
        Skills
      </h3>
      <h3 className="absolute top-36 tracking-[3px]">
        Hover over a skill for current proficency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
