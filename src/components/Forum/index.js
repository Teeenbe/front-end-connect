import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function Forum() {
  const [questionsArray, setQuestionsArray] = useState([]);

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
      <List />
      <Form
        questionsArray={questionsArray}
        setQuestionsArray={setQuestionsArray}
      />
    </div>
  );
}
// function Input({ questionsArray }) {
//   const [text, setText] = useState("");

// const [toDo, setToDo] = useState([]);
// const addToDo = (text) => {
//   const newTodos = [...toDo, text];
//   console.log(newTodos);
//   setToDo(newTodos);
export default Forum;
