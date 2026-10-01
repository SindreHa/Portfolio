import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faAws,
  faAndroid,
  faJava,
  faHtml5,
  faPhp,
  faCss3Alt,
  faNodeJs,
  faJsSquare,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import {
  Buzzdgame,
  ShBilpleie,
  SocialCampus,
  SocialCampusApp,
  Mattilsynet,
  Tegneprogram,
  QuizApp,
  Kobo,
  Statnett,
} from "../../resources";

export interface ProjectLink {
  title: string;
  url: string;
}

export interface TechIcon {
  icon: IconDefinition;
  color: string;
}

export interface ProjectData {
  id: string;
  title: string;
  /** Lower comes first. */
  order: number;
  image: string;
  description: string;
  themeColor: string;
  links: ProjectLink[];
  stack: TechIcon[];
}

const tech = {
  react: { icon: faReact, color: "#61dbfb" },
  node: { icon: faNodeJs, color: "#81c728" },
  css: { icon: faCss3Alt, color: "#0068bb" },
  html: { icon: faHtml5, color: "#E44D26" },
  js: { icon: faJsSquare, color: "#f5bb2b" },
  php: { icon: faPhp, color: "#8892be" },
  angular: { icon: faAngular, color: "#dd1b16" },
  java: { icon: faJava, color: "#f89820" },
  android: { icon: faAndroid, color: "#3DDC84" },
  aws: { icon: faAws, color: "#ff9900" },
  database: { icon: faDatabase, color: "#055b83" },
} satisfies Record<string, TechIcon>;

const github = (repo: string): ProjectLink => ({
  title: "GitHub",
  url: `https://github.com/SindreHa/${repo}`,
});

const website = (url: string): ProjectLink => ({ title: "Nettside", url });

const projectList: ProjectData[] = [
  {
    id: "statnett",
    title: "Statnett",
    order: 1,
    image: Statnett,
    description: "Angular / Spring / Cypress / TS",
    themeColor: "#0fab36",
    links: [website("https://www.statnett.no/")],
    stack: [tech.angular, tech.js, tech.css, tech.java, tech.database],
  },
  {
    id: "husbanken",
    title: "Husbanken",
    order: 2,
    image: Kobo,
    description: "Angular / Spring / Cypress / TS",
    themeColor: "#ab3b0f",
    links: [website("https://www.husbanken.no/kobo/")],
    stack: [tech.angular, tech.js, tech.css, tech.java, tech.database],
  },
  {
    id: "buzzdgame",
    title: "Buzzdgame",
    order: 3,
    image: Buzzdgame,
    description: "Webapp / React / AWS",
    themeColor: "#0097a7",
    links: [github("Buzzdgame"), website("https://buzzdgame.com/")],
    stack: [tech.react, tech.node, tech.css, tech.aws],
  },
  {
    id: "mattilsynet",
    title: "Mattilsynet",
    order: 4,
    image: Mattilsynet,
    description: "Android App / Java",
    themeColor: "#d32e2d",
    links: [github("Mattilsynet-Tilsynsrapport-app")],
    stack: [tech.android, tech.java],
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    order: 5,
    image: QuizApp,
    description: "Java / Spring Boot / React",
    themeColor: "#296177",
    links: [github("Quizapp")],
    stack: [tech.java, tech.react, tech.css, tech.database],
  },
  {
    id: "social-campus-web",
    title: "Social Campus",
    order: 6,
    image: SocialCampus,
    description: "Webapp / JS / PHP / MySQL",
    themeColor: "#049ee5",
    links: [github("SocialCampus")],
    stack: [tech.html, tech.css, tech.js, tech.php],
  },
  {
    id: "paint",
    title: "Paint Applikasjon",
    order: 7,
    image: Tegneprogram,
    description: "Java program / JavaFX",
    themeColor: "#ececec",
    links: [github("Paint-in-Java")],
    stack: [tech.java],
  },
  {
    id: "shbilpleie",
    title: "SHBilpleie",
    order: 8,
    image: ShBilpleie,
    description: "Webapp / React",
    themeColor: "#ab3b0f",
    links: [github("SHBilpleie"), website("https://shbilpleie.no")],
    stack: [tech.react, tech.node, tech.css],
  },
  {
    id: "social-campus-android",
    title: "Social Campus",
    order: 9,
    image: SocialCampusApp,
    description: "Android App / Java / MySQL",
    themeColor: "#049ee5",
    links: [github("SocialCampus-Android")],
    stack: [tech.android, tech.java, tech.database],
  },
];

export const projects = [...projectList].sort((a, b) => a.order - b.order);
