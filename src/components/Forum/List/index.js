import React from "react";
import ListItem from "../ListItem";
import { Link } from "react-router-dom";

function List({ questionsArray, deleteQuestion }) {
  return (
    <div>
      {questionsArray.map((item, index) => {
        return (
          <div>
            <Link to={`/forum/${index}`}>
              <ListItem
                Name={item.name}
                Topic={item.topic}
                Question={item.question}
                key={item.id}
              />
            </Link>
            <button onClick={() => deleteQuestion(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
