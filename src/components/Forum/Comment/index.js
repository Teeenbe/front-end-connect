import React from "react";
import Delete from "../DeleteButton";

function Comment({ text }) {
  return (
    <div>
      <p>{text}</p>
      <button>Delete Comment</button>
    </div>
  );
}

export default Comment;
