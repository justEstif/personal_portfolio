import React from "react";
import Greetings from "./(components)/greetings";
import Projects from "./(components)/projects";
import Blogs from "./(components)/blogs";

function Page() {
  return (
    <div className="flex flex-col justify-center items-start mx-auto max-w-2xl border-gray-200 dark:border-gray-700">
      <Greetings />
      <Projects />
      <Blogs />
    </div>
  );
}
export default Page;
