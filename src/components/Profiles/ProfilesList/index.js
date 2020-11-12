import React, { useState } from "react";

import ProfileItem from "../ProfileItem";

function ProfilesList({ profiles, deleteProfile }) {
  const [selectedInterest, setSelectedInterest] = useState("All");

  // Renders the list of profile item components when called
  function renderProfiles({
    id,
    type,
    firstName,
    lastName,
    aboutMe,
    interests,
    experience,
    emailAddress,
  }) {
    return (
      <div>
        <br />
        <ProfileItem
          id={id}
          type={type}
          firstName={firstName}
          lastName={lastName}
          aboutMe={aboutMe}
          interests={interests}
          experience={experience}
          emailAddress={emailAddress}
          deleteProfile={deleteProfile}
        />
        <br />
      </div>
    );
  }

  return (
    <div>
      <h2>Search By Interest</h2>
      <select
        id="filter-menu"
        defaultValue="All"
        onChange={(event) => {
          setSelectedInterest(event.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="Front-end">Front-end</option>
        <option value="Back-end">Back-end</option>
        <option value="DevOps">DevOps</option>
        <option value="Node">Node</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Game Development">Game Development</option>
      </select>
      {/* If no filter, render all profiles. Else, filter profiles by interest */}
      {selectedInterest === "All"
        ? profiles.map(renderProfiles)
        : profiles
            .filter(({ interests }) => interests.includes(selectedInterest))
            .map(renderProfiles)}
    </div>
  );
}

export default ProfilesList;
