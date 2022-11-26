import { nanoid } from "nanoid";
import Link from "next/link";
import { contacts } from "app/data";
type Props = {};

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
