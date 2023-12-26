
import './App.css';
import { AuthContextProvider } from './context-auth/AuthContext';
//for navigation
//import { useNavigate } from 'react-router-dom';
//import Homepage from './Homepage2';
import Home from './Home';
//in the tutorial this is done in the index.js 
//in my index.js theres no wjhere to call this
function App() {
  return (
    <AuthContextProvider>
<Home></Home>
    </AuthContextProvider>

  )
}

export default App;
