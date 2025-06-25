import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to Home Page..!</h2>
      <nav>
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Home;
