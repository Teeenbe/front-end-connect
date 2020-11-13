import React from "react";

function CommentItem({ id, text, removeComment }) {
  return (
    <div>
      <p>{text}</p>
      <button
        onClick={() => {
          removeComment(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default CommentItem;
