import React from "react";
import "../css/homepage.css";
import { SlideIn, FadeIn } from "./Transitions";

import portrait from "../resources/portrait.jpg";

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
