import React from "react";
import Image from "next/image";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-start pb-16 mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <Greetings />
    </div>
  );
}
export default Page;

function Greetings() {
  return (
    <div className="flex flex-col-reverse items-start w-full sm:flex-row">
      <div className="flex flex-col flex-grow pr-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Name
        </h1>
        <h2 className="mb-4 text-gray-700 dark:text-gray-200">Title</h2>
        <p className="mb-16 text-gray-600 dark:text-gray-400">Subtitle</p>
      </div>
      <div className="relative mr-auto mb-8 w-36 md:w-44">
        <Image
          alt="Avatar Image"
          height={176}
          width={176}
          src="/avatar.jpg"
          sizes="30vw"
          priority
          className="rounded-full filter grayscale"
        />
      </div>
    </div>
  );
}
