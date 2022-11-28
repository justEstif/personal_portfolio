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
export const getMetadata = (slug: string) => {
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
export const getDoc = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents); // TODO create type
  const processedContent = remark()
    .use(html, { sanitize: true })
    .processSync(content);
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
export const getAllMeta = () => {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getMetadata(slug));
  return docs;
};

/**
 * @description function to get the all docs in dir
 */
export const getAllDocs = () => {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getDoc(slug));
  return docs;
};
