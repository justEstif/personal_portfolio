export type TGreetings = {
  name: string;
  title: string;
  subtitle: string;
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
