import React from "react";
import cn from "classnames";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import "styles/globals.css"; // tailwind
import Footer from "./(components)/footer";
import NavBar from "./(components)/navBar";
import { Inter } from "@next/font/google";
import ThemeProvider from "./(components)/themeProvider";

type Props = {
  children: React.ReactNode;
};

const interVariable = Inter();
config.autoAddCss = false;

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={cn("bg-gray-50 dark:bg-gray-900", interVariable.className)}
      >
        <ThemeProvider>
          <NavBar />
          <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
