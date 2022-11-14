import React from "react";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto mb-8 w-full max-w-2xl">
      <hr className="mb-8 w-full border-gray-200 dark:border-gray-800 border-1" />
      {/* TODO <NowPlaying /> */}
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
          <Link
            href="/newsletter"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Newsletter
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/uses"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Uses
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Guestbook
          </Link>
          <Link
            href="/snippets"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Snippets
          </Link>
          <Link
            href="/tweets"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Tweets
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

type TExternalLink = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink = ({ href, children }: TExternalLink) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);
