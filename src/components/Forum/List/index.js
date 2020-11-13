import React from "react";
import ListItem from "../ListItem";
import { Link } from "react-router-dom";

function List({ questionsArray, deleteQuestion }) {
  return (
    <div>
      {questionsArray.map((q) => {
        return (
          <div>
            <Link to={`/forum/${q.id}`}>
              <ListItem
                Name={q.name}
                Topic={q.topic}
                Question={q.question}
                key={q.id}
              />
            </Link>
            <button
              className="deleteQuestionButton"
              onClick={() => deleteQuestion(q.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
