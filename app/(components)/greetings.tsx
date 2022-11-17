import Image from "next/image";
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
        </h2>
        <p className="mb-16 text-gray-600 dark:text-gray-400">
          {greetings.subtitle || "Subtitle"}
        </p>
      </div>
      <div className="relative mb-8">
        <Image
          alt={greetings.img.alt || "Img alt"}
          height={176}
          width={176}
          src={greetings.img.src || "/avatar.jpg"}
          sizes="30vw"
          priority
          className="rounded-full filter grayscale"
        />
      </div>
    </div>
  );
}

export default Greetings;
