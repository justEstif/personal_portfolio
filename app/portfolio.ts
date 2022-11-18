import { TGreetings, TProjects } from "lib/types";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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

export const projects: TProjects = [
  {
    title: "Instagram Clone",
    slug: "instagram-clone",
    gradient:
      "border-gradient-br-light-blue-gray-50  dark:border-gradient-br-light-blue-gray-900",
    icon: faInstagram,
  },
];
