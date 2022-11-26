import React from "react";
import Link from "next/link";
import { TBlogCard } from "lib/types";
import { shortenDate } from "lib/utils";

function BlogCard({ slug, title, date }: TBlogCard) {
  return (
    <Link
      href={{
        pathname: `/blog/${slug}`,
        query: {
          id: 0,
        },
      }}
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

          <p className="mr-2 ml-10 w-20 text-gray-500 dark:text-gray-400">
            {shortenDate(date)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
