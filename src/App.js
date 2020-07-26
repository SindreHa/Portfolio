import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Homepage from './components/Homepage'
import Nav from './components/navbar/Nav'

function App() {
  return (
    <Router>
      <Nav/>
      <Route exact path="/">
        <Homepage header="Sindre Haavaldsen"/>
      </Route>
    </Router>
  );
}

export default App;
