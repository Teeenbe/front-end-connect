import React from "react";
import ListItem from "../ListItem";
import QuestionPage from "../QuestionPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function List({ questionsArray }) {
  return (
    //<Router>

      <div>
        {questionsArray.map((item, index) => {
          return (
            <div>
              <Link to ={`/Forum/${index}`}>
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

    //</Router>
          
  );
}

export default List;