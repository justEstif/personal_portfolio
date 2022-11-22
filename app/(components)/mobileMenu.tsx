"use client";
import { useState, useEffect } from "react";
import cn from "classnames";
import Link from "next/link";
import { FaGripLines, FaTimes } from 'react-icons/fa'
import useDelayedRender from "@/hooks/useDelayedRender";
import styles from "styles/mobile-menu.module.css";

type Props = {};

function MobileMenu({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(
    () =>
      function cleanup() {
        document.body.style.overflow = "";
      }
  );

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <FaGripLines
          className={cn(
            !isMenuOpen ? "block" : "hidden",
            "absolute w-5 h-5 text-gray-900 dark:text-gray-100"
          )}
        />
        <FaTimes
          className={cn(
            isMenuOpen ? "block" : "hidden",
            "absolute w-5 h-5 text-gray-900 dark:text-gray-100"
          )}
        />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-gray-100 dark:bg-gray-900",
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:text-gray-100 dark:border-gray-700"
            style={{ transitionDelay: "150ms" }}
          >
            <Link href="/" className="flex pb-4 w-auto">
              Home
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:text-gray-100 dark:border-gray-700"
            style={{ transitionDelay: "175ms" }}
          >
            <Link href="/project" className="flex pb-4 w-auto">
              Projects
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:text-gray-100 dark:border-gray-700"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/blog" className="flex pb-4 w-auto">
              Blog
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default MobileMenu;
