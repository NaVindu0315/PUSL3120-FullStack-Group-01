import React, { useState } from "react";
import Axios from "axios";
import { Button, Table } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitted(true);
      const response = await Axios.post('http://localhost:3001/api/user/usersignup', {
        email,
        password,
      });

      // Handle successful response, e.g., display a success message or redirect
      console.log(response.data);
      setSubmitted(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Axios Error:", error);
      setSubmitted(false); // Reset loading state after error

      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
    <Table>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button disabled={submitted} onClick={handleSubmit}>
        Sign Up
      </Button>
    </Table>
  );
};

export default SignUp;
