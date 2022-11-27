import { remark } from "remark";
import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import { join } from "path";
import { TBlogMetadata } from "./types";

const docsDirectory = join(process.cwd(), "docs");
/**
 * @description function to get the metadata
 */
export const getMetadata = async (slug: string) => {
  const fullPath = join(docsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents).data as TBlogMetadata; // TODO create type
};

/**
 * @description function to get the markdown
 */
export const getDoc = async (slug: string) => {
  const fullPath = join(docsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents); // TODO create type
  const processedContent = await remark()
    .use(html, { sanitize: true })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const metadata = matterResult.data as TBlogMetadata;
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
  const docs = slugs.map((slug) => getMetadata(slug));
  return docs;
};

/**
 * @description function to get the all docs in dir
 */
export const getAllDocs = async () => {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getDoc(slug));
  return docs;
};
