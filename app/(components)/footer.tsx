import React from "react";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex sticky gap-8 justify-center items-start my-8 mx-auto w-full max-w-2xl top-[100vh]">
      <Link href="/" className="text-gray-500 transition hover:text-gray-600">
        Home
      </Link>

      <Link
        href="/project"
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
    </footer>
  );
}

export default Footer;
