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
        <option value="front-end">Front-end</option>
        <option value="back-end">Back-end</option>
        <option value="dev-ops">DevOps</option>
        <option value="node">Node</option>
        <option value="javascript">JavaScript</option>
        <option value="game-development">Game Development</option>
      </select>
      {profiles
        .filter(({ interests }) => interests.includes(selectedInterest))
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
// {names.filter(name => name.includes('J')).map(filteredName => (
//   <li>
//     {filteredName}
//   </li>
