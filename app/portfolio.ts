import { TBlogCards, TFooter, TGreetings, THead, TProjects } from "lib/types";

export const head: THead = {
  title: "Estifanos Beyene – Developer, Engineer.",
  description: `Full-stack Developer, Mountain Bike Enthusiast`,
  type: "website",
};

export const greetings: TGreetings = {
  name: "Estifanos Beyene",
  email: "estifanosbeyene21@gmail.com",
  title:
    "A passionate Full Stack Software Developer building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  img: {
    src: "/avatar.jpg",
    alt: "Estifanos Beyene Image",
  },
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

export const about = {
  // github: {
  //   username: "justEstif",
  //   link: "https://github.com/justEstif/",
  // },
  // discord: {
  //   username: "justCozz#4245",
  //   link: "https://discord.com/users/justCozz#4245",
  // },
  github: "justEstif",
  discord: "justCozz#4245",
  email: "estifanosbeyene21@gmail.com",
  status: "Available for hire",
  hobbies: ["biking"],
  bio: "I'm a web developer. I build user-friendly and responsive websites to help people and businesses meet their needs.",
  skills: [
    {
      name: "HTML",
      img: "/",
    },
  ],
};
