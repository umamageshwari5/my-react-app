import React from "react";

function ConditionalRendering(props) {
  //   const login = props.letMeCheck;
  //   if (login) {
  //     return <h1>Welcome back!</h1>;
  //   } else {
  //     return <h1>Please Login</h1>;
  //   }
  //   return (
  //     <div>
  //       <h2>ConditionalRendering</h2>
  //     </div>
  //   );
  // Storing data in a Variable
  //   const isLoggedIn = props.isLoggedIn;
  //   let message;
  //   if (isLoggedIn) {
  //     message = <h1>Welcome Back!</h1>;
  //   } else {
  //     message = <h1>Please Login</h1>;
  //   }
  //   return <div>{message}</div>;
  // Inline if with logical && :-
  //   const unreadMessages = props.unreadMessages;
  //   return (
  //     <div>
  //       <h1>Hello</h1>
  //       {unreadMessages.length > 2 && (
  //         <h2> You have {unreadMessages.length} unread messages.</h2>
  //       )}
  //     </div>
  //   );
  // Using Ternary Operator:-
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>{isLoggedIn ? <h1> Welcome back!</h1> : <h1>Please Login</h1>}</div>
  );
}

export default ConditionalRendering;
