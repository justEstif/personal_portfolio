import React from "react";
import "../styles/globals.css";
import NavItem from "./(components)/navItem";

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="bg-gray-50 dark:bg-gray-900">
      <body>
        <NavItem href="/" text="Home" />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
