import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route path="/resume" component={() => Resume()} />
                <Route path="/projects" component={Projects} />
                <Route exact path="/" component={About} />
                <Redirect to="/" />
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
