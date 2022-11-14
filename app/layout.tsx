import React from "react";
import "styles/globals.css"; // tailwind
import Footer from "./(components)/footer";
import NavBar from "./(components)/navBar";

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="bg-gray-50 dark:bg-gray-900">
      <body
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
