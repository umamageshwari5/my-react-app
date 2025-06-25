import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Contact;
