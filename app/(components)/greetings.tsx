import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { greetings } from "../portfolio";

function Greetings() {
  return (
    <div className="flex flex-col-reverse justify-between items-start w-full sm:flex-row">
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {greetings.name || "Name"}
        </h1>
        <h2 className="mb-4 text-gray-700 dark:text-gray-200">
          {greetings.title || "Title"}
          <span>
            <Link
              href="/about"
              className="italic text-blue-700 dark:text-blue-300"
            >
              {" "}
              More about me
            </Link>
          </span>
        </h2>

        <Link
          className="flex gap-4 items-center mb-16 text-lg text-green-700 dark:text-green-300 hover:text-green-500 group dark:hover:text-green-500"
          href={`mailto:${greetings.email}`}
        >
          <p className="font-bold tracking-wide">{"Let's get in touch"}</p>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="animate-bounce group-hover:animate-pulse"
          />
        </Link>
      </div>

      <div className="relative mb-8">
        <Image
          alt={greetings.img.alt}
          height={176}
          width={176}
          src={greetings.img.src}
          sizes="30vw"
          priority
          className="rounded-full filter grayscale"
        />
      </div>
    </div>
  );
}

export default Greetings;
