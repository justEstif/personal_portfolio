import React from "react";
import cn from "classnames";

import "styles/globals.css"; // tailwind
import Footer from "./(components)/footer";
import NavBar from "./(components)/navBar";
import { Inter } from "@next/font/google";
import ThemeProvider from "./(components)/themeProvider";

type Props = {
  children: React.ReactNode;
};

const interVariable = Inter();

function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={cn("bg-gray-50 dark:bg-gray-900", interVariable.className)}
      >
        <ThemeProvider>
          <div className="min-h-screen">
            <NavBar />
            <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
