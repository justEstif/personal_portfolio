import { nanoid } from "nanoid";
import BlogCard from "app/(components)/blogCard";
import { getAllMeta } from "lib/remark";

type Props = {};

const Page = async ({}: Props) => {
  const metadatas = await getAllMeta();
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Blog
      </h1>

      <div className="w-full">
        {metadatas.map((metadata) => (
          <BlogCard key={nanoid()} {...metadata} />
        ))}
      </div>
    </div>
  );
};

export default Page;
