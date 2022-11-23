import { nanoid } from "nanoid";

type Props = {};

const status = "Available for hire";
// const me =
//   "I'm a web developer. I build user-friendly and responsive websites to help people and businesses meet their needs.";
const bio = [
  {
    year: "2021 - Present",
    title: "The Odin Project",
    description: "Learning full stack development",
  },
  {
    year: "2000",
    title: "Birth",
    description: "",
  },
];
const Bio = ({}: Props) => {
  return (
    <section className="mb-8">
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
        Bio
      </h3>
      <ul>
        {bio.map((event) => (
          <li key={nanoid()}>{event.year}</li>
        ))}
      </ul>

      <p>Status: {status}</p>
    </section>
  );
};

export default Bio;
