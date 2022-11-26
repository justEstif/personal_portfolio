import { blogs } from "app/data";
import { shortenDate } from "lib/utils";

type Props = {
  params: { slug: string };
  searchParams: { id: number };
};

const Page = ({ searchParams }: Props) => {
  const blog = blogs[searchParams.id];
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {blog.title}
      </h1>
        <section>
        <div>

        </div>
      </section>
      <p>{blog.text}</p>
      <p>{blog.readingTime}</p>
      <p>{shortenDate(blog.date)}</p>
    </div>
  );
};

export default Page;
