import React from "react";
import Image from "next/image";
import { TProjectCard } from "lib/types";

function ProjectCard({ title, img, tech, link }: TProjectCard) {
  return (
    <div className="flex flex-col justify-center items-center w-40 transition-all transform md:w-56 hover:scale-[1.01]">
      <Image src={img.src} alt={img.alt} width={400} height={400} />
      <div className="flex flex-col justify-center items-center w-full">
        <h4 className="text-lg font-medium tracking-tight text-gray-900 dark:text-gray-50">
          {title}
        </h4>
        <div>{tech.map((el) => el)}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
