import React, { useState } from "react";

const SimplePasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validatePassword = (input) => {
    setPassword(input);

    // Check for spaces
    if (input.includes(" ")) {
      setMessage("Password should not contain spaces.");
      return;
    }

    // Check length
    if (input.length < 8 || input.length > 15) {
      setMessage("Password length must be between 8 and 15 characters.");
      return;
    }

    // Check for at least one digit
    let hasDigit = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;
    const specialChars = ["@", "#", "%", "&", "!", "$"];

    for (let char of input) {
      if (!isNaN(char)) hasDigit = true;
      if (char === char.toLowerCase()) hasLower = true;
      if (char === char.toUpperCase()) hasUpper = true;
      if (specialChars.includes(char)) hasSpecial = true;
    }

    if (!hasDigit) {
      setMessage("Password should contain at least one digit.");
      return;
    }
    if (!hasLower) {
      setMessage("Password should contain at least one lowercase letter.");
      return;
    }
    if (!hasUpper) {
      setMessage("Password should contain at least one uppercase letter.");
      return;
    }
    if (!hasSpecial) {
      setMessage("Password should contain at least one special character.");
      return;
    }

    setMessage("Password is valid.");
  };

  return (
    <div>
      <h3>Password Validator</h3>
      <input
        type="password"
        value={password}
        onChange={(e) => validatePassword(e.target.value)}
        placeholder="Enter your password"
      />
      <p>{message}</p>
    </div>
  );
};

export default SimplePasswordValidator;
