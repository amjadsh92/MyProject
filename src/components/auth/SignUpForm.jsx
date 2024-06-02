"use client";

import React, { useState } from "react";
import { signUp } from "@/app/actions/auth";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await signUp(email, password);
    setMessage(message);
  };

  return (
    <div>
      Email address:
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      Password:{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Register</button>
      <p>{message}</p>
    </div>
  );
};

export default SignUpForm;
