import React from "react";

function ListItem({ Name, Topic, Question }) {
  return (
    <div>
      <h2>{Question}</h2>
      <p>{Name}</p>
      <p>{Topic}</p>
    </div>
  );
}

export default ListItem;
