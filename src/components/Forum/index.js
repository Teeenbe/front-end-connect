import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

function Forum() {
  const [questionsArray, setQuestionsArray] = useState(questions);

  function addQuestion(newQuestion) {
    const updatedQuestions = questionsArray.map((question) => ({
      ...question,
    }));
    updatedQuestions.push(newQuestion);
    setQuestionsArray(updatedQuestions);
  }

  return (
    <div>
      <h1 id="questionForum">Question Forum</h1>
      <List questionsArray={questionsArray} />
      <Form addQuestion={addQuestion} />
    </div>
  );
}

export default Forum;
