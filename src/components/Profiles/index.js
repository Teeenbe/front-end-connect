import React, { useState } from "react";

import NewProfileForm from "../NewProfileForm";
import ProfilesList from "../ProfilesList";

/* DATA TO DISPLAY

Mentor or mentee
First name
Last name
Background info
Interests
Experience
Email address

*/

const profilesArray = [
  {
    id: 0,
    type: "Mentee",
    firstName: "Hajoo",
    lastName: "Chung",
    aboutMe: "Used to be a mechanical engineer.",
    interests: ["JavaScript"],
    experience: "A little",
    emailAddress: "hajoo@soc.co.uk",
  },
  {
    id: 1,
    type: "Mentor",
    firstName: "Ben",
    lastName: "Lee",
    aboutMe: "Makes crazy jingles for SoC.",
    interests: ["Command Line"],
    experience: "0-5 years",
    emailAddress: "ben@soc.co.uk",
  },
  {
    id: 2,
    type: "Mentee",
    firstName: "Thomas",
    lastName: "Bennett",
    aboutMe: "Used to be a lifeguard.",
    interests: ["Node", "API", "Express"],
    experience: "A little",
    emailAddress: "tom@soc.co.uk",
  },
];

function Profiles() {
  const [profiles, setProfiles] = useState(profilesArray);

  function addProfile(newProfile) {
    const updatedProfiles = profiles.map((profile) => ({ ...profile }));
    updatedProfiles.push(newProfile);
    setProfiles(updatedProfiles);
  }

  return (
    <div>
      <NewProfileForm addProfile={addProfile} />
      <ProfilesList profiles={profiles} />
    </div>
  );
}

export default Profiles;
