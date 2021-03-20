import React from "react";
import "./App.css";
import { createBrowserHistory } from 'history';

import Homepage from "./components/Homepage";
import Nav from "./components/navbar/Nav";
import About from "./components/About";
import Portfolio from "./components/projects/Portfolio";
import { Route, Router } from "react-router-dom";
const history = createBrowserHistory();

function App(): JSX.Element {
  /**
   * Metode som henter høyde av viewport minus nettleser sin toolbar
   */
  const getViewHeight = (): void => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  getViewHeight();

  return (
    <Router history={history}>
      <Nav />
      <Route exact path="/">
        <Homepage  />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Portfolio />
      </Route>
    </Router>
  );
}

export default App;
