import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Homepage from './components/Homepage'
import Nav from './components/navbar/Nav'

function App() {
  const [visited, setVisited] = useState(false)

  return (
    <Router>
      <Nav/>
      <Route exact path="/">
        <Homepage visited={visited} setVisited={setVisited}/>
      </Route>
    </Router>
  );
}

export default App;
