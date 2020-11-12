import React from "react";
import DeleteComment from "../DeleteButton";
import QuestionPage from "../QuestionPage";


function Comment({ text, setComment }) {
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setComment("")}>Delete</button>
    </div>
  );
}

export default Comment;
