import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import { Button, Table ,Container, TableHead, TableRow, TableCell } from "@mui/material";

//import { useNavigate } from 'react-router-dom';

import Navbarr from "./Navbarr";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted,setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitted(true);
      const response = await Axios.post('http://localhost:3001/api/user/userlogin', {
        email,
        password,
      });
      console.log(response.data);
      //console.log(response.data.status);
      if (response.data.usersignup.status === 'success') {
        // Store the token securely (e.g., in local storage or cookies)
       // localStorage.setItem('authToken', response.data.token);
        navigate('/userdashboard');
      } else {
        window.alert(response.data.message); // Display the error message
      }

      setSubmitted(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Axios Error:", error);
      setSubmitted(false); // Reset loading state after error
      // Display a generic error message to the user
      window.alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <Container maxWidth="xl" >
        <navbar>
    <Navbarr/>
  </navbar>
  <Table>
   
  <TableHead>
      <h2>Login</h2>
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
        Login
      </Button>
        </TableCell>
      </TableRow>
 

     
   



    </Table>
    </Container>
  )
}

export default Login