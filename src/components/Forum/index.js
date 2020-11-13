import React, { useEffect } from "react";
import Form from "./Form";
import List from "./List";

// const questions = [
//   {
//     id: 0,
//     name: "Tom Bennett",
//     topic: "React",
//     question: "",
//   },
//   {
//     id: 1,
//     name: "Jessica Wilson-Leigh",
//     topic: "Functions",
//     question: "",
//   },
// ];

function Forum({ questionsArray, setQuestionsArray }) {
  async function getQuestions() {
    const res = await fetch("http://localhost:5000/forum/");
    const { payload } = await res.json();
    console.log(payload);
    setQuestionsArray(payload);
  }

  // useEffect(() => {
  //   getQuestions();
  // }, []);

  async function addQuestion(newQuestion) {
    const res = await fetch("http://localhost:5000/forum/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload: newQuestion }),
    });
    const { success } = await res.json();
    if (success) {
      const updatedQuestions = questionsArray.map((question) => ({
        ...question,
      }));
      updatedQuestions.push({ ...newQuestion });
      console.log(updatedQuestions);
      setQuestionsArray(updatedQuestions);
    }
    if (!success) {
      console.log("There was an error adding the question!");
    }
  }

  async function deleteQuestion(id) {
    const res = await fetch(`http://localhost:5000/forum/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    getQuestions();
  }

  return (
    <div id="formSection">
      <h1 id="questionForum">Question Forum</h1>
      <List questionsArray={questionsArray} deleteQuestion={deleteQuestion} />
      <Form addQuestion={addQuestion} />
    </div>
  );
}

export default Forum;
