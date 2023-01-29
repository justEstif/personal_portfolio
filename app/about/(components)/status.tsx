import { status } from "app/data";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
type Props = {};

const Status = ({ }: Props) => {
  return (
    <section className="mb-8">
      <h2 className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white">
        Status
      </h2>
      <Link
        className="text-green-700 dark:text-green-300 hover:text-green-500 group dark:hover:text-green-500"
        href="/contact"
      >
        {status}
        {"  "}
        <FaEnvelope className="inline" />
      </Link>
    </section>
  );
};

export default Status;
