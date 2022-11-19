import React from "react";
import Link from "next/link";

import { footer } from "../portfolio";

type Props = {};

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto mb-8 w-full max-w-2xl">
      <hr className="mb-8 w-full border-gray-200 dark:border-gray-800 border-1" />
      <div className="grid grid-cols-1 gap-4 pb-16 w-full max-w-2xl sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 transition hover:text-gray-600"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            className="text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={footer.github}
          >
            GitHub
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/projects"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
