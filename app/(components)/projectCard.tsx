import React from "react";
import cn from "classnames";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TProjectCard } from "lib/types";

function ProjectCard({ slug, title, icon, gradient }: TProjectCard) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="flex flex-col justify-center items-center p-3 bg-red-300 rounded-xl"
    >
      <FontAwesomeIcon icon={icon} className="w-16 h-16 md:w-24 md:h-24" />

      <h4 className="mb-6 w-full text-lg font-medium tracking-tight text-gray-900 sm:mb-10 md:text-lg dark:text-gray-100">
        {title}
      </h4>
      <p>Used tech here</p>
      {/* <div className="flex flex-col justify-between items-center p-4 h-full bg-gray-50 rounded-lg dark:bg-gray-900"></div> */}
    </Link>
  );
}

export default ProjectCard;
