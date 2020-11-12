import React, { useState } from "react";
import Comment from "./Comment";

function QuestionPage({ question }) {
  const [comment, setComment] = useState([{
    index: 0,
    text: "no comment yet" 
  }]);
  const [text, setText] = useState("");

  function removeComment(index){
    setComment([
      ...comment.slice(0,index),
      ...comment.slice(index+1)
    ])
  }

  return (
    <div>
      <p>Question</p>
      <p>{question.question}</p>
      <p>{question.name}</p>
      <Comment list={comment} deleteFn = {removeComment} />
      <textarea
        id="comment"
        rows="5"
        cols="50"
        placeholder="Leave your Comment..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={() => setComment([...comment, { index: comment.length, text: text }])}>Submit</button>
      {console.log(comment)}
    </div>
  );
}

export default QuestionPage;
