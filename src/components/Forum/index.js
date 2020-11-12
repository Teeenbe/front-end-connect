import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Forum({questionsArray, setQuestionsArray}) {

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
