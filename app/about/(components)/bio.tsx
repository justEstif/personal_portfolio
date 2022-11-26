import { nanoid } from "nanoid";
import { bios } from "app/data";

type Props = {};

const Bio = ({}: Props) => {
  return (
    <section className="mb-8">
      <h2 className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white">
        Bio
      </h2>
      <ul className="space-y-2">
        {bios.map((bio) => (
          <li key={nanoid()} className="flex gap-4">
            <p className="font-semibold">{bio.year}</p>
            <p>{bio.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Bio;
