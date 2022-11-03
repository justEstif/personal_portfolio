"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./experienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex overflow-hidden relative flex-col justify-evenly items-center px-10 mx-auto max-w-full h-screen md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px]">
        Experience
      </h3>
      <div className="flex overflow-x-scroll p-10 space-x-5 w-full snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
