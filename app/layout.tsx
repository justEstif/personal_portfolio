import React from "react";
import "../styles/globals.css"

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="en" className='bg-gray-50 dark:bg-gray-900'>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
