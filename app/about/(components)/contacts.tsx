import { nanoid } from "nanoid";
import Link from "next/link";
import { SiGithub, SiDiscord, SiGmail } from "react-icons/si";
type Props = {};

const contacts = [
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

const Contact = ({}: Props) => {
  return (
    <section className="mb-8">
      <h2 className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white">
        Contacts
      </h2>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={nanoid()} className="flex gap-4">
            <p className="font-semibold">{contact.name}</p>
            <Link
              href={contact.link}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-700"
            >
              {contact.username}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
