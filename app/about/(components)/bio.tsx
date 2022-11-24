import { nanoid } from "nanoid";

type Props = {};

const bio = [
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

const Bio = ({ }: Props) => {
  return (
    <section className="mb-8">
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
        Bio
      </h3>
      <ul className="space-y-2">
        {bio.map((act) => (
          <li key={nanoid()} className="flex gap-4">
            <p className="font-semibold">{act.year}</p>
            <p>{act.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Bio;
