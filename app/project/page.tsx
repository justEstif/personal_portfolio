import React from "react";
import { nanoid } from "nanoid";
import { allProjects } from "../portfolio";
import ProjectCard from "../(components)/projectCard";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Projects
      </h1>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {allProjects.map((project) => (
          <ProjectCard key={nanoid()} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Page;
