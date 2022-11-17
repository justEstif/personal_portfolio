export type TGreetings = {
  name: string;
  title: string;
  subtitle: string;
  img: {
    src: string;
    alt: string;
  };
};

export const greeting: TGreetings = {
  name: "Estifanos Beyene",
  title:
    "A passionate Full Stack Software Developer building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  subtitle: "Looking for full time work as Software Developer",
  img: {
    src: "/avatar.jpg",
    alt: "Estifanos Beyene Image",
  },
};
