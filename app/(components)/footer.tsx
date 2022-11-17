import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="my-8 mx-auto w-full max-w-2xl">
      <div className="flex space-x-4 md:gap-8 md:justify-start md:items-center md:space-y-0">
        <Link href="https://discord.com/users/justCozz#4245">
          <FontAwesomeIcon
            icon={faDiscord}
            className="w-7 h-7 bg-gray-50 md:w-10 md:h-10 dark:text-gray-500 dark:bg-gray-900"
          />
        </Link>

        <Link href="https://github.com/justEstif">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-7 h-7 bg-gray-50 md:w-10 md:h-10 dark:text-gray-500 dark:bg-gray-900"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
