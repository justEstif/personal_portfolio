import { TBlogCards, TFooter, THead, TProjects } from "lib/types";

export const head: THead = {
  title: "Estifanos Beyene – Developer, Engineer.",
  description: `Full-stack Developer, Mountain Bike Enthusiast`,
  type: "website",
};

export const footer: TFooter = {
  github: "https://github.com/justEstif",
  email: "estifanosbeyene21@gmail.com",
};

// TODO move to backend
export const featuredProjects: TProjects = [
  {
    title: "Name of Project",
    slug: "project-id",
    img: {
      src: "/projects/project.jpg", // in public/projects
      alt: "Screenshot of project",
    },
    gradient:
      "border-gradient-br-light-purple-gray-50  dark:border-gradient-br-light-purple-gray-900",
  },
];

// TODO move to backend
export const featuredBlogs: TBlogCards = [
  {
    title: "Blog Title",
    slug: "blog-slug",
    date: new Date("2022-11-19T15:09:59.443Z"),
  },
];

// TODO move to backend
export const allProjects: TProjects = [
  {
    title: "Name of Project",
    slug: "project-slug",
    img: {
      src: "/projects/project.jpg", // in public/projects
      alt: "Screenshot of project",
    },
    gradient:
      "border-gradient-br-light-purple-gray-50  dark:border-gradient-br-light-purple-gray-900",
  },
];
