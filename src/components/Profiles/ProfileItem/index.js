import React from "react";
import "./ProfileItem.css";

function ProfileItem({
  type,
  firstName,
  lastName,
  aboutMe,
  interests,
  experience,
  emailAddress,
}) {
  return (
    <div className="profile">
      <ul>
        <li>Type: {type}</li>
        <li>
          Name: {firstName} {lastName}
        </li>
        <li>About Me: {aboutMe}</li>
        <li>
          Interests:{" "}
          {interests.map((interest) => {
            return `${interest}, `;
          })}
        </li>
        <li>Experience: {experience}</li>
        <li>Email Address: {emailAddress}</li>
      </ul>
    </div>
  );
}

export default ProfileItem;
