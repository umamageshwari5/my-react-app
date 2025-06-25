import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <nav>
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default About;
