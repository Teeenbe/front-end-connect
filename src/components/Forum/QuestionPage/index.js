import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function QuestionPage({ question, id }) {
  const [comments, setComments] = useState([
    {
      index: 0,
      text: "no comment yet",
    },
  ]);
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

  async function removeComment(commentId) {
    const res = await fetch(`http://localhost:5000/forum/${id}/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    getComments();
    // setComments([...comments.slice(0, id), ...comments.slice(id + 1)]);
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
      <button
        onClick={() =>
          setComments([...comments, { id: comments.length, text: text }])
        }
      >
        Submit
      </button>
      {console.log(comments)}
    </div>
  );
}

export default QuestionPage;
