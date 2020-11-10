import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Profiles from "../Profiles";
import Forum from "../Forum";
import Home from "../Home";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <h1>
            <Link to="/">Code Harmony</Link>
          </h1>
          <ul>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
          </ul>
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
