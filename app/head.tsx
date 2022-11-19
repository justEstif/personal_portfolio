import React from "react";

type Props = {};

function Head({}: Props) {
  const meta = {
    title: "Estifanos Beyene – Developer, Engineer.",
    description: `Full-stack Developer, Mountain Bike Enthusiast`,
    image: "https://leerob.io/static/images/lee-banner.png",
    type: "website",
  };

  return (
    <>
      <title>{meta.title}</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Estifanos Beyene" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
    </>
  );
}

export default Head;
