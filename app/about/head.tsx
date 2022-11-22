import { head as oldHead } from "app/portfolio";
import React from "react";

type Props = {};

function Head({}: Props) {
  const head = { ...oldHead, title: "About - Estifanos Beyene" };
  return (
    <>
      <title>{head.title}</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta content={head.description} name="description" />
      <meta property="og:type" content={head.type} />
      <meta property="og:site_name" content="Estifanos Beyene" />
      <meta property="og:description" content={head.description} />
      <meta property="og:title" content={head.title} />
    </>
  );
}

export default Head;
