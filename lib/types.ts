import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type TGreetings = {
  name: string;
  title: string;
  subtitle: string;
  img: {
    src: string;
    alt: string;
  };
};

export type TProjectCard = {
  title: string;
  slug: string;
  gradient: string;
  icon: IconDefinition;
};

export type TProjects = TProjectCard[];
