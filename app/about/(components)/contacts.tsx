import { nanoid } from "nanoid";
import Link from "next/link";
import { SiGithub, SiDiscord, SiGmail } from "react-icons/si";
type Props = {};

const contacts = [
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
  {
    name: "Email",
    username: "estifanosbeyene21@gmail.com",
    link: "mailto:estifanosbeyene21@gmail.com",
    icon: <SiGmail />,
  },
];

const Contact = ({}: Props) => {
  return (
    <section className="mb-8">
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
        Contacts
      </h3>
      <ul>
        {contacts.map((contact) => (
          <li key={nanoid()}>
            {contact.name}
            <Link
              href={contact.link}
              className="ml-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-700"
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
