import React from "react";

function CommentItem ({ comment, deleteFn, editFn, index }){
    return (
        <div>
            <p>{comment}</p>
            <button onClick={() => {
                deleteFn(index);
            }}>Delete</button>
            <button onClick={() => {
                editFn(index);
            }}>Edit</button>
        </div>

    )
}

export default CommentItem;