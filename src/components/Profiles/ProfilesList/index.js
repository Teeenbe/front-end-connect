import React from "react";

import ProfileItem from "../ProfileItem";

function ProfilesList({ profiles }) {
  return (
    <div>
      {profiles.map(
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
          );
        }
      )}
    </div>
  );
}

export default ProfilesList;
