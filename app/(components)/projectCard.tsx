import React from "react";
import cn from "classnames";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TProjectCard } from "lib/types";

function ProjectCard({ slug, title, icon, gradient }: TProjectCard) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        "flex flex-col gap-3 justify-center items-center p-4 rounded-xl border-4 border-transparent border-solid",
        gradient
      )}
    >
      <FontAwesomeIcon icon={projectIcon} className="w-16 h-16" />
      <h4 className="text-lg font-medium tracking-tight text-gray-900 dark:text-gray-50">
        {title}
      </h4>
        <p>Some project details</p>
      <div>
        {techIcons.map((techIcon) => (
          <div key={nanoid()}>{<FontAwesomeIcon icon={techIcon} />}</div>
        ))}
      </div>
    </Link>
  );
}

export default ProjectCard;
