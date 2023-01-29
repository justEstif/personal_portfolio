import React from "react";
import Link from "next/link";
import { nanoid } from "nanoid";
import { FaLongArrowAltRight } from "react-icons/fa";
import { featuredProjectCards } from "../data";
import ProjectCard from "./projectCard";

type Props = {};

function Projects({ }: Props) {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Featured Projects
      </h3>
      <div className="flex flex-col gap-6 w-full">
        {featuredProjectCards.map((project) => (
          <ProjectCard key={nanoid()} {...project} />
        ))}
      </div>
      <Link
        href="/projects"
        className="flex items-center mt-8 h-6 leading-7 text-gray-600 rounded-lg transition-all dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        <>
          See all projects
          <FaLongArrowAltRight className="ml-1 w-6 h-6" />
        </>
      </Link>
    </>
  );
}

export default Projects;
