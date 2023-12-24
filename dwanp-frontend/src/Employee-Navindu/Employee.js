
///////////////////////////
//Navindu
//////////////////////
///newfunction
//importing
import { Box } from "@mui/material";
import {  Typography, Container} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import EmployeeForm from "./Employee_Form";
import EmployeeTable from "./Employee_Table";
//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";

const Employee=()=>
{
  const navigate = useNavigate();
      //when calling a function when the page runs 
      useEffect(()=>
      {
          getEmp();
      },[]);

      //calling api



    return (
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h5" component="h5"> 
            <button className="usr-btn" onClick={()=>navigate('/')}>Back</button>
            
            </Typography>
            <Typography variant="h2" component="h1">
              Employee Page
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Navindu
            </Typography>
          </Box>

          <Box>
            {/**this for adding new data */}
            <EmployeeForm></EmployeeForm>

            <EmployeeTable></EmployeeTable>

          </Box>
          
        </Container>

       
      );
      
}

export default Employee;