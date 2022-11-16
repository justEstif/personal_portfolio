"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type Props = {};

/** button for toggling dark mode*/
function DarkModeToggle({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []); // After mounting, we have access to the theme
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex justify-center items-center w-9 h-9 bg-gray-200 rounded-lg ring-gray-300 transition-all dark:bg-gray-600 hover:ring-2"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "dark" ? (
        <FontAwesomeIcon
          icon={faSun}
          className="w-5 h-5 text-gray-800 dark:text-gray-200"
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="w-5 h-5 text-gray-800 dark:text-gray-200"
        />
      )}
    </button>
  );
}

export default DarkModeToggle;
