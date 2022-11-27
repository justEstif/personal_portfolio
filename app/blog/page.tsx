import { nanoid } from "nanoid";
import BlogCard from "app/(components)/blogCard";
import { allBlogCards } from "app/data";

type Props = {};

function Page({ }: Props) {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Blog
      </h1>

      {/**
       * TODO go through the public/blog file and loop through the metadata
       */}
      <div className="w-full">
        {allBlogCards.map((blog) => (
          <BlogCard key={nanoid()} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default Page;
