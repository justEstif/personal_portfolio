export type TGreetings = {
  name: string;
  email: string;
  title: string;
  img: {
    src: string;
    alt: string;
  };
};

export type TBio = {
  year: string;
  description: string;
};

export type TContact = {
  name: string;
  username: string;
  link: string;
  icon: JSX.Element;
};

export type TSkill = {
  name: string;
  icon: JSX.Element;
};

export type TFormState = {
  subject: string;
  email: string;
  message: string;
};

export type THead = {
  title: string;
  description: string;
  type: string;
};

export type TFooter = {
  github: string;
};

export type TProjectCard = {
  title: string;
  description: string;
  techs: JSX.Element[];
  links: {
    link: string;
    icon: JSX.Element;
  }[];
  img: {
    src: string;
    alt: string;
  };
};
