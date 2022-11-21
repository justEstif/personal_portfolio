import React from "react";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Blog
      </h1>
    </div>
  );
}

export default Page;
