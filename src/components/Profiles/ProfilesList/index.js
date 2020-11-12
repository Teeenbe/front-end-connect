import React, { useState } from "react";

import ProfileItem from "../ProfileItem";

function ProfilesList({ profiles }) {
  const [selectedInterest, setSelectedInterest] = useState("");
  return (
    <div>
      <h2>Search By Interest</h2>
      <select
        id="filter-menu"
        onChange={(event) => {
          setSelectedInterest(event.target.value);
        }}
      >
        <option value="" disabled selected>
          All
        </option>
        <option value="Front-end">Front-end</option>
        <option value="Back-end">Back-end</option>
        <option value="DevOps">DevOps</option>
        <option value="Node">Node</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Game Development">Game Development</option>
      </select>
      {console.log(selectedInterest)}
      {profiles.filter(({ interests }) => interests.includes(selectedInterest))
        .map(
          ({
            id,
            type,
            firstName,
            lastName,
            aboutMe,
            interests,
            experience,
            emailAddress,
          }) => {
            return (
              <div>
                <br />
                <ProfileItem
                  key={id}
                  type={type}
                  firstName={firstName}
                  lastName={lastName}
                  aboutMe={aboutMe}
                  interests={interests}
                  experience={experience}
                  emailAddress={emailAddress}
                />
                <br />
              </div>
            );
          }
        )}
    </div>
  );
}

export default ProfilesList;

