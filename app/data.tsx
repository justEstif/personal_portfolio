import {
  SiGithub,
  SiDiscord,
  SiGmail,
  SiArchlinux,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNeovim,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiYarn,
  SiVite,
  SiLinkedin,
  SiChakraui,
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  TBio,
  TContact,
  TFooter,
  TGreetings,
  THead,
  TProjectCard,
  TSkill,
} from "lib/types";
import { nanoid } from "nanoid";

/**
 * @description data for header
 * @file app/(components)/header.tsx
 */
export const head: THead = {
  title: "Estifanos Beyene – Developer, Engineer.",
  description: `Full-stack Developer, Mountain Bike Enthusiast`,
  type: "website",
};

/**
 * @description data for projects
 * @file app/(components)/footer.tsx
 */
export const footer: TFooter = {
  github: "https://github.com/justEstif",
};

/**
 * @description data for greetings
 * @file app/(components)/greetings.tsx
 */
export const greetings: TGreetings = {
  name: "Estifanos Beyene",
  email: "estifanosbeyene21@gmail.com",
  title:
    "A passionate full stack developer building web applications with typescript, reactjs, express, nextjs and some other cool libraries and frameworks.",
  img: {
    src: "/avatar.jpg",
    alt: "Estifanos Beyene Image",
  },
};

/**
 * @description data for bio
 * @file app/about/(components)/bio.tsx
 */
export const bios: TBio[] = [
  {
    year: "2000",
    description: "Born in Addis Ababa, Ethiopia",
  },
  {
    year: "2022",
    description: "Graduated with degree in Engineering and Math",
  },
  {
    year: "2022",
    description: "Learning full stack development from The Odin Project",
  },
];

/**
 * @description data for contacts
 * @file app/about/(components)/contact.tsx
 */
export const contacts: TContact[] = [
  {
    name: "Email",
    username: "estifanosbeyene21@gmail.com",
    link: "mailto:estifanosbeyene21@gmail.com",
    icon: <SiGmail />,
  },
  {
    name: "GitHub",
    username: "justEstif",
    link: "https://github.com/justEstif",
    icon: <SiGithub />,
  },
  {
    name: "LinkedIn",
    username: "Estifanos Beyene",
    link: "https://www.linkedin.com/in/estifanos-beyene-62940b1bb/",
    icon: <SiLinkedin />,
  },
  {
    name: "Discord",
    username: "justCozz#4245",
    link: "https://discord.com/users/justCozz#4245",
    icon: <SiDiscord />,
  },
];

/**
 * @description data for skill
 * @file app/about/(components)/skill.tsx
 */
export const skills: TSkill[] = [
  { name: "HTML", icon: <SiHtml5 className="block text-8xl" /> },
  { name: "CSS", icon: <SiCss3 className="block text-8xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="block text-8xl" /> },
  { name: "React", icon: <SiReact className="block text-8xl" /> },
  { name: "Express", icon: <SiExpress className="block text-8xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="block text-8xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="block text-8xl" /> },
  { name: "Next.JS", icon: <SiNextdotjs className="block text-8xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="block text-8xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="block text-8xl" /> },
  { name: "Neovim", icon: <SiNeovim className="block text-8xl" /> },
  { name: "Jest", icon: <SiJest className="block text-8xl" /> },
  { name: "Arch", icon: <SiArchlinux className="block text-8xl" /> },
  { name: "NPM", icon: <SiNpm className="block text-8xl" /> },
  { name: "Yarn", icon: <SiYarn className="block text-8xl" /> },
];

/**
 * @description data for contacts
 * @file app/about/(components)/status.tsx
 */
export const status: string = "Available for hire";

/**
 * @description data for contacts
 * @file app/project/(components)/status.tsx
 */
export const allProjectCards: TProjectCard[] = [
  {
    title: "Members Only",
    description:
      "A message board that limits the information based on jwt token.",
    links: [
      {
        link: "https://projectmembersonlyclient-production-b74e.up.railway.app/",
        icon: <FaExternalLinkAlt />,
      },
      {
        link: "https://github.com/justEstif/project_members_only_client",
        icon: <SiGithub />,
      },
    ],
    img: {
      src: "/projects/project.jpg", // in public/projects
      alt: "Screenshot of project",
    },
    techs: [
      <SiExpress className="w-8 h-8" key={nanoid()} />,
      <SiMongodb className="w-8 h-8" key={nanoid()} />,
      <SiReact className="w-8 h-8" key={nanoid()} />,
      <SiTypescript className="w-8 h-8" key={nanoid()} />,
      <SiVite className="w-8 h-8" key={nanoid()} />,
    ],
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone website with database of information related to movies, television programs and shows. Features: adding movies, updating/deleting movies, user registration and authentication, submitting reviews for movies, updating user info etc.",
    links: [
      {
        link: "https://project-final-javascript-id2lndy4a-justestif.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },
      {
        link: "https://github.com/justEstif/project-final-javascript",
        icon: <SiGithub />,
      },
    ],
    img: {
      src: "/projects/netflix.png", // in public/projects
      alt: "Screenshot of project",
    },
    techs: [<SiNextdotjs key={nanoid()} />],
  },

  {
    title: "Calculator",
    description:
      "A simple calculator manner of those calculators found at grocery stores. The layout of the app was crafted with CSS grid.",
    links: [
      {
        link: "https://project-calculator-khaki.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },
      {
        link: "https://github.com/justEstif/project_calculator",
        icon: <SiGithub />,
      },
    ],
    img: {
      src: "/projects/calculator.png",
      alt: "Screenshot of calculator project",
    },
    techs: [
      <SiJavascript key={nanoid()} />,
      <SiHtml5 key={nanoid()} />,
      <SiCss3 key={nanoid()} />,
    ],
  },
  {
    title: "Library App",
    description:
      "An application for storing book information using JavaScript. Using use Local Storage to store the bookmarks",
    links: [
      {
        link: "https://project-library-psi.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },

      {
        link: "https://github.com/justEstif/project_library",
        icon: <FaGithub />,
      },
    ],
    img: {
      src: "/projects/library.png",
      alt: "Screenshot of library",
    },
    techs: [
      <SiJavascript key={nanoid()} />,
      <SiHtml5 key={nanoid()} />,
      <SiCss3 key={nanoid()} />,
    ],
  },
  {
    title: "Tic-tac-toe",
    description:
      "Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) against an AI.",
    links: [
      {
        link: "https://project-tic-tac-toe-smoky.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },

      {
        link: "https://github.com/justEstif/project_tic_tac_toe",
        icon: <FaGithub />,
      },
    ],
    img: {
      src: "/projects/tic-tac-toe.png",
      alt: "Screenshot of tic-tac-toe",
    },
    techs: [
      <SiJavascript key={nanoid()} />,
      <SiHtml5 key={nanoid()} />,
      <SiCss3 key={nanoid()} />,
    ],
  },
  {
    title: "Etch-a-sketch",
    description:
      "A browser version of something between a sketchpad and an Etch-A-Sketch.",
    links: [
      {
        link: "https://project-etch-a-sketch-8zi57xkve-justestif.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },

      {
        link: "https://github.com/justEstif/project-Etch-a-Sketch",
        icon: <FaGithub />,
      },
    ],
    img: {
      src: "/projects/etch-a-sketch.png",
      alt: "Screenshot of etch-a-sketch",
    },
    techs: [
      <SiJavascript key={nanoid()} />,
      <SiHtml5 key={nanoid()} />,
      <SiCss3 key={nanoid()} />,
    ],
  },
  {
    title: "Restaurant page",
    description:
      "Created an entire web page from a design using the provided design.",
    links: [
      {
        link: "https://project-restaurant-page-4b4bl2dkn-justestif.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },

      {
        link: "https://github.com/justEstif/project_Restaurant_page",
        icon: <FaGithub />,
      },
    ],
    img: {
      src: "/projects/restaurant-page.png",
      alt: "Screenshot of project",
    },
    techs: [],
  },

  {
    title: "Weather App",
    description:
      "Created a weather forecast site using the weather API. Able to search for a specific location and toggle displaying the data in Fahrenheit or Celsius.",
    links: [
      {
        link: "https://odin-weather.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },

      {
        link: "https://github.com/justEstif/odin_weather",
        icon: <FaGithub />,
      },
    ],
    img: {
      src: "/projects/weather-app.png",
      alt: "Screenshot of weather app",
    },
    techs: [
      <SiReact key={nanoid()} />,
      <SiNextdotjs key={nanoid()} />,
      <SiChakraui key={nanoid()} />,
    ],
  },
  {
    title: "Sign up form",
    description: "A sign-up form for an imaginary service.",
    links: [
      {
        link: "https://project-sign-up-form-five.vercel.app/",
        icon: <FaExternalLinkAlt />,
      },

      {
        link: "https://github.com/justEstif/project_sign-up_form",
        icon: <FaGithub />,
      },
    ],
    img: {
      src: "/projects/sign-up-form.png",
      alt: "Screenshot of sign up form",
    },
    techs: [
      <SiJavascript key={nanoid()} />,
      <SiHtml5 key={nanoid()} />,
      <SiCss3 key={nanoid()} />,
    ],
  },
];

/**
 * @description data for projects
 * @file app/(components)/projects.tsx
 */
export const featuredProjectCards: TProjectCard[] = [
  allProjectCards[0],
  allProjectCards[0],
];
