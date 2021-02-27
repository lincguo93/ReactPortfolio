import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Navigationbar from "./components/Nav/index";
import Welcome from "./pages/Welcome";
import FooterPage from "./components/Footer/footer"
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navigationbar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <FooterPage />
      </>
    </Router>
  );
}

export default App;
