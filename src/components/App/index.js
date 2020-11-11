import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Profiles from "../Profiles";
import Forum from "../Forum";
import Home from "../Home";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="Title" to="/">
            Code Harmony
          </Link>
          <div className="Sidebar">
            <Link className="Profiles" to="/profiles">
              Profiles
            </Link>
            <Link className="Forum" to="/forum">
              Forum
            </Link>
          </div>
        </nav>
        <Switch>
          <Route path="/profiles">
            <Profiles />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
