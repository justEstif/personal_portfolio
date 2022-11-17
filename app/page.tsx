import React from "react";
import { greeting } from "./portfolio";
import Greetings from "./(components)/greetings";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <Greetings {...greeting} />
    </div>
  );
}
export default Page;

function BlogPosts() {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Featured Posts
      </h3>
      <div className="flex flex-col gap-6 md:flex-row">
        <BlogPostCard
          title="Past, Present, and Future of React State Management"
          slug="react-state-management"
          gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
        />
      </div>
      <Link
        href="/blog"
        className="flex items-center mt-8 h-6 leading-7 text-gray-600 rounded-lg transition-all dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        <>
          {"Read all posts"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="ml-1 w-6 h-6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </>
      </Link>
    </>
  );
}
