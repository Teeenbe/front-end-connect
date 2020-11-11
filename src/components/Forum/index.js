import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const questions = [
  {
    id: 0,
    name: "Tom Bennett",
    topic: "React",
    question: "",
  },
  {
    id: 1,
    name: "Jessica Wilson-Leigh",
    topic: "Functions",
    question: "",
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
    <div id="formSection">
      <h1 id="questionForum">Question Forum</h1>
      <List questionsArray={questionsArray} />
      <Form addQuestion={addQuestion} />
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
