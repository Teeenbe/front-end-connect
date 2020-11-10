import React, { useState } from "react";
import "./Form.css";

const interests = [
  "Front-end",
  "Back-end",
  "DevOps",
  "Node",
  "JavaScript",
  "Game development",
];

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

function ProfilesForm() {
  const [mentorOrMentee, setMentorOrMentee] = useState();

  function experienceInput(m) {
    if (m === "mentor") {
      setMentorOrMentee(mentorExperience);
    } else if (m === "mentee") {
      setMentorOrMentee(menteeExperience);
    } else {
      setMentorOrMentee(null);
    }
  }

  return (
    <form>
      <fieldset>
        <legend>New Profile:</legend>
        <label htmlFor="mentor-or-mentee">Mentor or Mentee?</label>
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
        <br />
        <label htmlFor="first-name">First Name</label> <br />
        <input id="first-name" /> <br />
        <label htmlFor="last-name">Last Name</label> <br />
        <input id="last-name" /> <br />
        <label htmlFor="background-info">Background Info</label> <br />
        <textarea
          id="background-info"
          rows="5"
          cols="50"
          placeholder="Write a little about yourself..."
        ></textarea>
        <br />
        <br />
        <label htmlFor="interests">Interests:</label>
        {interests.map((interest, index) => {
          return (
            <div key={index}>
              <input type="checkbox" id={interest} value={interest} />
              <label htmlFor={interest}>{interest}</label>
            </div>
          );
        })}
        <br />
        <label htmlFor="experience">Experience</label> <br />
        {mentorOrMentee}
        <br />
        <br />
        <label htmlFor="contact-info">Email Address</label> <br />
        <input id="contact-info" /> <br />
        <br />
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
}

export default ProfilesForm;
