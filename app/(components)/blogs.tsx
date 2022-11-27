import React from "react";
import Link from "next/link";
import BlogCard from "./blogCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import { nanoid } from "nanoid";
import { getAllMeta } from "lib/remark";
import { shuffleArray } from "lib/utils";

type Props = {};

const Blogs = async ({}: Props) => {
  // pick 3 random blogs
  const metadatas = await getAllMeta().then((res) =>
    shuffleArray(res).splice(0, 3)
  );

  return (
    <>
      <h3 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Featured Blogs
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">Check out my blog</p>
      <div className="w-full">
        {metadatas.map((metadata) => (
          <BlogCard key={nanoid()} {...metadata} />
        ))}
      </div>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/blog"
        className="flex items-center mt-8 h-6 leading-7 text-gray-600 rounded-lg transition-all dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        See all blog posts
        <FaLongArrowAltRight className="ml-1 w-6 h-6" />
      </Link>
      <span className="h-16" />
    </>
  );
};

export default Blogs;
