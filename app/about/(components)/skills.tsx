import { nanoid } from "nanoid";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
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
  { name: "TailwindCSS", icon: <SiTailwindcss className="block text-8xl" /> },
];

const Skills = ({}: Props) => {
  return (
    <section className="mb-8">
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
        Skills
      </h3>
      <ul className="grid grid-cols-3 gap-6 md:grid-cols-5">
        {skills.map((skill) => (
          <li key={nanoid()} className="relative group">
            {skill.icon}
            <p className="flex absolute right-0 bottom-0 left-0 z-10 justify-center items-end text-lg font-semibold text-black bg-gray-200 opacity-0 duration-300 dark:text-white dark:bg-gray-900 group-hover:opacity-100">
              {skill.name}
            </p>
          </li>
        ))}
      </ul>
      {/**
       * TODO Add a button for show more to limit how many skills are shown at once
       * limit it to 5 and then have a show less button
       */}
    </section>
  );
};

export default Skills;
