"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex overflow-hidden flex-col flex-shrink-0 items-center p-10 space-y-7 rounded-lg opacity-40 transition-opacity duration-200 hover:opacity-100 w-[500px] snap-center bg-stone-700/30 md:w-[600px] xl:w-[900px]">
      <motion.img
        className="object-cover object-center w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]"
        src={"https://api.lorem.space/image/movie?w=1000&h=1000"}
        alt="Picture of company logo"
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO Of CEO</h4>
        <p className="mt-1 text-2xl font-bold">CEO</p>
        <div className="flex my-2 space-x-2">
          <Image
            src="https://api.lorem.space/image/movie?w=1000&h=1000"
            alt="Image of technology used"
            className="w-10 h-10 rounded-full"
            width={50}
            height={50}
          />
          <Image
            src="https://api.lorem.space/image/movie?w=1000&h=1000"
            alt="Image of technology used"
            className="w-10 h-10 rounded-full"
            width={50}
            height={50}
          />
          <Image
            src="https://api.lorem.space/image/movie?w=1000&h=1000"
            alt="Image of technology used"
            className="w-10 h-10 rounded-full"
            width={50}
            height={50}
          />
          <Image
            src="https://api.lorem.space/image/movie?w=1000&h=1000"
            alt="Image of technology used"
            className="w-10 h-10 rounded-full"
            width={50}
            height={50}
          />
        </div>
        <p className="py-5 text-gray-300 uppercase">
          Started work... -Ended...
        </p>
        <ul className="ml-5 space-y-4 text-lg list-disc">
          <li>Summary PointSummary PointssSummary Points</li>
          <li>Summary PointSummary PointssSummary Points</li>
          <li>Summary PointSummary PointssSummary Points</li>
          <li>Summary PointSummary PointssSummary Points</li>
          <li>Summary PointSummary PointssSummary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
