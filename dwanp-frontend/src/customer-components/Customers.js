
///////////////////////////
//Dumindu
///////////////////////
//secod funcrtion
//new function
//importing
import { Box , Container, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';

import posterImage from "../Poster (2).png";
import MyComponent from "../navbar.js";
import CustomerForm from "./CustomerForm";
import CustomerTable from "./CustomerTable.js";

//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";

const Customerview=()=>
{
  const navigate = useNavigate();
  const [tables, setTables] = useState([]);


  
    return (
        <Container maxWidth="xl">
           <navbar>
  <MyComponent />
    </navbar> 
             <Container maxWidth="xl">
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0 }}>
    <div style={{ position: 'relative' }}>
    
      <img src={posterImage} alt="Poster" style={{ width: "1496px", height: '35rem' }} />
      <h1 style={{
        position: 'absolute',
        top: '22rem',  
        left: '80%',
        transform: 'translateX(-50%)',  
        color: '#e6c235',  
        fontWeight: 'bold',  
        fontSize: '60px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  
      }}>Customer Management</h1>
    </div>
   
  </Box>
</Container>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <CustomerForm/>
            <CustomerTable
            rows={tables}/>
            
          </Box>  
        </Container>
      );
      
}

export default Customerview;