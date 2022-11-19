import React from "react";
import Link from "next/link";
import { TBlogCard } from "lib/types";

function BlogCard({ slug, title, date }: TBlogCard) {
  const dd = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full"
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="py-3 w-full border-b border-gray-200 transition-all transform dark:border-gray-700 hover:scale-[1.01]">
        <div className="flex justify-between items-center">
          <h4 className="w-full text-lg font-medium text-gray-800 dark:text-gray-100">
            {title}
          </h4>

          <p className="mr-2 ml-10 w-32 text-gray-500 sm:ml-0 md:mb-0 dark:text-gray-400">
            {dd !== "Invalid Date" ? dd : ""}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
