import React, { Component } from 'react'
import Project from './Project';
import '../../css/projects.css'

import { CSSTransition }  from 'react-transition-group';
import { faReact, faAws, faAndroid, faJava, faGithub, faHtml5, faPhp, faCss3Alt, faNodeJs, faJs, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const FadeIn = ({in: inProp, children, delay}) => (
    
    <CSSTransition
        unmountOnExit
        in={inProp}
        timeout={delay}
        classNames='fadeIn'
        appear >
            {children}
    </CSSTransition>
);

const SlideIn = ({in: inProp, children, delay}) => (
    
    <CSSTransition
        unmountOnExit
        in={inProp}
        timeout={delay}
        classNames='slideIn'
        appear >
            {children}
    </CSSTransition>
);

export default class Projects extends Component {

    constructor() {
        super();
        this.state = {
            projects: [
                {
                    title: "Buzzdgame",
                    link: [
                        {
                            url: "https://github.com/SindreHa/Buzzdgame",
                            icon: faGithub
                        },
                        {
                            url: "https://buzzdgame.com/",
                            icon: faEye
                        }
                    ],
                    stack: [
                        {
                            icon: faReact, 
                            color: "#61dbfb"
                        },
                        {
                            icon: faNodeJs,
                            color: "#81c728"
                        },
                        {
                            icon: faCss3Alt,
                            color: "#0068bb"
                        },
                        {
                            icon: faAws, 
                            color: "#ff9900"
                        }
                    ]
                },
                {
                    title: "SHBilpleie",
                    link: [
                        {
                            url: "https://github.com/SindreHa/SHBilpleie",
                            icon: faGithub
                        },
                        {
                            url: "https://shbilpleie.no",
                            icon: faEye
                        }
                    ],
                    stack: [
                        {
                            icon: faReact, 
                            color: "#61dbfb"
                        },
                        {
                            icon: faNodeJs,
                            color: "#81c728"
                        },
                        {
                            icon: faCss3Alt,
                            color: "#0068bb"
                        }
                    ]
                },
                {
                    title: "Social Campus",
                    link: [
                        {
                            url: "https://github.com/SindreHa/SocialCampus",
                            icon: faGithub
                        }
                    ],
                    stack: [
                        {
                            icon: faHtml5, 
                            color: "#E44D26"
                        },
                        {
                            icon: faCss3Alt,
                            color: "#0068bb"
                        },
                        {
                            icon: faJsSquare,
                            color: "#f5bb2b"
                        },
                        {
                            icon: faPhp, 
                            color: "#8892be"
                        }
                    ]
                },
                {
                    title: "Mattilsynet Tilsynsrapporter",
                    link: [
                        {
                            url: "https://github.com/SindreHa/Mattilsynet-Tilsynsrapport-app",
                            icon: faGithub
                        }
                    ],
                    stack: [
                        {
                            icon: faAndroid, 
                            color: "#3DDC84"
                        },
                        {
                            icon: faJava, 
                            color: "#f89820"
                        }
                    ]
                },
                {
                    title: "Paint Applikasjon",
                    link: [
                        {
                            url: "https://github.com/SindreHa/Paint-in-Java",
                            icon: faGithub
                        }
                    ],
                    stack: [
                        {
                            icon: faJava, 
                            color: "#f89820"
                        }
                    ]
                }
            ],
            transition: true
        }
    }

    componentDidMount() {
    }

    scrollContainer = () => {
        const container = document.querySelector("#projects")
        console.log("klikk")

        container.scrollBy({ 
            left: 100, // could be negative value
            behavior: 'smooth' 
          });
    }

    render() {
        let delay = 350;
        return (
            <div id="projects-wrapper">
                <SlideIn in={this.state.transition} delay={0}>
                    <h1 onClick={() => this.scrollContainer()} id="projects-title">Prosjekter</h1>
                </SlideIn>
                <div id="projects">
                    {
                    this.state.projects.map((project, i) => { 
                        delay += 250;
                        return (
                        <FadeIn 
                            in={this.state.transition} delay={delay}
                            key={i}>
                            <Project project={project} i={i}/>
                        </FadeIn>
                        )})
                    }
                </div>
            </div>
        )
    }
}
