import React, { useState } from "react";
import Comment from "../Comment";
import Delete from "../DeleteButton";

function QuestionPage({ question }) {
  const [comment, setComment] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <p>Question</p>
      <p>{question.question}</p>
      <p>{question.name}</p>
      <Comment text={comment} />
      <textarea
        id="comment"
        rows="5"
        cols="50"
        placeholder="Leave your Comment..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={() => setComment(text)}>Submit</button>
    </div>
  );
}

export default QuestionPage;
