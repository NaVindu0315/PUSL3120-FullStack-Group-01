
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
  
        //creating a state variable inside the Users component
        const [emps,setEmps] = useState([]);
      //when calling a function when the page runs 
      useEffect(()=>
      {
          getEmp();
      },[]);

      //calling api
      //for getting employees
      const getEmp =() =>
      {
          //the link given from the backend for getting users
          Axios.get('http://localhost:3001/api/getemployees')
              .then(response=> {
                 // console.log(response.data.response);
                 setEmps(response?.data?.response || [])
              })
              .catch(error => {
                  console.error("Axios Error :" ,error);
              })
                          {
  
              }
      }



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

            <EmployeeTable
            rows ={emps}
            ></EmployeeTable>

          </Box>
          
        </Container>

       
      );
      
}

export default Employee;