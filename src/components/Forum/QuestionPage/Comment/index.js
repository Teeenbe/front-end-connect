import React from "react";
import CommentItem from "../CommentItem";

function Comment({ list, deleteFn }) {
  return (
    <div>
      <ul>
        {list?.map((item, index) => (
          <CommentItem comment={item.text} deleteFn={deleteFn} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default Comment;
