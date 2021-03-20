import React from "react";
import Project from "./Project";
import "../../css/projects.css";

import { CSSTransition } from "react-transition-group";
import {
  faReact,
  faAws,
  faAndroid,
  faJava,
  faGithub,
  faHtml5,
  faPhp,
  faCss3Alt,
  faNodeJs,
  faJsSquare,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
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
} from "../../resources";

const FadeIn = ({ in: inProp, children, delay }: any) => (
  <CSSTransition
    unmountOnExit
    in={inProp}
    timeout={delay}
    classNames="fadeIn"
    appear
  >
    {children}
  </CSSTransition>
);

const SlideIn = ({ in: inProp, children, delay }: any) => (
  <CSSTransition
    unmountOnExit
    in={inProp}
    timeout={delay}
    classNames="slideIn"
    appear
  >
    {children}
  </CSSTransition>
);

interface Link {
  url: string,
  icon: any,
  title: string,
}

interface Stack {
  icon: any,
  color: string,
}

interface Projects {
    title: string,
    image: any,
    description: string,
    themeColor: string,
    link: Link[],
    stack: Stack[],
}

interface AppState {
  projects: Projects[],
  transition: boolean
}

export default class Portfolio extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Buzzdgame",
          image: Buzzdgame,
          description: "Webapp / React / AWS",
          themeColor: "#0097a7",
          link: [
            {
              url: "https://github.com/SindreHa/Buzzdgame",
              icon: faGithub,
              title: "GitHub",
            },
            {
              url: "https://buzzdgame.com/",
              icon: faEye,
              title: "Nettside",
            },
          ],
          stack: [
            {
              icon: faReact,
              color: "#61dbfb",
            },
            {
              icon: faNodeJs,
              color: "#81c728",
            },
            {
              icon: faCss3Alt,
              color: "#0068bb",
            },
            {
              icon: faAws,
              color: "#ff9900",
            },
          ],
        },
        {
          title: "Husbanken",
          image: Kobo,
          description: "Angular / Spring / Cypress / TS",
          themeColor: "#ab3b0f",
          link: [
            {
              url:
                "https://www.husbanken.no/om-husbanken/fagomrader/kobo-kommunale-boliger/",
              icon: faEye,
              title: "Nettside",
            },
          ],
          stack: [
            {
              icon: faAngular,
              color: "#dd1b16",
            },
            {
              icon: faJsSquare,
              color: "#f5bb2b",
            },
            {
              icon: faCss3Alt,
              color: "#0068bb",
            },
            {
              icon: faJava,
              color: "#f89820",
            },
            {
              icon: faDatabase,
              color: "#055b83",
            },
          ],
        },
        {
          title: "SHBilpleie",
          image: ShBilpleie,
          description: "Webapp / React",
          themeColor: "#ab3b0f",
          link: [
            {
              url: "https://github.com/SindreHa/SHBilpleie",
              icon: faGithub,
              title: "GitHub",
            },
            {
              url: "https://shbilpleie.no",
              icon: faEye,
              title: "Nettside",
            },
          ],
          stack: [
            {
              icon: faReact,
              color: "#61dbfb",
            },
            {
              icon: faNodeJs,
              color: "#81c728",
            },
            {
              icon: faCss3Alt,
              color: "#0068bb",
            },
          ],
        },
        {
          title: "Social Campus",
          image: SocialCampus,
          description: "Webapp / JS / PHP / MySQL",
          themeColor: "#049ee5",
          link: [
            {
              url: "https://github.com/SindreHa/SocialCampus",
              icon: faGithub,
              title: "GitHub",
            },
          ],
          stack: [
            {
              icon: faHtml5,
              color: "#E44D26",
            },
            {
              icon: faCss3Alt,
              color: "#0068bb",
            },
            {
              icon: faJsSquare,
              color: "#f5bb2b",
            },
            {
              icon: faPhp,
              color: "#8892be",
            },
          ],
        },
        {
          title: "Social Campus",
          image: SocialCampusApp,
          description: "Android App / Java / MySQL",
          themeColor: "#049ee5",
          link: [
            {
              url: "https://github.com/SindreHa/SocialCampus-Android",
              icon: faGithub,
              title: "GitHub",
            },
          ],
          stack: [
            {
              icon: faAndroid,
              color: "#3DDC84",
            },
            {
              icon: faJava,
              color: "#f89820",
            },
            {
              icon: faDatabase,
              color: "#055b83",
            },
          ],
        },
        {
          title: "Mattilsynet",
          image: Mattilsynet,
          description: "Android App / Java",
          themeColor: "#d32e2d",
          link: [
            {
              url: "https://github.com/SindreHa/Mattilsynet-Tilsynsrapport-app",
              icon: faGithub,
              title: "GitHub",
            },
          ],
          stack: [
            {
              icon: faAndroid,
              color: "#3DDC84",
            },
            {
              icon: faJava,
              color: "#f89820",
            },
          ],
        },
        {
          title: "Quiz App",
          image: QuizApp,
          description: "Java / Spring Boot / React",
          themeColor: "#296177",
          link: [
            {
              url: "https://github.com/SindreHa/Quizapp",
              icon: faGithub,
              title: "GitHub",
            },
          ],
          stack: [
            {
              icon: faJava,
              color: "#f89820",
            },
            {
              icon: faReact,
              color: "#61dbfb",
            },
            {
              icon: faCss3Alt,
              color: "#0068bb",
            },
            {
              icon: faDatabase,
              color: "#055b83",
            },
          ],
        },
        {
          title: "Paint Applikasjon",
          image: Tegneprogram,
          description: "Java program / JavaFX",
          themeColor: "#ececec",
          link: [
            {
              url: "https://github.com/SindreHa/Paint-in-Java",
              icon: faGithub,
              title: "GitHub",
            },
          ],
          stack: [
            {
              icon: faJava,
              color: "#f89820",
            },
          ],
        },
      ],
      transition: true,
    };
  }

  componentDidMount() {}

  /* scrollContainer = () => {
    const container = document.querySelector("#projects");
    console.log("klikk");

    container ? container.scrollBy({
          left: 100, // could be negative value
          behavior: "smooth",
        }) 
      : undefined;
  }; */

  render() {
    let delay = 350;
    return (
      <div id="projects-wrapper">
        <SlideIn in={this.state.transition} delay={0}>
          <h1 id="projects-title">
            Portefølje
          </h1>
        </SlideIn>
        <div id="projects">
          {this.state.projects.map((project, i) => {
            delay += 250;
            return (
              <FadeIn in={this.state.transition} delay={delay} key={i}>
                <Project project={project}/>
              </FadeIn>
            );
          })}
        </div>
      </div>
    );
  }
}
