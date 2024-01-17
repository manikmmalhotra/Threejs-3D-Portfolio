import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
  noddy,
  nft,
  portfolio,
  npm

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AR Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Three.js",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Kylo Apps",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Outshades Digital Media",
    icon: logo,
    iconBg: "#383E56",
    date: "Feb 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "IEEE Student Branch",
    icon: logo,
    iconBg: "#383E56",
    date: "August 2019 - august 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Contributor",
    company_name: "Layer5",
    icon: logo,
    iconBg: "#383E56",
    date: "july 2022 - August 2022",
    points: [
      "Layer5 is powered by a growing community of collaborators representing industry leading, cloud native, open source software.",
      "I have Contributed to multiple projects in this Organization",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Manik | 3D Portfolio",
    description:
      "Immerse yourself in my 3D portfolio, crafted with React, Three.js, Vite, and styled with Tailwind CSS for a visually stunning experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/manikmmalhotra/Threejs-3D-Portfolio",
  },
  {
    name: "NFT-Cam",
    description:
      "• Aim is to animate 3d-nft’s with respect to the user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/manikmmalhotra/nft-cam",
  },
  {
    name: "Android Generator (npm package)",
    description:
      "It provides a generator to create and maintain a android application based on the latests frameworks and patterns used by the community.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "DAO",
        color: "green-text-gradient",
      },
      {
        name: "MVVM",
        color: "pink-text-gradient",
      },
    ],
    image: npm,
    source_code_link: "https://github.com/manikmmalhotra/generator-android-minks",
  },
  {
    name: "Noddy:Note Anything (1.29k Installs)",
    description:
      "Noddy is an easy to use notepad for notes, to-do lists, etc. You can use it anytime and anywhere",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "MVVM",
        color: "pink-text-gradient",
      },
    ],
    image: noddy,
    source_code_link: "https://github.com/manikmmalhotra/Noddy",
  },
];

export { services, technologies, experiences, testimonials, projects };
