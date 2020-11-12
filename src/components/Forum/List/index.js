import React from "react";
import ListItem from "../ListItem";
import { Link } from "react-router-dom";

function List({ questionsArray }) {
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
          </div>
        );
      })}
    </div>
  );
}

export default List;
