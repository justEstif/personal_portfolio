import React from "react";
import DarkModeToggle from "./darkModeToggle";
// import MobileMenu from "./mobileMenu";
import NavItem from "./navItem";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="flex flex-col justify-center p-8">
      <nav className="flex relative justify-between items-center mx-auto w-full max-w-2xl text-gray-900 bg-gray-50 bg-opacity-60 border-gray-200 dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700">
        <div className="ml-[-0.60rem]">
          {/* <MobileMenu /> */}
          <div className="flex gap-3">
            <NavItem href="/" text="Home" />
            <NavItem href="/project" text="Project" />
            <NavItem href="/blog" text="Blog" />
          </div>
        </div>

        <DarkModeToggle />
      </nav>
    </div>
  );
}

export default NavBar;
