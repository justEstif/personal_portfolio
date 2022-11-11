"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex overflow-hidden relative z-0 flex-col justify-evenly items-center mx-auto max-w-full h-screen text-left md:flex-row"
    >
      <div className="flex overflow-hidden relative z-0 flex-col justify-evenly items-center mx-auto max-w-full h-screen text-left md:flex-row">
        <h3 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px]">
          Projects
        </h3>

        <div className="flex overflow-y-hidden overflow-x-scroll relative z-20 w-full snap-x snap-mandatory">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col flex-shrink-0 justify-center items-center p-20 space-y-5 w-screen h-screen md:p-44 snap-center"
            >
              <motion.img
                src="https://api.lorem.space/image/movie?w=1000&h=1000"
                alt="Image of technology used"
                className="w-60 h-60 rounded-full"
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              />

              <div className="px-0 space-y-10 max-w-6xl md:px-10">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-yellow-200/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>
                  Netflix Clone
                </h4>

                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia. Sit irure elit
                  esse ea nulla sunt ex occaecat reprehenderit commodo officia
                  dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                  proident adipisicing id nulla nisi laboris ex in Lorem sunt
                  duis officia eiusmod. Aliqua reprehenderit commodo ex non
                  excepteur duis sunt velit enim. Voluptate laboris sint
                  cupidatat ullamco ut ea consectetur et est culpa et culpa
                  duis.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-yellow-200/10 left-0 h-[500px] -skew-y-12" />
      </div>
    </motion.div>
  );
}
