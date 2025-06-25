// import React, { useEffect, useState } from "react";

// function EffectDemo() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.log("Error fetching data:", error));
//   }, []);
//   return (
//     <div>
//       <h2>Effect Demo</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default EffectDemo;

import React, { useEffect, useState } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("Component unmounted, timer cleared");
    };
  }, []);
  return (
    <div>
      <h2>Timer</h2>
      <p>Count:{count}</p>
    </div>
  );
}

export default EffectDemo;
