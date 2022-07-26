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
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiYarn,
} from "react-icons/si";
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
    year: "2021",
    description: "Learning full stack development from The Odin Project",
  },
  {
    year: "2021",
    description: "Graduated with degree in Engineering and Math",
  },
  {
    year: "2022",
    description: "Working as a freelance web developer",
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
  { name: "SQLite", icon: <SiSqlite className="block text-8xl" /> },
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
    description: "This is the description",
    links: [
      {
        link: "https://github.com/justEstif/project_members_only_client",
        icon: <SiGithub />,
      },
    ],
    img: {
      src: "/projects/project.jpg", // in public/projects
      alt: "Screenshot of project",
    },
    techs: [<SiExpress key={nanoid()} />],
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
