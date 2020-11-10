import React, { useState } from "react";
import Form from "../Form";

function Forum({}) {
  const [questionsArray, setQuestionsArray] = useState([]);
  return (
    <Form
      questionsArray={questionsArray}
      setQuestionsArray={setQuestionsArray}
    />
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
