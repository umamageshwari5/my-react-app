import React, { useMemo, useState } from "react";

function UseMemo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiply = useMemo(
    function multiply() {
      console.log("******************");

      return add * 10;
    },
    [add]
  );

  return (
    <div>
      {/* <h2>UseMemo</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increment
      </button> */}
      <p>Multiply: {multiply}</p>
      <h2>UseMemo</h2>
      <p>Add:{add}</p>
      <button
        onClick={() => {
          setAdd(add + 1);
        }}>
        Add
      </button>
      <p>Minus:{minus}</p>
      <button
        onClick={() => {
          setMinus(minus - 1);
        }}>
        Minus
      </button>
    </div>
  );
}

export default UseMemo;
