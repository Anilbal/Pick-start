export interface Props {
  logo: string;
  title: string;
  techList: string;
  description: string;
  path: string;
}

export const TechStackList: Props[] = [
  {
    logo: "/tech/node.svg",
    title: "Node express with postgres",
    techList: "Node, Express, Postgres, Nodemon, Pg, Dotenv, Joi",
    description:
      "This backend uses Node.js as the runtime engine, Express for routing and handling requests, Postgres as the data store, with pg to connect to the database, dotenv for secure configuration, nodemon for automatic development restarts, and joi for robust data validation.",
    path: "/node-with-express-postgres",
  },
  {
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1603364914733/h0KAsRvrJ.png",
    title: "Next.js",
    techList: "React, SSR, App Router",
    description: "A full-stack React framework with file-based routing.",
    path: "/nextjs",
  },
  {
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1603364914733/h0KAsRvrJ.png",
    title: "TypeScript",
    techList: "Static Types, Interfaces, Generics",
    description: "A typed superset of JavaScript that compiles to JS.",
    path: "/typescript",
  },
  {
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1603364914733/h0KAsRvrJ.png",
    title: "Node.js",
    techList: "JavaScript, Express, APIs",
    description: "A runtime for building scalable server-side applications.",
    path: "/node",
  },
  {
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1603364914733/h0KAsRvrJ.png",
    title: "Tailwind CSS",
    techList: "Utility Classes, Responsive, Styling",
    description: "A utility-first CSS framework for fast UI development.",
    path: "/tailwind",
  },
  {
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1603364914733/h0KAsRvrJ.png",
    title: "MongoDB",
    techList: "NoSQL, Documents, Aggregation",
    description: "A document-based database for modern applications.",
    path: "/mongodb",
  },
];
