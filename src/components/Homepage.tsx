import React from "react";
import "../css/homepage.css";
import { CSSTransition } from "react-transition-group";

import portrait from "../resources/portrait.jpg";

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

interface AppState {
  transition: boolean
}

export default class Homepage extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      transition: true,
    };
  }

  render() {
    return (
      <div id="homepage">
        <header>
          <SlideIn in={this.state.transition} delay={0}>
            <h1>Sindre Haavaldsen</h1>
          </SlideIn>
          <SlideIn in={this.state.transition} delay={200}>
            <p>Program- og webutvikler / Fullstack</p>
          </SlideIn>
        </header>
        <FadeIn in={this.state.transition} delay={850}>
          <div id="portrait">
            <img src={portrait} alt="Portrait" />
          </div>
        </FadeIn>
      </div>
    );
  }
}
