import { head } from "app/data";
type Props = {};

const Head = ({}: Props) => {
  const title = "Projects - Estifanos Beyene";
  return (
    <>
      <title>{title}</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta content={head.description} name="description" />
      <meta property="og:type" content={head.type} />
      <meta property="og:site_name" content="Estifanos Beyene" />
      <meta property="og:description" content={head.description} />
      <meta property="og:title" content={title} />
    </>
  );
};

export default Head;
