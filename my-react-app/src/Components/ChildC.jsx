// import React from "react";
// import { data, data1, data2 } from "./Parent"; // Importing Context Objects

// function ChildC() {
//   return (
//     <div>
//       {/* Consuming Data */}
//       <data.Consumer>
//         {(name) => (
//           <data1.Consumer>
//             {(age) => (
//               <data2.Consumer>
//                 {(location) => (
//                   <h1>
//                     My Name is {name} and I am {age} years old. I am from
//                     {location}
//                   </h1>
//                 )}
//               </data2.Consumer>
//             )}
//           </data1.Consumer>
//         )}
//       </data.Consumer>
//     </div>
//   );
// }

// export default ChildC;

import React from "react";
import { data, data1, data2 } from "./Parent"; // Importing Context Objects
import { useContext } from "react";

function ChildC() {
  const name = useContext(data);
  const age = useContext(data1);
  const location = useContext(data2);
  return (
    <div>
      <h1>
        My Name is <span style={{ color: "red" }}>{name}</span> and I am{" "}
        <span style={{ color: "orange" }}>{age}</span> years old. I got
        Transfered to <span style={{ color: "green" }}>{location}</span>
      </h1>
    </div>
  );
}

export default ChildC;
