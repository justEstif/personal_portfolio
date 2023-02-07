import React from "react";
import Image from "next/image";
import { TProjectCard } from "lib/types";
import Link from "next/link";
import { nanoid } from "nanoid";

function ProjectCard({ title, description, img, techs, links }: TProjectCard) {
  return (
    <div className="flex flex-col w-full border-l-4 sm:flex-row">
      <div className="overflow-hidden relative flex-1 w-full h-10 sm:h-64 bg-black/50 group dark:bg-white/50">
        <Image
          src={img.src}
          alt={img.alt}
          fill={true}
          className="block object-cover w-full mix-blend-overlay"
        />
      </div>
      <div className="flex flex-col flex-1 py-4 px-6 bg-gray-200 dark:bg-gray-800">
        <div className="flex justify-between items-baseline mb-4">
          <p className="text-xl">{title}</p>
          <div className="flex gap-5">
            {links.map((link) => (
              <Link href={link.link} key={nanoid()}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <p className="flex-1 mb-4 leading-7">{description}</p>
        <div className="flex flex-col justify-between items-center pt-5 border-t-2 border-t-blue-600">
          <div className="flex gap-2">{techs.map((tech) => tech)}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
