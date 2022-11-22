import React from "react";
import Link from "next/link";
import { nanoid } from "nanoid";
import { featuredProjects } from "../portfolio";
import ProjectCard from "./projectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

type Props = {};

function Projects({}: Props) {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Featured Projects
      </h3>
      <div className="flex flex-wrap gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={nanoid()} {...project} />
        ))}
      </div>
      <Link
        href="/project"
        className="flex items-center mt-8 h-6 leading-7 text-gray-600 rounded-lg transition-all dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        <>
          See all projects
          <FontAwesomeIcon icon={faArrowRightLong} className="ml-1 w-6 h-6" />
        </>
      </Link>
    </>
  );
}

export default Projects;
