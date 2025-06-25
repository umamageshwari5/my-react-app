import React from "react";
import PropTypes from "prop-types";

function ProfileCard({
  name,
  age = "Age is not Provided",
  bio = "No bio Available",
}) {
  return (
    <div
      style={{
        border: "2px solid Blue",
        padding: "10px",
        borderRadius: "10px",
        width: "250px",
        backgroundColor: "lightgreen",
        marginTop: "30px",
        marginLeft: "50px",
        color: "darkblue",
        fontFamily: "cursive",
      }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

// ProfileCard.defaultProps = {
//   bio: "No bio available",
// };

// ProfileCard.PropTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   bio: PropTypes.string,
// };

export default ProfileCard;
