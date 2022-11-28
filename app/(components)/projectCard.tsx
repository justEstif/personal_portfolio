import React from "react";
import cn from "classnames";
import Image from "next/image";
import { TProjectCard } from "lib/types";

function ProjectCard({ title, img, gradient, tech, link }: TProjectCard) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 justify-center items-center p-4 rounded-xl border-4 border-transparent border-solid hover:scale-[1.01] transition-all transform",
        gradient
      )}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={300}
        height={300}
        className="w-40 md:w-48"
      />
      <h4 className="text-lg font-medium tracking-tight text-gray-900 dark:text-gray-50">
        {title}
      </h4>
      <div>{tech.map((el) => el)}</div>
    </div>
  );
}

export default ProjectCard;
