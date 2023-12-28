import React, { useState } from "react";
import Axios from "axios";
import { Button, Table ,Container, TableHead, TableRow, TableCell } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import Navbarr from "./Navbarr";



const SignUp = () => {
  const navigate = useNavigate();
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
      navigate('/userlog');

    } catch (error) {
      console.error("Axios Error:", error);
      setSubmitted(false); // Reset loading state after error

      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
    <Container maxWidth="xl" >
  <navbar>
    <Navbarr/>
  </navbar>

<center>
    <Table>
      <TableHead>
      <h2>Sign Up</h2>
      </TableHead>
      <TableRow>
        <TableCell>
        <label>Email address:</label>

        </TableCell>
        <TableCell>
        <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
        <label>Password:</label>
        </TableCell>
        <TableCell>
        <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>

        </TableCell>
        <TableCell>
        <Button disabled={submitted} 
                sx={{
                  margin: "auto",
                  marginBottom: "20px",
                  backgroundColor: "black",  /* Set background color to black */
                  color: "white",            /* Set text color to white */
                  marginLeft: "15px",
                  marginTop: "20px",
                  "&:hover": {
                    opacity: 0.7,
                    backgroundColor: "black",  /* Maintain black background on hover */
                  },
                }}
        
        onClick={handleSubmit}>
        Sign Up
      </Button>
        </TableCell>
     
      </TableRow>
      
 
    
  
     
    </Table>
    </center>
    </Container>
  );
};

export default SignUp;
