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
