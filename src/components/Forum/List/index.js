import React, { useState } from "react";
import ListItem from "../ListItem";

const questionsArray = [
  {
    name: "Bryan",
    topic: "React",
    question: "sos",
  },
  {
    name: "Jess",
    topic: "Functions",
    question: "why is this not working?",
  },
];

function List() {
  return (
    <div>
      {questionsArray.map((item, index) => {
        return (
          <div>
            <ListItem
              Name={item.name}
              Topic={item.topic}
              Question={item.question}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default List;
