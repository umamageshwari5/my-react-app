import React, { useRef } from "react";

function UncontrolledComponent() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name :</label>
        <input type="text" ref={nameRef} />
        <br /> <br />
        <label> Email :</label>
        <input type="email" ref={emailRef} />
        <br /> <br />
        <label> Password :</label>
        <input type="password" ref={passwordRef} />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledComponent;
