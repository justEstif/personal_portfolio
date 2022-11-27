import { getDoc } from "lib/remark";

type Props = {
  params: { slug: string }; // TODO how to pass the title
};

const Page = async ({ params: { slug } }: Props) => {
  const blog = await getDoc(slug);
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        This is the blog
      </h1>
      {/**
       * TODO: add the minor details
       */}
      <div className="flex justify-between items-center my-6 w-full text-sm leading-8">
        <p>img/TODO Name/date</p>
        <p>time to read</p>
      </div>
      <article
        className="space-y-5 text-justify"
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </div>
  );
};

export default Page;
