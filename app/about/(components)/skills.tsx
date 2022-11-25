"use client";
import { useState } from "react";
import { nanoid } from "nanoid";
import cn from "classnames";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import {
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
type Props = {};

const skills = [
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

const Skills = ({}: Props) => {
  const [hide, setHide] = useState(true);
  return (
    <section className="mb-8">
      <h2 className="flex gap-4 items-center mb-6 text-4xl font-bold tracking-tight text-black dark:text-white">
        Skills
        <button onClick={() => setHide(!hide)} className="text-2xl">
          {hide ? (
            <AiOutlinePlusSquare className="animate-bounce hover:animate-none" />
          ) : (
            <AiOutlineMinusSquare className="animate-bounce hover:animate-none" />
          )}
        </button>
      </h2>
      <ul className="grid grid-cols-3 gap-6 md:grid-cols-5">
        {skills.map((skill, i) => (
          <li
            key={nanoid()}
            className={cn("relative group", i > 3 && hide && "hidden")}
          >
            {skill.icon}
            <p className="flex absolute right-0 bottom-0 left-0 z-10 justify-center items-end text-lg font-semibold text-black bg-gray-200 opacity-0 duration-300 dark:text-white dark:bg-gray-900 group-hover:opacity-100">
              {skill.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
