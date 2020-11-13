import React from "react";

function CommentItem({ id, text, deleteComment }) {
  return (
    <div id="commentItemId">
      <p id="commentP">{text}</p>
      <button
        id="deleteComment"
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
