import React from "react";
import "./Form.css";

function Form({ setQuestionsArray }) {
  function handleClick() {
    setQuestionsArray([]);
  }
  return (
    <form id="Submit">
      <fieldset>
        <legend>Submit a new question:</legend>
        <br />
        <label id="Name">
          Name:
          <input id="NameInput" type="text" name="name" />
        </label>
        <br />
        <select id="choose-topic">
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
          onClick={() => {
            handleClick();
          }}
          type="submit"
          value="Submit"
          id="Submit"
        />
        <br />
        <textarea
          id="question"
          rows="5"
          cols="50"
          placeholder="Write your question here..."
        ></textarea>
        <br />
      </fieldset>
    </form>
  );
}

export default Form;
