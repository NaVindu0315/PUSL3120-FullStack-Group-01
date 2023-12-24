
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
         //to clear the fields once the data is submitted
         const [submitted,setSubmitted] = useState(false);
         //when updating 
         const [isedit,setIsEdit] = useState(false);

         
        //also in updating to fech the data
        const [selectedEmp,setselectedEmp]= useState({});


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
      //new employee adding 
      const addEmp = (data)=>
      {
          setSubmitted(true);
          ///creating the payload
          const payload=
          {
              //id: data.id,
              //name: data.name,
              //for new form
              emp_code: data.emp_code,
              emp_name :data.emp_name,
              bdate : data.bdate,
              nic : data.nic,
              adrs :data.adrs,
              tel : data.tel,
              civil : data.tel,

  
          }
          Axios.post('http://localhost:3001/api/createemp',payload)
          .then(response=> {
              // console.log(response.data.response);
             getEmp();
             setSubmitted(false);
             isedit(false);
           })
           .catch(error => {
               console.error("Axios Error :" ,error);
           })
                       {
  
           }
  
      }

      ///new employee adding end

      ///update employee
      const updateEmp=(data) =>
      {
          setSubmitted(true);
             ///creating the payload
             const payload=
             {
                // id: data.id,
                // name: data.name,
     
             }
             Axios.post('http://localhost:3001/api/updateemp',payload)
             .then(response=> {
                 // console.log(response.data.response);
                getEmp();
                setSubmitted(false);
                isedit(false);
              })
              .catch(error => {
                  console.error("Axios Error :" ,error);
              })
                          {
     
              }
  
      }



      ////update employee end



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
            <EmployeeForm
            addEmp={addEmp}
            submitted={submitted}
            updateEmp= {updateEmp}
            data ={selectedEmp}
          isedit={isedit}
            
            ></EmployeeForm>

            <EmployeeTable
            rows ={emps}
            selectedEmp={data=>{
              setselectedEmp(data);
              setIsEdit(true);
           }}

            ></EmployeeTable>

          </Box>
          
        </Container>

       
      );
      
}

export default Employee;