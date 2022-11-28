import { remark } from "remark";
import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import { join } from "path";
import { TBlogMetadata } from "./types";
import { getReadingTime, shortenDate } from "./utils";

const docsDirectory = join(process.cwd(), "docs");

/**
 * @description function to get the metadata
 */
export const getMetadata = async (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const metadata: TBlogMetadata = {
    title: data.title,
    author: data.author,
    slug: data.slug,
    date: shortenDate(new Date(data.date)),
    readingTime: getReadingTime(content),
  };
  return metadata;
};

/**
 * @description function to get the markdown
 */
export const getDoc = async (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents); // TODO create type
  const processedContent = await remark()
    .use(html, { sanitize: true })
    .process(content);
  const contentHtml = processedContent.toString();
  const metadata: TBlogMetadata = {
    title: data.title,
    author: data.author,
    slug: data.slug,
    date: shortenDate(new Date(data.date)),
    readingTime: getReadingTime(content),
  };
  return {
    contentHtml,
    metadata,
  };
};

/**
 * @description function to get the all docs in dir
 */
export const getAllMeta = async () => {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = await Promise.all(slugs.map(async (slug) => getMetadata(slug)));
  return docs;
};

/**
 * @description function to get the all docs in dir
 */
export const getAllDocs = async () => {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = await Promise.all(slugs.map(async (slug) => getDoc(slug)));
  return docs;
};
