import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { footer } from "../portfolio";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex sticky gap-8 justify-center items-start my-8 mx-auto w-full max-w-2xl top-[100vh]">
      <Link href="/">
        <FontAwesomeIcon icon={faHome} className="hover:animate-pulse" />
      </Link>
      <Link href={`mailto:${footer.email}`}>
        <FontAwesomeIcon icon={faEnvelope} className="hover:animate-pulse" />
      </Link>
      <Link href={`${footer.github}`}>
        <FontAwesomeIcon icon={faGithub} className="hover:animate-pulse" />
      </Link>
    </footer>
  );
}

export default Footer;
