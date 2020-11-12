import React, { useState } from "react";
import "./NewProfileForm.css";

// user profile template
const blankUser = {
  id: 3,
  type: "",
  firstName: "",
  lastName: "",
  aboutMe: "",
  interests: [],
  experience: "",
  emailAddress: "",
};

const interests = [
  "Front-end",
  "Back-end",
  "DevOps",
  "Node",
  "JavaScript",
  "Game development",
];

function NewProfileForm({ addProfile }) {
  // State for mentor/mentee drop-down and current form state
  const [newProfile, setNewProfile] = useState(blankUser);
  const [interestsChecked, setInterestsChecked] = useState(
    new Array(interests.length).fill(false)
  );

  function handleChange(i) {
    const updatedBooleans = [...interestsChecked];
    updatedBooleans[i] = !updatedBooleans[i];
    setInterestsChecked(updatedBooleans);
  }

  function populateObject(event) {
    setNewProfile({ ...newProfile, [event.target.id]: event.target.value });
  }

  //
  const mentorExperience = (
    <select id="experience" onChange={(event) => populateObject(event)}>
      <option value="">How many years?</option>
      <option value="0-5">0 - 5</option>
      <option value="5-10">5 - 10</option>
      <option value="10-15">10 - 15</option>
      <option value="15+">15 +</option>
    </select>
  );

  const menteeExperience = (
    <select id="experience" onChange={(event) => populateObject(event)}>
      <option value="">Any previous experience?</option>
      <option value="none">None</option>
      <option value="a-little">A little</option>
      <option value="a-lot">A lot</option>
      <option value="extensive">Extensive</option>
    </select>
  );

  function renderExperience() {
    switch (newProfile.type) {
      case "Mentor":
        return mentorExperience;
      case "Mentee":
        return menteeExperience;
      default:
        return null;
    }
  }

  function experienceInput(m) {
    setNewProfile({ ...newProfile, type: m });
  }

  function handleSubmit(event) {
    event.preventDefault();
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

    addProfile({ ...newProfile, interests: tickedInterests });
    setNewProfile(blankUser);
    event.target.reset();
  }

  return (
    <div>
      <form id="new-profile-form" onSubmit={(event) => handleSubmit(event)}>
        <fieldset id="fieldset">
          <legend className="newProfile" id="Prof">
            New Profile:
          </legend>
          <label className="newProfile" htmlFor="mentor-or-mentee">
            Mentor or Mentee?
            <br />
            <select
              className="drop-down"
              id="mentor-or-mentee"
              onChange={(e) => experienceInput(e.target.value)}
            >
              <option value="">--Please choose an option--</option>
              <option value="Mentor">Mentor</option>
              <option value="Mentee">Mentee</option>
            </select>
          </label>
          <br />
          <label className="newProfile" htmlFor="firstName">
            First Name
            <br />
            <input id="firstName" onChange={(event) => populateObject(event)} />
          </label>
          <br />
          <label className="newProfile" htmlFor="lastName">
            Last Name
            <br />
            <input id="lastName" onChange={(event) => populateObject(event)} />
          </label>
          <br />
          <label className="newProfile" htmlFor="emailAddress">
            Email Address
            <br />
            <input
              id="emailAddress"
              onChange={(event) => populateObject(event)}
            />
          </label>
          <br />
          <br />
          <label className="newProfile" htmlFor="experience">
            Experience
            <br />
            {renderExperience()}
          </label>
          <br />
          <label className="newProfile" htmlFor="aboutMe">
            About Me
            <br />
            <textarea
              id="aboutMe"
              rows="5"
              cols="50"
              placeholder="Write a little about yourself..."
              onChange={(event) => populateObject(event)}
            ></textarea>
          </label>
          <br />
          <br />
          <label className="newProfile" htmlFor="interests">
            Interests:
          </label>
          {interests.map((interest, index) => {
            return (
              <div className="newProfile" key={index}>
                <input
                  type="checkbox"
                  className="newProfile"
                  id={interest}
                  value={interestsChecked[index]}
                  onChange={() => handleChange(index)}
                />
                <label id="checkbox" htmlFor={interest}>
                  {interest}
                </label>
              </div>
            );
          })}
          <br />
          <br />
          <input id="submitButton" type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
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
