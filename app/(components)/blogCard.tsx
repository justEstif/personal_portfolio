import React from "react";
import Link from "next/link";
import { TBlogMetadata } from "lib/types";

function BlogCard({ slug, title, date }: TBlogMetadata) {
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
          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
            {title}
          </h4>
          <p className="mr-2 ml-10 text-gray-500 dark:text-gray-400">{date}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
