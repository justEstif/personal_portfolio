import { remark } from "remark";
import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";

type Props = {
  params: { slug: string }; // TODO how to pass the title
};

/**
 * @description function to get the markdown given the slug
 */
const getPostData = async (slug: string) => {
  const fullPath = path.join(process.cwd(), "public", "blog", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents); // TODO create type
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    contentHtml,
    ...matterResult.data,
  };
};

const Page = async ({ params: { slug } }: Props) => {
  const blog = await getPostData(slug);
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
