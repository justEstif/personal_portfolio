import React from "react";
import Link from "next/link";
import { FaHome, FaEnvelope, FaGithub } from "react-icons/fa";
import { footer } from "../data";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex sticky gap-8 justify-center items-start my-8 mx-auto w-full max-w-2xl text-2xl top-[100vh]">
      <Link href="/">
        <FaHome className="hover:animate-pulse" />
      </Link>
      <Link href="/contact">
        <FaEnvelope className="hover:animate-pulse" />
      </Link>
      <Link href={`${footer.github}`}>
        <FaGithub className="hover:animate-pulse" />
      </Link>
    </footer>
  );
}

export default Footer;
