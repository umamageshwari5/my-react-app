// import React from "react";
// import "./Greetings.css";

// function Greetings() {
//   return (
//     <div className="greeting-container">
//       <h1 className="greeting-title">Hello World..!</h1>
//       <p className="greeting-text">This is my first Custom React Component.</p>
//     </div>
//   );
// }

// export default Greetings;

// Modular Css:-
import React from "react";
import styles from "./Greetings.module.css";

function Greetings() {
  return (
    <div className={styles.greetingContainer}>
      <h2 className={styles.greetingTitle}>Hello World..!</h2>
      <p className={styles.greetingText}>This is my first custom react</p>
    </div>
  );
}

export default Greetings;
