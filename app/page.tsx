import React from "react";
import Image from "next/image";
import { TGreetings, greeting } from "./portfolio";

type Props = {};

function Page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <Greetings {...greeting} />
    </div>
  );
}
export default Page;

function Greetings(props: TGreetings) {
  return (
    <div className="flex flex-col-reverse justify-between items-start w-full sm:flex-row">
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {props.name || "Name"}
        </h1>
        <h2 className="mb-4 text-gray-700 dark:text-gray-200">
          {props.title || "Title"}
        </h2>
        <p className="mb-16 text-gray-600 dark:text-gray-400">
          {props.subtitle || "Subtitle"}
        </p>
      </div>
      <div className="relative mb-8">
        <Image
          alt={props.img.alt || "Img alt"}
          height={176}
          width={176}
          src={props.img.src || "/avatar.jpg"}
          sizes="30vw"
          priority
          className="rounded-full filter grayscale"
        />
      </div>
    </div>
  );
}
