import React from "react";
import Skills from "./(components)/skills";
import Contact from "./(components)/contact";
import Status from "./(components)/status";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        About Me
      </h1>
      <Contact />
      <Status />
      <Skills />
    </div>
  );
}

export default Page;
