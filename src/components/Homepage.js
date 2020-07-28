import React, { Component } from 'react'
import '../css/homepage.css'
import { CSSTransition }  from 'react-transition-group';

import portrait from '../resources/portrait.jpg'

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

export default class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            transition: true
        }
    }

    render() {
        return (
            <div id="homepage">
                <header>
                    <SlideIn in={this.state.transition} delay={0}>
                        <h1>
                            Sindre Haavaldsen
                        </h1>
                    </SlideIn>
                    <SlideIn in={this.state.transition} delay={200}>
                        <p>Webutvikler / Frontend</p>
                    </SlideIn>
                </header>
                <FadeIn in={this.state.transition} delay={850}>
                    <div id="portrait">
                        <img src={portrait} alt="Portrait"/>
                    </div>
                </FadeIn>
                
            </div>
        )
    }
}
