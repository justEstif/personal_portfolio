import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { greetings } from "../data";

function Greetings() {
  return (
    <div className="flex flex-col-reverse justify-between items-start w-full sm:flex-row">
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {greetings.name}
        </h1>
        <h2 className="mb-4 text-gray-700 dark:text-gray-200">
          {greetings.title}
          <Link
            href="/about"
            className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-700"
          >
            More about me
          </Link>
        </h2>

        <Link
          className="flex gap-4 items-center mb-16 text-lg text-green-700 dark:text-green-300 hover:text-green-500 group dark:hover:text-green-500"
          href="/contact"
        >
          <p className="font-bold tracking-wide">Let&#39;s get in touch</p>
          <FaEnvelope className="animate-bounce group-hover:animate-pulse" />
        </Link>
      </div>

      <div className="overflow-hidden relative w-full h-64">
        <Image
          src={greetings.img.src}
          alt={greetings.img.alt}
          fill={true}
          className="block object-contain w-full"
        />
      </div>
    </div>
  );
}

export default Greetings;
