import Image from "next/image";
import { getDoc } from "lib/remark";
import { greetings } from "app/data";

type Props = {
  params: { slug: string }; // TODO how to pass the title
};

const Page = async ({ params: { slug } }: Props) => {
  const blog = await getDoc(slug);
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {blog.metadata.title}
      </h1>
      <div className="flex justify-between items-center my-4 w-full text-sm leading-8">
        <div className="flex gap-3">
          <Image
            src={greetings.img.src}
            alt={greetings.img.alt}
            height={30}
            width={30}
            className="rounded-full filter grayscale"
          />
          <p>{blog.metadata.author}</p>
          <p>{blog.metadata.date}</p>
        </div>
        <p>{blog.metadata.readingTime} min read</p>
      </div>
      <article
        className="space-y-5 text-justify tracking-wide"
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </div>
  );
};

export default Page;
