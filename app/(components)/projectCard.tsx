import React from "react";
import Image from "next/image";
import { TProjectCard } from "lib/types";
import Link from "next/link";
import { nanoid } from "nanoid";

function ProjectCard({ title, description, img, techs, links }: TProjectCard) {
  return (
    <div className="flex flex-col justify-center items-center hover:gap-4 hover:justify-start group">
      <Image
        src={img.src}
        alt={img.alt}
        width={500}
        height={500}
        className="group-hover:collapse"
      />

      <div className="flex flex-col justify-center items-center">
        <p className="group-hover:text-lg">{title}</p>
        <div>{techs.map((tech) => tech)}</div>
      </div>

      <div className="flex flex-col gap-4 px-2 group-hover:visible collapse">
        <p className="text-center">{description}</p>
        <div className="flex gap-4 justify-center items-center text-xl">
          {links.map((link) => {
            return (
              <Link href={link.link} key={nanoid()}>
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
