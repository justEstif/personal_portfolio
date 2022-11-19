import { TFooter, TGreetings, TProjects } from "lib/types";

export const greetings: TGreetings = {
  name: "Estifanos Beyene",
  title:
    "A passionate Full Stack Software Developer building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  subtitle: "Looking for full time work as Software Developer",
  img: {
    src: "/avatar.jpg",
    alt: "Estifanos Beyene Image",
  },
};

export const footer: TFooter = {
  github: "https://github.com/justEstif",
};
export const projects: TProjects = [
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
