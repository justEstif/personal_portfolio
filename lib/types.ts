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

export type TGreetings = {
  name: string;
  email: string;
  title: string;
  img: {
    src: string;
    alt: string;
  };
};

export type TFooter = {
  github: string;
  email: string;
};

export type TProjectCard = {
  title: string;
  slug: string;
  gradient: string;
  img: {
    src: string;
    alt: string;
  };
};

export type TProjects = TProjectCard[];

export type TBlogCard = {
  title: string;
  slug: string;
  date: Date;
};

export type TBlogCards = TBlogCard[];
