import React from "react";
import Link from "next/link";
import { SiJavascript } from "react-icons/si";
import { about } from "../portfolio";

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
        <ul className="space-y-4 list-disc [&>*]:ml-12">
          <li>
            {"GitHub:  "}
            <Link
              href={`https://github.com/${about.github}/`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-700"
            >
              @{about.github}
            </Link>
          </li>
          <li>
            {"Email:  "}
            <Link
              href={`mailto:${about.email}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-700"
            >
              @{about.email}
            </Link>
          </li>

          <li>
            {"Discord:  "}
            <Link
              href={`https://discord.com/users/${about.discord}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-700"
            >
              @{about.discord}
            </Link>
          </li>
          <li>TODO Telegram</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
          Bio
        </h3>

        <ul className="space-y-4 list-disc [&>*]:ml-12">
          <li>Did things 1</li>
          <li>Did things 2</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
          Skills
        </h3>

        <ul className="space-y-4 list-disc [&>*]:ml-12">
          <li>
            <SiJavascript />
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
          Status
        </h3>
        <p>{about.status}</p>
      </section>
    </div>
  );
}

export default Page;
