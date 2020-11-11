import React from "react";
import ListItem from "../ListItem";

function List({ questionsArray }) {
  return (
    <div>
      {questionsArray.map((item) => {
        return (
          <div>
            <ListItem
              Name={item.name}
              Topic={item.topic}
              Question={item.question}
              key={item.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default List;
