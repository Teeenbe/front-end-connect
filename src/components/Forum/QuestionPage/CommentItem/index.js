import React from "react";

function CommentItem({ comment, deleteFn, index }) {
  return (
    <div>
      <p>{comment}</p>
      <button
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
