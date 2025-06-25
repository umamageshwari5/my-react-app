import React, { useState } from "react";

function EventsDemo() {
  // const [variableName, function] = useState();
  let [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    console.log("Button was Clicked!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse Entered!");
  };

  const handleMouseLeft = () => {
    console.log("Mouse Left!");
  };

  const handleInputChange = (e) => {
    console.log("Input Value: ", e.target.value);
  };
  return (
    <div>
      <h2 style={{ color: "blueviolet" }}>Event in React</h2>
      <button
        style={{
          backgroundColor: "lightseagreen",
          fontFamily: "cursive",
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeft}>
        Hover or Click Me
      </button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          //Value={inputvalue}
          placeholder="Type something..."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default EventsDemo;
