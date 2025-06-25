import React from "react";
import ChildB from "./ChildB";

function ChildA({ name }) {
  return (
    <div>
      {/* <h2>ChildA</h2> */}
      <ChildB name={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default ChildA;
