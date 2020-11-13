import React from "react";

function CommentItem({ id, text, deleteComment }) {
  return (
    <div>
      <p>{text}</p>
      <button
        onClick={() => {
          deleteComment(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default CommentItem;
