import { remark } from "remark";
import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";

type Props = {
  params: { slug: string };
};

const getPostData = async (slug: string) => {
  const fullPath = path.join(process.cwd(), "public", "blog", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
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
      <article
        className="space-y-3"
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </div>
  );
};

export default Page;
