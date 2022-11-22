import { about } from "../portfolio";
import { nanoid } from "nanoid";
import React from "react";
import Link from "next/link";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        About Me
      </h1>

      <section className="mb-8">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
          Links
        </h3>
        <p className="flex gap-4">
          GitHub:
          <Link href={`https://github.com/${about.github}/`}>
            @{about.github}
          </Link>
        </p>
        <p className="flex gap-4">
          Discord:
          <Link href={`https://discord.com/users/${about.discord}`}>
            @{about.discord}
          </Link>
        </p>
      </section>

      <section className="mb-8">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
          Bio
        </h3>
      </section>

      <section className="mb-8">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
          Skills
        </h3>
      </section>

      <section className="mb-8">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
          Status
        </h3>
      </section>
    </div>
  );
}

export default Page;
