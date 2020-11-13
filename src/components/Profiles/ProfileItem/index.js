import React from "react";
import "./ProfileItem.css";

function ProfileItem({
  id,
  type,
  firstName,
  lastName,
  aboutMe,
  interests,
  experience,
  emailAddress,
  deleteProfile,
}) {
  return (
    <div className="profile">
      <ul className="li">
        <li className="li">Type: {type}</li>
        <li className="li">
          Name: {firstName} {lastName}
        </li>
        <li className="li">About Me: {aboutMe}</li>
        <li className="li">
          Interests:{" "}
          {interests.map((interest) => {
            return `${interest}, `;
          })}
        </li>
        <li className="li">Experience: {experience}</li>
        <li className="li">Email Address: {emailAddress}</li>
      </ul>
      <button
        className="deleteQuestionButton"
        onClick={() => deleteProfile(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ProfileItem;
