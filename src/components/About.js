import React, { Component } from 'react'
import '../css/about.css' 

import { CSSTransition }  from 'react-transition-group';

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

export default class About extends Component {

    constructor() {
        super();
        this.state = {
            title: "Om meg",
            p1: "Nyutdannet programutvikler med fokusområde på frontend webutvikling. God kompetanse innen språk som Java, JavaScript, HTML, CSS, PHP, SQL, React og Node. Har erfaring med prosjektarbeid utført i agile rammeverk.",
            p2: "Lærer nye ting raskt og er sterkt motivert for å utvide min erfaring og kompetanse innen nye teknologier og utviklingsmetoder. Tar stolthet i arbeidet mitt og streber alltid etter et sluttprodukt av høy kvalitet. Ønsker å ta del i en arbeidsplass der nye ideer blir verdsatt og tatt i betraktning.",
            transition: true
        }
    }

    render() {
        return (
            <div id="about">
                <div id="about-container">
                    <SlideIn in={this.state.transition} delay={0}>
                        <h1>{this.state.title}</h1>
                    </SlideIn>
                    <FadeIn 
                        in={this.state.transition} 
                        delay={650}>
                        <div>
                            <p>{this.state.p1}</p>
                            <p>{this.state.p2}</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        )
    }
}
