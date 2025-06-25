import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Uma Mageshwari",
    age: 24,
    email: "umamagesh1301@gmail.com",
    location: "Udumalapet",
  });

  const [hobbies, setHobbies] = useState(["Reading", "Travelling"]);
  const [newHobby, setnewHobby] = useState("");

  const handleUpdateLocation = () => {
    setUser((prevUser) => ({
      ...prevUser,
      location: "Coimbatore",
      state: "Tamil Nadu",
    }));
  };

  const addHobby = () => {
    setHobbies((prevHobbies) => [...prevHobbies, newHobby]);
    setnewHobby("");
  };

  const handleDeleteHobby = (index) => {
    const updatedHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(updatedHobbies);
  };
  return (
    <div>
      <h2 style={{ color: "darkblue" }}>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
      <p>State: {user.state}</p>
      <button
        style={{ backgroundColor: "lightblue" }}
        onClick={handleUpdateLocation}>
        Update Location
      </button>

      <h2 style={{ color: "darkblue" }}>Hobbies</h2>
      <div style={{ margin: "10px" }}>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>
              {hobby}
              <button
                onClick={() => handleDeleteHobby(index)}
                style={{ margin: "10px", backgroundColor: "red" }}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={newHobby}
          onChange={(e) => setnewHobby(e.target.value)}
          placeholder="Enter a new hobby"
        />
        <button
          onClick={addHobby}
          style={{ margin: "10px", backgroundColor: "lightgreen" }}>
          Add Hobby
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
