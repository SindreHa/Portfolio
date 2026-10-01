import "./App.css";

import Homepage from "./components/Homepage";
import Nav from "./components/navbar/Nav";
import About from "./components/About";
import Portfolio from "./components/projects/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  /**
   * Metode som henter høyde av viewport minus nettleser sin toolbar
   */
  const getViewHeight = (): void => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  getViewHeight();

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/projects/*" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
