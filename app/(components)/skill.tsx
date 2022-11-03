import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  // TODO: Remove hover proficency
  return (
    <div className="flex relative cursor-pointer group">
      <motion.img
        src={"https://api.lorem.space/image/movie?w=100&h=100"}
        alt="Picture of skill logo"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="object-cover w-24 h-24 rounded-full border border-gray-500 transition duration-300 ease-in-out md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
      />
      <div className="absolute z-0 w-24 h-24 rounded-full opacity-0 transition duration-200 ease-in-out md:w-28 md:h-28 xl:w-32 xl:h-32 group-hover:bg-white group-hover:opacity-80">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
