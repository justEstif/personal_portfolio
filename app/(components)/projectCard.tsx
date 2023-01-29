import React from "react";
import Image from "next/image";
import { TProjectCard } from "lib/types";
import Link from "next/link";
import { nanoid } from "nanoid";

function ProjectCard({ title, description, img, techs, links }: TProjectCard) {
  return (
    <div className="flex flex-col w-full rounded sm:flex-row">
      <div className="overflow-hidden relative flex-1 w-full h-10 sm:h-64 bg-black/70 group dark:bg-white/30">
        <Image
          src={img.src}
          alt={img.alt}
          fill={true}
          className="block object-cover w-full mix-blend-overlay"
        />
      </div>
      <div className="flex-1 shadow">
        <div className="flex flex-col justify-between items-center">
          <div className="flex gap-2">
            {links.map((link) => (
              <Link href={link.link} key={nanoid()}>
                {link.icon}
              </Link>
            ))}
          </div>
          <p className="text-xl">{title}</p>
          <p className="text-center">{description}</p>
          <div className="flex gap-2">{techs.map((tech) => tech)}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
