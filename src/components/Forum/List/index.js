import React, { useState } from "react";
import ListItem from "../ListItem";

const questionsArray = [
  {
    name: "Bryan",
    topic: "if statement",
    question: "WHY?",
  },
  {
    name: "Jess",
    topic: "functions",
    question: "why is this not working?",
  },
];

function List() {
  return (
    <div>
      {questionsArray.map((item, index) => {
        return (
          <ListItem
            Name={item.name}
            Topic={item.topic}
            Question={item.question}
            key={index}
          />
        );
      })}
      ;
    </div>
  );
}

export default List;
