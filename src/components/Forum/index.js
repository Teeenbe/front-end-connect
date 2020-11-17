import React from "react";
import Form from "./Form";
import List from "./List";
import { BACKEND_URL } from "../../config";

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
  // async function getQuestions() {
  //   const res = await fetch("BACKEND_URL/forum");
  //   const { payload } = await res.json();
  //   console.log(payload);
  //   setQuestionsArray(payload);
  // }

  // useEffect(() => {
  //   getQuestions();
  // }, []);

  async function addQuestion(newQuestion) {
    const res = await fetch(`${BACKEND_URL}/forum`, {
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

  async function deleteQuestion(questionId) {
    const res = await fetch(`${BACKEND_URL}/forum/${questionId}`, {
      method: "DELETE",
    });
    const { success } = await res.json();
    if (success) {
      setQuestionsArray(questionsArray.filter(({ id }) => id !== questionId));
      console.log(questionsArray);
    }
    if (!success) {
      console.log("There was an error deleting the question!");
    }
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
