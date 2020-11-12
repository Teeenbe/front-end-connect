import React, { useState } from "react";
import "./App.css";
import TitleImage from "./TitleImage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Profiles from "../Profiles";
import Forum from "../Forum";
import Home from "../Home";

import QuestionPage from "../Forum/QuestionPage";

const questions = [
  {
    id: 0,
    name: "Bryan",
    topic: "React",
    question: "sos",
  },
  {
    id: 1,
    name: "Jess",
    topic: "Functions",
    question: "why is this not working?",
  },
];

function App() {
  const [questionsArray, setQuestionsArray] = useState([questions]);

  return (
    <Router>
      <div className="App">
        <nav>
          <a href="/">
            <TitleImage id="TitleImage" />
          </a>
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

          {questionsArray.map((q, index) => {
            console.log(q, index);
            return (
              <Route path={`/forum/${index}`}>
                <QuestionPage question={q} />
              </Route>
            );
          })}

          <Route path="/forum">
            <Forum
              questionsArray={questionsArray}
              setQuestionsArray={setQuestionsArray}
            />
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

// Questions in the API
// Get questions and display - GET to /forum
// Add questions - update API data - POST to /forum
