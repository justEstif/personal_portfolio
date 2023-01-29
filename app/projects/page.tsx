import React from "react";
import { nanoid } from "nanoid";
import ProjectCard from "../(components)/projectCard";
import { allProjectCards } from "app/data";

type Props = {};

function Page({ }: Props) {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Projects
      </h1>

      <div className="flex flex-col gap-6 w-full">
        {allProjectCards.map((project) => (
          <ProjectCard key={nanoid()} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Page;
