import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

function QuestionPage({ question, id }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  // Sends GET request to API at question ID path and sets comments state to response data
  async function getComments() {
    console.log(id);
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
  async function addComment(newComment) {
    // const commentsToPOST =
    //   comments === undefined
    //     ? [{ text: text, question_id: id }]
    //     : [...comments, { text: text, question_id: id }];
    // setComments(commentsToPOST);
    const res = await fetch(`http://localhost:5000/forum/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ payload: newComment }),
    });
    const { success } = await res.json();
    if (success) {
      const updatedComments = comments.map((comment) => ({ ...comment }));
      updatedComments.push({ ...newComment });
      console.log(updatedComments);
      setComments(updatedComments);
    }
    if (!success) {
      console.log("There was an error adding the comment!");
    }
  }

  // Sends DELETE request to API at comment ID path and calls getComments again
  async function deleteComment(commentId) {
    const res = await fetch(`http://localhost:5000/forum/${id}/${commentId}`, {
      method: "DELETE",
    });
    const { success } = await res.json();
    if (success) {
      setComments(comments.filter(({ id }) => id !== commentId));
      console.log(comments);
    }
    if (!success) {
      console.log("There was an error deleting the comment!");
    }
  }

  return (
    <div id="questionSubmitBox">
      <p id="QuestionP">Question</p>
      <p className="question1">{question.question}</p>
      <p className="question1">{question.name}</p>
      <ul className="commentDiv">
        {comments?.map(({ id, text }) => {
          return (
            <CommentItem
              id="CommentId"
              commentId={id}
              text={text}
              deleteComment={deleteComment}
            />
          );
        })}
      </ul>
      {/* <Comment list={comments} deleteFn={removeComment} /> */}
      <textarea
        id="comment"
        rows="5"
        cols="50"
        placeholder="Leave your Comment..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        id="forumButton"
        onClick={() => addComment({ text: text, question_id: id })}
      >
        Submit
      </button>
      {console.log(comments)}
    </div>
  );
}

export default QuestionPage;
