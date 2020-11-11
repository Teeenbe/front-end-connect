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
