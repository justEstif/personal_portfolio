import React from "react";
import DarkModeToggle from "./darkModeToggle";
import MobileMenu from "./mobileMenu";
import NavItem from "./navItem";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex relative justify-between items-center pt-8 pb-8 mx-auto w-full max-w-2xl text-gray-900 bg-gray-50 bg-opacity-60 border-gray-200 sm:pb-16 dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div className="ml-[-0.60rem]">
          <MobileMenu />
          <NavItem href="/" text="Home" />
          <NavItem href="/guestbook" text="Guestbook" />
          <NavItem href="/dashboard" text="Dashboard" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/snippets" text="Snippets" />
        </div>
        <DarkModeToggle />
      </nav>
    </div>
  );
}

export default NavBar;
