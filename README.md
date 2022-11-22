```ts
type techIcon = {
  name: string;
  img: {
    src: string;
    alt: string;
  };
};

type Project = {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  techIconsSrc: techIcon[];
  date: Date;
};
```
