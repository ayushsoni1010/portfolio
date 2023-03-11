import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { AiOutlineAntDesign } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglecloud } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiChartdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiGoland } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandNuxt } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import { DiNpm } from "react-icons/di";

const skillDetails = [
  {
    name: "HTML",
    key: "html",
    icon: <AiFillHtml5 />,
    iconURL: "/assets/html-5.svg",
  },
  {
    name: "CSS",
    key: "css",
    icon: <FaCss3Alt />,
    iconURL: "/assets/css3.svg",
  },
  {
    name: "Java",
    key: "java",
    icon: <FaJava />,
    iconURL: "/assets/java.svg",
  },
  {
    name: "JavaScript",
    key: "js",
    icon: <SiJavascript />,
    iconURL: "/assets/javascript.svg",
  },
  {
    name: "Typescript",
    key: "ts",
    icon: <SiTypescript />,
    iconURL: "/assets/typescript.svg",
  },
  {
    name: "Go",
    key: "go",
    icon: <SiGoland />,
    iconURL: "/assets/golang.svg",
  },
  {
    name: "React.js",
    key: "react",
    icon: <FaReact />,
    iconURL: "/assets/react.svg",
  },
  {
    name: "Vue.js",
    key: "vue",
    icon: <FaVuejs />,
    iconURL: "/assets/vue-js.svg",
  },
  {
    name: "Redux",
    key: "redux",
    icon: <SiRedux />,
    iconURL: "/assets/redux.svg",
  },
  {
    name: "Next.js",
    key: "next",
    icon: <TbBrandNextjs />,
    iconURL: "/assets/next-js.svg",
  },
  {
    name: "Nuxt.js",
    key: "nuxt",
    icon: <TbBrandNuxt />,
    iconURL: "/assets/nuxt-js.svg",
  },
  {
    name: "Nest.js",
    key: "nest",
    icon: <SiNestjs />,
    iconURL: "/assets/nest-js.svg",
  },
  {
    name: "Node.js",
    key: "node",
    icon: <FaNodeJs />,
    iconURL: "/assets/nodejs.svg",
  },
  {
    name: "Express.js",
    key: "express",
    icon: <SiExpress />,
    iconURL: "/assets/express-js.svg",
  },
  {
    name: "firebase",
    key: "firebase",
    icon: <SiFirebase />,
    iconURL: "/assets/firebase.svg",
  },
  {
    name: "Syntactically Awesome Style Sheets",
    key: "sass",
    icon: <FaSass />,
    iconURL: "/assets/sass.svg",
  },
  {
    name: "TailwindCSS",
    key: "tailwind",
    icon: <SiTailwindcss />,
    iconURL: "/assets/tailwind-css.svg",
  },
  {
    name: "Post CSS",
    key: "postcss",
    icon: <SiPostcss />,
    iconURL: "/assets/postcss.svg",
  },
  {
    name: "MySQL",
    key: "mysql",
    icon: <SiMysql />,
    iconURL: "/assets/mysql.svg",
  },
  {
    name: "Prisma",
    key: "prisma",
    icon: <SiPrisma />,
    iconURL: "/assets/prisma.svg",
  },
  {
    name: "MongoDB",
    key: "mongodb",
    icon: <SiMongodb />,
    iconURL: "/assets/mongodb.svg",
  },
  {
    name: "Heroku",
    key: "heroku",
    icon: <SiHeroku />,
    iconURL: "/assets/heroku.svg",
  },
  {
    name: "Vercel",
    key: "vercel",
    icon: <SiVercel />,
    iconURL: "/assets/vercel.svg",
  },
  {
    name: "Netlify",
    key: "netlify",
    icon: <SiNetlify />,
    iconURL: "/assets/netlify.svg",
  },

  {
    name: "Amazon Web Services",
    key: "aws",
    icon: <FaAws />,
    iconURL: "/assets/amazon-web-services.svg",
  },
  {
    name: "Docker",
    key: "docker",
    icon: <FaDocker />,
    iconURL: "/assets/docker.svg",
  },
  {
    name: "Google Cloud Platform",
    key: "gcp",
    icon: <SiGooglecloud />,
    iconURL: "/assets/google-cloud.svg",
  },
  {
    name: "Chart.js",
    key: "chart",
    icon: <SiChartdotjs />,
    iconURL: "/assets/chartjs.svg",
  },
  {
    name: "Postman",
    key: "postman",
    icon: <SiPostman />,
    iconURL: "/assets/postman.svg",
  },
  {
    name: "Strapi",
    key: "strapi",
    icon: <SiStrapi />,
    iconURL: "/assets/strapi.svg",
  },
  {
    name: "Figma",
    key: "figma",
    icon: <FaFigma />,
    iconURL: "/assets/figma.svg",
  },
  {
    name: "Storybook",
    key: "storybook",
    icon: <SiStorybook />,
    iconURL: "/assets/storybook.svg",
  },
  {
    name: "AdobeXD",
    key: "adobe",
    icon: <SiAdobexd />,
    iconURL: "/assets/adobe-xd.svg",
  },
  {
    name: "NPM",
    key: "npm",
    icon: <DiNpm />,
    iconURL: "/assets/npm.svg",
  },
  {
    name: "Yarn",
    key: "yarn",
    icon: <FaYarn />,
    iconURL: "/assets/yarn.svg",
  },
  {
    name: "Git",
    key: "git",
    icon: <DiGit />,
    iconURL: "/assets/git.svg",
  },
  {
    name: "Chakra UI",
    key: "chakra-ui",
    icon: <SiChakraui />,
    iconURL: "/assets/chakra-ui.svg",
  },
  {
    name: "Styled-Components",
    key: "styled-components",
    icon: <SiStyledcomponents />,
    iconURL: "/assets/styled-components.svg",
  },
  {
    name: "Ant-Design",
    key: "ant-design",
    icon: <AiOutlineAntDesign />,
    iconURL: "/assets/ant-design.svg",
  },
];

export { skillDetails };
