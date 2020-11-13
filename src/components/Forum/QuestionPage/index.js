import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function QuestionPage({ question, id }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  async function getComments() {
    const res = await fetch(`http://localhost:5000/forum/${id}`);
    const { payload } = await res.json();
    console.log(payload);
    setComments(payload);
  }

  useEffect(() => {
    getComments();
  }, []);

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

  async function removeComment(commentId) {
    const res = await fetch(`http://localhost:5000/forum/${id}/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    getComments();
  }

  return (
    <div id="questionSubmitBox">
      <p id="QuestionP">Question </p>
      <p className="question1">{question.question}</p>
      <p className="question1">{question.name}</p>
      <Comment id="CommentId" list={comments} deleteFn={removeComment} />
      <textarea
        id="comment"
        rows="5"
        cols="50"
        placeholder="Leave your Comment..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button id="forumButton" onClick={addComment}>
        Submit
      </button>
      {console.log(comments)}
    </div>
  );
}

export default QuestionPage;
