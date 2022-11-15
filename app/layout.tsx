import React from "react";
import cn from "classnames";
import "styles/globals.css"; // tailwind
import Footer from "./(components)/footer";
import NavBar from "./(components)/navBar";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "./providers";

type Props = {
  children: React.ReactNode;
};

const interVariable = Inter();

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          <NavBar />
          <main
            id="skip"
            className={cn(
              "flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900",
              interVariable.className
            )}
          >
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
