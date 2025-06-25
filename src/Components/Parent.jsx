import React, { createContext } from "react";
import ChildA from "./ChildA";

// Creating the Context
const data = createContext("Uma");
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();

function Parent() {
  const name = "Uma";
  const age = 24;
  const location = "Udumalaipettai";
  const pinCode = 644302;

  return (
    <div>
      {/* <h2>Parent</h2> */}
      {/* <ChildA name={name} />
      <h1>{name}</h1> */}

      {/* Providing Data */}
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <data2.Provider value={location}>
            <ChildA />
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default Parent;
export { data }; // Exporting Data
export { data1 };
export { data2 };
export { data3 };
