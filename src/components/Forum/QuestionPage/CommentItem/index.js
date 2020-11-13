import React from "react";

function CommentItem({ comment, deleteFn, index }) {
  return (
    <div id="commentItemId">
      <p id="commentP">{comment}</p>
      <button
        id="deleteComment"
        onClick={() => {
          deleteFn(index);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default CommentItem;
