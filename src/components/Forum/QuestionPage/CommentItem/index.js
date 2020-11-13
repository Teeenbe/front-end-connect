import React from "react";

function CommentItem({ commentId, text, deleteComment }) {
  return (
    <div id="commentItemId">
      <p id="commentP">{text}</p>
      <button
        id="deleteComment"
        onClick={() => {
          deleteComment(commentId);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default CommentItem;
