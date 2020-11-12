import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function QuestionPage({ question, id }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  // Sends GET request to API at question ID path and sets comments state to response data
  async function getComments() {
    const res = await fetch(`http://localhost:5000/forum/${id}`);
    const { payload } = await res.json();
    console.log(payload);
    setComments(payload);
  }

  // GETs comments on page load-up
  useEffect(() => {
    getComments();
  }, []);

  // Sends POST request to API at question ID path and calls getComments again
  async function addComment() {
    const commentsToPOST =
      comments === undefined
        ? [{ id: 0, text: text }]
        : [...comments, { id: comments.length, text: text }];
    setComments(commentsToPOST);
    const res = await fetch(`http://localhost:5000/forum/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ payload: commentsToPOST }),
    });
    const { payload } = await res.json();
    console.log(payload);
  }

  // Sends DELETE request to API at comment ID path and calls getComments again
  async function removeComment(commentId) {
    const res = await fetch(`http://localhost:5000/forum/${id}/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    getComments();
  }

  return (
    <div>
      <p>Question</p>
      <p>{question.question}</p>
      <p>{question.name}</p>
      <Comment list={comments} deleteFn={removeComment} />
      <textarea
        id="comment"
        rows="5"
        cols="50"
        placeholder="Leave your Comment..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={addComment}>Submit</button>
      {console.log(comments)}
    </div>
  );
}

export default QuestionPage;
