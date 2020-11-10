import React, { useState } from "react";
import "./Form.css";

const mentorExperience = (
  <select id="experience">
    <option value="">How many years?</option>
    <option value="0-5">0 - 5</option>
    <option value="5-10">5 - 10</option>
    <option value="10-15">10 - 15</option>
    <option value="15+">15 +</option>
  </select>
);

const menteeExperience = (
  <select id="experience">
    <option value="">Any previous experience?</option>
    <option value="none">None</option>
    <option value="a-little">A little</option>
    <option value="a-lot">A lot</option>
    <option value="extensive">Extensive</option>
  </select>
);

const aNewProfile = {
  id: 0,
  type: "",
  firstName: "",
  lastName: "",
  aboutMe: "",
  interests: [],
  experience: "",
  emailAddress: "",
};

function NewProfileForm({ addProfile }) {
  const [mentorOrMentee, setMentorOrMentee] = useState();
  const [newProfile, setNewProfile] = useState();

  const interests = [
    "Front-end",
    "Back-end",
    "DevOps",
    "Node",
    "JavaScript",
    "Game development",
  ];

  const [interestsChecked, setInterestsChecked] = useState(
    new Array(interests.length).fill(false)
  );

  const interestsIndexes = [];
  interestsChecked.forEach((v, index) => {
    if (v === true) {
      interestsIndexes.push(index);
    }
  });
  const tickedInterests = interests.filter((interest, index) => {
    if (interestsIndexes.includes(index)) {
      return interest;
    }
  });
  console.log(tickedInterests);

  function handleChange(i) {
    const updatedBooleans = [...interestsChecked];
    updatedBooleans[i] = !updatedBooleans[i];
    setInterestsChecked(updatedBooleans);
  }

  function experienceInput(m) {
    if (m === "mentor") {
      setMentorOrMentee(mentorExperience);
    } else if (m === "mentee") {
      setMentorOrMentee(menteeExperience);
    } else {
      setMentorOrMentee(null);
    }
  }

  function handleSubmit() {
    setNewProfile();
  }

  return (
    <form onSubmit={() => handleSubmit()}>
      <fieldset>
        <legend>New Profile:</legend>
        <label htmlFor="mentor-or-mentee">
          Mentor or Mentee?
          <br />
          <select
            className="drop-down"
            id="mentor-or-mentee"
            onChange={(e) => experienceInput(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            <option value="mentor">Mentor</option>
            <option value="mentee">Mentee</option>
          </select>
        </label>
        <br />
        <label htmlFor="first-name">
          First Name
          <br />
          <input
            id="first-name"
            onChange={(event) => console.log(event.target.id)}
          />
        </label>
        <br />
        <label htmlFor="last-name">
          Last Name
          <br />
          <input id="last-name" />
        </label>
        <br />
        <label htmlFor="about-me">
          About Me
          <br />
          <textarea
            id="about-me"
            rows="5"
            cols="50"
            placeholder="Write a little about yourself..."
          ></textarea>
        </label>
        <br />
        <br />
        <label htmlFor="interests">Interests:</label>
        {interests.map((interest, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                id={interest}
                value={interest}
                onChange={() => handleChange(index)}
              />
              <label htmlFor={interest}>{interest}</label>
            </div>
          );
        })}
        <br />
        <label htmlFor="experience">
          Experience
          <br />
          {mentorOrMentee}
        </label>
        <br />
        <br />
        <label htmlFor="contact-info">
          Email Address
          <br />
          <input id="contact-info" />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
}

export default NewProfileForm;

/* INTERESTS

Array of checkbox states - toggled true/false
each time you click a checkbox, it will toggle the state
interestsCheckboxes.filter - return index of each that's true
  [2, 4]
interests.filter - return each value that has the same index as one in indexes array
  [interest[2], interests[4]]


ALTERNATIVE:

interests.map - return each value at that index
[false, false, true, false, true]
[undefined, undefined, JavaScript]
filter if !undefined, return



handleInput
const aNewProfile = {
  id: 0,
  type: "",
  firstName: "",
  lastName: "",
  aboutMe: "",
  interests: [],
  experience: "",
  emailAddress: "",
};

setANewProfile -
  { ...aNewProfile, event.target.id: event.target.value }

*/
