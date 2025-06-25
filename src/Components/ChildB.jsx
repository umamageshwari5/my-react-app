import React from "react";
import ChildC from "./ChildC";

function ChildB({ name }) {
  return (
    <div>
      {/* <h2>ChildB</h2> */}
      <ChildC name={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default ChildB;
