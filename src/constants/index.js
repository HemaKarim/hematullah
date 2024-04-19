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
  tmu,
  school,
  diploma,
  angularjs,
  python,
  Csharp,
  flask,
  django,
  pg,
  linux,
  autocad,
  sw,
  matlab,
  zenik,
  tmulogo,
  gtech,
  chatapp,
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
    title: "Postgraduate School",
    description: "Georgia Institute of Technology",
    icon: gtech,
  },
  {
    title: "Postgraduate Degree",
    description: "Master of Science (MS): Computer Science",
    icon: diploma,
  },
  {
    title: "Undergraduate School",
    description: "Toronto Metropolitan University",
    icon: tmulogo,
  },
  {
    title: "Undergraduate Degree",
    description: "Bachelor of Engineering (BEng): Mechanical Engineering",
    icon: diploma,
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
    name: "Python",
    icon: python,
  },
  {
    name: "CSharp",
    icon: Csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MatLab",
    icon: matlab,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Django",
    icon: django,
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
    name: "PostgreSQL",
    icon: pg,
  },
  {
    name: "SolidWorks",
    icon: sw,
  },
  {
    name: "AutoCAD",
    icon: autocad,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "360 Engineering & Environmental Consulting Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2023 - March 2024",
    points: [
      "Utilized React to design and implement a user-friendly interface within Microsoft Teams for the company, streamlining the collection of well-site location data and licenses, and improving  productivity by 20%.",
      "Integrated with public databases using PostgreSQL to automate data retrieval and storage, ensuring secure handling of sensitive information and compliance with data protection regulations.",
      "Leveraged R programming language for predictive analytics, implementing Machine Learning models to generate accurate predictions exported to Excel or CSV files, and improving efficiency by 100%.",
    ],
  },
  {
    title: "Reliability, Maintainability and Safety Engineering Intern",
    company_name: "Bombardier Inc.",
    icon: tesla,
    iconBg: "#383E56",
    date: "August 2021 - August 2022",
    points: [
      "Collaborated with diverse cross-functional teams to successfully execute numerous projects, including Safety Assessments, Optimization initiatives, and Failure Mode and Effects Analyses (FMEAs).",
      "Delivered informative presentations and conducted training sessions  for colleagues and superiors, equipping them with oundational knowledge in tech domains such as Artificial Intelligence (AI), Machine Learning, and Deep Learning.",
      "Developed an Excel script that optimized calculations  for Safety Requirements and Airworthiness failure conditions on aircraft, reducing data entry and  calculation time by an impressive 300%.",
    ],
  },
  {
    title: "Web Developer/Unity Developer",
    company_name: "TechZenik",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2021 - August 2021",
    points: [
      "Developed a Unity WebGL game and seamlessly integrated it into the Angular front-end using C#, resulting in a 40% increase in product subscribers.",
      "Collaborated with back-end developers to integrate RESTful APIs and optimize application performance,while concurrently developing ASP.NET Core Web API endpoints, which resulted in a 250% boost in player retention. ",
      "Applied front-end development expertise to optimize user flow and experience, ensuring intuitive navigation and seamless interactions. Designed and constructed a user interface with JavaScript and React, enhancing overall user experience.",
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
    name: "Zeniks World",
    description:
      "Exciting platformer game developered from scratch with Unity for its game engine, and Django/Postgres for the backend",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: zenik,
    source_code_link:
      "https://www.youtube.com/watch?v=UhkaY5nPS7Y&ab_channel=TechZenikRoboticsandInformationSystems",
  },
  {
    name: "Chat App",
    description:
      "A Facebook chat like app that allows real time conversations with friends across the globe",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/HemaKarim/Chat-App-Draft",
  },
];

export { services, technologies, experiences, testimonials, projects };
