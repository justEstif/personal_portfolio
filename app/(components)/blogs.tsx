import React from "react";
import Link from "next/link";
import BlogCard from "./blogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

type Props = {};

function Blogs({}: Props) {
  return (
    <>
      <h3 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Featured Blog Posts
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">Check out my blog</p>
      <BlogCard
        slug="blog-slug"
        date={new Date("2022-11-19T15:09:59.443Z")}
        title="Blog Title"
      />
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/blog"
        className="flex items-center mt-8 h-6 leading-7 text-gray-600 rounded-lg transition-all dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        See all blog posts
        <FontAwesomeIcon icon={faArrowRightLong} className="ml-1 w-6 h-6" />
      </Link>
      <span className="h-16" />
    </>
  );
}

export default Blogs
