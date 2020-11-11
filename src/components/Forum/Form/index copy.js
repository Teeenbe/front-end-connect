import React, { useState } from "react";
import "./Form.css";


function Form({addQuestion}) {
  const [nameInput, setNameInput] = useState('');
  const [topicInput, setTopicInput] = useState('');
  const [questionInput, setQuestionInput] = useState('');


  function handleSubmit(event) {
    const updateState = { name:nameInput, topic:topicInput, question:questionInput }
    console.log(updateState);
    event.preventDefault();
    addQuestion(updateState);
    event.target.reset();
  }

  return (
    <form id="Submit" onSubmit = {(event) => handleSubmit(event)}>
      <fieldset>
        <legend>Submit a new question:</legend>
        <br />
        <label id="Name">
          Name:
          <input id="NameInput" type="text" name="name" onChange={(e) => setNameInput(e.target.value)}/>
        </label>
        <br />
        <select id="topicInput" onChange={(e) => setTopicInput(e.target.value)}>
          <option value="">--Please select question topic--</option>
          <option value="if-statement">If Statement</option>
          <option value="Arrays">Arrays</option>
          <option value="Loops">Loops</option>
          <option value="React">React</option>
          <option value="Objects">Objects</option>
          <option value="Functions">Functions</option>
        </select>
        <br />
        <input
          type="submit"
          value="Submit"
          id="Submit"
        />
        <br />
        <textarea
          id="questionInput"
          rows="5"
          cols="50"
          placeholder="Write your question here..."
          onChange={(e) => setQuestionInput(e.target.value)}
        ></textarea>
        <br />
      </fieldset>
    </form>
  );
}

export default Form;
