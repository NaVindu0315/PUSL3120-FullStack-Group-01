import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

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
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
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

      <button>Log in</button>
    </form>
  )
}

export default Login