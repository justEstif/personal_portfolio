import React from "react";
import Link from "next/link";

import { FaHome, FaEnvelope, FaGithub } from "react-icons/fa";
import { footer } from "../portfolio";

type Props = {};

function Footer({ }: Props) {
  return (
    <footer className="flex text-2xl sticky gap-8 justify-center items-start my-8 mx-auto w-full max-w-2xl top-[100vh]">
      <Link href="/">
        <FaHome className="hover:animate-pulse" />
      </Link>
      <Link href={`mailto:${footer.email}`}>
        <FaEnvelope className="hover:animate-pulse" />
      </Link>
      <Link href={`${footer.github}`}>
        <FaGithub className="hover:animate-pulse" />
      </Link>
    </footer>
  );
}

export default Footer;
